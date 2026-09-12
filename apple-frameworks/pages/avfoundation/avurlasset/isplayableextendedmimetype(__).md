> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/isplayableextendedmimetype(_:)](https://developer.apple.com/documentation/avfoundation/avurlasset/isplayableextendedmimetype(_:))

# isPlayableExtendedMIMEType(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.

## Declaration

```swift
class func isPlayableExtendedMIMEType(_ extendedMIMEType: String) -> Bool
```

## Parameters

- `extendedMIMEType`: An extended MIME type string such as `video/3gpp2; codecs=“mp4v.20.9, mp4a.E1”` or `audio/aac; codecs=“mp4a.E1”`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the asset is playable with the specified codec and container type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining supported media types

- [audiovisualTypes()](audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [audiovisualMIMETypes()](audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [audiovisualContentTypes](audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.

# isPlayableExtendedMIMEType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the asset is playable with the specified codecs and container type.

## Declaration

```objectivec
+ (BOOL) isPlayableExtendedMIMEType:(NSString *) extendedMIMEType;
```

## Parameters

- `extendedMIMEType`: An extended MIME type string such as `video/3gpp2; codecs=“mp4v.20.9, mp4a.E1”` or `audio/aac; codecs=“mp4a.E1”`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the asset is playable with the specified codec and container type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining supported media types

- [audiovisualTypes](audiovisualtypes%28%29.md): Deprecated. Returns an array of the file types the asset supports.
- [audiovisualMIMETypes](audiovisualmimetypes%28%29.md): Returns an array of the MIME types the asset supports.
- [audiovisualContentTypes](audiovisualcontenttypes.md): Provides the content types the AVURLAsset class understands.
