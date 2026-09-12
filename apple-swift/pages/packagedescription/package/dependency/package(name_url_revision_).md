> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(name:url:revision:)](https://developer.apple.com/documentation/packagedescription/package/dependency/package(name:url:revision:))

# package(name:url:revision:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.5+ (deprecated in 5.6)

Adds a remote package dependency with a specific revision requirement.

> use package(url:revision:) instead

## Declaration

```swift
static func package(name: String, url: String, revision: String) -> Package.Dependency
```

## Parameters

- `name`: The name of the package, or nil to deduce it from the URL.
- `url`: The valid Git URL of the package.
- `revision`: A dependency requirement. See static methods on [Package.Dependency.Requirement](requirement-swift.enum.md) for available options.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

```swift
.package(url: "https://example.com/example-package.git", revision: "aa681bd6c61e22df0fd808044a886fc4a7ed3a65"),
```

## See Also

### Deprecated methods

- [package(name:url:\_:)](package%28name_url___%29-6k3na.md): Deprecated. Adds a remote package dependency with a given version requirement.
- [package(name:url:\_:)](package%28name_url___%29-nqbk.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(name:url:\_:)](package%28name_url___%29-7zltl.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(name:url:branch:)](package%28name_url_branch_%29.md): Deprecated. Adds a remote package dependency with a branch requirement you provide.
- [package(name:url:from:)](package%28name_url_from_%29.md): Deprecated. Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:\_:)](package%28url___%29-4tkwi.md): Deprecated. Adds a remote package dependency given a version requirement.
- [name](name.md): Deprecated. The name of the dependency.
- [url](url.md): Deprecated. The Git URL of the package dependency.
