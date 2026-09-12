> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/containerframe](https://developer.apple.com/documentation/scenekit/scntext/containerframe)

# containerFrame (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A rectangle specifying the area in which SceneKit should lay out the text.

## Declaration

```swift
var containerFrame: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit can lay out a body of text to fit within a rectangular area. To do this, you must first use this property to define the area for text layout as a rectangle in the x- and y-axis dimensions of the text object’s local coordinate system. Then you use the [isWrapped](iswrapped.md), [alignmentMode](alignmentmode.md), and [truncationMode](truncationmode.md) properties to control how SceneKit fits the text into the container frame. Text layout begins in the upper left corner of the rectangle.

The default value of this property is [CGRectZero](../../coregraphics/cgrectzero.md), specifying that SceneKit should lay out the text on one line without wrapping or truncation.

Depending on the content and style of the text and the values of the [isWrapped](iswrapped.md), [alignmentMode](alignmentmode.md), and [truncationMode](truncationmode.md) properties, the text may not fit within the container frame after layout, or it may occupy a smaller area.

## See Also

### Managing Text Layout

- [isWrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.

# containerFrame (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A rectangle specifying the area in which SceneKit should lay out the text.

## Declaration

```objectivec
@property (nonatomic) CGRect containerFrame;
```

<a id="Discussion"></a>

## Discussion

SceneKit can lay out a body of text to fit within a rectangular area. To do this, you must first use this property to define the area for text layout as a rectangle in the x- and y-axis dimensions of the text object’s local coordinate system. Then you use the [wrapped](iswrapped.md), [alignmentMode](alignmentmode.md), and [truncationMode](truncationmode.md) properties to control how SceneKit fits the text into the container frame. Text layout begins in the upper left corner of the rectangle.

The default value of this property is [CGRectZero](../../coregraphics/cgrectzero.md), specifying that SceneKit should lay out the text on one line without wrapping or truncation.

Depending on the content and style of the text and the values of the [wrapped](iswrapped.md), [alignmentMode](alignmentmode.md), and [truncationMode](truncationmode.md) properties, the text may not fit within the container frame after layout, or it may occupy a smaller area.

## See Also

### Managing Text Layout

- [wrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.
