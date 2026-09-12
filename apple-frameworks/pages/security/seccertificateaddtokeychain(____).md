> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificateaddtokeychain(_:_:)](https://developer.apple.com/documentation/security/seccertificateaddtokeychain(_:_:))

# SecCertificateAddToKeychain(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+

Adds a certificate to a keychain.

## Declaration

```swift
func SecCertificateAddToKeychain(_ certificate: SecCertificate, _ keychain: SecKeychain?) -> OSStatus
```

## Parameters

- `certificate`: The certificate object for the certificate to add to the keychain.
- `keychain`: The keychain object for the keychain to which you want to add the certificate. Pass `NULL` to add the certificate to the default keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  To add a certificate to the login keychain, use [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) instead.

This function requires a certificate object, which can, for example, be created with the [SecCertificateCreateFromData](seccertificatecreatefromdata.md) function or obtained over a network (see [Secure Transport](secure-transport.md)). If the certificate has already been added to the specified keychain, the function returns [errSecDuplicateItem](errsecduplicateitem.md) and does not add another copy to the keychain. The function looks at the certificate data, not at the certificate object, to determine whether the certificate is a duplicate. It considers two certificates to be duplicates if they have the same primary key attributes.

<a id="Special-Considerations"></a>

### Special Considerations

If the keychain is locked, the system asks the user for a password or other token to unlock it. This function can therefore block while waiting for user input.

# SecCertificateAddToKeychain (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+

Adds a certificate to a keychain.

## Declaration

```objectivec
OSStatus SecCertificateAddToKeychain(SecCertificateRef certificate, SecKeychainRef keychain);
```

## Parameters

- `certificate`: The certificate object for the certificate to add to the keychain.
- `keychain`: The keychain object for the keychain to which you want to add the certificate. Pass `NULL` to add the certificate to the default keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  To add a certificate to the login keychain, use [SecItemAdd](secitemadd%28____%29.md) instead.

This function requires a certificate object, which can, for example, be created with the [SecCertificateCreateFromData](seccertificatecreatefromdata.md) function or obtained over a network (see [Secure Transport](secure-transport.md)). If the certificate has already been added to the specified keychain, the function returns [errSecDuplicateItem](errsecduplicateitem.md) and does not add another copy to the keychain. The function looks at the certificate data, not at the certificate object, to determine whether the certificate is a duplicate. It considers two certificates to be duplicates if they have the same primary key attributes.

<a id="Special-Considerations"></a>

### Special Considerations

If the keychain is locked, the system asks the user for a password or other token to unlock it. This function can therefore block while waiting for user input.
