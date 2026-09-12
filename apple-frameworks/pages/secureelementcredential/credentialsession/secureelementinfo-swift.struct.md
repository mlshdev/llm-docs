> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/secureelementinfo-swift.struct](https://developer.apple.com/documentation/secureelementcredential/credentialsession/secureelementinfo-swift.struct)

# CredentialSession.SecureElementInfo

**Framework:** SecureElementCredential  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A type that provides information about the Secure Element hardware.

## Declaration

```swift
struct SecureElementInfo
```

## Topics

### Getting hardware information

- [hardwareReleaseVersionInfo](secureelementinfo-swift.struct/hardwarereleaseversioninfo.md): A string that encodes the hardware and software release versions of the Secure Element.
- [secureElementPlatformSigningCertificate](secureelementinfo-swift.struct/secureelementplatformsigningcertificate.md): A certificate you use to authenticate against the Certification Authority of the Secure Element hardware.

### Instance Properties

- [platformIdentifier](secureelementinfo-swift.struct/platformidentifier.md): A unique identifier that describes the hardware and operating system combination of a device, along with its version information.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Accessing hardware information

- [secureElementInfo](secureelementinfo-swift.property.md): A property that provides information about the Secure Element hardware.
