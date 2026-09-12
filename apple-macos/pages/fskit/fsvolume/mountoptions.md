> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/mountoptions](https://developer.apple.com/documentation/fskit/fsvolume/mountoptions)

# FSVolume.MountOptions (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 26.4+

Mount options to be requested from FSKit using the `requestedMountOptions` property.

## Declaration

```swift
struct MountOptions
```

## Topics

### Inspecting mount options

- [readOnly](mountoptions/readonly.md): An option to request a read-only mount.

### Working with raw values

- [init(rawValue:)](mountoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# FSMountOptions (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Mount options to be requested from FSKit using the `requestedMountOptions` property.

## Declaration

```objectivec
enum FSMountOptions : NSUInteger;
```

## Topics

### Inspecting mount options

- [FSMountOptionsReadOnly](mountoptions/readonly.md): An option to request a read-only mount.
