> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/checksums/composite-data.dictionary

# Checksums.Composite

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

A composite checksum covering the entirety of a background asset upload file.

## Declaration

```
object Checksums.Composite
```

## Properties

- `algorithm` — `string`: **Allowed values:** `MD5`
- `hash` — `string`:

## See Also

### Dictionaries

- [Checksums.File](file-data.dictionary.md): A per-file checksum used to verify the integrity of an individual background asset upload file.
