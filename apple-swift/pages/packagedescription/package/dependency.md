> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency](https://developer.apple.com/documentation/packagedescription/package/dependency)

# Package.Dependency

**Framework:** PackageDescription  
**Kind:** Class

A package dependency of a Swift package.

## Declaration

```swift
class Dependency
```

<a id="overview"></a>

## Overview

A package dependency consists of a Git URL to the source of the package, and a requirement for the version of the package.

Swift Package Manager performs a process called *dependency resolution* to determine the exact version of the package dependencies that an app or other Swift package can use. The `Package.resolved` file records the results of the dependency resolution and lives in the top-level directory of a Swift package. If you add the Swift package as a package dependency to an app for an Apple platform, you can find the `Package.resolved` file inside your `.xcodeproj` or `.xcworkspace`.

## Topics

### Creating a package dependency from a URL

- [package(url:from:)](dependency/package%28url_from_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:from:traits:)](dependency/package%28url_from_traits_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:\_:)](dependency/package%28url___%29-2ys47.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:traits:)](dependency/package%28url___traits_%29-5pt81.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:)](dependency/package%28url___%29-1r6rc.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:\_:traits:)](dependency/package%28url___traits_%29-mjzv.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:branch:)](dependency/package%28url_branch_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:branch:traits:)](dependency/package%28url_branch_traits_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:revision:)](dependency/package%28url_revision_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:revision:traits:)](dependency/package%28url_revision_traits_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:exact:)](dependency/package%28url_exact_%29.md): Adds a remote package dependency that uses an exact version requirement.
- [package(url:exact:traits:)](dependency/package%28url_exact_traits_%29.md): Adds a remote package dependency that uses an exact version requirement.

### Creating a package dependency from a registry

- [package(id:from:)](dependency/package%28id_from_%29.md): Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.
- [package(id:from:traits:)](dependency/package%28id_from_traits_%29.md): Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.
- [package(id:\_:)](dependency/package%28id___%29-27raa.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:traits:)](dependency/package%28id___traits_%29-5rb8r.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:)](dependency/package%28id___%29-6anr7.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(id:\_:traits:)](dependency/package%28id___traits_%29-5x94p.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(id:exact:)](dependency/package%28id_exact_%29.md): Adds a remote package dependency with an exact version requirement.
- [package(id:exact:traits:)](dependency/package%28id_exact_traits_%29.md): Adds a remote package dependency with an exact version requirement.

### Creating a local dependency

- [package(name:path:)](dependency/package%28name_path_%29.md): Adds a local dependency to a named package located at the path you provide.
- [package(name:path:traits:)](dependency/package%28name_path_traits_%29.md): Adds a local dependency to a named package located at the path and with an optional set of traits you provide.
- [package(path:)](dependency/package%28path_%29.md): Adds a local dependency to a package located at the path you provide.
- [package(path:traits:)](dependency/package%28path_traits_%29.md): Adds a local dependency to a package located at the path and with an optional set of traits you provide.

### Declaring Requirements

- [traits](dependency/traits.md): The dependencies traits configuration.
- [Package.Dependency.Trait](dependency/trait.md): An enabled trait of a dependency.
- [Package.Dependency.RegistryRequirement](dependency/registryrequirement.md): An enum that represents the requirement for a package dependency.
- [Package.Dependency.SourceControlRequirement](dependency/sourcecontrolrequirement.md): An enum that represents the requirement for a package dependency.
- [requirement](dependency/requirement-swift.property.md): Deprecated. The dependency requirement of the package dependency.
- [Package.Dependency.Requirement](dependency/requirement-swift.enum.md): Deprecated. An enum that represents the requirement for a package dependency.

### Describing a Package Dependency

- [kind](dependency/kind-swift.property.md): A description of the package dependency.
- [Package.Dependency.Kind](dependency/kind-swift.enum.md): The type of dependency.
- [Version](../version.md): A version according to the semantic versioning specification.
- [name](dependency/name.md): Deprecated. The name of the dependency.
- [url](dependency/url.md): Deprecated. The Git URL of the package dependency.

### Deprecated methods

- [package(name:url:\_:)](dependency/package%28name_url___%29-6k3na.md): Deprecated. Adds a remote package dependency with a given version requirement.
- [package(name:url:\_:)](dependency/package%28name_url___%29-nqbk.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(name:url:\_:)](dependency/package%28name_url___%29-7zltl.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(name:url:branch:)](dependency/package%28name_url_branch_%29.md): Deprecated. Adds a remote package dependency with a branch requirement you provide.
- [package(name:url:from:)](dependency/package%28name_url_from_%29.md): Deprecated. Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(name:url:revision:)](dependency/package%28name_url_revision_%29.md): Deprecated. Adds a remote package dependency with a specific revision requirement.
- [package(url:\_:)](dependency/package%28url___%29-4tkwi.md): Deprecated. Adds a remote package dependency given a version requirement.
- [name](dependency/name.md): Deprecated. The name of the dependency.
- [url](dependency/url.md): Deprecated. The Git URL of the package dependency.

## See Also

### Declaring Package Dependencies

- [dependencies](dependencies.md): The list of package dependencies.
