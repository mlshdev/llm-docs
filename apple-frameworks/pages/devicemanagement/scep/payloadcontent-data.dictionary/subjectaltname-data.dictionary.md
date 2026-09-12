> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scep/payloadcontent-data.dictionary/subjectaltname-data.dictionary](https://developer.apple.com/documentation/devicemanagement/scep/payloadcontent-data.dictionary/subjectaltname-data.dictionary)

# SCEP.PayloadContent.SubjectAltName

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An optional dictionary that provides values required by the CA for issuing a certificate.

## Declaration

```
object SCEP.PayloadContent.SubjectAltName
```

## Properties

- `dNSName` — `string`: The DNS name.
- `ntPrincipalName` — `string`: The NT principal name. Use an other name OID set to `1.3.6.1.4.1.311.20.2.3`.
- `rfc822Name` — `string`: The RFC 822 (email address) string.
- `uniformResourceIdentifier` — `string`: The Uniform Resource Identifier.
