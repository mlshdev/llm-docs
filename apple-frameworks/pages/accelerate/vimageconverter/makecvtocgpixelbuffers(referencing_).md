> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter/makecvtocgpixelbuffers(referencing:)](https://developer.apple.com/documentation/accelerate/vimageconverter/makecvtocgpixelbuffers(referencing:))

# makeCVToCGPixelBuffers(referencing:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
func makeCVToCGPixelBuffers(referencing lockedCVPixelBuffer: CVPixelBuffer) throws -> [vImage.PixelBuffer<vImage.DynamicPixelFormat>]
```

## See Also

### Instance Methods

- [convert(source:destination:flags:)](convert%28source_destination_flags_%29.md): Converts the pixels in a vImage buffer to another format.
- [mustOperateOutOfPlace(source:destination:flags:)](mustoperateoutofplace%28source_destination_flags_%29.md): Determines whether a converter is capable of operating in place.
- [destinationBuffers(colorSpace:)](destinationbuffers%28colorspace_%29.md): Returns a list of vImage destination buffer types, specifying the order of planes.
- [sourceBuffers(colorSpace:)](sourcebuffers%28colorspace_%29.md): Returns a list of vImage source buffer types, specifying the order of planes.
- [convert(from:to:)](convert%28from_to_%29-9s7p7.md)
- [convert(from:to:)](convert%28from_to_%29-587gc.md)
- [makeCGToCVPixelBuffers(referencing:)](makecgtocvpixelbuffers%28referencing_%29.md)
