> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/package/dependency/kind-swift.enum/sourcecontrol(name:location:requirement:)

# Package.Dependency.Kind.sourceControl(name:location:requirement:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

A dependency based on a source control requirement.

## Declaration

```swift
case sourceControl(name: String?, location: String, requirement: Package.Dependency.SourceControlRequirement)
```

## Parameters

- `name`: The name of the dependency.
- `location`: The Git URL of the dependency.
- `requirement`: The version-based requirement for a package.
