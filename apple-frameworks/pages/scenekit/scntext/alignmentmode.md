> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/alignmentmode](https://developer.apple.com/documentation/scenekit/scntext/alignmentmode)

# alignmentMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constant that specifies how SceneKit horizontally aligns each line of text within its container.

## Declaration

```swift
var alignmentMode: String { get set }
```

<a id="Discussion"></a>

## Discussion

When you define a layout rectangle for the text using its [containerFrame](containerframe.md) property, SceneKit uses the [alignmentMode](alignmentmode.md) property to determine where each line of text is placed horizontally relative to the layout rectangle. For possible values, see [Horizontal alignment modes](../../quartzcore/horizontal-alignment-modes.md) in [CATextLayer](../../quartzcore/catextlayer.md).

The default value of this property is [natural](../../quartzcore/catextlayeralignmentmode/natural.md), specifying that text is aligned relative to the default alignment of its script. (For example, left-to-right languages are left-aligned.)

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [isWrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.

# alignmentMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies how SceneKit horizontally aligns each line of text within its container.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * alignmentMode;
```

<a id="Discussion"></a>

## Discussion

When you define a layout rectangle for the text using its [containerFrame](containerframe.md) property, SceneKit uses the [alignmentMode](alignmentmode.md) property to determine where each line of text is placed horizontally relative to the layout rectangle. For possible values, see [Horizontal alignment modes](../../quartzcore/horizontal-alignment-modes.md) in [CATextLayer](../../quartzcore/catextlayer.md).

The default value of this property is [kCAAlignmentNatural](../../quartzcore/catextlayeralignmentmode/natural.md), specifying that text is aligned relative to the default alignment of its script. (For example, left-to-right languages are left-aligned.)

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [wrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [truncationMode](truncationmode.md): A constant that specifies how SceneKit truncates text that is too long to fit its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.
