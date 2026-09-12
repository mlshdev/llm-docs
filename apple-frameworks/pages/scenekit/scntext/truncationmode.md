> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/truncationmode](https://developer.apple.com/documentation/scenekit/scntext/truncationmode)

# truncationMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constant that specifies how SceneKit truncates text that is too long to fit its container.

## Declaration

```swift
var truncationMode: String { get set }
```

<a id="Discussion"></a>

## Discussion

When you define a layout rectangle for the text using its [containerFrame](containerframe.md) property, SceneKit uses the [truncationMode](truncationmode.md) property to determine how to lay out text that does not fit in the layout rectangle. For possible values, see Truncation_modes in [CATextLayer](../../quartzcore/catextlayer.md).

The default value of this property is [none](../../quartzcore/catextlayertruncationmode/none.md), specifying that SceneKit should not truncate the text. If the [isWrapped](iswrapped.md) property is [true](https://developer.apple.com/documentation/swift/true), SceneKit continues to automatically wrap each line of text beyond the height of the layout rectangle. Otherwise, SceneKit does not display text that would extend beyond the layout rectangle.

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [isWrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.

# truncationMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies how SceneKit truncates text that is too long to fit its container.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * truncationMode;
```

<a id="Discussion"></a>

## Discussion

When you define a layout rectangle for the text using its [containerFrame](containerframe.md) property, SceneKit uses the [truncationMode](truncationmode.md) property to determine how to lay out text that does not fit in the layout rectangle. For possible values, see Truncation_modes in [CATextLayer](../../quartzcore/catextlayer.md).

The default value of this property is [kCATruncationNone](../../quartzcore/catextlayertruncationmode/none.md), specifying that SceneKit should not truncate the text. If the [wrapped](iswrapped.md) property is [true](https://developer.apple.com/documentation/swift/true), SceneKit continues to automatically wrap each line of text beyond the height of the layout rectangle. Otherwise, SceneKit does not display text that would extend beyond the layout rectangle.

## See Also

### Managing Text Layout

- [containerFrame](containerframe.md): A rectangle specifying the area in which SceneKit should lay out the text.
- [wrapped](iswrapped.md): A Boolean value that specifies whether SceneKit wraps long lines of text.
- [alignmentMode](alignmentmode.md): A constant that specifies how SceneKit horizontally aligns each line of text within its container.
- [textSize](textsize.md): The two-dimensional extent of the text after layout.
