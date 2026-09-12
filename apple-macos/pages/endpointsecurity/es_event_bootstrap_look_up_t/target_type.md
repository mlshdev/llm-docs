> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_bootstrap_look_up_t/target_type](https://developer.apple.com/documentation/endpointsecurity/es_event_bootstrap_look_up_t/target_type)

# target_type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
var target_type: es_bootstrap_target_type_t
```

<a id="discussion"></a>

## Discussion

Discriminator for the `target` union of `es_event_bootstrap_look_up_t`. Selects between a running owner of the looked-up service port (PROCESS) and a lazy-launched or not-yet-running owner (JOB).

# target_type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
es_bootstrap_target_type_t target_type;
```

<a id="discussion"></a>

## Discussion

Discriminator for the `target` union of `es_event_bootstrap_look_up_t`. Selects between a running owner of the looked-up service port (PROCESS) and a lazy-launched or not-yet-running owner (JOB).
