> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/requirement-swift.property](https://developer.apple.com/documentation/packagedescription/package/dependency/requirement-swift.property)

# requirement

**Framework:** PackageDescription  
**Kind:** Instance Property  
**Availability:** SwiftPM  (deprecated in 5.6)

The dependency requirement of the package dependency.

> use kind instead

## Declaration

```swift
var requirement: Package.Dependency.Requirement { get }
```

## See Also

### Declaring Requirements

- [traits](traits.md): The dependencies traits configuration.
- [Package.Dependency.Trait](trait.md): An enabled trait of a dependency.
- [Package.Dependency.RegistryRequirement](registryrequirement.md): An enum that represents the requirement for a package dependency.
- [Package.Dependency.SourceControlRequirement](sourcecontrolrequirement.md): An enum that represents the requirement for a package dependency.
- [Package.Dependency.Requirement](requirement-swift.enum.md): Deprecated. An enum that represents the requirement for a package dependency.
