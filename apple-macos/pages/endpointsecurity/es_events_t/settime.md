> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_events_t/settime](https://developer.apple.com/documentation/endpointsecurity/es_events_t/settime)

# settime (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates the modification of the system time.

## Declaration

```swift
var settime: es_event_settime_t { get set }
```

<a id="Discussion"></a>

## Discussion

The system won’t fire this event if the source app contains the entitlement `com.apple.private.settime`.

Even if an Endpoint Security client responds to an [ES_EVENT_TYPE_AUTH_SETTIME](../es_event_type_auth_settime.md) event with [ES_AUTH_RESULT_ALLOW](../es_auth_result_allow.md), the operation may still fail. For example, the process setting the time may lack sufficient privileges.

# settime (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

Properties of an event that indicates the modification of the system time.

## Declaration

```objectivec
es_event_settime_t settime;
```

<a id="Discussion"></a>

## Discussion

The system won’t fire this event if the source app contains the entitlement `com.apple.private.settime`.

Even if an Endpoint Security client responds to an [ES_EVENT_TYPE_AUTH_SETTIME](../es_event_type_auth_settime.md) event with [ES_AUTH_RESULT_ALLOW](../es_auth_result_allow.md), the operation may still fail. For example, the process setting the time may lack sufficient privileges.
