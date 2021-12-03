module.exports = ({
    types
}) => {
    return {
        visitor: {
            ImportDeclaration(path) {
                const {
                    node
                } = path
                const {
                    value
                } = node.source
                if (value === 'xui') {
                    let specifiersList = []
                    node.specifiers.forEach(spec => {
                        if (types.isImportSpecifier(spec)) {
                            specifiersList.push(spec.imported.name)
                        }
                    })
                    const importDeclarationList = specifiersList.map((name) => {
                        // 文件夹的名称首字母为小写
                        let lowerCaseName = name.toLowerCase()
                        // 构造importDeclaration节点
                        return types.importDeclaration([
                            types.importDefaultSpecifier(types.identifier(name))
                        ], types.stringLiteral('xui/packages/' + lowerCaseName))
                    })
                    // 用多节点替换单节点
                    path.replaceWithMultiple(importDeclarationList)
                }
            }
        },
    }
}