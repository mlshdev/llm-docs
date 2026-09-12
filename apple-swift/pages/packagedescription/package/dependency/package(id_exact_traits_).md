> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(id:exact:traits:)](https://developer.apple.com/documentation/packagedescription/package/dependency/package(id:exact:traits:))

# package(id:exact:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Adds a remote package dependency with an exact version requirement.

## Declaration

```swift
static func package(id: String, exact version: Version, traits: Set<Package.Dependency.Trait> = [.defaults]) -> Package.Dependency
```

## Parameters

- `id`: The identity of the package.
- `version`: The exact version of the dependency for this requirement.
- `traits`: The trait configuration of this dependency. The default value enables the default traits of the package.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

Specifying exact version requirements are not recommended as they can cause conflicts in your dependency graph when multiple other packages depend on a package. Because Swift packages follow the semantic versioning convention, think about specifying a version range instead.

The following example instructs the Swift Package Manager to use version `1.2.3`.

```swift
.package(id: "scope.name", exact: "1.2.3"),
```

## See Also

### Creating a package dependency from a registry

- [package(id:from:)](package%28id_from_%29.md): Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.
- [package(id:from:traits:)](package%28id_from_traits_%29.md): Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.
- [package(id:\_:)](package%28id___%29-27raa.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:traits:)](package%28id___traits_%29-5rb8r.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:)](package%28id___%29-6anr7.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(id:\_:traits:)](package%28id___traits_%29-5x94p.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(id:exact:)](package%28id_exact_%29.md): Adds a remote package dependency with an exact version requirement.
