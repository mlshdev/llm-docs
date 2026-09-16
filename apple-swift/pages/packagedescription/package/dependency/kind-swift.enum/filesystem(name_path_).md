> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/package/dependency/kind-swift.enum/filesystem(name:path:)

# Package.Dependency.Kind.fileSystem(name:path:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

A dependency located at the given path.

## Declaration

```swift
case fileSystem(name: String?, path: String)
```

## Parameters

- `name`: The name of the dependency.
- `path`: The path to the dependency.
