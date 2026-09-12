> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_bootstrap_check_in_t](https://developer.apple.com/documentation/endpointsecurity/es_event_bootstrap_check_in_t)

# es_event_bootstrap_check_in_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
struct es_event_bootstrap_check_in_t
```

<a id="overview"></a>

## Overview

A process called `bootstrap_check_in()` to register a named service port with launchd. Subsequent `bootstrap_look_up()` calls from other processes will resolve the registered name into a send right to this port.

```
   Submitted by launchd on behalf of the instigator.

   Because launchd is the submitter, the enclosing message's
   `es_message_t.process` describes launchd, not the process that
   called `bootstrap_check_in()`. The actual caller is reported as
   `instigator` / `instigator_token` below.
```

```
                    `bootstrap_check_in()`. Best-effort; may be null if
                    the instigator exited before the event was
                    constructed.
```

```
                    at RPC time. Always present.
```

> **Note**

> This event type does not support caching.

## Topics

### Initializers

- [init()](es_event_bootstrap_check_in_t/init%28%29.md)
- [init(instigator:instigator_token:service_name:)](es_event_bootstrap_check_in_t/init%28instigator_instigator_token_service_name_%29.md)

### Instance Properties

- [instigator](es_event_bootstrap_check_in_t/instigator.md)
- [instigator_token](es_event_bootstrap_check_in_t/instigator_token.md)
- [service_name](es_event_bootstrap_check_in_t/service_name.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# es_event_bootstrap_check_in_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef struct { ... } es_event_bootstrap_check_in_t;
```

<a id="overview"></a>

## Overview

A process called `bootstrap_check_in()` to register a named service port with launchd. Subsequent `bootstrap_look_up()` calls from other processes will resolve the registered name into a send right to this port.

```
   Submitted by launchd on behalf of the instigator.

   Because launchd is the submitter, the enclosing message's
   `es_message_t.process` describes launchd, not the process that
   called `bootstrap_check_in()`. The actual caller is reported as
   `instigator` / `instigator_token` below.
```

```
                    `bootstrap_check_in()`. Best-effort; may be null if
                    the instigator exited before the event was
                    constructed.
```

```
                    at RPC time. Always present.
```

> **Note**

> This event type does not support caching.

## Topics

### Instance Properties

- [instigator](es_event_bootstrap_check_in_t/instigator.md)
- [instigator_token](es_event_bootstrap_check_in_t/instigator_token.md)
- [service_name](es_event_bootstrap_check_in_t/service_name.md)
