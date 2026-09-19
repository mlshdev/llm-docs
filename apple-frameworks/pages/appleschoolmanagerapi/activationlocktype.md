> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appleschoolmanagerapi/activationlocktype

# ActivationLockType

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Type  
**Availability:** Apple School Manager API 1.7+

Strings that represent the type of Activation Lock on a device.

## Declaration

```
string ActivationLockType
```

## Possible Values

- `MDM`:
- `USER`:
- `NONE`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - MDM: The device is Activation Locked by its device management service.
  - USER: The device is Activation Locked to a personal Apple Account.
  - NONE: The device isn’t Activation Locked.
