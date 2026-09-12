> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolrelease](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolrelease)

# CVPixelBufferPoolRelease

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Releases a pixel buffer pool.

## Declaration

```objectivec
extern void CVPixelBufferPoolRelease(CVPixelBufferPoolRef pixelBufferPool);
```

## Parameters

- `pixelBufferPool`: The pixel buffer pool that you want to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except it’s `NULL` safe.

## See Also

### Retaining and releasing pools

- [CVPixelBufferPoolRetain](cvpixelbufferpoolretain.md): Retains the pixel buffer pool that you specify.
