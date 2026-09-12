> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phsharedalbumcustomizationviewcontroller/init(albumidentifier:photolibrary:)](https://developer.apple.com/documentation/photosui/phsharedalbumcustomizationviewcontroller/init(albumidentifier:photolibrary:))

# init(albumIdentifier:photoLibrary:) (Swift)

**Framework:** PhotosUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
init(albumIdentifier: String, photoLibrary: PHPhotoLibrary)
```

## Parameters

- `albumIdentifier`: The identifier of the shared album to be customized.
- `photoLibrary`: The photo library in which the specified shared album exists.

<a id="discussion"></a>

## Discussion

Returns a view controller that allows the user to customize a specified shared album.

Only the system photo library is supported, so `albumIdentifier` must be for an album in the system photo library. If `albumIdentifier` is from a different library, showing a customization sheet will fail.

# initWithAlbumIdentifier:photoLibrary: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithAlbumIdentifier:(NSString *) albumIdentifier photoLibrary:(PHPhotoLibrary *) photoLibrary;
```

## Parameters

- `albumIdentifier`: The identifier of the shared album to be customized.
- `photoLibrary`: The photo library in which the specified shared album exists.

<a id="discussion"></a>

## Discussion

Returns a view controller that allows the user to customize a specified shared album.

Only the system photo library is supported, so `albumIdentifier` must be for an album in the system photo library. If `albumIdentifier` is from a different library, showing a customization sheet will fail.
