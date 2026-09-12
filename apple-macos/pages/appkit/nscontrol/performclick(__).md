> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/performclick(_:)](https://developer.apple.com/documentation/appkit/nscontrol/performclick(_:))

# performClick(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates a single mouse click on the receiver.

## Declaration

```swift
func performClick(_ sender: Any?)
```

## Parameters

- `sender`: The object requesting the action. This parameter is ignored.

<a id="Discussion"></a>

## Discussion

This method calls the [performClick(\_:)](../nscell/performclick%28__%29.md) method of the receiver’s cell with the sender being the control itself. This method raises an exception if the action message cannot be successfully sent.

## See Also

### Activating from the Keyboard

- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the receiver refuses the first responder role.

# performClick: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates a single mouse click on the receiver.

## Declaration

```objectivec
- (void) performClick:(id) sender;
```

## Parameters

- `sender`: The object requesting the action. This parameter is ignored.

<a id="Discussion"></a>

## Discussion

This method calls the [performClick:](../nscell/performclick%28__%29.md) method of the receiver’s cell with the sender being the control itself. This method raises an exception if the action message cannot be successfully sent.

## See Also

### Activating from the Keyboard

- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the receiver refuses the first responder role.
