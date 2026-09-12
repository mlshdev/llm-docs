> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityelement/accessibilityframe](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/accessibilityframe)

# accessibilityFrame (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The frame of the accessibility element, in screen coordinates.

## Declaration

```swift
var accessibilityFrame: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

When you create an accessibility element to represent an element in your application, you must set this property to the `CGRect` structure that specifies the object’s screen location and size. (Objects that inherit from `UIView` include this information by default.)

Assigning a new value to this property changes the value of the [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md) property to [CGRectNull](../../coregraphics/cgrectnull.md).

## See Also

### Related Documentation

- [convertToScreenCoordinates(\_:in:)](../uiaccessibility/converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.

# accessibilityFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The frame of the accessibility element, in screen coordinates.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect accessibilityFrame;
```

<a id="Discussion"></a>

## Discussion

When you create an accessibility element to represent an element in your application, you must set this property to the `CGRect` structure that specifies the object’s screen location and size. (Objects that inherit from `UIView` include this information by default.)

Assigning a new value to this property changes the value of the [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md) property to [CGRectNull](../../coregraphics/cgrectnull.md).

## See Also

### Related Documentation

- [UIAccessibilityConvertFrameToScreenCoordinates](../uiaccessibility/converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
- [accessibilityTraits](accessibilitytraits.md): The combination of traits that best characterize the accessibility element.
