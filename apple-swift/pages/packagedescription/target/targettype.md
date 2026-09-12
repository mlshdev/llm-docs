> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/target/targettype](https://developer.apple.com/documentation/packagedescription/target/targettype)

# Target.TargetType

**Framework:** PackageDescription  
**Kind:** Enumeration

The different types of a target.

## Declaration

```swift
enum TargetType
```

## Topics

### Enumeration Cases

- [Target.TargetType.regular](targettype/regular.md): A target that contains code for the Swift package’s functionality.
- [Target.TargetType.binary](targettype/binary.md): A target that references a binary artifact.
- [Target.TargetType.system](targettype/system.md): A target that adapts a library on the system to work with Swift packages.
- [Target.TargetType.test](targettype/test.md): A target that contains tests for the Swift package’s other targets.
- [Target.TargetType.executable](targettype/executable.md): A target that contains code for an executable’s main module.
- [Target.TargetType.plugin](targettype/plugin.md): A target that provides a package plug-in.
- [Target.TargetType.macro](targettype/macro.md): A target that provides a Swift macro.

## Relationships

### Conforms To

- [Copyable](../../swift/copyable.md)
- [Equatable](../../swift/equatable.md)
- [Escapable](../../swift/escapable.md)
- [Hashable](../../swift/hashable.md)
- [RawRepresentable](../../swift/rawrepresentable.md)

## See Also

### Describing the Target Type

- [isTest](istest.md): A Boolean value that indicates whether this is a test target.
- [type](type.md): The type of the target.
