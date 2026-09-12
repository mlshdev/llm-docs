> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractiondelegate/newpinconfirmationrequested(in:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractiondelegate/newpinconfirmationrequested(in:))

# newPINConfirmationRequested(in:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the new PIN needs to be re-entered for confirmation.

## Declaration

```swift
optional func newPINConfirmationRequested(in interaction: TKSmartCardUserInteraction)
```

## Parameters

- `interaction`: The user interaction.

## See Also

### Delegate Methods

- [characterEntered(in:)](characterentered%28in_%29.md): Tells the delegate that a valid character has been entered.
- [correctionKeyPressed(in:)](correctionkeypressed%28in_%29.md): Tells the delegate that a correction key has been pressed.
- [validationKeyPressed(in:)](validationkeypressed%28in_%29.md): Tells the delegate that the validation key has been pressed, indicating the end of PIN entry.
- [invalidCharacterEntered(in:)](invalidcharacterentered%28in_%29.md): Tells the delegate that an invalid character has been entered.
- [oldPINRequested(in:)](oldpinrequested%28in_%29.md): Tells the delegate that the old PIN needs to be entered.
- [newPINRequested(in:)](newpinrequested%28in_%29.md): Tells the delegate that the new PIN needs to be entered.

# newPINConfirmationRequestedInUserInteraction: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the new PIN needs to be re-entered for confirmation.

## Declaration

```objectivec
- (void) newPINConfirmationRequestedInUserInteraction:(TKSmartCardUserInteraction *) interaction;
```

## Parameters

- `interaction`: The user interaction.

## See Also

### Delegate Methods

- [characterEnteredInUserInteraction:](characterentered%28in_%29.md): Tells the delegate that a valid character has been entered.
- [correctionKeyPressedInUserInteraction:](correctionkeypressed%28in_%29.md): Tells the delegate that a correction key has been pressed.
- [validationKeyPressedInUserInteraction:](validationkeypressed%28in_%29.md): Tells the delegate that the validation key has been pressed, indicating the end of PIN entry.
- [invalidCharacterEnteredInUserInteraction:](invalidcharacterentered%28in_%29.md): Tells the delegate that an invalid character has been entered.
- [oldPINRequestedInUserInteraction:](oldpinrequested%28in_%29.md): Tells the delegate that the old PIN needs to be entered.
- [newPINRequestedInUserInteraction:](newpinrequested%28in_%29.md): Tells the delegate that the new PIN needs to be entered.
