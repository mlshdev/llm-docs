> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(name:url:from:)](https://developer.apple.com/documentation/packagedescription/package/dependency/package(name:url:from:))

# package(name:url:from:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.2+ (deprecated in 5.6)

Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.

> use package(url:from:) instead

## Declaration

```swift
static func package(name: String, url: String, from version: Version) -> Package.Dependency
```

## Parameters

- `name`: The name of the Swift package or `nil` to deduce the name from  the package’s Git URL.
- `url`: The valid Git URL of the package.
- `version`: The minimum version requirement.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

This is the recommended way to specify a remote package dependency. It allows you to specify the minimum version you require, allows updates that include bug fixes and backward-compatible feature updates, but requires you to explicitly update to a new major version of the dependency. This approach provides the maximum flexibility on which version to use, while making sure you don’t update to a version with breaking changes, and helps to prevent conflicts in your dependency graph.

The following example allows the Swift package manager to select a version like a `1.2.3`, `1.2.4`, or `1.3.0`, but not `2.0.0`.

```swift
.package(url: "https://example.com/example-package.git", from:
"1.2.3"),
```

## See Also

### Deprecated methods

- [package(name:url:\_:)](package%28name_url___%29-6k3na.md): Deprecated. Adds a remote package dependency with a given version requirement.
- [package(name:url:\_:)](package%28name_url___%29-nqbk.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(name:url:\_:)](package%28name_url___%29-7zltl.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(name:url:branch:)](package%28name_url_branch_%29.md): Deprecated. Adds a remote package dependency with a branch requirement you provide.
- [package(name:url:revision:)](package%28name_url_revision_%29.md): Deprecated. Adds a remote package dependency with a specific revision requirement.
- [package(url:\_:)](package%28url___%29-4tkwi.md): Deprecated. Adds a remote package dependency given a version requirement.
- [name](name.md): Deprecated. The name of the dependency.
- [url](url.md): Deprecated. The Git URL of the package dependency.
