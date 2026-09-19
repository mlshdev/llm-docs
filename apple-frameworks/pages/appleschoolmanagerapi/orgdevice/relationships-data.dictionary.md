> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appleschoolmanagerapi/orgdevice/relationships-data.dictionary

# OrgDevice.Relationships

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Object  
**Availability:** Apple School Manager API 1.7+

The relationships you include in the request, and those that you can operate on.

## Declaration

```
object OrgDevice.Relationships
```

## Properties

- `assignedServer` — `OrgDevice.Relationships.AssignedServer`: The relationship representing a device and its assigned device management service.
- `appleCareCoverage` — `OrgDevice.Relationships.AppleCareCoverage`: The relationship representing a device and its AppleCare Coverage.
- `activationLockStatus` — `OrgDevice.Relationships.ActivationLockStatus`: The relationship representing a device and its Activation Lock status.

## Topics

### Dictionaries

- [OrgDevice.Relationships.ActivationLockStatus](relationships-data.dictionary/activationlockstatus-data.dictionary.md)
- [OrgDevice.Relationships.AppleCareCoverage](relationships-data.dictionary/applecarecoverage-data.dictionary.md)
- [OrgDevice.Relationships.AssignedServer](relationships-data.dictionary/assignedserver-data.dictionary.md): The links that describe the relationship between the resources.
