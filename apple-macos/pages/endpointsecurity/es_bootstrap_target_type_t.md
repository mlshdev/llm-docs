> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_bootstrap_target_type_t](https://developer.apple.com/documentation/endpointsecurity/es_bootstrap_target_type_t)

# es_bootstrap_target_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
struct es_bootstrap_target_type_t
```

<a id="overview"></a>

## Overview

Discriminator for the `target` union of `es_event_bootstrap_look_up_t`. Selects between a running owner of the looked-up service port (PROCESS) and a lazy-launched or not-yet-running owner (JOB).

## Topics

### Initializers

- [init(\_:)](es_bootstrap_target_type_t/init%28__%29.md)
- [init(rawValue:)](es_bootstrap_target_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_bootstrap_target_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_bootstrap_target_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef enum { ... } es_bootstrap_target_type_t;
```

<a id="overview"></a>

## Overview

Discriminator for the `target` union of `es_event_bootstrap_look_up_t`. Selects between a running owner of the looked-up service port (PROCESS) and a lazy-launched or not-yet-running owner (JOB).

## Topics

### Enumeration Cases

- [ES_BOOTSTRAP_TARGET_TYPE_JOB](es_bootstrap_target_type_job.md)
- [ES_BOOTSTRAP_TARGET_TYPE_PROCESS](es_bootstrap_target_type_process.md)
