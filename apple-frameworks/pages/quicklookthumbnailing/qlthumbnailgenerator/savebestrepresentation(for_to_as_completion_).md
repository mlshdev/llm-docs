> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/savebestrepresentation(for:to:as:completion:)](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/savebestrepresentation(for:to:as:completion:))

# saveBestRepresentation(for:to:as:completion:) (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Saves a thumbnail for the request on disk at fileURL. The file saved at fileURL has to be deleted when it is not used anymore. This is primarily intended for file provider extensions which need to upload thumbnails and have a small memory limit.

## Declaration

```swift
func saveBestRepresentation(for request: QLThumbnailGenerator.Request, to fileURL: URL, as contentType: UTType, completion completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func saveBestRepresentation(for request: QLThumbnailGenerator.Request, to fileURL: URL, as contentType: UTType) async throws
```

## Parameters

- `contentType`: An image content type to save the thumbnail as, supported by CGImageDestination, such as UTTypePNG or UTTypeJPEG
- `completionHandler`: Always called when the thumbnail generation is over. Will contain an error if the thumbnail could not be successfully saved to disk at fileURL.

# saveBestRepresentationForRequest:toFileAtURL:asContentType:completionHandler: (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Saves a thumbnail for the request on disk at fileURL. The file saved at fileURL has to be deleted when it is not used anymore. This is primarily intended for file provider extensions which need to upload thumbnails and have a small memory limit.

## Declaration

```objectivec
- (void) saveBestRepresentationForRequest:(QLThumbnailGenerationRequest *) request toFileAtURL:(NSURL *) fileURL asContentType:(UTType *) contentType completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `contentType`: An image content type to save the thumbnail as, supported by CGImageDestination, such as UTTypePNG or UTTypeJPEG
- `completionHandler`: Always called when the thumbnail generation is over. Will contain an error if the thumbnail could not be successfully saved to disk at fileURL.
