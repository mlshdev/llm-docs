> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenoperationconstraint](https://developer.apple.com/documentation/cryptotokenkit/tktokenoperationconstraint)

# TKTokenOperationConstraint (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token’s authentication constraint for a specific operation.

## Declaration

```swift
typealias TKTokenOperationConstraint = AnyObject
```

<a id="Discussion"></a>

## Discussion

This object persistently identifies a constraint for performing specific operation on specific object.

- [true](https://developer.apple.com/documentation/swift/true), indicating that the operation is always allowed, without any authentication necessary.
- [false](https://developer.apple.com/documentation/swift/false), indicating that the operation is never allowed; this value isn’t typically used.
- Any other property list compatible value defined by the implementation of the token extension. Any such constraint is required to stay constant for the entire lifetime of the token. For example, a Smart Card token extension may decide to use the string constant `"PIN"` to indicate that the operation is authenticated with valid PIN entry to the card.

## See Also

### Authenticating

- [tokenSession(\_:beginAuthFor:constraint:)](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenAuthOperation](tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.

# TKTokenOperationConstraint (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token’s authentication constraint for a specific operation.

## Declaration

```objectivec
typedef id TKTokenOperationConstraint;
```

<a id="Discussion"></a>

## Discussion

This object persistently identifies a constraint for performing specific operation on specific object.

- [true](https://developer.apple.com/documentation/swift/true), indicating that the operation is always allowed, without any authentication necessary.
- [false](https://developer.apple.com/documentation/swift/false), indicating that the operation is never allowed; this value isn’t typically used.
- Any other property list compatible value defined by the implementation of the token extension. Any such constraint is required to stay constant for the entire lifetime of the token. For example, a Smart Card token extension may decide to use the string constant `"PIN"` to indicate that the operation is authenticated with valid PIN entry to the card.

## See Also

### Authenticating

- [tokenSession:beginAuthForOperation:constraint:error:](tktokensessiondelegate/tokensession%28__beginauthfor_constraint_%29.md): Tells the delegate that authentication has begun for the specified operation and constraint.
- [TKTokenAuthOperation](tktokenauthoperation.md): An authentication operation for a cryptographic token.
- [TKTokenPasswordAuthOperation](tktokenpasswordauthoperation.md): A password-based authentication operation.
- [TKTokenSmartCardPINAuthOperation](tktokensmartcardpinauthoperation.md): A Smart Card PIN authentication operation.
