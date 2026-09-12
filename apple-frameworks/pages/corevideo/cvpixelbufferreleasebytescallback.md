> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferreleasebytescallback](https://developer.apple.com/documentation/corevideo/cvpixelbufferreleasebytescallback)

# CVPixelBufferReleaseBytesCallback (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A type that defines a release callback function.

## Declaration

```swift
typealias CVPixelBufferReleaseBytesCallback = (UnsafeMutableRawPointer?, UnsafeRawPointer?) -> Void
```

## Parameters

- `releaseRefCon`: A pointer to application-defined data. This pointer is the same as that passed in the `releaseRefCon` parameter of [CVPixelBufferCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithbytes%28____________________%29.md).
- `baseAddress`: A pointer to the base address of the memory holding the pixels. This pointer is the same as that passed in the `baseAddress` parameter of [CVPixelBufferCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithbytes%28____________________%29.md).

<a id="Discussion"></a>

## Discussion

When you create a pixel buffer using [CVPixelBufferCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithbytes%28____________________%29.md), you can optionally pass a callback function that’s invoked when the system frees the pixel buffer. Use this callback function to release the pixel data and perform any other cleanup needed when the buffer is released.

You define a callback function as shown below:

**Swift**

```swift
// Define a function to call when the pixel buffer is freed.
let releaseCallback: CVPixelBufferReleaseBytesCallback = { releaseRefCon, baseAddress in
    guard let baseAddress = baseAddress else { return }
    free(UnsafeMutableRawPointer(mutating: baseAddress))
    // Perform additional cleanup as needed.
}
```

**Objective-C**

```objc
// Define a function to call when the pixel buffer is freed.
void releaseCallback(void *releaseRefCon, const void *baseAddress) {
    free((void *)baseAddress);
    // Perform additional cleanup as needed.
}
```

## See Also

### Callbacks

- [CVPixelBufferReleasePlanarBytesCallback](cvpixelbufferreleaseplanarbytescallback.md): Defines a pointer to a pixel buffer release callback function, which is called when a pixel buffer created by [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) is released.

# CVPixelBufferReleaseBytesCallback (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A type that defines a release callback function.

## Declaration

```objectivec
typedef void (*)(void *, const void *) CVPixelBufferReleaseBytesCallback;
```

## Parameters

- `releaseRefCon`: A pointer to application-defined data. This pointer is the same as that passed in the `releaseRefCon` parameter of [CVPixelBufferCreateWithBytes](cvpixelbuffercreatewithbytes%28____________________%29.md).
- `baseAddress`: A pointer to the base address of the memory holding the pixels. This pointer is the same as that passed in the `baseAddress` parameter of [CVPixelBufferCreateWithBytes](cvpixelbuffercreatewithbytes%28____________________%29.md).

<a id="Discussion"></a>

## Discussion

When you create a pixel buffer using [CVPixelBufferCreateWithBytes](cvpixelbuffercreatewithbytes%28____________________%29.md), you can optionally pass a callback function that’s invoked when the system frees the pixel buffer. Use this callback function to release the pixel data and perform any other cleanup needed when the buffer is released.

You define a callback function as shown below:

**Swift**

```swift
// Define a function to call when the pixel buffer is freed.
let releaseCallback: CVPixelBufferReleaseBytesCallback = { releaseRefCon, baseAddress in
    guard let baseAddress = baseAddress else { return }
    free(UnsafeMutableRawPointer(mutating: baseAddress))
    // Perform additional cleanup as needed.
}
```

**Objective-C**

```objc
// Define a function to call when the pixel buffer is freed.
void releaseCallback(void *releaseRefCon, const void *baseAddress) {
    free((void *)baseAddress);
    // Perform additional cleanup as needed.
}
```

## See Also

### Callbacks

- [CVPixelBufferReleasePlanarBytesCallback](cvpixelbufferreleaseplanarbytescallback.md): Defines a pointer to a pixel buffer release callback function, which is called when a pixel buffer created by [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) is released.
