> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenauthoperation](https://developer.apple.com/documentation/cryptotokenkit/tktokenauthoperation)

# TKTokenAuthOperation (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An authentication operation for a cryptographic token.

## Declaration

```swift
class TKTokenAuthOperation
```

<a id="overview"></a>

## Overview

The CryptoTokenKit framework provides the following concrete subclasses: [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md), for password-based authentication, and [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md) for Smart Card PIN-based authentication.

## Topics

### Finishing the Operation

- [finish()](tktokenauthoperation/finish%28%29.md): Finishes the authentication operation.

### Initializers

- [init(coder:)](tktokenauthoperation/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md)
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md)

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
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.

# TKTokenAuthOperation (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An authentication operation for a cryptographic token.

## Declaration

```objectivec
@interface TKTokenAuthOperation : NSObject
```

<a id="overview"></a>

## Overview

The CryptoTokenKit framework provides the following concrete subclasses: [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md), for password-based authentication, and [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md) for Smart Card PIN-based authentication.

## Topics

### Finishing the Operation

- [finishWithError:](tktokenauthoperation/finish%28%29.md): Finishes the authentication operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md)
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Authenticating

- [tokenSession:beginAuthForOperation:constraint:error:](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenOperationConstraint](tktokenoperationconstraint.md): A token’s authentication constraint for a specific operation.
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.
