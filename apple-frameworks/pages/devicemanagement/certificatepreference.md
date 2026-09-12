> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/certificatepreference](https://developer.apple.com/documentation/devicemanagement/certificatepreference)

# CertificatePreference

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12+

The payload that configures a certificate preference.

## Declaration

```
object CertificatePreference
```

## Properties

- `Name` — `string` (required): An email address (in RFC 822 format) or other name for which a preferred certificate is requested.
- `PayloadCertificateUUID` — `string` (required): The UUID of the certificate payload within the same profile to use for the identity credential.

## Mentioned In

- [Implementing Platform SSO during Automated Device Enrollment](implementing-platform-sso-during-automated-device-enrollment.md)

<a id="Discussion"></a>

## Discussion

Specify `com.apple.security.certificatepreference` as the payload type.

A `CertificatePreference` payload lets you identify a certificate preference item in the user’s keychain that references a certificate payload included in the same profile. It can only appear in a user profile, not a device profile. You can include multiple `CertificatePreference` payloads as needed.

See also [IdentityPreference](identitypreference.md)  for information about setting up identity preferences.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | N/A |
| User channel | macOS |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | macOS |
| Allow multiple payloads | macOS |

<a id="Profile-example"></a>

### Profile example

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>Password</key>
            <string>Password123</string>
            <key>PayloadContent</key>
            <data>ExampleD</data>
            <key>PayloadIdentifier</key>
            <string>com.example.mypcertprefpayload</string>
            <key>PayloadType</key>
            <string>com.apple.security.certificatepreference</string>
            <key>PayloadUUID</key>
            <string>d669e184-6312-4214-9ebc-00346809f7f0</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>updated_at_xid</key>
            <integer>23387</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Certificate Preferences</string>
    <key>PayloadIdentifier</key>
    <string>com.example.profile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>89d2e0a7-0821-45c2-a566-c23eb98b137e</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Certificates

- [ACMECertificate](acmecertificate.md): The payload that configures Automated Certificate Management Environment (ACME) settings.
- [ActiveDirectoryCertificate](activedirectorycertificate.md): The payload that configures Active Directory Certificate settings.
- [CertificatePEM](certificatepem.md): The payload that configures a PEM-formatted certificate.
- [CertificatePKCS1](certificatepkcs1.md): The payload that configures a PKCS #1-formatted certificate.
- [CertificatePKCS12](certificatepkcs12.md): The payload that configures a PKCS #12-formatted certificate.
- [CertificateRoot](certificateroot.md): The payload that configures a root certificate.
- [CertificateRevocation](certificaterevocation.md): The payload that configures certificate revocation checking.
- [CertificateTransparency](certificatetransparency.md): The payload that configures certificate transparency enforcement.
- [SCEP](scep.md): The payload that configures Simple Certificate Enrollment Protocol (SCEP) settings.
