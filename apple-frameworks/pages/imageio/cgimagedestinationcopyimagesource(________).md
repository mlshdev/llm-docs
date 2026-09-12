> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagedestinationcopyimagesource(_:_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagedestinationcopyimagesource(_:_:_:_:))

# CGImageDestinationCopyImageSource(\_:\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
func CGImageDestinationCopyImageSource(_ idst: CGImageDestination, _ isrc: CGImageSource, _ options: CFDictionary?, _ err: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Bool
```

## See Also

### Functions

- [CGImageDestinationAddImageAndMetadata(\_:\_:\_:\_:)](cgimagedestinationaddimageandmetadata%28________%29.md)
- [CGImageSourceCopyMetadataAtIndex(\_:\_:\_:)](cgimagesourcecopymetadataatindex%28______%29.md)
- [CGImageSourceRemoveCacheAtIndex(\_:\_:)](cgimagesourceremovecacheatindex%28____%29.md)
- [CGImageSourceSetAllowableTypes(\_:)](cgimagesourcesetallowabletypes%28__%29.md): Restricts which image formats can be decoded in the current process.

# CGImageDestinationCopyImageSource (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern bool CGImageDestinationCopyImageSource(CGImageDestinationRef idst, CGImageSourceRef isrc, CFDictionaryRef options, CFErrorRef*err);
```

## See Also

### Functions

- [CGImageDestinationAddImageAndMetadata](cgimagedestinationaddimageandmetadata%28________%29.md)
- [CGImageSourceCopyMetadataAtIndex](cgimagesourcecopymetadataatindex%28______%29.md)
- [CGImageSourceRemoveCacheAtIndex](cgimagesourceremovecacheatindex%28____%29.md)
- [CGImageSourceSetAllowableTypes](cgimagesourcesetallowabletypes%28__%29.md): Restricts which image formats can be decoded in the current process.
