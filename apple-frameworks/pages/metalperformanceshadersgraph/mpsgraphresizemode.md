> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphresizemode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphresizemode)

# MPSGraphResizeMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The resize mode to use for resizing.

## Declaration

```swift
enum MPSGraphResizeMode
```

## Topics

### Enumeration Cases

- [MPSGraphResizeMode.bilinear](mpsgraphresizemode/bilinear.md): Samples the 4 neighbors to the pixel coordinate and uses bilinear interpolation.
- [MPSGraphResizeMode.nearest](mpsgraphresizemode/nearest.md): Samples the nearest neighbor to the pixel coordinate.

### Initializers

- [init(rawValue:)](mpsgraphresizemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphResizeMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The resize mode to use for resizing.

## Declaration

```objectivec
enum MPSGraphResizeMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphResizeBilinear](mpsgraphresizemode/bilinear.md): Samples the 4 neighbors to the pixel coordinate and uses bilinear interpolation.
- [MPSGraphResizeNearest](mpsgraphresizemode/nearest.md): Samples the nearest neighbor to the pixel coordinate.
