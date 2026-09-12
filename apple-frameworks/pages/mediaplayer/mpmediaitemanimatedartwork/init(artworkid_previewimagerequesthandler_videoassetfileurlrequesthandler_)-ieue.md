> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemanimatedartwork/init(artworkid:previewimagerequesthandler:videoassetfileurlrequesthandler:)-ieue](https://developer.apple.com/documentation/mediaplayer/mpmediaitemanimatedartwork/init(artworkid:previewimagerequesthandler:videoassetfileurlrequesthandler:)-ieue)

# init(artworkID:previewImageRequestHandler:videoAssetFileURLRequestHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an animated artwork.

## Declaration

```swift
init(artworkID: String, previewImageRequestHandler: @escaping (CGSize, @escaping (UIImage?) -> Void) -> Void, videoAssetFileURLRequestHandler: @escaping (CGSize, @escaping (URL?) -> Void) -> Void)
```

```swift
init(artworkID: String, previewImageRequestHandler: @escaping (CGSize, @escaping (NSImage?) -> Void) -> Void, videoAssetFileURLRequestHandler: @escaping (CGSize, @escaping (URL?) -> Void) -> Void)
```

## Parameters

- `artworkID`: A unique identifier for this animated artwork. This identifier should encapsulate the identity of both the preview frame and video asset. If you change either, you should provide an [MPMediaItemAnimatedArtwork](../mpmediaitemanimatedartwork.md) with an updated `artworkID`.
- `previewImageRequestHandler`: A handler to return a preview image for this artwork, for the requested `CGSize` in pixels. Once requested, you should pass the preview image to the provided completion handler, or you can pass `nil` if the preview image cannot be resolved for any reason. You can call the completion handler on an arbitrary queue, however it must only be called once. The `NSImage` you provide should ideally have a size equal to the requested `CGSize`, however an image of the same aspect ratio is acceptable. Images that diverge significantly from the requested aspect ratio may be rejected by the system. Aim to provide preview images quickly and ideally synchronously, and if possible you should preload these images in order to reduce perceived latency when displaying animated artwork to the user.
- `videoAssetFileURLRequestHandler`: A handler to return a file `URL` for the artwork video asset for this artwork, for the requested `CGSize` in pixels. Once requested, you should pass the `URL` to the provided completion handler, or you can pass `nil` if the artwork video asset cannot be resolved for any reason. You can call the completion handler on an arbitrary queue, however it must only be called once. The `URL` you provide must reference a local asset, ideally with a size equal to the requested `CGSize`, however an asset with the same aspect ratio is acceptable. Assets that diverge significantly from the requested aspect ratio may be rejected by the system. The video assets you provide should loop cleanly, and should be available relatively quickly from this handler (particularly when re-fetched). It’s advised that assets are cached for subsequent fetches.

# initWithArtworkID:previewImageRequestHandler:videoAssetFileURLRequestHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an animated artwork.

## Declaration

```objectivec
- (instancetype) initWithArtworkID:(NSString *) artworkID previewImageRequestHandler:(void (^)(CGSize size, void (^completion)(UIImage *image))) previewImageRequestHandler videoAssetFileURLRequestHandler:(void (^)(CGSize size, void (^completion)(NSURL *url))) videoAssetFileURLRequestHandler;
```

```objectivec
- (instancetype) initWithArtworkID:(NSString *) artworkID previewImageRequestHandler:(void (^)(CGSize size, void (^completion)(NSImage *image))) previewImageRequestHandler videoAssetFileURLRequestHandler:(void (^)(CGSize size, void (^completion)(NSURL *url))) videoAssetFileURLRequestHandler;
```

## Parameters

- `artworkID`: A unique identifier for this animated artwork. This identifier should encapsulate the identity of both the preview frame and video asset. If you change either, you should provide an [MPMediaItemAnimatedArtwork](../mpmediaitemanimatedartwork.md) with an updated `artworkID`.
- `previewImageRequestHandler`: A handler to return a preview image for this artwork, for the requested `CGSize` in pixels. Once requested, you should pass the preview image to the provided completion handler, or you can pass `nil` if the preview image cannot be resolved for any reason. You can call the completion handler on an arbitrary queue, however it must only be called once. The `NSImage` you provide should ideally have a size equal to the requested `CGSize`, however an image of the same aspect ratio is acceptable. Images that diverge significantly from the requested aspect ratio may be rejected by the system. Aim to provide preview images quickly and ideally synchronously, and if possible you should preload these images in order to reduce perceived latency when displaying animated artwork to the user.
- `videoAssetFileURLRequestHandler`: A handler to return a file `URL` for the artwork video asset for this artwork, for the requested `CGSize` in pixels. Once requested, you should pass the `URL` to the provided completion handler, or you can pass `nil` if the artwork video asset cannot be resolved for any reason. You can call the completion handler on an arbitrary queue, however it must only be called once. The `URL` you provide must reference a local asset, ideally with a size equal to the requested `CGSize`, however an asset with the same aspect ratio is acceptable. Assets that diverge significantly from the requested aspect ratio may be rejected by the system. The video assets you provide should loop cleanly, and should be available relatively quickly from this handler (particularly when re-fetched). It’s advised that assets are cached for subsequent fetches.
