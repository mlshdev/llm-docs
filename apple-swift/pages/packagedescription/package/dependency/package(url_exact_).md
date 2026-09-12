> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(url:exact:)](https://developer.apple.com/documentation/packagedescription/package/dependency/package(url:exact:))

# package(url:exact:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.6+

Adds a remote package dependency that uses an exact version requirement.

## Declaration

```swift
static func package(url: String, exact version: Version) -> Package.Dependency
```

## Parameters

- `url`: The valid Git URL of the package.
- `version`: The exact version of the dependency for this requirement.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

Specifying exact version requirements are not recommended as they can cause conflicts in your dependency graph when other packages depend on this package. As Swift packages follow the semantic versioning convention, think about specifying a version range instead.

The following example instructs the Swift Package Manager to use version `1.2.3`.

```swift
.package(url: "https://example.com/example-package.git", exact: "1.2.3"),
```

If the package you depend on defines traits, the package manager uses the dependency with its default set of traits.

## See Also

### Creating a package dependency from a URL

- [package(url:from:)](package%28url_from_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:from:traits:)](package%28url_from_traits_%29.md): Adds a remote package dependency with a version requirement, starting with the given minimum version, going up to the next major version.
- [package(url:\_:)](package%28url___%29-2ys47.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:traits:)](package%28url___traits_%29-5pt81.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(url:\_:)](package%28url___%29-1r6rc.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:\_:traits:)](package%28url___traits_%29-mjzv.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(url:branch:)](package%28url_branch_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:branch:traits:)](package%28url_branch_traits_%29.md): Adds a remote package dependency with a branch requirement you provide.
- [package(url:revision:)](package%28url_revision_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:revision:traits:)](package%28url_revision_traits_%29.md): Adds a remote package dependency with a specific revision requirement.
- [package(url:exact:traits:)](package%28url_exact_traits_%29.md): Adds a remote package dependency that uses an exact version requirement.
