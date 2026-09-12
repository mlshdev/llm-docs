> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksecureelementpass](https://developer.apple.com/documentation/passkit/pksecureelementpass)

# PKSecureElementPass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

A pass with a credential that the device stores in a certified payment information chip.

## Declaration

```swift
class PKSecureElementPass
```

## Topics

### Getting the activation state

- [passActivationState](pksecureelementpass/passactivationstate-swift.property.md): The activation state of the pass.
- [PKSecureElementPass.PassActivationState](pksecureelementpass/passactivationstate-swift.enum.md): The activation states of a Secure Element pass.

### Getting the hardware attributes

- [deviceAccountIdentifier](pksecureelementpass/deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [deviceAccountNumberSuffix](pksecureelementpass/deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [devicePassIdentifier](pksecureelementpass/devicepassidentifier.md): An opaque value for the pass.
- [pairedTerminalIdentifier](pksecureelementpass/pairedterminalidentifier.md): The unique identifier of the paired terminal.

### Getting the account attributes

- [primaryAccountIdentifier](pksecureelementpass/primaryaccountidentifier.md): An opaque value that identifies the primary account number that funds the pass’s transactions.
- [primaryAccountNumberSuffix](pksecureelementpass/primaryaccountnumbersuffix.md): A display-ready version of the primary account number.

### Instance Properties

- [isProvisioningAvailable](pksecureelementpass/isprovisioningavailable.md): A Boolean value indicating whether provisioning is available for this pass.

## Relationships

### Inherits From

- [PKPass](pkpass.md)

### Inherited By

- [PKPaymentPass](pkpaymentpass.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### General purpose passes

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [AsyncShareablePassConfiguration](asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)

# PKSecureElementPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

A pass with a credential that the device stores in a certified payment information chip.

## Declaration

```objectivec
@interface PKSecureElementPass : PKPass
```

## Topics

### Getting the activation state

- [passActivationState](pksecureelementpass/passactivationstate-swift.property.md): The activation state of the pass.
- [PKSecureElementPassActivationState](pksecureelementpass/passactivationstate-swift.enum.md): The activation states of a Secure Element pass.

### Getting the hardware attributes

- [deviceAccountIdentifier](pksecureelementpass/deviceaccountidentifier.md): The unique identifier for the device-specific account number.
- [deviceAccountNumberSuffix](pksecureelementpass/deviceaccountnumbersuffix.md): A display-ready version of the device-specific account number.
- [devicePassIdentifier](pksecureelementpass/devicepassidentifier.md): An opaque value for the pass.
- [pairedTerminalIdentifier](pksecureelementpass/pairedterminalidentifier.md): The unique identifier of the paired terminal.

### Getting the account attributes

- [primaryAccountIdentifier](pksecureelementpass/primaryaccountidentifier.md): An opaque value that identifies the primary account number that funds the pass’s transactions.
- [primaryAccountNumberSuffix](pksecureelementpass/primaryaccountnumbersuffix.md): A display-ready version of the primary account number.

### Instance Properties

- [provisioningAvailable](pksecureelementpass/isprovisioningavailable.md): A Boolean value indicating whether provisioning is available for this pass.

## Relationships

### Inherits From

- [PKPass](pkpass.md)

### Inherited By

- [PKPaymentPass](pkpaymentpass.md)

## See Also

### General purpose passes

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)
