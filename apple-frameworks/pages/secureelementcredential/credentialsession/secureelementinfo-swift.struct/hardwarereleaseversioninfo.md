> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/secureelementinfo-swift.struct/hardwarereleaseversioninfo

# hardwareReleaseVersionInfo

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A string that encodes the hardware and software release versions of the Secure Element.

## Declaration

```swift
let hardwareReleaseVersionInfo: String
```

<a id="discussion"></a>

## Discussion

Use this string to determine eligibility or select which applet bundle, previously submitted to [Apple Business Register](https://register.apple.com/login) (ABR), to install on this device.

This string uses the format `"JCOP X.Y"`, with the following semantics:

- **X**: An integer that corresponds to the chip type.
- **Y**: An integer that corresponds to the release iteration.

For more details, see the Mobile Secure Element specification from [ABR](https://register.apple.com/login).

## See Also

### Getting hardware information

- [secureElementPlatformSigningCertificate](secureelementplatformsigningcertificate.md): A certificate you use to authenticate against the Certification Authority of the Secure Element hardware.
