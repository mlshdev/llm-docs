> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensmartcardpinauthoperation](https://developer.apple.com/documentation/cryptotokenkit/tktokensmartcardpinauthoperation)

# TKTokenSmartCardPINAuthOperation (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Smart Card PIN authentication operation.

## Declaration

```swift
class TKTokenSmartCardPINAuthOperation
```

## Topics

### Configuring the Operation

- [pinFormat](tktokensmartcardpinauthoperation/pinformat.md): The PIN format.
- [apduTemplate](tktokensmartcardpinauthoperation/apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [pinByteOffset](tktokensmartcardpinauthoperation/pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.
- [smartCard](tktokensmartcardpinauthoperation/smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.

### Accessing the PIN

- [pin](tktokensmartcardpinauthoperation/pin.md): The PIN value resulting from performing the operation.

## Relationships

### Inherits From

- [TKTokenAuthOperation](tktokenauthoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Authenticating

- [tokenSession(\_:beginAuthFor:constraint:)](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenOperationConstraint](tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenAuthOperation](tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.

# TKTokenSmartCardPINAuthOperation (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Smart Card PIN authentication operation.

## Declaration

```objectivec
@interface TKTokenSmartCardPINAuthOperation : TKTokenAuthOperation
```

## Topics

### Configuring the Operation

- [PINFormat](tktokensmartcardpinauthoperation/pinformat.md): The PIN format.
- [APDUTemplate](tktokensmartcardpinauthoperation/apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [PINByteOffset](tktokensmartcardpinauthoperation/pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.
- [smartCard](tktokensmartcardpinauthoperation/smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.

### Accessing the PIN

- [PIN](tktokensmartcardpinauthoperation/pin.md): The PIN value resulting from performing the operation.

## Relationships

### Inherits From

- [TKTokenAuthOperation](tktokenauthoperation.md)

## See Also

### Authenticating

- [tokenSession:beginAuthForOperation:constraint:error:](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenOperationConstraint](tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenAuthOperation](tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.
