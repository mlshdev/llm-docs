> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/mediasubtypes](https://developer.apple.com/documentation/photos/phcontenteditinginput/mediasubtypes)

# mediaSubtypes (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The subtypes of the asset, identifying special kinds of assets such as a panoramic photo or a high-frame-rate video.

## Declaration

```swift
var mediaSubtypes: PHAssetMediaSubtype { get }
```

<a id="Discussion"></a>

## Discussion

See [PHAssetMediaSubtype](../phassetmediasubtype.md) for possible values.

Because an asset can have more than one subtype, use these values as bit masks to identify an asset. For example, the code below tests an asset for the panorama photo subtype.

**Swift**

```swift
if asset.mediaType == .image && ((asset.mediaSubtypes.rawValue & PHAssetMediaSubtype.photoHDR.rawValue) != 0) {
    // Display an HDR badge in the user interface.
}
```

**Objective-C**

```objc
if (contentEditingInput.mediaType == PHAssetMediaTypeImage
    && (contentEditingInput.mediaSubtypes & PHAssetMediaSubtypePhotoHDR)) {
    // Display an HDR badge in the user interface.
}
```

## See Also

### Getting Information About the Asset

- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [creationDate](creationdate.md): The date and time when the asset was originally created.
- [location](location.md): The location information that was saved with the asset.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset’s image or video data.

# mediaSubtypes (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The subtypes of the asset, identifying special kinds of assets such as a panoramic photo or a high-frame-rate video.

## Declaration

```objectivec
@property (assign, readonly) PHAssetMediaSubtype mediaSubtypes;
```

<a id="Discussion"></a>

## Discussion

See [PHAssetMediaSubtype](../phassetmediasubtype.md) for possible values.

Because an asset can have more than one subtype, use these values as bit masks to identify an asset. For example, the code below tests an asset for the panorama photo subtype.

**Swift**

```swift
if asset.mediaType == .image && ((asset.mediaSubtypes.rawValue & PHAssetMediaSubtype.photoHDR.rawValue) != 0) {
    // Display an HDR badge in the user interface.
}
```

**Objective-C**

```objc
if (contentEditingInput.mediaType == PHAssetMediaTypeImage
    && (contentEditingInput.mediaSubtypes & PHAssetMediaSubtypePhotoHDR)) {
    // Display an HDR badge in the user interface.
}
```

## See Also

### Getting Information About the Asset

- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [creationDate](creationdate.md): The date and time when the asset was originally created.
- [location](location.md): The location information that was saved with the asset.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset’s image or video data.
