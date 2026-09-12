> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_exit_reason_vtimer_activated](https://developer.apple.com/documentation/hypervisor/hv_exit_reason_vtimer_activated)

# HV_EXIT_REASON_VTIMER_ACTIVATED (Swift)

**Framework:** Hypervisor  
**Kind:** Global Variable  
**Availability:** macOS

The value that identifies when the virtual timer enters the pending state.

## Declaration

```swift
var HV_EXIT_REASON_VTIMER_ACTIVATED: hv_exit_reason_t { get }
```

## See Also

### Exit Reasons

- [HV_EXIT_REASON_CANCELED](hv_exit_reason_canceled.md): The value that identifies exits requested by exit handler on the host.
- [HV_EXIT_REASON_EXCEPTION](hv_exit_reason_exception.md): The value that identifies traps caused by the guest operations.
- [HV_EXIT_REASON_UNKNOWN](hv_exit_reason_unknown.md): The value that identifies unexpected exits.

# HV_EXIT_REASON_VTIMER_ACTIVATED (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration Case  
**Availability:** macOS

The value that identifies when the virtual timer enters the pending state.

## Declaration

```objectivec
HV_EXIT_REASON_VTIMER_ACTIVATED
```

## See Also

### Exit Reasons

- [HV_EXIT_REASON_CANCELED](hv_exit_reason_canceled.md): The value that identifies exits requested by exit handler on the host.
- [HV_EXIT_REASON_EXCEPTION](hv_exit_reason_exception.md): The value that identifies traps caused by the guest operations.
- [HV_EXIT_REASON_UNKNOWN](hv_exit_reason_unknown.md): The value that identifies unexpected exits.
