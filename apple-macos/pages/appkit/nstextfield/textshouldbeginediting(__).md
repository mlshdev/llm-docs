> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/textshouldbeginediting(_:)](https://developer.apple.com/documentation/appkit/nstextfield/textshouldbeginediting(_:))

# textShouldBeginEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission to begin editing a text object.

## Declaration

```swift
func textShouldBeginEditing(_ textObject: NSText) -> Bool
```

## Parameters

- `textObject`: The  object to begin editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing can begin; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the text field isn’t editable, this method returns [false](https://developer.apple.com/documentation/swift/false) immediately. If the text field is editable and its delegate responds to [control(\_:textShouldBeginEditing:)](../nscontroltexteditingdelegate/control%28__textshouldbeginediting_%29.md), this method invokes that method and returns the result. Otherwise, it returns [true](https://developer.apple.com/documentation/swift/true) to allow editing to occur. See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange(\_:)](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.

# textShouldBeginEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Requests permission to begin editing a text object.

## Declaration

```objectivec
- (BOOL) textShouldBeginEditing:(NSText *) textObject;
```

## Parameters

- `textObject`: The  object to begin editing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing can begin; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the text field isn’t editable, this method returns [false](https://developer.apple.com/documentation/swift/false) immediately. If the text field is editable and its delegate responds to [control:textShouldBeginEditing:](../nscontroltexteditingdelegate/control%28__textshouldbeginediting_%29.md), this method invokes that method and returns the result. Otherwise, it returns [true](https://developer.apple.com/documentation/swift/true) to allow editing to occur. See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange:](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing:](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.
