> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/audiovisualcontenttypes](https://developer.apple.com/documentation/avfoundation/avurlasset/audiovisualcontenttypes)

# audiovisualContentTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Provides the content types the AVURLAsset class understands.

## Declaration

```swift
class var audiovisualContentTypes: [UTType] { get }
```

<a id="return-value"></a>

## Return Value

An NSArray of UTTypes identifying the content types the AVURLAsset class understands.

## See Also

### Determining supported media types

- [audiovisualTypes()](audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [audiovisualMIMETypes()](audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [isPlayableExtendedMIMEType(\_:)](isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.

# audiovisualContentTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Provides the content types the AVURLAsset class understands.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<UTType *> * audiovisualContentTypes;
```

<a id="return-value"></a>

## Return Value

An NSArray of UTTypes identifying the content types the AVURLAsset class understands.

## See Also

### Determining supported media types

- [audiovisualTypes](audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [audiovisualMIMETypes](audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [isPlayableExtendedMIMEType:](isplayableextendedmimetype%28__%29.md): Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.
