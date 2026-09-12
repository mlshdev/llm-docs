> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/softwareupdatesettingsbeta_requireprogramobject](https://developer.apple.com/documentation/devicemanagement/softwareupdatesettingsbeta_requireprogramobject)

# SoftwareUpdateSettingsBeta_RequireProgramObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.4+

The device automatically enrolls in this beta program. This key must only be present if the `ProgramEnrollment` key is set to `AlwaysOn`. The `OfferPrograms` key must not be present if this key is present.

## Declaration

```
object SoftwareUpdateSettingsBeta_RequireProgramObject
```

## Properties

- `Description` — `string` (required): A human readable description of the beta program.
- `Token` — `string` (required): The Apple School Manager or Apple Business seeding service token for the organization the MDM server is part of. The system uses this token to enroll the device in the corresponding beta program.

## See Also

### Objects

- [SoftwareUpdateSettingsBeta_ProgramObject](softwareupdatesettingsbeta_programobject.md): The name and token associated with a specific beta program to be allowed.
