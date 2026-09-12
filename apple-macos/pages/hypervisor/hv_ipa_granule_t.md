> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ipa_granule_t](https://developer.apple.com/documentation/hypervisor/hv_ipa_granule_t)

# hv_ipa_granule_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS 26.0+

## Declaration

```swift
struct hv_ipa_granule_t
```

<a id="overview"></a>

## Overview

Supported intermediate physical address (IPA) granules.

## Topics

### Initializers

- [init(\_:)](hv_ipa_granule_t/init%28__%29.md)
- [init(rawValue:)](hv_ipa_granule_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](hv_ipa_granule_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# hv_ipa_granule_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
typedef enum { ... } hv_ipa_granule_t;
```

<a id="overview"></a>

## Overview

Supported intermediate physical address (IPA) granules.

## Topics

### Enumeration Cases

- [HV_IPA_GRANULE_16KB](hv_ipa_granule_16kb.md)
- [HV_IPA_GRANULE_4KB](hv_ipa_granule_4kb.md)
