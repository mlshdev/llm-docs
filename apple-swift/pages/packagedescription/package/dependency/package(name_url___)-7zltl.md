> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(name:url:_:)-7zltl](https://developer.apple.com/documentation/packagedescription/package/dependency/package(name:url:_:)-7zltl)

# package(name:url:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.2+ (deprecated in 5.6)

Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.

> use package(url:\_:) instead

## Declaration

```swift
static func package(name: String, url: String, _ range: ClosedRange<Version>) -> Package.Dependency
```

## Parameters

- `name`: The name of the package, or `nil` to deduce it from the URL.
- `url`: The valid Git URL of the package.
- `range`: The closed version range requirement.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

The following example allows the Swift Package Manager to pick versions 1.2.3, 1.2.4, 1.2.5, as well as 1.2.6.

```swift
.package(url: "https://example.com/example-package.git", "1.2.3"..."1.2.6"),
```

The following example allows the Swift Package Manager to pick versions between 1.0.0 and 2.0.0

```swift
.package(url: "https://example.com/example-package.git", .upToNextMajor(from: "1.0.0"),
```

The following example allows the Swift Package Manager to pick versions between 1.0.0 and 1.1.0

```swift
.package(url: "https://example.com/example-package.git", .upToNextMinor(from: "1.0.0"),
```

If the package you depend on defines traits, the package manager uses the dependency with its default set of traits.

## See Also

### Deprecated methods

- [package(name:url:\_:)](package%28name_url___%29-6k3na.md): Deprecated. Adds a remote package dependency with a given version requirement.
- [package(name:url:\_:)](package%28name_url___%29-nqbk.md): Deprecated. Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(name:url:branch:)](package%28name_url_branch_%29.md): Deprecated. Adds a remote package dependency with a branch requirement you provide.
- [package(name:url:from:)](package%28name_url_from_%29.md): Deprecated. Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(name:url:revision:)](package%28name_url_revision_%29.md): Deprecated. Adds a remote package dependency with a specific revision requirement.
- [package(url:\_:)](package%28url___%29-4tkwi.md): Deprecated. Adds a remote package dependency given a version requirement.
- [name](name.md): Deprecated. The name of the dependency.
- [url](url.md): Deprecated. The Git URL of the package dependency.
