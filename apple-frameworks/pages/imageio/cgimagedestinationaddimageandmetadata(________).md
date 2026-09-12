> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationaddimageandmetadata(_:_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagedestinationaddimageandmetadata(_:_:_:_:))

# CGImageDestinationAddImageAndMetadata(\_:\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
func CGImageDestinationAddImageAndMetadata(_ idst: CGImageDestination, _ image: CGImage, _ metadata: CGImageMetadata?, _ options: CFDictionary?)
```

## See Also

### Functions

- [CGImageDestinationCopyImageSource(\_:\_:\_:\_:)](cgimagedestinationcopyimagesource%28________%29.md)
- [CGImageSourceCopyMetadataAtIndex(\_:\_:\_:)](cgimagesourcecopymetadataatindex%28______%29.md)
- [CGImageSourceRemoveCacheAtIndex(\_:\_:)](cgimagesourceremovecacheatindex%28____%29.md)
- [CGImageSourceSetAllowableTypes(\_:)](cgimagesourcesetallowabletypes%28__%29.md): Restricts which image formats can be decoded in the current process.

# CGImageDestinationAddImageAndMetadata (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern void CGImageDestinationAddImageAndMetadata(CGImageDestinationRef idst, CGImageRef image, CGImageMetadataRef metadata, CFDictionaryRef options);
```

## See Also

### Functions

- [CGImageDestinationCopyImageSource](cgimagedestinationcopyimagesource%28________%29.md)
- [CGImageSourceCopyMetadataAtIndex](cgimagesourcecopymetadataatindex%28______%29.md)
- [CGImageSourceRemoveCacheAtIndex](cgimagesourceremovecacheatindex%28____%29.md)
- [CGImageSourceSetAllowableTypes](cgimagesourcesetallowabletypes%28__%29.md): Restricts which image formats can be decoded in the current process.
