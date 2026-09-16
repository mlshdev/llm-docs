> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/package/dependency/kind-swift.enum/registry(id:requirement:)

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
