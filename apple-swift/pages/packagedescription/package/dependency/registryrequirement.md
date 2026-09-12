> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/registryrequirement](https://developer.apple.com/documentation/packagedescription/package/dependency/registryrequirement)

# Package.Dependency.RegistryRequirement

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM 999.0+

An enum that represents the requirement for a package dependency.

## Declaration

```swift
enum RegistryRequirement
```

<a id="overview"></a>

## Overview

Decide whether your project accepts updates to a package dependency up to the next major version or up to the next minor version. To be more restrictive, select a specific version range or an exact version. Major versions tend to have more significant changes than minor versions, and may require you to modify your code when they update. The version rule requires Swift packages to conform to semantic versioning. To learn more about the semantic versioning standard, visit the [Semantic Versioning 2.0.0](https://semver.org) website.

## Topics

### Enumeration Cases

- [Package.Dependency.RegistryRequirement.exact(\_:)](registryrequirement/exact%28__%29.md): A requirement based on an exact version.
- [Package.Dependency.RegistryRequirement.range(\_:)](registryrequirement/range%28__%29.md): A requirement based on a range of versions.

## See Also

### Declaring Requirements

- [traits](traits.md): The dependencies traits configuration.
- [Package.Dependency.Trait](trait.md): An enabled trait of a dependency.
- [Package.Dependency.SourceControlRequirement](sourcecontrolrequirement.md): An enum that represents the requirement for a package dependency.
- [requirement](requirement-swift.property.md): Deprecated. The dependency requirement of the package dependency.
- [Package.Dependency.Requirement](requirement-swift.enum.md): Deprecated. An enum that represents the requirement for a package dependency.
