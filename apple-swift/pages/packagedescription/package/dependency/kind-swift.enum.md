> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/dependency/kind-swift.enum](https://developer.apple.com/documentation/packagedescription/package/dependency/kind-swift.enum)

# Package.Dependency.Kind

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM 5.6+

The type of dependency.

## Declaration

```swift
enum Kind
```

## Topics

### Enumeration Cases

- [Package.Dependency.Kind.fileSystem(name:path:)](kind-swift.enum/filesystem%28name_path_%29.md): A dependency located at the given path.
- [Package.Dependency.Kind.registry(id:requirement:)](kind-swift.enum/registry%28id_requirement_%29.md): A dependency based on a registry requirement.
- [Package.Dependency.Kind.sourceControl(name:location:requirement:)](kind-swift.enum/sourcecontrol%28name_location_requirement_%29.md): A dependency based on a source control requirement.

## See Also

### Describing a Package Dependency

- [kind](kind-swift.property.md): A description of the package dependency.
- [Version](../../version.md): A version according to the semantic versioning specification.
- [name](name.md): Deprecated. The name of the dependency.
- [url](url.md): Deprecated. The Git URL of the package dependency.
