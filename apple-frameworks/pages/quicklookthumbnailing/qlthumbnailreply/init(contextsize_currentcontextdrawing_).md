> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailreply/init(contextsize:currentcontextdrawing:)](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailreply/init(contextsize:currentcontextdrawing:))

# init(contextSize:currentContextDrawing:) (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a new thumbnail for a custom file type in the current context.

## Declaration

```swift
convenience init(contextSize: CGSize, currentContextDrawing drawingBlock: @escaping () -> Bool)
```

## Parameters

- `contextSize`: The desired size of the context that you pass to the drawing block. Set this value as close as possible to the [QLFileThumbnailRequest](../qlfilethumbnailrequest.md) class’s [maximumSize](../qlfilethumbnailrequest/maximumsize.md) value and greater than or equal to its [minimumSize](../qlfilethumbnailrequest/minimumsize.md) value.

  This parameter indicates the preferred size of the thumbnail. The context’s width or its height matches the `width` or `height` of the [maximumSize](../qlfilethumbnailrequest/maximumsize.md), or, ideally, both.

  The system scales the context size to the [QLFileThumbnailRequest](../qlfilethumbnailrequest.md) class’s [scale](../qlfilethumbnailrequest/scale.md) property. For example, if you pass a `contextSize` of `CGSize(10, 10)` to this method, the size of the context is `(scale * 10, scale * 10)`.
- `drawingBlock`: A block that draws the thumbnail into the current bitmap [CGContext](../../coregraphics/cgcontext.md) that’s accessible using [UIGraphicsGetCurrentContext()](../../uikit/uigraphicsgetcurrentcontext%28%29.md) or, if you’re developing for macOS, `NSGraphicsContext.current`. Use the context with the coordinate system of [UIKit](../../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit).

  Return [true](https://developer.apple.com/documentation/swift/true) if you successfully drew the thumbnail into the context. Return [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

An initialized reply object for a requested thumbnail.

<a id="Discussion"></a>

## Discussion

Use this initializer if you’re drawing the thumbnail using [UIKit](../../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit). If you’re using CoreGraphics to draw the thumbnail, use [init(contextSize:drawing:)](init%28contextsize_drawing_%29.md). The context that this initializer provides uses the coordinate system of [UIKit](../../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit), depending on the platform.

## See Also

### Creating a Thumbnail

- [init(contextSize:drawing:)](init%28contextsize_drawing_%29.md): Creates a new thumbnail for a custom file type in the given context.
- [init(imageFileURL:)](init%28imagefileurl_%29.md): Creates a new thumbnail for a custom file type using a file at the given URL.

# replyWithContextSize:currentContextDrawingBlock: (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a new thumbnail for a custom file type in the current context.

## Declaration

```objectivec
+ (instancetype) replyWithContextSize:(CGSize) contextSize currentContextDrawingBlock:(BOOL (^)()) drawingBlock;
```

## Parameters

- `contextSize`: The desired size of the context that you pass to the drawing block. Set this value as close as possible to the [QLFileThumbnailRequest](../qlfilethumbnailrequest.md) class’s [maximumSize](../qlfilethumbnailrequest/maximumsize.md) value and greater than or equal to its [minimumSize](../qlfilethumbnailrequest/minimumsize.md) value.

  This parameter indicates the preferred size of the thumbnail. The context’s width or its height matches the `width` or `height` of the [maximumSize](../qlfilethumbnailrequest/maximumsize.md), or, ideally, both.

  The system scales the context size to the [QLFileThumbnailRequest](../qlfilethumbnailrequest.md) class’s [scale](../qlfilethumbnailrequest/scale.md) property. For example, if you pass a `contextSize` of `CGSize(10, 10)` to this method, the size of the context is `(scale * 10, scale * 10)`.
- `drawingBlock`: A block that draws the thumbnail into the current bitmap [CGContextRef](../../coregraphics/cgcontext.md) that’s accessible using [UIGraphicsGetCurrentContext](../../uikit/uigraphicsgetcurrentcontext%28%29.md) or, if you’re developing for macOS, `NSGraphicsContext.current`. Use the context with the coordinate system of [UIKit](../../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit).

  Return [true](https://developer.apple.com/documentation/swift/true) if you successfully drew the thumbnail into the context. Return [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

An initialized reply object for a requested thumbnail.

<a id="Discussion"></a>

## Discussion

Use this initializer if you’re drawing the thumbnail using [UIKit](../../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit). If you’re using CoreGraphics to draw the thumbnail, use [replyWithContextSize:drawingBlock:](init%28contextsize_drawing_%29.md). The context that this initializer provides uses the coordinate system of [UIKit](../../uikit.md) or [AppKit](https://developer.apple.com/documentation/appkit), depending on the platform.

## See Also

### Creating a Thumbnail

- [replyWithContextSize:drawingBlock:](init%28contextsize_drawing_%29.md): Creates a new thumbnail for a custom file type in the given context.
- [replyWithImageFileURL:](init%28imagefileurl_%29.md): Creates a new thumbnail for a custom file type using a file at the given URL.
