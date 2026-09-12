> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorcodepairingtokenmissing/details-data.dictionary](https://developer.apple.com/documentation/devicemanagement/errorcodepairingtokenmissing/details-data.dictionary)

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
