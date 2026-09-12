> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/certificatetransparency/subjectpublickeyinfohashdict](https://developer.apple.com/documentation/devicemanagement/certificatetransparency/subjectpublickeyinfohashdict)

# CertificateTransparency.SubjectPublicKeyInfoHashDict

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 12.1.1+ · iPadOS 12.1.1+ · Mac Catalyst 12.1.1+ · macOS 10.14.2+ · tvOS 12.1.1+ · visionOS 1.0+ · watchOS 5.1.1+

A dictionary of hashed public keys.

## Declaration

```
object CertificateTransparency.SubjectPublicKeyInfoHashDict
```

## Properties

- `Algorithm` — `string` (required): The algorithm must be `sha256`.
  **Allowed values:** `sha256`
- `Hash` — `data` (required): The hash of the DER-encoding of the certificate’s `subjectPublicKeyInfo`.

  The hash field requires the data (`subjectPublicKeyInfo` hash) in a specific format: a Base64 encoded (binary) SHA-256 hash of the certificate’s public key.
