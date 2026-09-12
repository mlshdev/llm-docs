> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvfillextendedpixelscallbackdata](https://developer.apple.com/documentation/corevideo/cvfillextendedpixelscallbackdata)

# CVFillExtendedPixelsCallBackData (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for holding information that describes a custom extended pixel fill algorithm.

## Declaration

```swift
struct CVFillExtendedPixelsCallBackData
```

<a id="overview"></a>

## Overview

You must fill out this structure and store it as part of your pixel format description Core Foundation dictionary (key: `kCVPixelFormatFillExtendedPixelsCallback`, type: `CFData`). However, if your custom pixel format never needs the functionality of [CVPixelBufferFillExtendedPixels(\_:)](cvpixelbufferfillextendedpixels%28__%29.md), you don’t need to add this key or implement the associated callback.

For more information about defining a custom pixel format, see [Pixel Format Description Keys](pixel-format-description-keys.md).

## Topics

### Initializers

- [init()](cvfillextendedpixelscallbackdata/init%28%29.md)
- [init(version:fillCallBack:refCon:)](cvfillextendedpixelscallbackdata/init%28version_fillcallback_refcon_%29.md)

### Properties

- [fillCallBack](cvfillextendedpixelscallbackdata/fillcallback.md)
- [refCon](cvfillextendedpixelscallbackdata/refcon.md): A pointer to application-defined data that is passed to your custom pixel fill function.
- [version](cvfillextendedpixelscallbackdata/version.md): The version of this fill algorithm.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CVPixelFormatDescription](cvpixelformatdescription.md): Defines a pixel format which can be used to create custom pixel buffer types.
- [CVPixelFormatType](cvpixelformattype.md): Identifier for a pixel format type
- [CVSenselSitingOffsets](cvsenselsitingoffsets.md): Siting offsets, relative to pixel center, of individual sensels/components constituting each pixel.
- [CVSenselArrayPattern](cvsenselarraypattern.md): Pattern indicating sensel arrangement.

# CVFillExtendedPixelsCallBackData (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for holding information that describes a custom extended pixel fill algorithm.

## Declaration

```objectivec
typedef struct { ... } CVFillExtendedPixelsCallBackData;
```

<a id="overview"></a>

## Overview

You must fill out this structure and store it as part of your pixel format description Core Foundation dictionary (key: `kCVPixelFormatFillExtendedPixelsCallback`, type: `CFData`). However, if your custom pixel format never needs the functionality of [CVPixelBufferFillExtendedPixels](cvpixelbufferfillextendedpixels%28__%29.md), you don’t need to add this key or implement the associated callback.

For more information about defining a custom pixel format, see [Pixel Format Description Keys](pixel-format-description-keys.md).

## Topics

### Properties

- [fillCallBack](cvfillextendedpixelscallbackdata/fillcallback.md)
- [refCon](cvfillextendedpixelscallbackdata/refcon.md): A pointer to application-defined data that is passed to your custom pixel fill function.
- [version](cvfillextendedpixelscallbackdata/version.md): The version of this fill algorithm.
