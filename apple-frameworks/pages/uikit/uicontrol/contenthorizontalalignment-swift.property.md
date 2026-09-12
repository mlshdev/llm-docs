> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/contenthorizontalalignment-swift.property](https://developer.apple.com/documentation/uikit/uicontrol/contenthorizontalalignment-swift.property)

# contentHorizontalAlignment (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The horizontal alignment of content within the control’s bounds.

## Declaration

```swift
var contentHorizontalAlignment: UIControl.ContentHorizontalAlignment { get set }
```

## Parameters

- `contentAlignment`: A constant that specifies the horizontal alignment of text or images within the control. For a list of possible values, see [UIControl.ContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md).

<a id="Discussion"></a>

## Discussion

For controls that contain configurable text or image content, use this property to align that content appropriately inside the control’s bounds. Not all control subclasses have content that can be aligned, and it’s the responsibility of the subclass to determine how to apply this value. The default value of this property is [UIControl.ContentHorizontalAlignment.center](contenthorizontalalignment-swift.enum/center.md).

## See Also

### Specifying content alignment

- [contentVerticalAlignment](contentverticalalignment-swift.property.md): The vertical alignment of content within the control’s bounds.
- [UIControl.ContentVerticalAlignment](contentverticalalignment-swift.enum.md): Constants for specifying the vertical alignment of content (text and images) in a control.
- [effectiveContentHorizontalAlignment](effectivecontenthorizontalalignment.md): The horizontal alignment currently in effect for the control.
- [UIControl.ContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.

# contentHorizontalAlignment (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The horizontal alignment of content within the control’s bounds.

## Declaration

```objectivec
@property (nonatomic) UIControlContentHorizontalAlignment contentHorizontalAlignment;
```

## Parameters

- `contentAlignment`: A constant that specifies the horizontal alignment of text or images within the control. For a list of possible values, see [UIControlContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md).

<a id="Discussion"></a>

## Discussion

For controls that contain configurable text or image content, use this property to align that content appropriately inside the control’s bounds. Not all control subclasses have content that can be aligned, and it’s the responsibility of the subclass to determine how to apply this value. The default value of this property is [UIControlContentHorizontalAlignmentCenter](contenthorizontalalignment-swift.enum/center.md).

## See Also

### Specifying content alignment

- [contentVerticalAlignment](contentverticalalignment-swift.property.md): The vertical alignment of content within the control’s bounds.
- [UIControlContentVerticalAlignment](contentverticalalignment-swift.enum.md): Constants for specifying the vertical alignment of content (text and images) in a control.
- [effectiveContentHorizontalAlignment](effectivecontenthorizontalalignment.md): The horizontal alignment currently in effect for the control.
- [UIControlContentHorizontalAlignment](contenthorizontalalignment-swift.enum.md): The horizontal alignment of content (text and images) within a control.
