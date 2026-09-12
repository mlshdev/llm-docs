> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/requirement-swift.enum](https://developer.apple.com/documentation/packagedescription/package/dependency/requirement-swift.enum)

# Package.Dependency.Requirement

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM  (deprecated in 5.6)

An enum that represents the requirement for a package dependency.

## Declaration

```swift
enum Requirement
```

<a id="overview"></a>

## Overview

The dependency requirement can be defined as one of three different version requirements:

- **A version-based requirement**: Decide whether your project accepts updates to a package dependency up to the next major version or up to the next minor version. To be more restrictive, select a specific version range or an exact version. Major versions tend to have more significant changes than minor versions, and may require you to modify your code when they update.

The version rule requires Swift packages to conform to semantic versioning. To learn more about the semantic versioning standard, visit the [Semantic Versioning 2.0.0](https://semver.org) website.

Selecting the version requirement is the recommended way to add a package dependency. It allows you to create a balance between restricting changes and obtaining improvements and features. - term A branch-based requirement: Select the name of the branch for your package dependency to follow. Use branch-based dependencies when you’re developing multiple packages in tandem or when you don’t want to publish versions of your package dependencies.

Note that packages which use branch-based dependency requirements can’t be added as dependencies to packages that use version-based dependency requirements; you should remove branch-based dependency requirements before publishing a version of your package. - term A commit-based requirement: Select the commit hash for your package dependency to follow.

Choosing this option isn’t recommended, and should be limited to exceptional cases. While pinning your package dependency to a specific commit ensures that the package dependency doesn’t change and your code remains stable, you don’t receive any updates at all. If you worry about the stability of a remote package, consider one of the more restrictive options of the version-based requirement.

Note that packages which use commit-based dependency requirements can’t be added as dependencies to packages that use version-based dependency requirements; you should remove commit-based dependency requirements before publishing a version of your package.

## Topics

### Enumeration Cases

- [Package.Dependency.Requirement.branchItem(\_:)](requirement-swift.enum/branchitem%28__%29.md): Deprecated.
- [Package.Dependency.Requirement.exactItem(\_:)](requirement-swift.enum/exactitem%28__%29.md): Deprecated.
- [Package.Dependency.Requirement.localPackageItem](requirement-swift.enum/localpackageitem.md): Deprecated.
- [Package.Dependency.Requirement.rangeItem(\_:)](requirement-swift.enum/rangeitem%28__%29.md): Deprecated.
- [Package.Dependency.Requirement.revisionItem(\_:)](requirement-swift.enum/revisionitem%28__%29.md): Deprecated.

### Type Methods

- [branch(\_:)](requirement-swift.enum/branch%28__%29.md): Deprecated. Returns a requirement for a source control branch.
- [exact(\_:)](requirement-swift.enum/exact%28__%29.md): Deprecated. Returns a requirement for the given exact version.
- [revision(\_:)](requirement-swift.enum/revision%28__%29.md): Deprecated. Returns a requirement for a source control revision such as the hash of a commit.
- [upToNextMajor(from:)](requirement-swift.enum/uptonextmajor%28from_%29.md): Deprecated. A source control requirement bounded to the given version’s major version number.
- [upToNextMinor(from:)](requirement-swift.enum/uptonextminor%28from_%29.md): Deprecated. A source control requirement bounded to the given version’s minor version number.

## See Also

### Declaring Requirements

- [traits](traits.md): The dependencies traits configuration.
- [Package.Dependency.Trait](trait.md): An enabled trait of a dependency.
- [Package.Dependency.RegistryRequirement](registryrequirement.md): An enum that represents the requirement for a package dependency.
- [Package.Dependency.SourceControlRequirement](sourcecontrolrequirement.md): An enum that represents the requirement for a package dependency.
- [requirement](requirement-swift.property.md): Deprecated. The dependency requirement of the package dependency.
