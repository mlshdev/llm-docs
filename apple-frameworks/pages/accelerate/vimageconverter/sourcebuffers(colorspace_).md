> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter/sourcebuffers(colorspace:)](https://developer.apple.com/documentation/accelerate/vimageconverter/sourcebuffers(colorspace:))

# sourceBuffers(colorSpace:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns a list of vImage source buffer types, specifying the order of planes.

## Declaration

```swift
func sourceBuffers(colorSpace: CGColorSpace) -> [vImage.BufferType?]
```

## See Also

### Related Documentation

- [vImageConverter_GetSourceBufferOrder(\_:)](../vimageconverter_getsourcebufferorder%28__%29.md): Returns a list of vImage source buffer channel names, specifying the order of planes.

### Instance Methods

- [convert(source:destination:flags:)](convert%28source_destination_flags_%29.md): Converts the pixels in a vImage buffer to another format.
- [mustOperateOutOfPlace(source:destination:flags:)](mustoperateoutofplace%28source_destination_flags_%29.md): Determines whether a converter is capable of operating in place.
- [destinationBuffers(colorSpace:)](destinationbuffers%28colorspace_%29.md): Returns a list of vImage destination buffer types, specifying the order of planes.
- [convert(from:to:)](convert%28from_to_%29-9s7p7.md)
- [convert(from:to:)](convert%28from_to_%29-587gc.md)
- [makeCGToCVPixelBuffers(referencing:)](makecgtocvpixelbuffers%28referencing_%29.md)
- [makeCVToCGPixelBuffers(referencing:)](makecvtocgpixelbuffers%28referencing_%29.md)
