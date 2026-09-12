> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/inputviewcontroller](https://developer.apple.com/documentation/uikit/uiresponder/inputviewcontroller)

# inputViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom input view controller to use when the responder becomes the first responder.

## Declaration

```swift
var inputViewController: UIInputViewController? { get }
```

<a id="Discussion"></a>

## Discussion

This property is typically used to provide a view controller to replace the system-supplied keyboard that’s presented for [UITextField](../uitextfield.md) and [UITextView](../uitextview.md) objects.

The value of this read-only property is `nil`. If you want to provide a custom input view controller to replace the system keyboard in your app, redeclare this property as read-write in a [UIResponder](../uiresponder.md) subclass. You can then use this property to manage a custom input view controller. When the responder becomes the first responder, the responder infrastructure presents the specified input view controller automatically. Similarly, when the responder resigns its first responder status, the responder infrastructure automatically dismisses the specified input view controller.

## See Also

### Managing input views

- [inputView](inputview.md): The custom input view to display when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [inputAccessoryViewController](inputaccessoryviewcontroller.md): The custom input accessory view controller to display when the responder becomes the first responder.
- [reloadInputViews()](reloadinputviews%28%29.md): Updates the custom input and accessory views when the object is the first responder.

# inputViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The custom input view controller to use when the responder becomes the first responder.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIInputViewController * inputViewController;
```

<a id="Discussion"></a>

## Discussion

This property is typically used to provide a view controller to replace the system-supplied keyboard that’s presented for [UITextField](../uitextfield.md) and [UITextView](../uitextview.md) objects.

The value of this read-only property is `nil`. If you want to provide a custom input view controller to replace the system keyboard in your app, redeclare this property as read-write in a [UIResponder](../uiresponder.md) subclass. You can then use this property to manage a custom input view controller. When the responder becomes the first responder, the responder infrastructure presents the specified input view controller automatically. Similarly, when the responder resigns its first responder status, the responder infrastructure automatically dismisses the specified input view controller.

## See Also

### Managing input views

- [inputView](inputview.md): The custom input view to display when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [inputAccessoryViewController](inputaccessoryviewcontroller.md): The custom input accessory view controller to display when the responder becomes the first responder.
- [reloadInputViews](reloadinputviews%28%29.md): Updates the custom input and accessory views when the object is the first responder.
