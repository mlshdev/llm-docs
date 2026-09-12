> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_exit_t](https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_t)

# hv_vcpu_exit_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

Information about an exit from the vCPU to the host.

## Declaration

```swift
struct hv_vcpu_exit_t
```

## Topics

### Instance Properties

- [exception](hv_vcpu_exit_t/exception.md): Information about an exit exception from the vcpu to the host.
- [reason](hv_vcpu_exit_t/reason.md): Information about an exit from the vcpu to the host.

### Initializers

- [init()](hv_vcpu_exit_t/init%28%29.md): Creates a new exit reason structure.
- [init(reason:exception:)](hv_vcpu_exit_t/init%28reason_exception_%29.md): Creates a new virtual cpu exit structure with a reason and exception that you provide.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# hv_vcpu_exit_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

Information about an exit from the vCPU to the host.

## Declaration

```objectivec
typedef struct { ... } hv_vcpu_exit_t;
```

## Topics

### Instance Properties

- [exception](hv_vcpu_exit_t/exception.md): Information about an exit exception from the vcpu to the host.
- [reason](hv_vcpu_exit_t/reason.md): Information about an exit from the vcpu to the host.
