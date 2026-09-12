> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(url:_:)-4tkwi](https://developer.apple.com/documentation/packagedescription/package/dependency/package(url:_:)-4tkwi)

# package(url:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM  (deprecated in 5.6)

Adds a remote package dependency given a version requirement.

> use specific requirement APIs instead (e.g. use 'branch:' instead of '.branch')

## Declaration

```swift
static func package(url: String, _ requirement: Package.Dependency.Requirement) -> Package.Dependency
```

## Parameters

- `url`: The valid Git URL of the package.
- `requirement`: A dependency requirement. See static methods on `Package.Dependency.Requirement` for available options.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

## See Also

### Deprecated methods

- [package(name:url:\_:)](package%28name_url___%29-6k3na.md): Deprecated. Adds a remote package dependency with a given version requirement.
- [package(name:url:\_:)](package%28name_url___%29-nqbk.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(name:url:\_:)](package%28name_url___%29-7zltl.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(name:url:branch:)](package%28name_url_branch_%29.md): Deprecated. Adds a remote package dependency with a branch requirement you provide.
- [package(name:url:from:)](package%28name_url_from_%29.md): Deprecated. Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(name:url:revision:)](package%28name_url_revision_%29.md): Deprecated. Adds a remote package dependency with a specific revision requirement.
- [name](name.md): Deprecated. The name of the dependency.
- [url](url.md): Deprecated. The Git URL of the package dependency.
