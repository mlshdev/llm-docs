> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secidentitycreatewithcertificate(_:_:_:)](https://developer.apple.com/documentation/security/secidentitycreatewithcertificate(_:_:_:))

# SecIdentityCreateWithCertificate(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a new identity for a certificate and its associated private key.

## Declaration

```swift
func SecIdentityCreateWithCertificate(_ keychainOrArray: CFTypeRef?, _ certificateRef: SecCertificate, _ identityRef: UnsafeMutablePointer<SecIdentity?>) -> OSStatus
```

## Parameters

- `keychainOrArray`: A reference to a keychain or an array of keychains to search for the associated private key. Specify `NULL` to search the user’s default keychain search list.
- `certificateRef`: The certificate for which you want to create an identity.
- `identityRef`: On return, an identity object for the certificate and its associated private key. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Creating an Identity](creating-an-identity.md)

<a id="Discussion"></a>

## Discussion

If the associated private key is not found in one of the specified keychains, this function fails with an appropriate error code (usually [errSecItemNotFound](errsecitemnotfound.md)), and does not return anything in the `identityRef` parameter.

# SecIdentityCreateWithCertificate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a new identity for a certificate and its associated private key.

## Declaration

```objectivec
OSStatus SecIdentityCreateWithCertificate(CFTypeRef keychainOrArray, SecCertificateRef certificateRef, SecIdentityRef*identityRef);
```

## Parameters

- `keychainOrArray`: A reference to a keychain or an array of keychains to search for the associated private key. Specify `NULL` to search the user’s default keychain search list.
- `certificateRef`: The certificate for which you want to create an identity.
- `identityRef`: On return, an identity object for the certificate and its associated private key. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Creating an Identity](creating-an-identity.md)

<a id="Discussion"></a>

## Discussion

If the associated private key is not found in one of the specified keychains, this function fails with an appropriate error code (usually [errSecItemNotFound](errsecitemnotfound.md)), and does not return anything in the `identityRef` parameter.
