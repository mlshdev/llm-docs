> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(url:from:traits:)](https://developer.apple.com/documentation/packagedescription/package/dependency/package(url:from:traits:))

# package(url:from:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.

## Declaration

```swift
static func package(url: String, from version: Version, traits: Set<Package.Dependency.Trait> = [.defaults]) -> Package.Dependency
```

## Parameters

- `url`: The valid Git URL of the package.
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
.package(url: "https://example.com/example-package.git", from: "1.2.3"),
```

## See Also

### Creating a package dependency from a URL

- [package(url:from:)](package%28url_from_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:\_:)](package%28url___%29-2ys47.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:traits:)](package%28url___traits_%29-5pt81.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:)](package%28url___%29-1r6rc.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:\_:traits:)](package%28url___traits_%29-mjzv.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:branch:)](package%28url_branch_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:branch:traits:)](package%28url_branch_traits_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:revision:)](package%28url_revision_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:revision:traits:)](package%28url_revision_traits_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:exact:)](package%28url_exact_%29.md): Adds a remote package dependency that uses an exact version requirement.
- [package(url:exact:traits:)](package%28url_exact_traits_%29.md): Adds a remote package dependency that uses an exact version requirement.
