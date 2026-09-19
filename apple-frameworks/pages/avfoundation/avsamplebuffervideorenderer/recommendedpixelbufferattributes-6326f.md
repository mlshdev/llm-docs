> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/recommendedpixelbufferattributes-6326f

# recommendedPixelBufferAttributes

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Recommended pixel buffer attributes for optimal performance when using CMSampleBuffers containing CVPixelBuffers.

## Declaration

```objectivec
@property (readonly, nonnull) NSDictionary<NSString *,id> * recommendedPixelBufferAttributes;
```

<a id="discussion"></a>

## Discussion

The returned dictionary does not contain all of the attributes needed for creating pixel buffers. Use `CVPixelBufferCreateResolvedAttributesDictionary()` to reconcile these attributes with the pixel buffer creation attributes.

## See Also

### Accessing the pixel buffer

- [copyDisplayedPixelBuffer](displayedpixelbuffer%28%29.md)
