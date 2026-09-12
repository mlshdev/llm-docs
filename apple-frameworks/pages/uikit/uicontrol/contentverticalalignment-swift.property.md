> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/contentverticalalignment-swift.property](https://developer.apple.com/documentation/uikit/uicontrol/contentverticalalignment-swift.property)

# contentVerticalAlignment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The vertical alignment of content within the control’s bounds.

## Declaration

```swift
var contentVerticalAlignment: UIControl.ContentVerticalAlignment { get set }
```

## Parameters

- `contentAlignment`: A constant that specifies the vertical alignment of text or images within the control. For a list of possible values, see [UIControl.ContentVerticalAlignment](contentverticalalignment-swift.enum.md).

<a id="Discussion"></a>

## Discussion

For controls that contain configurable text or image content, use this property to align that content appropriately inside the control’s bounds. Not all control subclasses have content that can be aligned, and it’s the responsibility of the subclass to determine how to apply this value. The default value of this property is [UIControl.ContentVerticalAlignment.top](contentverticalalignment-swift.enum/top.md).

## See Also

### Specifying content alignment

- [UIControl.ContentVerticalAlignment](contentverticalalignment-swift.enum.md): Constants for specifying the vertical alignment of content (text and images) in a control.
- [contentHorizontalAlignment](contenthorizontalalignment-swift.property.md): The horizontal alignment of content within the control’s bounds.
- [effectiveContentHorizontalAlignment](effectivecontenthorizontalalignment.md): The horizontal alignment currently in effect for the control.
- [UIControl.ContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.

# contentVerticalAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The vertical alignment of content within the control’s bounds.

## Declaration

```objectivec
@property (nonatomic) UIControlContentVerticalAlignment contentVerticalAlignment;
```

## Parameters

- `contentAlignment`: A constant that specifies the vertical alignment of text or images within the control. For a list of possible values, see [UIControlContentVerticalAlignment](contentverticalalignment-swift.enum.md).

<a id="Discussion"></a>

## Discussion

For controls that contain configurable text or image content, use this property to align that content appropriately inside the control’s bounds. Not all control subclasses have content that can be aligned, and it’s the responsibility of the subclass to determine how to apply this value. The default value of this property is [UIControlContentVerticalAlignmentTop](contentverticalalignment-swift.enum/top.md).

## See Also

### Specifying content alignment

- [UIControlContentVerticalAlignment](contentverticalalignment-swift.enum.md): Constants for specifying the vertical alignment of content (text and images) in a control.
- [contentHorizontalAlignment](contenthorizontalalignment-swift.property.md): The horizontal alignment of content within the control’s bounds.
- [effectiveContentHorizontalAlignment](effectivecontenthorizontalalignment.md): The horizontal alignment currently in effect for the control.
- [UIControlContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.
