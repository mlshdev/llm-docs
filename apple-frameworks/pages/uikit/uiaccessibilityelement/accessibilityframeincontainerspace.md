> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityelement/accessibilityframeincontainerspace](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/accessibilityframeincontainerspace)

# accessibilityFrameInContainerSpace (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The frame of the accessibility element, in the coordinate space of its container view.

## Declaration

```swift
var accessibilityFrameInContainerSpace: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CGRectNull](../../coregraphics/cgrectnull.md). Use this property to set the frame rectangle of an element whose frame rectangle could be affected by its container view. For example, use this property to set the frame rectangle for an element in a scroll view’s content view. Changing the value of this property automatically adjusts the rectangle in the [accessibilityFrame](accessibilityframe.md) property.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.

# accessibilityFrameInContainerSpace (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The frame of the accessibility element, in the coordinate space of its container view.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect accessibilityFrameInContainerSpace;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [CGRectNull](../../coregraphics/cgrectnull.md). Use this property to set the frame rectangle of an element whose frame rectangle could be affected by its container view. For example, use this property to set the frame rectangle for an element in a scroll view’s content view. Changing the value of this property automatically adjusts the rectangle in the [accessibilityFrame](accessibilityframe.md) property.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.
