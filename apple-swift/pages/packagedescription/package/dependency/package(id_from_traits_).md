> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(id:from:traits:)](https://developer.apple.com/documentation/packagedescription/package/dependency/package(id:from:traits:))

# package(id:from:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.

## Declaration

```swift
static func package(id: String, from version: Version, traits: Set<Package.Dependency.Trait> = [.defaults]) -> Package.Dependency
```

## Parameters

- `id`: The identity of the package.
- `version`: The minimum version requirement.
- `traits`: The trait configuration of this dependency. The default value enables the default traits of the package.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

This is the recommended way to specify a remote package dependency. It allows you to specify the minimum version you require, allows updates that include bug fixes and backward-compatible feature updates, but requires you to explicitly update to a new major version of the dependency. This approach provides the maximum flexibility on which version to use, while making sure you don’t update to a version with breaking changes, and helps to prevent conflicts in your dependency graph.

The following example allows the Swift Package Manager to select a version like a  `1.2.3`, `1.2.4`, or `1.3.0`, but not `2.0.0`.

```swift
.package(id: "scope.name", from: "1.2.3"),
```

## See Also

### Creating a package dependency from a registry

- [package(id:from:)](package%28id_from_%29.md): Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.
- [package(id:\_:)](package%28id___%29-27raa.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:traits:)](package%28id___traits_%29-5rb8r.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:)](package%28id___%29-6anr7.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(id:\_:traits:)](package%28id___traits_%29-5x94p.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(id:exact:)](package%28id_exact_%29.md): Adds a remote package dependency with an exact version requirement.
- [package(id:exact:traits:)](package%28id_exact_traits_%29.md): Adds a remote package dependency with an exact version requirement.
