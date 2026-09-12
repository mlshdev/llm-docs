> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(url:_:)-2ys47](https://developer.apple.com/documentation/packagedescription/package/dependency/package(url:_:)-2ys47)

# package(url:\_:)

**Framework:** PackageDescription  
**Kind:** Type Method

Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.

## Declaration

```swift
static func package(url: String, _ range: Range<Version>) -> Package.Dependency
```

## Parameters

- `url`: The valid Git URL of the package.
- `range`: The custom version range requirement.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

The following example allows the Swift Package Manager to pick versions `1.2.3`, `1.2.4`, `1.2.5`, but not `1.2.6`.

```swift
.package(url: "https://example.com/example-package.git", "1.2.3"..<"1.2.6"),
```

If the package you depend on defines traits, the package manager uses the dependency with its default set of traits.

## See Also

### Creating a package dependency from a URL

- [package(url:from:)](package%28url_from_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:from:traits:)](package%28url_from_traits_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:\_:traits:)](package%28url___traits_%29-5pt81.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:)](package%28url___%29-1r6rc.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:\_:traits:)](package%28url___traits_%29-mjzv.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:branch:)](package%28url_branch_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:branch:traits:)](package%28url_branch_traits_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:revision:)](package%28url_revision_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:revision:traits:)](package%28url_revision_traits_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:exact:)](package%28url_exact_%29.md): Adds a remote package dependency that uses an exact version requirement.
- [package(url:exact:traits:)](package%28url_exact_traits_%29.md): Adds a remote package dependency that uses an exact version requirement.
