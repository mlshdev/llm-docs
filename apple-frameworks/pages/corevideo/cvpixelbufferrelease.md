> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferrelease](https://developer.apple.com/documentation/corevideo/cvpixelbufferrelease)

# CVPixelBufferRelease

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Releases a pixel buffer.

## Declaration

```objectivec
extern void CVPixelBufferRelease(CVPixelBufferRef texture);
```

## Parameters

- `texture`: The pixel buffer that you want to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to `CFRelease`, but is `NULL` safe.

## See Also

### Retaining and Releasing Pixel Buffers

- [CVPixelBufferRetain](cvpixelbufferretain.md): Retains a pixel buffer.
