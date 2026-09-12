> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/performclick(_:)](https://developer.apple.com/documentation/appkit/nscell/performclick(_:))

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

- `sender`: The object to use as the sender of the event (if the receiver’s control view is not valid). This object must be a subclass of `NSView`.

<a id="Discussion"></a>

## Discussion

This method performs the receiver’s action on its target. The receiver must be enabled to perform the action. If the receiver’s control view is valid, that view is used as the sender; otherwise, the value in `sender` is used.

The receiver of this message must be a cell of type `NSActionCell`. This method raises an exception if the action message cannot be successfully sent.

## See Also

### Related Documentation

- [controlView](controlview.md): The view associated with the cell.

### Respond to Keyboard Events

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.

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

- `sender`: The object to use as the sender of the event (if the receiver’s control view is not valid). This object must be a subclass of `NSView`.

<a id="Discussion"></a>

## Discussion

This method performs the receiver’s action on its target. The receiver must be enabled to perform the action. If the receiver’s control view is valid, that view is used as the sender; otherwise, the value in `sender` is used.

The receiver of this message must be a cell of type `NSActionCell`. This method raises an exception if the action message cannot be successfully sent.

## See Also

### Related Documentation

- [controlView](controlview.md): The view associated with the cell.

### Respond to Keyboard Events

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.
