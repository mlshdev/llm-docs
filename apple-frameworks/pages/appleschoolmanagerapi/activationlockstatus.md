> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appleschoolmanagerapi/activationlockstatus

# ActivationLockStatus

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Object  
**Availability:** Apple School Manager API 1.7+

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
