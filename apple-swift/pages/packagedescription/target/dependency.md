> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/dependency](https://developer.apple.com/documentation/packagedescription/target/dependency)

# Target.Dependency

**Framework:** PackageDescription  
**Kind:** Enumeration

The different types of a target’s dependency on another entity.

## Declaration

```swift
enum Dependency
```

## Topics

### Creating a Target Dependency

- [product(name:package:moduleAliases:condition:)](dependency/product%28name_package_modulealiases_condition_%29.md): Creates a target dependency on a product from a package dependency.
- [Target.Dependency.productItem(name:package:moduleAliases:condition:)](dependency/productitem%28name_package_modulealiases_condition_%29.md): A dependency on a product.
- [target(name:condition:)](dependency/target%28name_condition_%29.md): Creates a dependency on a target in the same package.
- [Target.Dependency.targetItem(name:condition:)](dependency/targetitem%28name_condition_%29.md): A dependency on a target.
- [byName(name:condition:)](dependency/byname%28name_condition_%29.md): Creates a dependency that resolves to either a target or a product with the specified name.
- [Target.Dependency.byNameItem(name:condition:)](dependency/bynameitem%28name_condition_%29.md): A by-name dependency on either a target or a product.
- [TargetDependencyCondition](../targetdependencycondition.md): A condition that limits the application of a target’s dependency.
- [init(stringLiteral:)](dependency/init%28stringliteral_%29.md): Creates a target dependency instance with the given value.
- [product(name:package:condition:)](dependency/product%28name_package_condition_%29.md): Deprecated. Creates a target dependency on a product from a package dependency.
- [product(name:package:)](dependency/product%28name_package_%29-fp0j.md): Deprecated. Creates a dependency on a product from a package dependency.
- [product(name:package:)](dependency/product%28name_package_%29-2nako.md): Deprecated. Creates a dependency on a product from a package dependency.
- [productItem(name:package:condition:)](dependency/productitem%28name_package_condition_%29.md): Deprecated.
- [target(name:)](dependency/target%28name_%29.md): Deprecated. Creates a dependency on a target in the same package.
- [byName(name:)](dependency/byname%28name_%29.md): Deprecated. Creates a dependency that resolves to either a target or a product with the specified name.

### Default Implementations

- [ExpressibleByStringLiteral Implementations](dependency/expressiblebystringliteral-implementations.md)

## Relationships

### Conforms To

- [Copyable](../../swift/copyable.md)
- [Escapable](../../swift/escapable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](../../swift/expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringLiteral](../../swift/expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](../../swift/expressiblebyunicodescalarliteral.md)
- [Sendable](../../swift/sendable.md)
- [SendableMetatype](../../swift/sendablemetatype.md)

## See Also

### Declaring a Dependency Target

- [dependencies](dependencies.md): The target’s dependencies on other entities inside or outside the package.
- [TargetDependencyCondition](../targetdependencycondition.md): A condition that limits the application of a target’s dependency.
