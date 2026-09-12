> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(id:_:traits:)-5x94p](https://developer.apple.com/documentation/packagedescription/package/dependency/package(id:_:traits:)-5x94p)

# package(id:\_:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.

## Declaration

```swift
static func package(id: String, _ range: ClosedRange<Version>, traits: Set<Package.Dependency.Trait> = [.defaults]) -> Package.Dependency
```

## Parameters

- `id`: The identity of the package.
- `range`: The closed version range requirement.
- `traits`: The trait configuration of this dependency. The default value enables the default traits of the package.

<a id="return-value"></a>

## Return Value

A `Package.Dependency` instance.

<a id="discussion"></a>

## Discussion

The following example allows the Swift Package Manager to pick versions 1.2.3, 1.2.4, 1.2.5, as well as 1.2.6.

```swift
.package(id: "scope.name", "1.2.3"..."1.2.6"),
```

## See Also

### Creating a package dependency from a registry

- [package(id:from:)](package%28id_from_%29.md): Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.
- [package(id:from:traits:)](package%28id_from_traits_%29.md): Adds a remote package dependency that uses the version requirement, starting with the given minimum version, going up to the next major version.
- [package(id:\_:)](package%28id___%29-27raa.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:traits:)](package%28id___traits_%29-5rb8r.md): Adds a remote package dependency starting with a specific minimum version, up to but not including a specified maximum version.
- [package(id:\_:)](package%28id___%29-6anr7.md): Adds a remote package dependency starting with a specific minimum version, going up to and including a specific maximum version.
- [package(id:exact:)](package%28id_exact_%29.md): Adds a remote package dependency with an exact version requirement.
- [package(id:exact:traits:)](package%28id_exact_traits_%29.md): Adds a remote package dependency with an exact version requirement.
