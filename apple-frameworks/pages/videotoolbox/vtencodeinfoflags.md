> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtencodeinfoflags](https://developer.apple.com/documentation/videotoolbox/vtencodeinfoflags)

# VTEncodeInfoFlags (Swift)

**Framework:** Video Toolbox  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Flags that indicate encoder state.

## Declaration

```swift
struct VTEncodeInfoFlags
```

## Topics

### Info Flags

- [asynchronous](vtencodeinfoflags/asynchronous.md): A flag that indicates that an encode operation ran asynchronously.
- [frameDropped](vtencodeinfoflags/framedropped.md): A flag that indicates that a frame dropped during encoding.

### Initializers

- [init(rawValue:)](vtencodeinfoflags/init%28rawvalue_%29.md): Creates a flags structure with a raw value.

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

## See Also

### Data Types

- [VTCompressionSession](vtcompressionsession.md): A reference to a VideoToolbox compression session.

# VTEncodeInfoFlags (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Flags that indicate encoder state.

## Declaration

```objectivec
enum VTEncodeInfoFlags : UInt32;
```

## Topics

### Info Flags

- [kVTEncodeInfo_Asynchronous](vtencodeinfoflags/asynchronous.md): A flag that indicates that an encode operation ran asynchronously.
- [kVTEncodeInfo_FrameDropped](vtencodeinfoflags/framedropped.md): A flag that indicates that a frame dropped during encoding.

## See Also

### Data Types

- [VTCompressionSessionRef](vtcompressionsession.md): A reference to a VideoToolbox compression session.
