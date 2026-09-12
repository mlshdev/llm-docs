> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/certificatepkcs1](https://developer.apple.com/documentation/devicemanagement/certificatepkcs1)

# CertificatePKCS1

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The payload that configures a PKCS #1-formatted certificate.

## Declaration

```
object CertificatePKCS1
```

## Properties

- `PayloadCertificateFileName` — `string`: The file name of the enclosed certificate.
- `PayloadContent` — `data` (required): The binary representation of the payload, encoded in Base64.

## Mentioned In

- [Implementing Platform SSO during Automated Device Enrollment](implementing-platform-sso-during-automated-device-enrollment.md)

<a id="Discussion"></a>

## Discussion

Specify `com.apple.security.pkcs1` as the payload type.

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

<a id="Example-profile"></a>

### Example profile

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadCertificateFileName</key>
            <string>example-certificate.cer</string>
            <key>PayloadContent</key>
            <data>
            MIIDXTCCAkWgAwIBAgIJAKoK/heBjcOuMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV
            BAYTAkNBMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBX
            aWRnaXRzIFB0eSBMdGQwHhcNMjQwMTA1MjMwMDAwWhcNMjUwMTA1MjMwMDAwWjBF
            MQswCQYDVQQGEwJDQTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50
            ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
            CgKCAQEA3VoPN9PKUjKFLMwOge6+G/T8+J8vJKHjadgNkK5HKaVFxnC1JJ8FLZ2K
            7qtgzbhI8WnqK3r5PjM+ZA5k8sW8e7VhqYi2gDhNJqFRe4XKqL9U7LnG5i9jHHk1
            2nNSJd8HLZ8sW8e7VhqYi2gDhNJqFRe4XKqL9U7LnG5i9jHHk12nNSJd8HLZ8s7K
            qtgzbhI8WnqK3r5PjM+ZA5k8sW8e7VhqYi2gDhNJqFRe4XKqL9U7LnG5i9jHHk12
            nNSJd8HLZZ2K7qtgzbhI8WnqK3r5PjM+ZA5k8sW8e7VhqYi2gDhNJqFRe4XKqL9U
            7LnG5i9jHHk12nNSJd8HLZ8sW8e7VhqYi2gDhNJqFRQIDAQABo1AwTjAdBgNVHQ4E
            FgQUhKM6j7nHOBxp0eDe/N9vI4C/JM8wHwYDVR0jBBgwFoAUhKM6j7nHOBxp0eDe
            /N9vI4C/JM8wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEA2Z8B+vMT
            eW+/IEE8sJ8rI4w/b6VhW+j2R1L7R4m8tVz7qRxW2g3J8VzR8l1fYQ7p7R2kZ8u7
            5nR4gF8sJ8rI4w/b6VhW+j2R1L7R4m8tVz7qRxW2g3J8VzR8l1fYQ7p7R2kZ8u75
            nR4gF8sJ8rI4w/b6VhW+j2R1L7R4m8tVz7qRxW2g3J8VzR8l1fYQ7p7R2kZ8u75n
            R4gF8sJ8rI4w/b6VhW+j2R1L7R4m8tVz7qRxW2g3J8VzR8l1fYQ7p7R2kZ8u75nR
            4gF8sJ8rI4w==
            </data>
            <key>PayloadDisplayName</key>
            <string>CertificatePKCS1</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mycertpkcs1payload</string>
            <key>PayloadType</key>
            <string>com.apple.security.pkcs1</string>
            <key>PayloadUUID</key>
            <string>72d2c549-2a97-4032-b818-d8ebf7cb88f2</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>CertificatePKCS1</string>
    <key>PayloadIdentifier</key>
    <string>com.example.profile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>d7d678c5-87ea-457d-82b9-25db21cd7868</string>
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
- [CertificatePKCS12](certificatepkcs12.md): The payload that configures a PKCS #12-formatted certificate.
- [CertificateRoot](certificateroot.md): The payload that configures a root certificate.
- [CertificatePreference](certificatepreference.md): The payload that configures a certificate preference.
- [CertificateRevocation](certificaterevocation.md): The payload that configures certificate revocation checking.
- [CertificateTransparency](certificatetransparency.md): The payload that configures certificate transparency enforcement.
- [SCEP](scep.md): The payload that configures Simple Certificate Enrollment Protocol (SCEP) settings.
