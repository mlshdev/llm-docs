> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcecopymetadataatindex(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcecopymetadataatindex(_:_:_:))

# CGImageSourceCopyMetadataAtIndex(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
func CGImageSourceCopyMetadataAtIndex(_ isrc: CGImageSource, _ index: Int, _ options: CFDictionary?) -> CGImageMetadata?
```

## See Also

### Functions

- [CGImageDestinationAddImageAndMetadata(\_:\_:\_:\_:)](cgimagedestinationaddimageandmetadata%28________%29.md)
- [CGImageDestinationCopyImageSource(\_:\_:\_:\_:)](cgimagedestinationcopyimagesource%28________%29.md)
- [CGImageSourceRemoveCacheAtIndex(\_:\_:)](cgimagesourceremovecacheatindex%28____%29.md)
- [CGImageSourceSetAllowableTypes(\_:)](cgimagesourcesetallowabletypes%28__%29.md): Restricts which image formats can be decoded in the current process.

# CGImageSourceCopyMetadataAtIndex (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern CGImageMetadataRefCGImageSourceCopyMetadataAtIndex(CGImageSourceRef isrc, size_t index, CFDictionaryRef options);
```

## See Also

### Functions

- [CGImageDestinationAddImageAndMetadata](cgimagedestinationaddimageandmetadata%28________%29.md)
- [CGImageDestinationCopyImageSource](cgimagedestinationcopyimagesource%28________%29.md)
- [CGImageSourceRemoveCacheAtIndex](cgimagesourceremovecacheatindex%28____%29.md)
- [CGImageSourceSetAllowableTypes](cgimagesourcesetallowabletypes%28__%29.md): Restricts which image formats can be decoded in the current process.
