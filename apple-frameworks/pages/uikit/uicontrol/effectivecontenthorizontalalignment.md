> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/effectivecontenthorizontalalignment](https://developer.apple.com/documentation/uikit/uicontrol/effectivecontenthorizontalalignment)

# effectiveContentHorizontalAlignment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The horizontal alignment currently in effect for the control.

## Declaration

```swift
var effectiveContentHorizontalAlignment: UIControl.ContentHorizontalAlignment { get }
```

<a id="Discussion"></a>

## Discussion

This property always contains the value [UIControl.ContentHorizontalAlignment.left](contenthorizontalalignment-swift.enum/left.md) or [UIControl.ContentHorizontalAlignment.right](contenthorizontalalignment-swift.enum/right.md), even when the actual horizontal alignment is [UIControl.ContentHorizontalAlignment.leading](contenthorizontalalignment-swift.enum/leading.md) or [UIControl.ContentHorizontalAlignment.trailing](contenthorizontalalignment-swift.enum/trailing.md).

## See Also

### Specifying content alignment

- [contentVerticalAlignment](contentverticalalignment-swift.property.md): The vertical alignment of content within the control’s bounds.
- [UIControl.ContentVerticalAlignment](contentverticalalignment-swift.enum.md): Constants for specifying the vertical alignment of content (text and images) in a control.
- [contentHorizontalAlignment](contenthorizontalalignment-swift.property.md): The horizontal alignment of content within the control’s bounds.
- [UIControl.ContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.

# effectiveContentHorizontalAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The horizontal alignment currently in effect for the control.

## Declaration

```objectivec
@property (nonatomic, readonly) UIControlContentHorizontalAlignment effectiveContentHorizontalAlignment;
```

<a id="Discussion"></a>

## Discussion

This property always contains the value [UIControlContentHorizontalAlignmentLeft](contenthorizontalalignment-swift.enum/left.md) or [UIControlContentHorizontalAlignmentRight](contenthorizontalalignment-swift.enum/right.md), even when the actual horizontal alignment is [UIControlContentHorizontalAlignmentLeading](contenthorizontalalignment-swift.enum/leading.md) or [UIControlContentHorizontalAlignmentTrailing](contenthorizontalalignment-swift.enum/trailing.md).

## See Also

### Specifying content alignment

- [contentVerticalAlignment](contentverticalalignment-swift.property.md): The vertical alignment of content within the control’s bounds.
- [UIControlContentVerticalAlignment](contentverticalalignment-swift.enum.md): Constants for specifying the vertical alignment of content (text and images) in a control.
- [contentHorizontalAlignment](contenthorizontalalignment-swift.property.md): The horizontal alignment of content within the control’s bounds.
- [UIControlContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.
