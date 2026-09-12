> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/inputview](https://developer.apple.com/documentation/uikit/uiresponder/inputview)

# inputView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom input view to display when the responder becomes the first responder.

## Declaration

```swift
var inputView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

This property is typically used to provide a view to replace the system-supplied keyboard that’s presented for [UITextField](../uitextfield.md) and [UITextView](../uitextview.md) objects.

The value of this read-only property is `nil`. A responder object that requires a custom view to gather input from the user should redeclare this property as read-write and use it to manage its custom input view. When the responder becomes the first responder, the responder infrastructure presents the specified input view automatically. Similarly, when the responder resigns its first responder status, the responder infrastructure automatically dismisses the specified input view.

## See Also

### Managing input views

- [inputViewController](inputviewcontroller.md): The custom input view controller to use when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [inputAccessoryViewController](inputaccessoryviewcontroller.md): The custom input accessory view controller to display when the responder becomes the first responder.
- [reloadInputViews()](reloadinputviews%28%29.md): Updates the custom input and accessory views when the object is the first responder.

# inputView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The custom input view to display when the responder becomes the first responder.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIView * inputView;
```

<a id="Discussion"></a>

## Discussion

This property is typically used to provide a view to replace the system-supplied keyboard that’s presented for [UITextField](../uitextfield.md) and [UITextView](../uitextview.md) objects.

The value of this read-only property is `nil`. A responder object that requires a custom view to gather input from the user should redeclare this property as read-write and use it to manage its custom input view. When the responder becomes the first responder, the responder infrastructure presents the specified input view automatically. Similarly, when the responder resigns its first responder status, the responder infrastructure automatically dismisses the specified input view.

## See Also

### Managing input views

- [inputViewController](inputviewcontroller.md): The custom input view controller to use when the responder becomes the first responder.
- [inputAccessoryView](inputaccessoryview.md): The custom input accessory view to display when the responder becomes the first responder.
- [inputAccessoryViewController](inputaccessoryviewcontroller.md): The custom input accessory view controller to display when the responder becomes the first responder.
- [reloadInputViews](reloadinputviews%28%29.md): Updates the custom input and accessory views when the object is the first responder.
