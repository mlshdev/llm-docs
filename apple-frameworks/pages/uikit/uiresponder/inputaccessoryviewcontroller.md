> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/inputaccessoryviewcontroller](https://developer.apple.com/documentation/uikit/uiresponder/inputaccessoryviewcontroller)

# inputAccessoryViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS

The custom input accessory view controller to display when the responder becomes the first responder.

## Declaration

```swift
var inputAccessoryViewController: UIInputViewController? { get }
```

<a id="Discussion"></a>

## Discussion

This property is typically used to attach an accessory view controller to the system-supplied keyboard that’s presented for [UITextField](../uitextfield.md) and [UITextView](../uitextview.md) objects.

The value of this read-only property is `nil`. If you want to attach custom controls to a system-supplied input view controller (such as the system keyboard) or to a custom input view (one you provide in the [inputViewController](inputviewcontroller.md) property), redeclare this property as read-write in a [UIResponder](../uiresponder.md) subclass. You can then use this property to manage a custom accessory view. When the responder becomes the first responder, the responder infrastructure attaches the accessory view to the appropriate input view before displaying it.

## See Also

### Managing input views

- [inputView](inputview.md): The custom input view to display when the responder becomes the first responder.
- [inputViewController](inputviewcontroller.md): The custom input view controller to use when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [reloadInputViews()](reloadinputviews%28%29.md): Updates the custom input and accessory views when the object is the first responder.

# inputAccessoryViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · watchOS 2.0+

The custom input accessory view controller to display when the responder becomes the first responder.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIInputViewController * inputAccessoryViewController;
```

<a id="Discussion"></a>

## Discussion

This property is typically used to attach an accessory view controller to the system-supplied keyboard that’s presented for [UITextField](../uitextfield.md) and [UITextView](../uitextview.md) objects.

The value of this read-only property is `nil`. If you want to attach custom controls to a system-supplied input view controller (such as the system keyboard) or to a custom input view (one you provide in the [inputViewController](inputviewcontroller.md) property), redeclare this property as read-write in a [UIResponder](../uiresponder.md) subclass. You can then use this property to manage a custom accessory view. When the responder becomes the first responder, the responder infrastructure attaches the accessory view to the appropriate input view before displaying it.

## See Also

### Managing input views

- [inputView](inputview.md): The custom input view to display when the responder becomes the first responder.
- [inputViewController](inputviewcontroller.md): The custom input view controller to use when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [reloadInputViews](reloadinputviews%28%29.md): Updates the custom input and accessory views when the object is the first responder.
