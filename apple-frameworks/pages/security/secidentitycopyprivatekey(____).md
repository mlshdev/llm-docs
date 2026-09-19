> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secidentitycopyprivatekey(_:_:)

# SecIdentityCopyPrivateKey(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the private key associated with an identity.

## Declaration

```swift
func SecIdentityCopyPrivateKey(_ identityRef: SecIdentity, _ privateKeyRef: UnsafeMutablePointer<SecKey?>) -> OSStatus
```

## Parameters

- `identityRef`: The identity object for the identity whose private key you wish to retrieve.
- `privateKeyRef`: On return, points to the private key object for the specified identity. The private key must be of class type [SecItemClass.privateKeyItemClass](secitemclass/privatekeyitemclass.md). In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Parsing an Identity](parsing-an-identity.md)

<a id="Discussion"></a>

## Discussion

An identity is a digital certificate together with its associated private key.

# SecIdentityCopyPrivateKey (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the private key associated with an identity.

## Declaration

```objectivec
OSStatus SecIdentityCopyPrivateKey(SecIdentityRef identityRef, SecKeyRef*privateKeyRef);
```

## Parameters

- `identityRef`: The identity object for the identity whose private key you wish to retrieve.
- `privateKeyRef`: On return, points to the private key object for the specified identity. The private key must be of class type [kSecPrivateKeyItemClass](secitemclass/privatekeyitemclass.md). In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Parsing an Identity](parsing-an-identity.md)

<a id="Discussion"></a>

## Discussion

An identity is a digital certificate together with its associated private key.
