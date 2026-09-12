> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/certificaterevocation/subjectpublickeyinfohashdict](https://developer.apple.com/documentation/devicemanagement/certificaterevocation/subjectpublickeyinfohashdict)

# CertificateRevocation.SubjectPublicKeyInfoHashDict

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · visionOS 1.1+

A dictionary of hashed public keys.

## Declaration

```
object CertificateRevocation.SubjectPublicKeyInfoHashDict
```

## Properties

- `Algorithm` — `string` (required): The algorithm must be `sha256`.
  **Allowed values:** `sha256`
- `Hash` — `data` (required): The hash of the DER-encoding of the certificate’s `subjectPublicKeyInfo`.

  The hash field requires the data (`subjectPublicKeyInfo` hash) in a specific format: a Base64 encoded (binary) SHA-256 hash of the certificate’s public key.
