> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvfillextendedpixelscallback](https://developer.apple.com/documentation/corevideo/cvfillextendedpixelscallback)

# CVFillExtendedPixelsCallBack (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Defines a pointer to a custom extended pixel-fill function, which is called whenever the system needs to pad a buffer holding your custom pixel format.

## Declaration

```swift
typealias CVFillExtendedPixelsCallBack = (CVPixelBuffer, UnsafeMutableRawPointer?) -> DarwinBoolean
```

## Parameters

- `pixelBuffer`: The pixel buffer to be padded.
- `refCon`: A pointer to application-defined data. This is the same value you stored in the [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md) structure.

<a id="return-value"></a>

## Return Value

If `true`, the padding was successful; otherwise, `false`.

# CVFillExtendedPixelsCallBack (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Defines a pointer to a custom extended pixel-fill function, which is called whenever the system needs to pad a buffer holding your custom pixel format.

## Declaration

```objectivec
typedef unsigned char (*)(struct __CVBuffer *, void *) CVFillExtendedPixelsCallBack;
```

## Parameters

- `pixelBuffer`: The pixel buffer to be padded.
- `refCon`: A pointer to application-defined data. This is the same value you stored in the [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md) structure.

<a id="return-value"></a>

## Return Value

If `true`, the padding was successful; otherwise, `false`.
