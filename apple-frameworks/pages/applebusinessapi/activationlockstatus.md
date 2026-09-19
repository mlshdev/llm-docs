> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/activationlockstatus

# ActivationLockStatus

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

The data structure that represents the Activation Lock status of an organization device.

## Declaration

```
object ActivationLockStatus
```

## Properties

- `attributes` — `ActivationLockStatus.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `activationLockStatus`

## Topics

### Dictionaries

- [ActivationLockStatus.Attributes](activationlockstatus/attributes-data.dictionary.md): Attributes for an organization device’s Activation Lock status.
