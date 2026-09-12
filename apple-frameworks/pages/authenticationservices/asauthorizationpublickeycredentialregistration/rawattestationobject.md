> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialregistration/rawattestationobject](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialregistration/rawattestationobject)

# rawAttestationObject (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A data object that contains the returned attestation.

## Declaration

```swift
var rawAttestationObject: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This object contains the public key. If you request it, it also contains the attestation statement. To learn more, see the [W3C Web Authentication specification](https://www.w3.org/TR/webauthn-2/#attestation-object).

# rawAttestationObject (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A data object that contains the returned attestation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * rawAttestationObject;
```

<a id="Discussion"></a>

## Discussion

This object contains the public key. If you request it, it also contains the attestation statement. To learn more, see the [W3C Web Authentication specification](https://www.w3.org/TR/webauthn-2/#attestation-object).
