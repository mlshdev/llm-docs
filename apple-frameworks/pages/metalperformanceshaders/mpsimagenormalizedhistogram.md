> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagenormalizedhistogram](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagenormalizedhistogram)

# MPSImageNormalizedHistogram (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that computes the normalized histogram of an image.

## Declaration

```swift
class MPSImageNormalizedHistogram
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagenormalizedhistogram/init%28coder_device_%29.md)
- [init(device:histogramInfo:)](mpsimagenormalizedhistogram/init%28device_histograminfo_%29.md)

### Instance Properties

- [clipRectSource](mpsimagenormalizedhistogram/cliprectsource.md)
- [histogramInfo](mpsimagenormalizedhistogram/histograminfo.md)
- [zeroHistogram](mpsimagenormalizedhistogram/zerohistogram.md)

### Instance Methods

- [encode(to:sourceTexture:minmaxTexture:histogram:histogramOffset:)](mpsimagenormalizedhistogram/encode%28to_sourcetexture_minmaxtexture_histogram_histogramoffset_%29.md)
- [histogramSize(forSourceFormat:)](mpsimagenormalizedhistogram/histogramsize%28forsourceformat_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSImageNormalizedHistogram (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that computes the normalized histogram of an image.

## Declaration

```objectivec
@interface MPSImageNormalizedHistogram : MPSKernel
```

## Topics

### Instance Properties

- [clipRectSource](mpsimagenormalizedhistogram/cliprectsource.md)
- [histogramInfo](mpsimagenormalizedhistogram/histograminfo.md)
- [zeroHistogram](mpsimagenormalizedhistogram/zerohistogram.md)

### Instance Methods

- [encodeToCommandBuffer:sourceTexture:minmaxTexture:histogram:histogramOffset:](mpsimagenormalizedhistogram/encode%28to_sourcetexture_minmaxtexture_histogram_histogramoffset_%29.md)
- [histogramSizeForSourceFormat:](mpsimagenormalizedhistogram/histogramsize%28forsourceformat_%29.md)
- [initWithCoder:device:](mpsimagenormalizedhistogram/init%28coder_device_%29.md)
- [initWithDevice:histogramInfo:](mpsimagenormalizedhistogram/init%28device_histograminfo_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)
