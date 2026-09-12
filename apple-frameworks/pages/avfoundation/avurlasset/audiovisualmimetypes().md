> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/audiovisualmimetypes()](https://developer.apple.com/documentation/avfoundation/avurlasset/audiovisualmimetypes())

# audiovisualMIMETypes() (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of the MIME types the asset supports.

## Declaration

```swift
class func audiovisualMIMETypes() -> [String]
```

<a id="return-value"></a>

## Return Value

An array of MIME type strings.

## See Also

### Determining supported media types

- [audiovisualTypes()](audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [isPlayableExtendedMIMEType(\_:)](isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.
- [audiovisualContentTypes](audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.

# audiovisualMIMETypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of the MIME types the asset supports.

## Declaration

```objectivec
+ (NSArray<NSString *> *) audiovisualMIMETypes;
```

<a id="return-value"></a>

## Return Value

An array of MIME type strings.

## See Also

### Determining supported media types

- [audiovisualTypes](audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [isPlayableExtendedMIMEType:](isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.
- [audiovisualContentTypes](audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.
