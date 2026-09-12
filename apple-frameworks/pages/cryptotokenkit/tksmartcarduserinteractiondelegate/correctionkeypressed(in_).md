> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcarduserinteractiondelegate/correctionkeypressed(in:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcarduserinteractiondelegate/correctionkeypressed(in:))

# correctionKeyPressed(in:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a correction key has been pressed.

## Declaration

```swift
optional func correctionKeyPressed(in interaction: TKSmartCardUserInteraction)
```

## Parameters

- `interaction`: The user interaction.

## See Also

### Delegate Methods

- [characterEntered(in:)](characterentered%28in_%29.md): Tells the delegate that a valid character has been entered.
- [validationKeyPressed(in:)](validationkeypressed%28in_%29.md): Tells the delegate that the validation key has been pressed, indicating the end of PIN entry.
- [invalidCharacterEntered(in:)](invalidcharacterentered%28in_%29.md): Tells the delegate that an invalid character has been entered.
- [oldPINRequested(in:)](oldpinrequested%28in_%29.md): Tells the delegate that the old PIN needs to be entered.
- [newPINRequested(in:)](newpinrequested%28in_%29.md): Tells the delegate that the new PIN needs to be entered.
- [newPINConfirmationRequested(in:)](newpinconfirmationrequested%28in_%29.md): Tells the delegate that the new PIN needs to be re-entered for confirmation.

# correctionKeyPressedInUserInteraction: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a correction key has been pressed.

## Declaration

```objectivec
- (void) correctionKeyPressedInUserInteraction:(TKSmartCardUserInteraction *) interaction;
```

## Parameters

- `interaction`: The user interaction.

## See Also

### Delegate Methods

- [characterEnteredInUserInteraction:](characterentered%28in_%29.md): Tells the delegate that a valid character has been entered.
- [validationKeyPressedInUserInteraction:](validationkeypressed%28in_%29.md): Tells the delegate that the validation key has been pressed, indicating the end of PIN entry.
- [invalidCharacterEnteredInUserInteraction:](invalidcharacterentered%28in_%29.md): Tells the delegate that an invalid character has been entered.
- [oldPINRequestedInUserInteraction:](oldpinrequested%28in_%29.md): Tells the delegate that the old PIN needs to be entered.
- [newPINRequestedInUserInteraction:](newpinrequested%28in_%29.md): Tells the delegate that the new PIN needs to be entered.
- [newPINConfirmationRequestedInUserInteraction:](newpinconfirmationrequested%28in_%29.md): Tells the delegate that the new PIN needs to be re-entered for confirmation.
