> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/version](https://developer.apple.com/documentation/packagedescription/version)

# Version

**Framework:** PackageDescription  
**Kind:** Structure

A version according to the semantic versioning specification.

## Declaration

```swift
struct Version
```

<a id="overview"></a>

## Overview

A package version consists of three integers separated by periods, for example `1.0.0`. It must conform to the semantic versioning standard in order to ensure that your package behaves in a predictable manner once developers update their package dependency to a newer version. To achieve predictability, the semantic versioning specification proposes a set of rules and requirements that dictate how version numbers are assigned and incremented. To learn more about the semantic versioning specification, visit [Semantic Versioning 2.0.0](https://semver.org).

- **The major version**: The first digit of a version, or *major version*, signifies breaking changes to the API that require updates to existing clients. For example, the semantic versioning specification considers renaming an existing type, removing a method, or changing a method’s signature breaking changes. This also includes any backward-incompatible bug fixes or behavioral changes of the existing API.
- **The minor version**: Update the second digit of a version, or *minor version*, if you add functionality in a backward-compatible manner. For example, the semantic versioning specification considers adding a new method or type without changing any other API to be backward-compatible.
- **The patch version**: Increase the third digit of a version, or *patch version*, if you’re making a backward-compatible bug fix. This allows clients to benefit from bugfixes to your package without incurring any maintenance burden.

## Topics

### Creating a new version

- [init(\_:\_:\_:prereleaseIdentifiers:buildMetadataIdentifiers:)](version/init%28______prereleaseidentifiers_buildmetadataidentifiers_%29.md): Initializes a version struct with the provided components of a semantic version.

### Inspecting a version

- [major](version/major.md): The major version according to the semantic versioning standard.
- [minor](version/minor.md): The minor version according to the semantic versioning standard.
- [patch](version/patch.md): The patch version according to the semantic versioning standard.
- [prereleaseIdentifiers](version/prereleaseidentifiers.md): The pre-release identifier according to the semantic versioning standard, such as `-beta.1`.
- [buildMetadataIdentifiers](version/buildmetadataidentifiers.md): The build metadata of this version according to the semantic versioning standard, such as a commit hash.

### Default Implementations

- [Comparable Implementations](version/comparable-implementations.md)
- [CustomStringConvertible Implementations](version/customstringconvertible-implementations.md)
- [Equatable Implementations](version/equatable-implementations.md)
- [ExpressibleByExtendedGraphemeClusterLiteral Implementations](version/expressiblebyextendedgraphemeclusterliteral-implementations.md)
- [ExpressibleByStringLiteral Implementations](version/expressiblebystringliteral-implementations.md)
- [ExpressibleByUnicodeScalarLiteral Implementations](version/expressiblebyunicodescalarliteral-implementations.md)
- [LosslessStringConvertible Implementations](version/losslessstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Comparable](../swift/comparable.md)
- [Copyable](../swift/copyable.md)
- [CustomStringConvertible](../swift/customstringconvertible.md)
- [Equatable](../swift/equatable.md)
- [Escapable](../swift/escapable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](../swift/expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringLiteral](../swift/expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](../swift/expressiblebyunicodescalarliteral.md)
- [LosslessStringConvertible](../swift/losslessstringconvertible.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Describing a Package Dependency

- [kind](package/dependency/kind-swift.property.md): A description of the package dependency.
- [Package.Dependency.Kind](package/dependency/kind-swift.enum.md): The type of dependency.
- [name](package/dependency/name.md): Deprecated. The name of the dependency.
- [url](package/dependency/url.md): Deprecated. The Git URL of the package dependency.
