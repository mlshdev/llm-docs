> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertion/rawauthenticatordata

# rawAuthenticatorData (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A byte sequence that contains additional information about the credential.

## Declaration

```swift
var rawAuthenticatorData: Data! { get }
```

<a id="Discussion"></a>

## Discussion

This authenticator data object contains additional information about the credential. To learn more, see the [W3C Web Authentication specification](https://www.w3.org/TR/webauthn-2/#authenticator-data).

## See Also

### Getting the properties

- [signature](signature.md): The signature for the assertion.
- [userID](userid.md): A user identifier for the assertion.

# rawAuthenticatorData (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A byte sequence that contains additional information about the credential.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * rawAuthenticatorData;
```

<a id="Discussion"></a>

## Discussion

This authenticator data object contains additional information about the credential. To learn more, see the [W3C Web Authentication specification](https://www.w3.org/TR/webauthn-2/#authenticator-data).

## See Also

### Getting the properties

- [signature](signature.md): The signature for the assertion.
- [userID](userid.md): A user identifier for the assertion.
