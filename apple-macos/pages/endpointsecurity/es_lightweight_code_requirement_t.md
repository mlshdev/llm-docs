> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_lightweight_code_requirement_t](https://developer.apple.com/documentation/endpointsecurity/es_lightweight_code_requirement_t)

# es_lightweight_code_requirement_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
struct es_lightweight_code_requirement_t
```

<a id="overview"></a>

## Overview

Identity facts cached from a service’s Lightweight Code Requirement (LWCR) — the code-signing constraint launchd was told to enforce when the service binary spawns.

Used as a nullable pointer on the JOB arm of `es_event_bootstrap_look_up_t.target`: NULL means launchd had no LWCR cached for this service, distinct from “LWCR was present but carried no team_id / signing_id” (which would be a non-NULL pointer with the corresponding string token’s `data` field set to NULL).

The PROCESS arm omits this struct entirely — the receiving process’s actual code-signing identity is available via `target.process.target->signing_id` / `->team_id` (kernel-sourced from cs_ops on the audit token).

Both string token fields preserve the three-state distinction common to optional ES strings: `data == NULL` (the LWCR did not carry this fact), `data != NULL && length == 0` (carried an empty value), and `data != NULL && length > 0` (carried a value).

```
               is NULL when the LWCR did not carry this fact.
```

```
               `data` is NULL when the LWCR did not carry this
               fact.
```

## Topics

### Initializers

- [init()](es_lightweight_code_requirement_t/init%28%29.md)
- [init(team_id:signing_id:)](es_lightweight_code_requirement_t/init%28team_id_signing_id_%29.md)

### Instance Properties

- [signing_id](es_lightweight_code_requirement_t/signing_id.md)
- [team_id](es_lightweight_code_requirement_t/team_id.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# es_lightweight_code_requirement_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef struct { ... } es_lightweight_code_requirement_t;
```

<a id="overview"></a>

## Overview

Identity facts cached from a service’s Lightweight Code Requirement (LWCR) — the code-signing constraint launchd was told to enforce when the service binary spawns.

Used as a nullable pointer on the JOB arm of `es_event_bootstrap_look_up_t.target`: NULL means launchd had no LWCR cached for this service, distinct from “LWCR was present but carried no team_id / signing_id” (which would be a non-NULL pointer with the corresponding string token’s `data` field set to NULL).

The PROCESS arm omits this struct entirely — the receiving process’s actual code-signing identity is available via `target.process.target->signing_id` / `->team_id` (kernel-sourced from cs_ops on the audit token).

Both string token fields preserve the three-state distinction common to optional ES strings: `data == NULL` (the LWCR did not carry this fact), `data != NULL && length == 0` (carried an empty value), and `data != NULL && length > 0` (carried a value).

```
               is NULL when the LWCR did not carry this fact.
```

```
               `data` is NULL when the LWCR did not carry this
               fact.
```

## Topics

### Instance Properties

- [signing_id](es_lightweight_code_requirement_t/signing_id.md)
- [team_id](es_lightweight_code_requirement_t/team_id.md)
