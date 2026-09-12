> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_cs_invalidated_t](https://developer.apple.com/documentation/endpointsecurity/es_event_cs_invalidated_t)

# es_event_cs_invalidated_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the invalidation of a process’ code signing status.

## Declaration

```swift
struct es_event_cs_invalidated_t
```

<a id="overview"></a>

## Overview

Endpoint Security generates this event as a result of removing the `CS_VALID` bit from a process’s CS flags. This occurs in the following situations:

- An invalid page for a process with an otherwise-valid code signature pages in.
- A call to `csops(CS_OPS_MARKINVALID)` explicitly invalidates the process.

Endpoint Security doesn’t generate this event if `CS_HARD` is set, since `CS_HARD` by design prevents the process from becoming invalid.

## Topics

### Inspecting Event Properties

- [reserved](es_event_cs_invalidated_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_cs_invalidated_t/init%28%29.md)
- [init(reserved:)](es_event_cs_invalidated_t/init%28reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_event_cs_invalidated_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the invalidation of a process’ code signing status.

## Declaration

```objectivec
typedef struct { ... } es_event_cs_invalidated_t;
```

<a id="overview"></a>

## Overview

Endpoint Security generates this event as a result of removing the `CS_VALID` bit from a process’s CS flags. This occurs in the following situations:

- An invalid page for a process with an otherwise-valid code signature pages in.
- A call to `csops(CS_OPS_MARKINVALID)` explicitly invalidates the process.

Endpoint Security doesn’t generate this event if `CS_HARD` is set, since `CS_HARD` by design prevents the process from becoming invalid.

## Topics

### Inspecting Event Properties

- [reserved](es_event_cs_invalidated_t/reserved.md): An unused field reserved for future use.
