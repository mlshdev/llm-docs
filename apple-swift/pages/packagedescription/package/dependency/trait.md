> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/trait](https://developer.apple.com/documentation/packagedescription/package/dependency/trait)

# Package.Dependency.Trait

**Framework:** PackageDescription  
**Kind:** Structure  
**Availability:** SwiftPM 6.1+

An enabled trait of a dependency.

## Declaration

```swift
struct Trait
```

## Topics

### Structures

- [Package.Dependency.Trait.Condition](trait/condition-swift.struct.md): A condition that limits the application of a trait for a dependency.

### Initializers

- [init(name:condition:)](trait/init%28name_condition_%29.md): Creates a new enabled trait.
- [init(stringLiteral:)](trait/init%28stringliteral_%29.md): Creates a new enabled trait.

### Instance Properties

- [condition](trait/condition-swift.property.md): The condition under which the package manager enables the dependency.
- [name](trait/name.md): The name of the enabled trait.

### Type Properties

- [defaults](trait/defaults.md): Enables all default traits of the dependency.

### Type Methods

- [trait(name:condition:)](trait/trait%28name_condition_%29.md): Creates a new enabled trait.

## Relationships

### Conforms To

- [Equatable](../../../swift/equatable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](../../../swift/expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringLiteral](../../../swift/expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](../../../swift/expressiblebyunicodescalarliteral.md)
- [Hashable](../../../swift/hashable.md)
- [Sendable](../../../swift/sendable.md)
- [SendableMetatype](../../../swift/sendablemetatype.md)

## See Also

### Declaring Requirements

- [traits](traits.md): The dependencies traits configuration.
- [Package.Dependency.RegistryRequirement](registryrequirement.md): An enum that represents the requirement for a package dependency.
- [Package.Dependency.SourceControlRequirement](sourcecontrolrequirement.md): An enum that represents the requirement for a package dependency.
- [requirement](requirement-swift.property.md): Deprecated. The dependency requirement of the package dependency.
- [Package.Dependency.Requirement](requirement-swift.enum.md): Deprecated. An enum that represents the requirement for a package dependency.
