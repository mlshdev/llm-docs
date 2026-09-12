> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/delegate](https://developer.apple.com/documentation/uikit/uitextfield/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text field’s delegate.

## Declaration

```swift
weak var delegate: (any UITextFieldDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A text field delegate responds to editing-related messages from the text field. You can use the delegate to respond to the text entered by the user and to some special commands, such as when the user taps Return.

> **Note**

>  If the text field is a [UISearchTextField](../uisearchtextfield.md), set its delegate to an object that also conforms to the [UISearchTextFieldDelegate](../uisearchtextfielddelegate.md) protocol.

## See Also

### Validating and handling edits

- [UITextFieldDelegate](../uitextfielddelegate.md): A set of optional methods to manage editing and validating text in a text field object.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text field’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITextFieldDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A text field delegate responds to editing-related messages from the text field. You can use the delegate to respond to the text entered by the user and to some special commands, such as when the user taps Return.

> **Note**

>  If the text field is a [UISearchTextField](../uisearchtextfield.md), set its delegate to an object that also conforms to the [UISearchTextFieldDelegate](../uisearchtextfielddelegate.md) protocol.

## See Also

### Validating and handling edits

- [UITextFieldDelegate](../uitextfielddelegate.md): A set of optional methods to manage editing and validating text in a text field object.
