> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/sendaction()](https://developer.apple.com/documentation/appkit/nsbrowser/sendaction())

# sendAction() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends the action message to the target.

## Declaration

```swift
func sendAction() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; [false](https://developer.apple.com/documentation/swift/false) if no target for the message could be found.

## See Also

### Related Documentation

- [doDoubleClick(\_:)](dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [doClick(\_:)](doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.

### Managing Actions

- [doubleAction](doubleaction.md): The browser’s double-click action method.
- [sendsActionOnArrowKeys](sendsactiononarrowkeys.md): A Boolean that indicates whether pressing an arrow key causes an action message to be sent.

# sendAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends the action message to the target.

## Declaration

```objectivec
- (BOOL) sendAction;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; [false](https://developer.apple.com/documentation/swift/false) if no target for the message could be found.

## See Also

### Related Documentation

- [doDoubleClick:](dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [doClick:](doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.

### Managing Actions

- [doubleAction](doubleaction.md): The browser’s double-click action method.
- [sendsActionOnArrowKeys](sendsactiononarrowkeys.md): A Boolean that indicates whether pressing an arrow key causes an action message to be sent.
