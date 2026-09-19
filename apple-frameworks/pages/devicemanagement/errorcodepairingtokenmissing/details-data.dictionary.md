> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/errorcodepairingtokenmissing/details-data.dictionary

# ErrorCodePairingTokenMissing.Details

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** watchOS 10.0+

A dictionary that contains additional data about the token-missing error code.

## Declaration

```
object ErrorCodePairingTokenMissing.Details
```

## Properties

- `security-token` — `string` (required): The security token to pass to the phone’s MDM server to create the pairing token. This token needs to be a random UUID string.
