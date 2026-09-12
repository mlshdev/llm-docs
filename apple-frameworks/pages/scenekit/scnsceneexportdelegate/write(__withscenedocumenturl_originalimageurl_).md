> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnsceneexportdelegate/write(_:withscenedocumenturl:originalimageurl:)](https://developer.apple.com/documentation/scenekit/scnsceneexportdelegate/write(_:withscenedocumenturl:originalimageurl:))

# write(\_:withSceneDocumentURL:originalImageURL:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells the delegate to export an image attached to a scene.

## Declaration

```swift
optional func write(_ image: UIImage, withSceneDocumentURL documentURL: URL, originalImageURL: URL?) -> URL?
```

```swift
optional func write(_ image: NSImage, withSceneDocumentURL documentURL: URL, originalImageURL: URL?) -> URL?
```

## Parameters

- `image`: An image attached to the scene being exported.
- `documentURL`: The URL the scene is being exported to.
- `originalImageURL`: The URL the image was originally loaded from, or `nil` if the image was not previously loaded from a URL.

<a id="return-value"></a>

## Return Value

The URL your app exported the image to, or `nil` if your app did not write the image to a URL.

<a id="Discussion"></a>

## Discussion

If you implement this method, Scene Kit calls it for each image (for example, a texture) attached to the scene. Your app can then save the image data in a location and format of your choice, returning a URL for the exported image file.

If you do not provide a delegate when exporting a scene, or if your delegate returns `nil` from this method, Scene Kit exports the image in a default format to a default location.

# writeImage:withSceneDocumentURL:originalImageURL: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to export an image attached to a scene.

## Declaration

```objectivec
- (NSURL *) writeImage:(UIImage *) image withSceneDocumentURL:(NSURL *) documentURL originalImageURL:(NSURL *) originalImageURL;
```

```objectivec
- (NSURL *) writeImage:(NSImage *) image withSceneDocumentURL:(NSURL *) documentURL originalImageURL:(NSURL *) originalImageURL;
```

## Parameters

- `image`: An image attached to the scene being exported.
- `documentURL`: The URL the scene is being exported to.
- `originalImageURL`: The URL the image was originally loaded from, or `nil` if the image was not previously loaded from a URL.

<a id="return-value"></a>

## Return Value

The URL your app exported the image to, or `nil` if your app did not write the image to a URL.

<a id="Discussion"></a>

## Discussion

If you implement this method, Scene Kit calls it for each image (for example, a texture) attached to the scene. Your app can then save the image data in a location and format of your choice, returning a URL for the exported image file.

If you do not provide a delegate when exporting a scene, or if your delegate returns `nil` from this method, Scene Kit exports the image in a default format to a default location.
