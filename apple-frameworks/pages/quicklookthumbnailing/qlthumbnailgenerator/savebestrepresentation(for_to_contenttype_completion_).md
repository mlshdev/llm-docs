> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/savebestrepresentation(for:to:contenttype:completion:)](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/savebestrepresentation(for:to:contenttype:completion:))

# saveBestRepresentation(for:to:contentType:completion:) (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Saves the best representation of thumbnail for a specific request to the specified URL.

## Declaration

```swift
func saveBestRepresentation(for request: QLThumbnailGenerator.Request, to fileURL: URL, contentType: String, completion completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func saveBestRepresentation(for request: QLThumbnailGenerator.Request, to fileURL: URL, contentType: String) async throws
```

## Parameters

- `request`: The request that you used to generate a thumbnail.
- `fileURL`: The destination to which you save the generated thumbnail.
- `contentType`: The content type of the thumbnail image that you want to save. Use a type that is supported by [CGImageDestination](../../imageio/cgimagedestination.md), such as `kUTTypePNG` or `kUTTypeJPEG`.
- `completionHandler`: The handler to call when saving the thumbnail to disk.

  - **`error`**: An error object that indicates why saving a thumbnail image failed, or `nil` if saving the thumbnail succeeded.

## Mentioned In

- [Creating Quick Look Thumbnails to Preview Files in Your App](../creating-quick-look-thumbnails-to-preview-files-in-your-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func saveBestRepresentation(for request: QLThumbnailGenerator.Request, to fileURL: URL, contentType: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Creating high-quality thumbnails often involves compressing a [CGImage](../../coregraphics/cgimage.md) as a `PNG` or `JPEG` file in-process. This task requires more resources than are available in resource-constrained environments such as File Provider Extensions.

Use this method to create and save the thumbnail image outside of your process as it doesn’t impose the same constraints on memory usage.

# saveBestRepresentationForRequest:toFileAtURL:withContentType:completionHandler: (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Saves the best representation of thumbnail for a specific request to the specified URL.

## Declaration

```objectivec
- (void) saveBestRepresentationForRequest:(QLThumbnailGenerationRequest *) request toFileAtURL:(NSURL *) fileURL withContentType:(NSString *) contentType completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `request`: The request that you used to generate a thumbnail.
- `fileURL`: The destination to which you save the generated thumbnail.
- `contentType`: The content type of the thumbnail image that you want to save. Use a type that is supported by [CGImageDestinationRef](../../imageio/cgimagedestination.md), such as `kUTTypePNG` or `kUTTypeJPEG`.
- `completionHandler`: The handler to call when saving the thumbnail to disk.

  - **`error`**: An error object that indicates why saving a thumbnail image failed, or `nil` if saving the thumbnail succeeded.

## Mentioned In

- [Creating Quick Look Thumbnails to Preview Files in Your App](../creating-quick-look-thumbnails-to-preview-files-in-your-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func saveBestRepresentation(for request: QLThumbnailGenerator.Request, to fileURL: URL, contentType: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Creating high-quality thumbnails often involves compressing a [CGImageRef](../../coregraphics/cgimage.md) as a `PNG` or `JPEG` file in-process. This task requires more resources than are available in resource-constrained environments such as File Provider Extensions.

Use this method to create and save the thumbnail image outside of your process as it doesn’t impose the same constraints on memory usage.
