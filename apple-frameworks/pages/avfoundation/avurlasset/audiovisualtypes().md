> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/audiovisualtypes()](https://developer.apple.com/documentation/avfoundation/avurlasset/audiovisualtypes())

# audiovisualTypes() (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

Returns an array of the file types the asset supports.

> Use audiovisualContentTypes instead

## Declaration

```swift
class func audiovisualTypes() -> [AVFileType]
```

<a id="return-value"></a>

## Return Value

An array of supported file types.

## See Also

### Determining supported media types

- [audiovisualMIMETypes()](audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [isPlayableExtendedMIMEType(\_:)](isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.
- [audiovisualContentTypes](audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.

# audiovisualTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

Returns an array of the file types the asset supports.

> Use audiovisualContentTypes instead

## Declaration

```objectivec
+ (NSArray<NSString *> *) audiovisualTypes;
```

<a id="return-value"></a>

## Return Value

An array of supported file types.

## See Also

### Determining supported media types

- [audiovisualMIMETypes](audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [isPlayableExtendedMIMEType:](isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.
- [audiovisualContentTypes](audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.
