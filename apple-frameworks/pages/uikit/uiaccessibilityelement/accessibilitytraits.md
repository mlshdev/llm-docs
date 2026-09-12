> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityelement/accessibilitytraits](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/accessibilitytraits)

# accessibilityTraits (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The combination of traits that best characterize the accessibility element.

## Declaration

```swift
var accessibilityTraits: UIAccessibilityTraits { get set }
```

<a id="Discussion"></a>

## Discussion

A trait describes a single aspect of an element’s behavior, state, or usage. Several traits are combined in this property (using an OR operation) to give a complete picture of the element to an assistive application. See “Accessibility Traits” in [UIAccessibility](../uiaccessibility-protocol.md) for a complete list of traits.

UIKit provides an appropriate combination of traits for all standard controls and views. When combining traits for a custom accessibility element, be sure to:

- Use common sense. Don’t combine traits that characterize the element in mutually exclusive ways, such as combining the button and search-field traits.
- Combine the traits you select with the superclass’s traits. Specifically, always combine your custom traits with `[super accessibilityTraits]` in the method you use to set a custom element’s traits.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.

# accessibilityTraits (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The combination of traits that best characterize the accessibility element.

## Declaration

```objectivec
@property (nonatomic, assign) UIAccessibilityTraits accessibilityTraits;
```

<a id="Discussion"></a>

## Discussion

A trait describes a single aspect of an element’s behavior, state, or usage. Several traits are combined in this property (using an OR operation) to give a complete picture of the element to an assistive application. See “Accessibility Traits” in [UIAccessibility](../uiaccessibility-protocol.md) for a complete list of traits.

UIKit provides an appropriate combination of traits for all standard controls and views. When combining traits for a custom accessibility element, be sure to:

- Use common sense. Don’t combine traits that characterize the element in mutually exclusive ways, such as combining the button and search-field traits.
- Combine the traits you select with the superclass’s traits. Specifically, always combine your custom traits with `[super accessibilityTraits]` in the method you use to set a custom element’s traits.

## See Also

### Accessing the attributes of an accessibility element

- [accessibilityLabel](accessibilitylabel.md): A string that succinctly identifies the accessibility element.
- [accessibilityHint](accessibilityhint.md): A string that briefly describes the result of performing an action on the accessibility element.
- [accessibilityValue](accessibilityvalue.md): A string that represents the current value of the accessibility element.
- [accessibilityFrame](accessibilityframe.md): The frame of the accessibility element, in screen coordinates.
- [accessibilityFrameInContainerSpace](accessibilityframeincontainerspace.md): The frame of the accessibility element, in the coordinate space of its container view.
