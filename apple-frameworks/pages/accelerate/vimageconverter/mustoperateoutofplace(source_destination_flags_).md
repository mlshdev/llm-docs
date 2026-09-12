> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter/mustoperateoutofplace(source:destination:flags:)](https://developer.apple.com/documentation/accelerate/vimageconverter/mustoperateoutofplace(source:destination:flags:))

# mustOperateOutOfPlace(source:destination:flags:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Determines whether a converter is capable of operating in place.

## Declaration

```swift
func mustOperateOutOfPlace(source: vImage_Buffer, destination: vImage_Buffer, flags options: vImage.Options = .noFlags) throws -> Bool
```

## See Also

### Related Documentation

- [vImageConverter_MustOperateOutOfPlace(\_:\_:\_:\_:)](../vimageconverter_mustoperateoutofplace%28________%29.md): Determines whether a converter is capable of operating in place.

### Instance Methods

- [convert(source:destination:flags:)](convert%28source_destination_flags_%29.md): Converts the pixels in a vImage buffer to another format.
- [destinationBuffers(colorSpace:)](destinationbuffers%28colorspace_%29.md): Returns a list of vImage destination buffer types, specifying the order of planes.
- [sourceBuffers(colorSpace:)](sourcebuffers%28colorspace_%29.md): Returns a list of vImage source buffer types, specifying the order of planes.
- [convert(from:to:)](convert%28from_to_%29-9s7p7.md)
- [convert(from:to:)](convert%28from_to_%29-587gc.md)
- [makeCGToCVPixelBuffers(referencing:)](makecgtocvpixelbuffers%28referencing_%29.md)
- [makeCVToCGPixelBuffers(referencing:)](makecvtocgpixelbuffers%28referencing_%29.md)
