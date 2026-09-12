> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(url:_:traits:)-5pt81](https://developer.apple.com/documentation/packagedescription/package/dependency/package(url:_:traits:)-5pt81)

# package(url:\_:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.

## Declaration

```swift
static func package(url: String, _ range: Range<Version>, traits: Set<Package.Dependency.Trait> = [.defaults]) -> Package.Dependency
```

## Parameters

- `url`: The valid Git URL of the package.
- `range`: The custom version range requirement.
- `traits`: The trait configuration of this dependency. The default value enables the default traits of the package.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

The following example allows the Swift Package Manager to pick versions `1.2.3`, `1.2.4`, `1.2.5`, but not `1.2.6`.

```swift
.package(url: "https://example.com/example-package.git", "1.2.3"..<"1.2.6"),
```

## See Also

### Creating a package dependency from a URL

- [package(url:from:)](package%28url_from_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:from:traits:)](package%28url_from_traits_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:\_:)](package%28url___%29-2ys47.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:)](package%28url___%29-1r6rc.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:\_:traits:)](package%28url___traits_%29-mjzv.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:branch:)](package%28url_branch_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:branch:traits:)](package%28url_branch_traits_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:revision:)](package%28url_revision_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:revision:traits:)](package%28url_revision_traits_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:exact:)](package%28url_exact_%29.md): Adds a remote package dependency that uses an exact version requirement.
- [package(url:exact:traits:)](package%28url_exact_traits_%29.md): Adds a remote package dependency that uses an exact version requirement.
