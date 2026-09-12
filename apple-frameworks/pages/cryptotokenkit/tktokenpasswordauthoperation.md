> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenpasswordauthoperation](https://developer.apple.com/documentation/cryptotokenkit/tktokenpasswordauthoperation)

# TKTokenPasswordAuthOperation (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A password-based authentication operation.

## Declaration

```swift
class TKTokenPasswordAuthOperation
```

## Topics

### Managing the Password

- [password](tktokenpasswordauthoperation/password.md): The password to be filled in when the `finishWithError:` is called.

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
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.

# TKTokenPasswordAuthOperation (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A password-based authentication operation.

## Declaration

```objectivec
@interface TKTokenPasswordAuthOperation : TKTokenAuthOperation
```

## Topics

### Managing the Password

- [password](tktokenpasswordauthoperation/password.md): The password to be filled in when the `finishWithError:` is called.

## Relationships

### Inherits From

- [TKTokenAuthOperation](tktokenauthoperation.md)

## See Also

### Authenticating

- [tokenSession:beginAuthForOperation:constraint:error:](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenOperationConstraint](tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenAuthOperation](tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.
