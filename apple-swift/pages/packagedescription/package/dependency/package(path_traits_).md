> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/package(path:traits:)](https://developer.apple.com/documentation/packagedescription/package/dependency/package(path:traits:))

# package(path:traits:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 6.1+

Adds a local dependency to a package located at the path and with an optional set of traits you provide.

## Declaration

```swift
static func package(path: String, traits: Set<Package.Dependency.Trait> = [.defaults]) -> Package.Dependency
```

## Parameters

- `path`: The file system path to the package.
- `traits`: The trait configuration of this dependency. The default value enables the default traits of the package.

<a id="return-value"></a>

## Return Value

A package dependency.

<a id="discussion"></a>

## Discussion

The Swift Package Manager uses the package dependency as-is and does not perform any source control access. Local package dependencies are especially useful during development of a new package or when working on multiple tightly coupled packages.

## See Also

### Creating a local dependency

- [package(name:path:)](package%28name_path_%29.md): Adds a local dependency to a named package located at the path you provide.
- [package(name:path:traits:)](package%28name_path_traits_%29.md): Adds a local dependency to a named package located at the path and with an optional set of traits you provide.
- [package(path:)](package%28path_%29.md): Adds a local dependency to a package located at the path you provide.
