> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferreleaseplanarbytescallback](https://developer.apple.com/documentation/corevideo/cvpixelbufferreleaseplanarbytescallback)

# CVPixelBufferReleasePlanarBytesCallback (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Defines a pointer to a pixel buffer release callback function, which is called when a pixel buffer created by [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) is released.

## Declaration

```swift
typealias CVPixelBufferReleasePlanarBytesCallback = (UnsafeMutableRawPointer?, UnsafeRawPointer?, Int, Int, UnsafeMutablePointer<UnsafeRawPointer?>?) -> Void
```

## Parameters

- `releaseRefCon`: A pointer to application-defined data. This pointer is the same as that passed in the `releaseRefCon` parameter of [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md).
- `dataPtr`: A pointer to a plane descriptor block. This is the same pointer you passed to [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `dataPtr` parameter.
- `dataSize`: The size value you passed to [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `dataSize` parameter.
- `numberOfPlanes`: The number of planes value you passed to [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `numberOfPlanes` parameter.
- `planeAddresses`: A pointer to the base plane address you passed to [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `basePlaneAddress` parameter.

<a id="Discussion"></a>

## Discussion

You use this callback to release the pixel data and perform any other cleanup when the system releases the pixel buffer.

## See Also

### Callbacks

- [CVPixelBufferReleaseBytesCallback](cvpixelbufferreleasebytescallback.md): A type that defines a release callback function.

# CVPixelBufferReleasePlanarBytesCallback (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Defines a pointer to a pixel buffer release callback function, which is called when a pixel buffer created by [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) is released.

## Declaration

```objectivec
typedef void (*)(void *, const void *, unsigned long, unsigned long, const void **) CVPixelBufferReleasePlanarBytesCallback;
```

## Parameters

- `releaseRefCon`: A pointer to application-defined data. This pointer is the same as that passed in the `releaseRefCon` parameter of [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md).
- `dataPtr`: A pointer to a plane descriptor block. This is the same pointer you passed to [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `dataPtr` parameter.
- `dataSize`: The size value you passed to [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `dataSize` parameter.
- `numberOfPlanes`: The number of planes value you passed to [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `numberOfPlanes` parameter.
- `planeAddresses`: A pointer to the base plane address you passed to [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) in the `basePlaneAddress` parameter.

<a id="Discussion"></a>

## Discussion

You use this callback to release the pixel data and perform any other cleanup when the system releases the pixel buffer.

## See Also

### Callbacks

- [CVPixelBufferReleaseBytesCallback](cvpixelbufferreleasebytescallback.md): A type that defines a release callback function.
