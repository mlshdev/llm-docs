> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/kind-swift.enum/registry(id:requirement:)](https://developer.apple.com/documentation/packagedescription/package/dependency/kind-swift.enum/registry(id:requirement:))

# Package.Dependency.Kind.registry(id:requirement:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

A dependency based on a registry requirement.

## Declaration

```swift
case registry(id: String, requirement: Package.Dependency.RegistryRequirement)
```

## Parameters

- `id`: The package identifier of the dependency.
- `requirement`: The version based requirement for a package.
