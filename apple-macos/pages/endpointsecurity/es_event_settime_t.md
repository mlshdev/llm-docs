> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_settime_t](https://developer.apple.com/documentation/endpointsecurity/es_event_settime_t)

# es_event_settime_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the modification of the system time.

## Declaration

```swift
struct es_event_settime_t
```

<a id="overview"></a>

## Overview

The system doesn’t generate this event if the source app contains the entitlement `com.apple.private.settime`.

Even if an Endpoint Security client responds to an [ES_EVENT_TYPE_AUTH_SETTIME](es_event_type_auth_settime.md) event with [ES_AUTH_RESULT_ALLOW](es_auth_result_allow.md), the operation may still fail. For example, the process used to set the time may lack sufficient privileges.

## Topics

### Inspecting Event Properties

- [reserved](es_event_settime_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_settime_t/init%28%29.md)
- [init(reserved:)](es_event_settime_t/init%28reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# es_event_settime_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the modification of the system time.

## Declaration

```objectivec
typedef struct { ... } es_event_settime_t;
```

<a id="overview"></a>

## Overview

The system doesn’t generate this event if the source app contains the entitlement `com.apple.private.settime`.

Even if an Endpoint Security client responds to an [ES_EVENT_TYPE_AUTH_SETTIME](es_event_type_auth_settime.md) event with [ES_AUTH_RESULT_ALLOW](es_auth_result_allow.md), the operation may still fail. For example, the process used to set the time may lack sufficient privileges.

## Topics

### Inspecting Event Properties

- [reserved](es_event_settime_t/reserved.md): An unused field reserved for future use.
