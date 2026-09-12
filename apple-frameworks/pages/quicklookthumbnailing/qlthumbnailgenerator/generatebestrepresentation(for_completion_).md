> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/generatebestrepresentation(for:completion:)](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/generatebestrepresentation(for:completion:))

# generateBestRepresentation(for:completion:) (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Generates the best possible thumbnail representation for a file and calls a handler upon completion.

## Declaration

```swift
func generateBestRepresentation(for request: QLThumbnailGenerator.Request, completion completionHandler: @escaping @Sendable (QLThumbnailRepresentation?, (any Error)?) -> Void)
```

```swift
func generateBestRepresentation(for request: QLThumbnailGenerator.Request) async throws -> QLThumbnailRepresentation
```

## Parameters

- `request`: The request that contains information about the thumbnail that you want to create.
- `completionHandler`: The completion handler to call when the thumbnail generation completes. It is always called when `QLThumbnailGenerator` finishes the generation of a requested thumbnail.

  The completion handler takes the following parameters:

  - **`thumbnail`**: The most representative version of the requested thumbnail or `nil` if `QLThumbnailGenerator` was unable to generate a thumbnail.
  - **`error`**: An error object that indicates why the thumbnail generation failed, or `nil` if the thumbnail generation succeeded.

## Mentioned In

- [Creating Quick Look Thumbnails to Preview Files in Your App](../creating-quick-look-thumbnails-to-preview-files-in-your-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func generateBestRepresentation(for request: QLThumbnailGenerator.Request) async throws -> QLThumbnailRepresentation
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Generating a Thumbnail

- [generateRepresentations(for:update:)](generaterepresentations%28for_update_%29.md): Generates various thumbnail representations for a file and calls the update handler for each thumbnail representation.
- [QLThumbnailGenerator.Request](request.md): A request to generate a thumbnail for a file.

# generateBestRepresentationForRequest:completionHandler: (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Generates the best possible thumbnail representation for a file and calls a handler upon completion.

## Declaration

```objectivec
- (void) generateBestRepresentationForRequest:(QLThumbnailGenerationRequest *) request completionHandler:(void (^)(QLThumbnailRepresentation *thumbnail, NSError *error)) completionHandler;
```

## Parameters

- `request`: The request that contains information about the thumbnail that you want to create.
- `completionHandler`: The completion handler to call when the thumbnail generation completes. It is always called when `QLThumbnailGenerator` finishes the generation of a requested thumbnail.

  The completion handler takes the following parameters:

  - **`thumbnail`**: The most representative version of the requested thumbnail or `nil` if `QLThumbnailGenerator` was unable to generate a thumbnail.
  - **`error`**: An error object that indicates why the thumbnail generation failed, or `nil` if the thumbnail generation succeeded.

## Mentioned In

- [Creating Quick Look Thumbnails to Preview Files in Your App](../creating-quick-look-thumbnails-to-preview-files-in-your-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func generateBestRepresentation(for request: QLThumbnailGenerator.Request) async throws -> QLThumbnailRepresentation
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Generating a Thumbnail

- [generateRepresentationsForRequest:updateHandler:](generaterepresentations%28for_update_%29.md): Generates various thumbnail representations for a file and calls the update handler for each thumbnail representation.
- [QLThumbnailGenerationRequest](request.md): A request to generate a thumbnail for a file.
