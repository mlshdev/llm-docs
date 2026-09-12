> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolretain](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolretain)

# CVPixelBufferPoolRetain

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retains the pixel buffer pool that you specify.

## Declaration

```objectivec
extern CVPixelBufferPoolRefCVPixelBufferPoolRetain(CVPixelBufferPoolRef pixelBufferPool);
```

## Parameters

- `pixelBufferPool`: The pixel buffer pool that you want to retain.

<a id="return-value"></a>

## Return Value

The same pixel buffer pool that you specified.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except it’s `NULL` safe.

## See Also

### Retaining and releasing pools

- [CVPixelBufferPoolRelease](cvpixelbufferpoolrelease.md): Releases a pixel buffer pool.
