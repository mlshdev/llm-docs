> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitycopycertificate(_:_:)](https://developer.apple.com/documentation/security/secidentitycopycertificate(_:_:))

# SecIdentityCopyCertificate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves a certificate associated with an identity.

## Declaration

```swift
func SecIdentityCopyCertificate(_ identityRef: SecIdentity, _ certificateRef: UnsafeMutablePointer<SecCertificate?>) -> OSStatus
```

## Parameters

- `identityRef`: The identity object for the identity whose certificate you wish to retrieve.
- `certificateRef`: On return, points to the certificate object associated with the specified identity. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Parsing an Identity](parsing-an-identity.md)

<a id="Discussion"></a>

## Discussion

An identity is a digital certificate together with its associated private key.

For a certificate in a keychain, you can cast the `SecCertificateRef` data type to a `SecKeychainItemRef` for use with Keychain Services functions.

# SecIdentityCopyCertificate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves a certificate associated with an identity.

## Declaration

```objectivec
OSStatus SecIdentityCopyCertificate(SecIdentityRef identityRef, SecCertificateRef*certificateRef);
```

## Parameters

- `identityRef`: The identity object for the identity whose certificate you wish to retrieve.
- `certificateRef`: On return, points to the certificate object associated with the specified identity. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Parsing an Identity](parsing-an-identity.md)

<a id="Discussion"></a>

## Discussion

An identity is a digital certificate together with its associated private key.

For a certificate in a keychain, you can cast the `SecCertificateRef` data type to a `SecKeychainItemRef` for use with Keychain Services functions.
