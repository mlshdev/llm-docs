> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scep](https://developer.apple.com/documentation/devicemanagement/scep)

# SCEP

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The payload that configures Simple Certificate Enrollment Protocol (SCEP) settings.

## Declaration

```
object SCEP
```

## Properties

- `PayloadContent` — `SCEP.PayloadContent` (required): A dictionary containing the SCEP information.

## Mentioned In

- [Implementing Platform SSO during Automated Device Enrollment](implementing-platform-sso-during-automated-device-enrollment.md)

<a id="Discussion"></a>

## Discussion

Specify `com.apple.security.scep` as the payload type.

A SCEP payload automates the request of a client certificate from a SCEP server, as described in [Over-the-Air Profile Delivery and Configuration](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/iPhoneOTAConfiguration/Introduction/Introduction.html).

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | macOS |
| Allow manual install | iOS, macOS, tvOS, visionOS, watchOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |
| Allow multiple payloads | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |

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
            <key>PayloadContent</key>
            <dict>
                <key>Challenge</key>
                <string>Example</string>
                <key>Key Type</key>
                <string>RSA</string>
                <key>Key Usage</key>
                <integer>5</integer>
                <key>Keysize</key>
                <integer>0</integer>
                <key>Name</key>
                <string>example.org</string>
                <key>Subject</key>
                <array>
                    <array>
                        <array>
                            <string>C</string>
                            <string>US</string>
                        </array>
                        <array>
                            <string>O</string>
                            <string>Example Inc.</string>
                        </array>
                        <array>
                            <string>CN</string>
                            <string>foo</string>
                        </array>
                        <array>
                            <string>1.2.5.3</string>
                            <string>bar</string>
                        </array>
                    </array>
                </array>
                <key>SubjectAltName</key>
                <dict>
                    <key>dNSName</key>
                    <string>example.com</string>
                    <key>ntPrincipalName</key>
                    <string>hostname.example.com</string>
                </dict>
                <key>URL</key>
                <string>https://hostname.example.com/</string>
            </dict>
            <key>PayloadIdentifier</key>
            <string>com.example.myscepcertpayload</string>
            <key>PayloadType</key>
            <string>com.apple.security.scep</string>
            <key>PayloadUUID</key>
            <string>c0264fd7-1d89-4385-8806-759fbe78a622</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>SCEP Certificate</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>bc0328a9-c199-4572-9e5e-ed59a73454fa</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [SCEP.PayloadContent](scep/payloadcontent-data.dictionary.md): The SCEP dictionary.

## See Also

### Certificates

- [ACMECertificate](acmecertificate.md): The payload that configures Automated Certificate Management Environment (ACME) settings.
- [ActiveDirectoryCertificate](activedirectorycertificate.md): The payload that configures Active Directory Certificate settings.
- [CertificatePEM](certificatepem.md): The payload that configures a PEM-formatted certificate.
- [CertificatePKCS1](certificatepkcs1.md): The payload that configures a PKCS #1-formatted certificate.
- [CertificatePKCS12](certificatepkcs12.md): The payload that configures a PKCS #12-formatted certificate.
- [CertificateRoot](certificateroot.md): The payload that configures a root certificate.
- [CertificatePreference](certificatepreference.md): The payload that configures a certificate preference.
- [CertificateRevocation](certificaterevocation.md): The payload that configures certificate revocation checking.
- [CertificateTransparency](certificatetransparency.md): The payload that configures certificate transparency enforcement.
