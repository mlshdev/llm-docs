> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/inputaccessoryview](https://developer.apple.com/documentation/uikit/uitextfield/inputaccessoryview)

# inputAccessoryView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS

The custom accessory view to display when the text field becomes the first responder.

## Declaration

```swift
var inputAccessoryView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Assigning a view to this property causes that view to be displayed above the standard system keyboard (or above the custom input view if one is provided) when the text field becomes the first responder. For example, you could use this property to attach a custom toolbar to the keyboard.

## See Also

### Replacing the system input views

- [inputView](inputview.md): The custom input view to display when the text field becomes the first responder.

# inputAccessoryView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS

The custom accessory view to display when the text field becomes the first responder.

## Declaration

```objectivec
@property (strong, readwrite, nullable) UIView * inputAccessoryView;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Assigning a view to this property causes that view to be displayed above the standard system keyboard (or above the custom input view if one is provided) when the text field becomes the first responder. For example, you could use this property to attach a custom toolbar to the keyboard.

## See Also

### Replacing the system input views

- [inputView](inputview.md): The custom input view to display when the text field becomes the first responder.
