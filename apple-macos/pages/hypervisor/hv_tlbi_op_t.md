> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_tlbi_op_t](https://developer.apple.com/documentation/hypervisor/hv_tlbi_op_t)

# hv_tlbi_op_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS 27.0+

## Declaration

```swift
struct hv_tlbi_op_t
```

<a id="overview"></a>

## Overview

TLB invalidation operations for hv_vcpu_invalidate_tlb().

## Topics

### Initializers

- [init(\_:)](hv_tlbi_op_t/init%28__%29.md)
- [init(rawValue:)](hv_tlbi_op_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](hv_tlbi_op_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# hv_tlbi_op_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
typedef enum { ... } hv_tlbi_op_t;
```

<a id="overview"></a>

## Overview

TLB invalidation operations for hv_vcpu_invalidate_tlb().

## Topics

### Enumeration Cases

- [HV_TLBI_OP_ASIDE1IS](hv_tlbi_op_aside1is.md)
- [HV_TLBI_OP_RVAAE1IS](hv_tlbi_op_rvaae1is.md)
- [HV_TLBI_OP_RVAALE1IS](hv_tlbi_op_rvaale1is.md)
- [HV_TLBI_OP_RVAE1IS](hv_tlbi_op_rvae1is.md)
- [HV_TLBI_OP_RVALE1IS](hv_tlbi_op_rvale1is.md)
- [HV_TLBI_OP_VAAE1IS](hv_tlbi_op_vaae1is.md)
- [HV_TLBI_OP_VAALE1IS](hv_tlbi_op_vaale1is.md)
- [HV_TLBI_OP_VAE1IS](hv_tlbi_op_vae1is.md)
- [HV_TLBI_OP_VALE1IS](hv_tlbi_op_vale1is.md)
- [HV_TLBI_OP_VMALLE1IS](hv_tlbi_op_vmalle1is.md)
