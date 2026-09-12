> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/dependency/byname(name:)](https://developer.apple.com/documentation/packagedescription/target/dependency/byname(name:))

# byName(name:)

**Framework:** PackageDescription  
**Kind:** Type Method

Creates a dependency that resolves to either a target or a product with the specified name.

## Declaration

```swift
static func byName(name: String) -> Target.Dependency
```

## Parameters

- `name`: The name of the dependency, either a target or a product.

<a id="return-value"></a>

## Return Value

A `Target.Dependency` instance. The Swift Package Manager creates the by-name dependency after it has loaded the package graph.

## See Also

### Creating a Target Dependency

- [product(name:package:moduleAliases:condition:)](product%28name_package_modulealiases_condition_%29.md): Creates a target dependency on a product from a package dependency.
- [Target.Dependency.productItem(name:package:moduleAliases:condition:)](productitem%28name_package_modulealiases_condition_%29.md): A dependency on a product.
- [target(name:condition:)](target%28name_condition_%29.md): Creates a dependency on a target in the same package.
- [Target.Dependency.targetItem(name:condition:)](targetitem%28name_condition_%29.md): A dependency on a target.
- [byName(name:condition:)](byname%28name_condition_%29.md): Creates a dependency that resolves to either a target or a product with the specified name.
- [Target.Dependency.byNameItem(name:condition:)](bynameitem%28name_condition_%29.md): A by-name dependency on either a target or a product.
- [TargetDependencyCondition](../../targetdependencycondition.md): A condition that limits the application of a target’s dependency.
- [init(stringLiteral:)](init%28stringliteral_%29.md): Creates a target dependency instance with the given value.
- [product(name:package:condition:)](product%28name_package_condition_%29.md): Deprecated. Creates a target dependency on a product from a package dependency.
- [product(name:package:)](product%28name_package_%29-fp0j.md): Deprecated. Creates a dependency on a product from a package dependency.
- [product(name:package:)](product%28name_package_%29-2nako.md): Deprecated. Creates a dependency on a product from a package dependency.
- [productItem(name:package:condition:)](productitem%28name_package_condition_%29.md): Deprecated.
- [target(name:)](target%28name_%29.md): Deprecated. Creates a dependency on a target in the same package.
