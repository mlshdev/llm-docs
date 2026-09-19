> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/secureelementinfo-swift.struct/secureelementplatformsigningcertificate

# secureElementPlatformSigningCertificate

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A certificate you use to authenticate against the Certification Authority of the Secure Element hardware.

## Declaration

```swift
let secureElementPlatformSigningCertificate: Data
```

<a id="discussion"></a>

## Discussion

This certificate contains Controlling Authority Security Domain public key information for authenticating a Secure Element Platform.

For more details, see the Mobile Secure Element specification from [Apple Business Register](https://register.apple.com/login).

## See Also

### Getting hardware information

- [hardwareReleaseVersionInfo](hardwarereleaseversioninfo.md): A string that encodes the hardware and software release versions of the Secure Element.
