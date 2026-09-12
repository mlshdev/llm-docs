> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/selecttext(_:)](https://developer.apple.com/documentation/appkit/nstextfield/selecttext(_:))

# selectText(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Ends editing in the text field and, if it’s selectable, selects the entire text content.

## Declaration

```swift
func selectText(_ sender: Any?)
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

If the text field isn’t in a window’s view hierarchy, this method has no effect.

# selectText: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Ends editing in the text field and, if it’s selectable, selects the entire text content.

## Declaration

```objectivec
- (void) selectText:(id) sender;
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

If the text field isn’t in a window’s view hierarchy, this method has no effect.
