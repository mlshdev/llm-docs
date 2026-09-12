> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorcodesoftwareupdaterequired/details-data.dictionary/requirebetaprogram-data.dictionary](https://developer.apple.com/documentation/devicemanagement/errorcodesoftwareupdaterequired/details-data.dictionary/requirebetaprogram-data.dictionary)

# ErrorCodeSoftwareUpdateRequired.Details.RequireBetaProgram

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.0+

A dictionary containing details of the beta program.

## Declaration

```
object ErrorCodeSoftwareUpdateRequired.Details.RequireBetaProgram
```

## Properties

- `Description` — `string` (required): A human readable description of the beta program.
- `Token` — `string` (required): The AxM seeding service token for the AxM organization the MDM server is part of. The system uses this token to enroll the device in the corresponding beta program.
