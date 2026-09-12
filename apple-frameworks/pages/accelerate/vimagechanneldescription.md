> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagechanneldescription](https://developer.apple.com/documentation/accelerate/vimagechanneldescription)

# vImageChannelDescription (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the range and clamp limits for a pixel format.

## Declaration

```swift
struct vImageChannelDescription
```

<a id="overview"></a>

## Overview

A [vImageChannelDescription](vimagechanneldescription.md) structure describes the range and clamp limits for each channel in a Core Video image format. The [min](vimagechanneldescription/min.md) and [max](vimagechanneldescription/max.md) properties define the clamping limits, and functions clamp values to [min](vimagechanneldescription/min.md)…[max](vimagechanneldescription/max.md). The [zero](vimagechanneldescription/zero.md) and [full](vimagechanneldescription/full.md) values specify the normal range and bias for a format, and encode `0.0` and `1.0`, respectively (`0.0` and `0.5` for chrominance).

## Topics

### Creating a channel description

- [init(min:zero:full:max:)](vimagechanneldescription/init%28min_zero_full_max_%29.md): Returns a structure that describes the range and clamp limits for a pixel format.
- [init()](vimagechanneldescription/init%28%29.md): Returns an empty structure that describes the range and clamp limits for a pixel format.

### Instance properties

- [min](vimagechanneldescription/min.md): The minimum encoded value.
- [zero](vimagechanneldescription/zero.md): The encoding for the value zero.
- [full](vimagechanneldescription/full.md): The encoding for the value one.
- [max](vimagechanneldescription/max.md): The maximum encoded value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount(\_:)](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_GetChannelDescription(\_:\_:)](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_CopyChannelDescription(\_:\_:\_:)](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames(\_:)](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.

# vImageChannelDescription (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the range and clamp limits for a pixel format.

## Declaration

```objectivec
typedef struct vImageChannelDescription { ... } vImageChannelDescription;
```

<a id="overview"></a>

## Overview

A [vImageChannelDescription](vimagechanneldescription.md) structure describes the range and clamp limits for each channel in a Core Video image format. The [min](vimagechanneldescription/min.md) and [max](vimagechanneldescription/max.md) properties define the clamping limits, and functions clamp values to [min](vimagechanneldescription/min.md)…[max](vimagechanneldescription/max.md). The [zero](vimagechanneldescription/zero.md) and [full](vimagechanneldescription/full.md) values specify the normal range and bias for a format, and encode `0.0` and `1.0`, respectively (`0.0` and `0.5` for chrominance).

## Topics

### Instance properties

- [min](vimagechanneldescription/min.md): The minimum encoded value.
- [zero](vimagechanneldescription/zero.md): The encoding for the value zero.
- [full](vimagechanneldescription/full.md): The encoding for the value one.
- [max](vimagechanneldescription/max.md): The maximum encoded value.

## See Also

### Querying and setting channel information

- [vImageCVImageFormat_GetChannelCount](vimagecvimageformat_getchannelcount%28__%29.md): Returns the number of channels, including alpha, for the Core Video image format.
- [vImageCVImageFormat_GetChannelDescription](vimagecvimageformat_getchanneldescription%28____%29.md): Returns the channel description for a particular channel type.
- [vImageCVImageFormat_CopyChannelDescription](vimagecvimageformat_copychanneldescription%28______%29.md): Copies the channel description for a particular channel type to an image format.
- [vImageCVImageFormat_GetChannelNames](vimagecvimageformat_getchannelnames%28__%29.md): Returns the names of the channels of a Core Video image format.
