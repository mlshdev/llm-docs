> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/userinteractionforsecurepinverification(_:apdu:pinbyteoffset:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/userinteractionforsecurepinverification(_:apdu:pinbyteoffset:))

# userInteractionForSecurePINVerification(\_:apdu:pinByteOffset:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.

## Declaration

```swift
func userInteractionForSecurePINVerification(_ PINFormat: TKSmartCardPINFormat, apdu APDU: Data, pinByteOffset PINByteOffset: Int) -> TKSmartCardUserInteractionForSecurePINVerification?
```

## Parameters

- `PINFormat`: The PIN format descriptor.
- `APDU`: The Application Protocol Data Unit (APDU) used by the Smart Card to fill in PIN data.
- `PINByteOffset`: The offset, in bytes, within the Application Protocol Data Unit (APDU) field to mark a location of a PIN block for filling in the entered PIN.

  > **Important**

  >  This parameter is not currently used. Pass `0`.

<a id="return-value"></a>

## Return Value

A new user interaction object for secure PIN verification, or `nil` if this feature is not supported by the Smart Card reader.

<a id="Discussion"></a>

## Discussion

You should only call this method after a session to the Smart Card has been established using the [beginSession(reply:)](beginsession%28reply_%29.md) method, and before the session is terminated using the [endSession()](endsession%28%29.md) method.

Once the interaction has been successfully completed, the results are available via the [resultData](../tksmartcarduserinteractionforpinoperation/resultdata.md) and [resultSW](../tksmartcarduserinteractionforpinoperation/resultsw.md) properties of the returned [TKSmartCardUserInteractionForSecurePINVerification](../tksmartcarduserinteractionforsecurepinverification.md) object.

## See Also

### Managing User Interaction

- [userInteractionForSecurePINChange(\_:apdu:currentPINByteOffset:newPINByteOffset:)](userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](../tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteraction](../tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](../tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](../tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](../tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.

# userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.

## Declaration

```objectivec
- (TKSmartCardUserInteractionForSecurePINVerification *) userInteractionForSecurePINVerificationWithPINFormat:(TKSmartCardPINFormat *) PINFormat APDU:(NSData *) APDU PINByteOffset:(NSInteger) PINByteOffset;
```

## Parameters

- `PINFormat`: The PIN format descriptor.
- `APDU`: The Application Protocol Data Unit (APDU) used by the Smart Card to fill in PIN data.
- `PINByteOffset`: The offset, in bytes, within the Application Protocol Data Unit (APDU) field to mark a location of a PIN block for filling in the entered PIN.

  > **Important**

  >  This parameter is not currently used. Pass `0`.

<a id="return-value"></a>

## Return Value

A new user interaction object for secure PIN verification, or `nil` if this feature is not supported by the Smart Card reader.

<a id="Discussion"></a>

## Discussion

You should only call this method after a session to the Smart Card has been established using the [beginSessionWithReply:](beginsession%28reply_%29.md) method, and before the session is terminated using the [endSession](endsession%28%29.md) method.

Once the interaction has been successfully completed, the results are available via the [resultData](../tksmartcarduserinteractionforpinoperation/resultdata.md) and [resultSW](../tksmartcarduserinteractionforpinoperation/resultsw.md) properties of the returned [TKSmartCardUserInteractionForSecurePINVerification](../tksmartcarduserinteractionforsecurepinverification.md) object.

## See Also

### Managing User Interaction

- [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardPINFormat](../tksmartcardpinformat.md): The formatting properties for a PIN, such as character encoding and length constraints.
- [TKSmartCardUserInteraction](../tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](../tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](../tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](../tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.
