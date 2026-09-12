> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessionoptionflags](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessionoptionflags)

# VTCompressionSessionOptionFlags (Swift)

**Framework:** Video Toolbox  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Flags to pass to a compression session.

## Declaration

```swift
struct VTCompressionSessionOptionFlags
```

## Topics

### Option Flags

- [beginFinalPass](vtcompressionsessionoptionflags/beginfinalpass.md): A flag that indicates the last pass in a multi-pass compression session.

### Initializers

- [init(rawValue:)](vtcompressionsessionoptionflags/init%28rawvalue_%29.md): Creates a flags structure with a raw value.

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

# VTCompressionSessionOptionFlags (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Flags to pass to a compression session.

## Declaration

```objectivec
enum VTCompressionSessionOptionFlags : uint32_t;
```

## Topics

### Option Flags

- [kVTCompressionSessionBeginFinalPass](vtcompressionsessionoptionflags/beginfinalpass.md): A flag that indicates the last pass in a multi-pass compression session.
