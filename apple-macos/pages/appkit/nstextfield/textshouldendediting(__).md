> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/textshouldendediting(_:)](https://developer.apple.com/documentation/appkit/nstextfield/textshouldendediting(_:))

# textShouldEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs validation on the text field’s new value.

## Declaration

```swift
func textShouldEndEditing(_ textObject: NSText) -> Bool
```

## Parameters

- `textObject`: The text object that requests permission to end editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the new value is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method validates the text field’s new value using the `NSCell` method [isEntryAcceptable:](../nscell/isentryacceptable_.md). If the new value is valid and the delegate responds to [control(\_:textShouldEndEditing:)](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md), this method invokes that method and returns the result. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the system beeps to indicate that the text field can’t validate the text. See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange(\_:)](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.

# textShouldEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs validation on the text field’s new value.

## Declaration

```objectivec
- (BOOL) textShouldEndEditing:(NSText *) textObject;
```

## Parameters

- `textObject`: The text object that requests permission to end editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the new value is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method validates the text field’s new value using the `NSCell` method [isEntryAcceptable:](../nscell/isentryacceptable_.md). If the new value is valid and the delegate responds to [control:textShouldEndEditing:](../nscontroltexteditingdelegate/control%28__textshouldendediting_%29.md), this method invokes that method and returns the result. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the system beeps to indicate that the text field can’t validate the text. See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange:](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textDidEndEditing:](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.
