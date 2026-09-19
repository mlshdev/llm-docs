> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelbufferretain

# CVPixelBufferRetain

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retains a pixel buffer.

## Declaration

```objectivec
extern CVPixelBufferRefCVPixelBufferRetain(CVPixelBufferRef texture);
```

## Parameters

- `texture`: The pixel buffer that you want to retain.

<a id="return-value"></a>

## Return Value

For convenience, the same pixel buffer you want to retain.

<a id="Discussion"></a>

## Discussion

This function is equivalent to `CFRetain`, but is `NULL` safe.

## See Also

### Retaining and Releasing Pixel Buffers

- [CVPixelBufferRelease](cvpixelbufferrelease.md): Releases a pixel buffer.
