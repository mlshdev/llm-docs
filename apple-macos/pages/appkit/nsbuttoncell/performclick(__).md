> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/performclick(_:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/performclick(_:))

# performClick(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates the user clicking the button with the pointer.

## Declaration

```swift
func performClick(_ sender: Any?)
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

This method essentially highlights the button, sends the button’s action message to the target object, and then unhighlights the button.

If an exception is raised while the target object is processing the action message, the button is unhighlighted before the exception is propagated out of [performClick(\_:)](performclick%28__%29.md).

## See Also

### Handling Events and Action Messages

- [mouseEntered(with:)](mouseentered%28with_%29.md): Draws the button’s border.
- [mouseExited(with:)](mouseexited%28with_%29.md): Erases the button’s border.

# performClick: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates the user clicking the button with the pointer.

## Declaration

```objectivec
- (void) performClick:(id) sender;
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

This method essentially highlights the button, sends the button’s action message to the target object, and then unhighlights the button.

If an exception is raised while the target object is processing the action message, the button is unhighlighted before the exception is propagated out of [performClick:](performclick%28__%29.md).

## See Also

### Handling Events and Action Messages

- [mouseEntered:](mouseentered%28with_%29.md): Draws the button’s border.
- [mouseExited:](mouseexited%28with_%29.md): Erases the button’s border.
