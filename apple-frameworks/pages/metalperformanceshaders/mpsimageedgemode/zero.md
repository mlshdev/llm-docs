> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageedgemode/zero](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageedgemode/zero)

# MPSImageEdgeMode.zero (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Out-of-bound pixels are set to `(0.0, 0.0, 0.0, 1.0)` for images without an alpha channel or `(0.0, 0.0, 0.0, 0.0)` for images with an alpha channel, as defined by their pixel format.

## Declaration

```swift
case zero
```

## See Also

### Constants

- [MPSImageEdgeMode.clamp](clamp.md): Out-of-bound pixels are clamped to the nearest edge pixel.

# MPSImageEdgeModeZero (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Out-of-bound pixels are set to `(0.0, 0.0, 0.0, 1.0)` for images without an alpha channel or `(0.0, 0.0, 0.0, 0.0)` for images with an alpha channel, as defined by their pixel format.

## Declaration

```objectivec
MPSImageEdgeModeZero
```

## See Also

### Constants

- [MPSImageEdgeModeClamp](clamp.md): Out-of-bound pixels are clamped to the nearest edge pixel.
