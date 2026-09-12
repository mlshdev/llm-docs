> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_exit_reason_t](https://developer.apple.com/documentation/hypervisor/hv_exit_reason_t)

# hv_exit_reason_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The type that describes the event that triggered a guest exit to the host.

## Declaration

```swift
struct hv_exit_reason_t
```

## Topics

### Instance Properties

- [rawValue](hv_exit_reason_t/rawvalue.md): The unsigned 32-bit integer that represents virual macine exit reasons.

### Initializers

- [init(\_:)](hv_exit_reason_t/init%28__%29.md): Creates a new exit reason instance with the value you provide.
- [init(rawValue:)](hv_exit_reason_t/init%28rawvalue_%29.md): Creates a new exit reason instance with the value you provide.

### Exit Reasons

- [HV_EXIT_REASON_CANCELED](hv_exit_reason_canceled.md): The value that identifies exits requested by exit handler on the host.
- [HV_EXIT_REASON_EXCEPTION](hv_exit_reason_exception.md): The value that identifies traps caused by the guest operations.
- [HV_EXIT_REASON_VTIMER_ACTIVATED](hv_exit_reason_vtimer_activated.md): The value that identifies when the virtual timer enters the pending state.
- [HV_EXIT_REASON_UNKNOWN](hv_exit_reason_unknown.md): The value that identifies unexpected exits.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Exit reasons

- [hv_exception_syndrome_t](hv_exception_syndrome_t.md): Type of a vCPU exception syndrome.
- [hv_exception_address_t](hv_exception_address_t.md): Type of a vCPU exception virtual address.

# hv_exit_reason_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

The type that describes the event that triggered a guest exit to the host.

## Declaration

```objectivec
typedef enum { ... } hv_exit_reason_t;
```

## Topics

### Exit Reasons

- [HV_EXIT_REASON_CANCELED](hv_exit_reason_canceled.md): The value that identifies exits requested by exit handler on the host.
- [HV_EXIT_REASON_EXCEPTION](hv_exit_reason_exception.md): The value that identifies traps caused by the guest operations.
- [HV_EXIT_REASON_VTIMER_ACTIVATED](hv_exit_reason_vtimer_activated.md): The value that identifies when the virtual timer enters the pending state.
- [HV_EXIT_REASON_UNKNOWN](hv_exit_reason_unknown.md): The value that identifies unexpected exits.

## See Also

### Exit reasons

- [hv_exception_syndrome_t](hv_exception_syndrome_t.md): Type of a vCPU exception syndrome.
- [hv_exception_address_t](hv_exception_address_t.md): Type of a vCPU exception virtual address.
