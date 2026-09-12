> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags/privatekeyusage](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/privatekeyusage)

# privateKeyUsage (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enable a private key to be used in signing a block of data or verifying a signed block.

## Declaration

```swift
static var privateKeyUsage: SecAccessControlCreateFlags { get }
```

## Mentioned In

- [Protecting keys with the Secure Enclave](../protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

This option can be combined with any other access control flags.

You typically use this constraint when you create a key pair and store the private key inside a device’s Secure Enclave (by specifying the [kSecAttrTokenID](../ksecattrtokenid.md) attribute with a value of [kSecAttrTokenIDSecureEnclave](../ksecattrtokenidsecureenclave.md)). This makes the private key available for use in signing and verification tasks that happen inside the Secure Enclave with calls to the [SecKeyRawSign(\_:\_:\_:\_:\_:\_:)](../seckeyrawsign%28____________%29.md) and [SecKeyRawVerify(\_:\_:\_:\_:\_:\_:)](../seckeyrawverify%28____________%29.md) functions. An attempt to use this constraint while generating a key pair outside the Secure Enclave fails. Similarly, an attempt to sign a block with a private key generated without this constraint inside the Secure Enclave fails.

# kSecAccessControlPrivateKeyUsage (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enable a private key to be used in signing a block of data or verifying a signed block.

## Declaration

```objectivec
kSecAccessControlPrivateKeyUsage
```

## Mentioned In

- [Protecting keys with the Secure Enclave](../protecting-keys-with-the-secure-enclave.md)

<a id="Discussion"></a>

## Discussion

This option can be combined with any other access control flags.

You typically use this constraint when you create a key pair and store the private key inside a device’s Secure Enclave (by specifying the [kSecAttrTokenID](../ksecattrtokenid.md) attribute with a value of [kSecAttrTokenIDSecureEnclave](../ksecattrtokenidsecureenclave.md)). This makes the private key available for use in signing and verification tasks that happen inside the Secure Enclave with calls to the [SecKeyRawSign](../seckeyrawsign%28____________%29.md) and [SecKeyRawVerify](../seckeyrawverify%28____________%29.md) functions. An attempt to use this constraint while generating a key pair outside the Secure Enclave fails. Similarly, an attempt to sign a block with a private key generated without this constraint inside the Secure Enclave fails.
