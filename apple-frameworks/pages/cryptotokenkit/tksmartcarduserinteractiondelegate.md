> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractiondelegate](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractiondelegate)

# TKSmartCardUserInteractionDelegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface implemented by a Smart Card user interaction delegate to handle user interaction events.

## Declaration

```swift
protocol TKSmartCardUserInteractionDelegate
```

## Topics

### Delegate Methods

- [characterEntered(in:)](tksmartcarduserinteractiondelegate/characterentered%28in_%29.md): Tells the delegate that a valid character has been entered.
- [correctionKeyPressed(in:)](tksmartcarduserinteractiondelegate/correctionkeypressed%28in_%29.md): Tells the delegate that a correction key has been pressed.
- [validationKeyPressed(in:)](tksmartcarduserinteractiondelegate/validationkeypressed%28in_%29.md): Tells the delegate that the validation key has been pressed, indicating the end of PIN entry.
- [invalidCharacterEntered(in:)](tksmartcarduserinteractiondelegate/invalidcharacterentered%28in_%29.md): Tells the delegate that an invalid character has been entered.
- [oldPINRequested(in:)](tksmartcarduserinteractiondelegate/oldpinrequested%28in_%29.md): Tells the delegate that the old PIN needs to be entered.
- [newPINRequested(in:)](tksmartcarduserinteractiondelegate/newpinrequested%28in_%29.md): Tells the delegate that the new PIN needs to be entered.
- [newPINConfirmationRequested(in:)](tksmartcarduserinteractiondelegate/newpinconfirmationrequested%28in_%29.md): Tells the delegate that the new PIN needs to be re-entered for confirmation.

## See Also

### Handling User Interaction Events

- [delegate](tksmartcarduserinteraction/delegate.md): The delegate for observing events that occur during the user interaction.

# TKSmartCardUserInteractionDelegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface implemented by a Smart Card user interaction delegate to handle user interaction events.

## Declaration

```objectivec
@protocol TKSmartCardUserInteractionDelegate
```

## Topics

### Delegate Methods

- [characterEnteredInUserInteraction:](tksmartcarduserinteractiondelegate/characterentered%28in_%29.md): Tells the delegate that a valid character has been entered.
- [correctionKeyPressedInUserInteraction:](tksmartcarduserinteractiondelegate/correctionkeypressed%28in_%29.md): Tells the delegate that a correction key has been pressed.
- [validationKeyPressedInUserInteraction:](tksmartcarduserinteractiondelegate/validationkeypressed%28in_%29.md): Tells the delegate that the validation key has been pressed, indicating the end of PIN entry.
- [invalidCharacterEnteredInUserInteraction:](tksmartcarduserinteractiondelegate/invalidcharacterentered%28in_%29.md): Tells the delegate that an invalid character has been entered.
- [oldPINRequestedInUserInteraction:](tksmartcarduserinteractiondelegate/oldpinrequested%28in_%29.md): Tells the delegate that the old PIN needs to be entered.
- [newPINRequestedInUserInteraction:](tksmartcarduserinteractiondelegate/newpinrequested%28in_%29.md): Tells the delegate that the new PIN needs to be entered.
- [newPINConfirmationRequestedInUserInteraction:](tksmartcarduserinteractiondelegate/newpinconfirmationrequested%28in_%29.md): Tells the delegate that the new PIN needs to be re-entered for confirmation.

## See Also

### Handling User Interaction Events

- [delegate](tksmartcarduserinteraction/delegate.md): The delegate for observing events that occur during the user interaction.
