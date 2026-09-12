> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_bootstrap_look_up_t](https://developer.apple.com/documentation/endpointsecurity/es_event_bootstrap_look_up_t)

# es_event_bootstrap_look_up_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
struct es_event_bootstrap_look_up_t
```

<a id="overview"></a>

## Overview

A process called `bootstrap_look_up()` to resolve a named service port registered with launchd. launchd returns a send right to that port; subsequent `mach_msg()` calls to it are delivered to the owner of the corresponding receive right.

```
   Submitted by launchd on behalf of the instigator.

   Because launchd is the submitter, the enclosing message's
   `es_message_t.process` describes launchd, not the process that
   called `bootstrap_look_up()`. The actual caller is reported as
   `instigator` / `instigator_token` below.
```

```
                    `bootstrap_look_up()`. Best-effort; may be null
                    if the instigator exited before the event was
                    constructed.
```

```
                    launchd at RPC time. Always present.
```

```
                    between a running owner (PROCESS) and a
                    lazy-launched owner (JOB).
```

```
                    messages sent to the returned port if the
                    lookup is allowed.

                    On the PROCESS arm, `target` (es_process_t)
                    carries the live owner's full process info
                    including code-signing identity
                    (target->signing_id, target->team_id) sourced
                    from the kernel. No identity from launchd's
                    cached Lightweight Code Requirement (LWCR) is
                    reported on this arm — read it from the
                    es_process_t.

                    On the JOB arm there is no live process, so
                    the only available identity is the LWCR
                    launchd had configured (if any). `lwcr` is a
                    nullable pointer: NULL when no LWCR was cached
                    for this service.
```

> **Note**

> This event type does not support caching.

## Topics

### Initializers

- [init()](es_event_bootstrap_look_up_t/init%28%29.md)
- [init(instigator:instigator_token:service_name:target_type:target:)](es_event_bootstrap_look_up_t/init%28instigator_instigator_token_service_name_target_type_target_%29.md)

### Instance Properties

- [instigator](es_event_bootstrap_look_up_t/instigator.md)
- [instigator_token](es_event_bootstrap_look_up_t/instigator_token.md)
- [service_name](es_event_bootstrap_look_up_t/service_name.md)
- [target](es_event_bootstrap_look_up_t/target.md)
- [target_type](es_event_bootstrap_look_up_t/target_type.md)

# es_event_bootstrap_look_up_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
typedef struct { ... } es_event_bootstrap_look_up_t;
```

<a id="overview"></a>

## Overview

A process called `bootstrap_look_up()` to resolve a named service port registered with launchd. launchd returns a send right to that port; subsequent `mach_msg()` calls to it are delivered to the owner of the corresponding receive right.

```
   Submitted by launchd on behalf of the instigator.

   Because launchd is the submitter, the enclosing message's
   `es_message_t.process` describes launchd, not the process that
   called `bootstrap_look_up()`. The actual caller is reported as
   `instigator` / `instigator_token` below.
```

```
                    `bootstrap_look_up()`. Best-effort; may be null
                    if the instigator exited before the event was
                    constructed.
```

```
                    launchd at RPC time. Always present.
```

```
                    between a running owner (PROCESS) and a
                    lazy-launched owner (JOB).
```

```
                    messages sent to the returned port if the
                    lookup is allowed.

                    On the PROCESS arm, `target` (es_process_t)
                    carries the live owner's full process info
                    including code-signing identity
                    (target->signing_id, target->team_id) sourced
                    from the kernel. No identity from launchd's
                    cached Lightweight Code Requirement (LWCR) is
                    reported on this arm — read it from the
                    es_process_t.

                    On the JOB arm there is no live process, so
                    the only available identity is the LWCR
                    launchd had configured (if any). `lwcr` is a
                    nullable pointer: NULL when no LWCR was cached
                    for this service.
```

> **Note**

> This event type does not support caching.

## Topics

### Instance Properties

- [instigator](es_event_bootstrap_look_up_t/instigator.md)
- [instigator_token](es_event_bootstrap_look_up_t/instigator_token.md)
- [service_name](es_event_bootstrap_look_up_t/service_name.md)
- [target](es_event_bootstrap_look_up_t/target.md)
- [target_type](es_event_bootstrap_look_up_t/target_type.md)
