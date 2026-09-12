> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/acmecertificate/subjectaltname-data.dictionary](https://developer.apple.com/documentation/devicemanagement/acmecertificate/subjectaltname-data.dictionary)

# ACMECertificate.SubjectAltName

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.1+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The subject’s alternative name details.

## Declaration

```
object ACMECertificate.SubjectAltName
```

## Properties

- `dNSName` — `string`: The DNS name.
- `ntPrincipalName` — `string`: The NT principal name. Use an other name OID set to `1.3.6.1.4.1.311.20.2.3`.
- `rfc822Name` — `string`: The RFC 822 (email address) string.
- `uniformResourceIdentifier` — `string`: The Uniform Resource Identifier.
