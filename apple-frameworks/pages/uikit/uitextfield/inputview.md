> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/inputview](https://developer.apple.com/documentation/uikit/uitextfield/inputview)

# inputView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom input view to display when the text field becomes the first responder.

## Declaration

```swift
var inputView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value in this property is `nil`, the text field displays the standard system keyboard when it becomes first responder. Assigning a custom view to this property causes that view to be presented instead.

The default value of this property is `nil`.

## See Also

### Replacing the system input views

- [inputAccessoryView](inputaccessoryview.md): The custom accessory view to display when the text field becomes the first responder.

# inputView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The custom input view to display when the text field becomes the first responder.

## Declaration

```objectivec
@property (strong, readwrite, nullable) UIView * inputView;
```

<a id="Discussion"></a>

## Discussion

If the value in this property is `nil`, the text field displays the standard system keyboard when it becomes first responder. Assigning a custom view to this property causes that view to be presented instead.

The default value of this property is `nil`.

## See Also

### Replacing the system input views

- [inputAccessoryView](inputaccessoryview.md): The custom accessory view to display when the text field becomes the first responder.
