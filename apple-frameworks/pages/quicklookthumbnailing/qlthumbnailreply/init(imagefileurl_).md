> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailreply/init(imagefileurl:)](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailreply/init(imagefileurl:))

# init(imageFileURL:) (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a new thumbnail for a custom file type using a file at the given URL.

## Declaration

```swift
convenience init(imageFileURL fileURL: URL)
```

## Parameters

- `fileURL`: The URL to the file that is used as the thumbnail.

<a id="return-value"></a>

## Return Value

An initialized reply object for a requested thumbnail.

<a id="Discussion"></a>

## Discussion

The image is scaled down to fit the provided size by the [QLFileThumbnailRequest](../qlfilethumbnailrequest.md) if necessary.

## See Also

### Creating a Thumbnail

- [init(contextSize:currentContextDrawing:)](init%28contextsize_currentcontextdrawing_%29.md): Creates a new thumbnail for a custom file type in the current context.
- [init(contextSize:drawing:)](init%28contextsize_drawing_%29.md): Creates a new thumbnail for a custom file type in the given context.

# replyWithImageFileURL: (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a new thumbnail for a custom file type using a file at the given URL.

## Declaration

```objectivec
+ (instancetype) replyWithImageFileURL:(NSURL *) fileURL;
```

## Parameters

- `fileURL`: The URL to the file that is used as the thumbnail.

<a id="return-value"></a>

## Return Value

An initialized reply object for a requested thumbnail.

<a id="Discussion"></a>

## Discussion

The image is scaled down to fit the provided size by the [QLFileThumbnailRequest](../qlfilethumbnailrequest.md) if necessary.

## See Also

### Creating a Thumbnail

- [replyWithContextSize:currentContextDrawingBlock:](init%28contextsize_currentcontextdrawing_%29.md): Creates a new thumbnail for a custom file type in the current context.
- [replyWithContextSize:drawingBlock:](init%28contextsize_drawing_%29.md): Creates a new thumbnail for a custom file type in the given context.
