> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appleschoolmanagerapi/activationlockstatus/attributes-data.dictionary

# ActivationLockStatus.Attributes

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Object  
**Availability:** Apple School Manager API 1.7+

Attributes for an organization device’s Activation Lock status.

## Declaration

```
object ActivationLockStatus.Attributes
```

## Properties

- `isLocked` — `boolean`: Whether the device is currently Activation Locked.
- `lockType` — `ActivationLockType`: The type of Activation Lock on the device, if `isLocked` is `true`. Possible values: `MDM`, `USER`, `NONE`

<a id="overview"></a>

## Overview

> **Note**

> When additional attributes are added by Apple, they appear automatically, without requiring a newer version of the API.
