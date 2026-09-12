> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_link_quality_t](https://developer.apple.com/documentation/network/nw_link_quality_t)

# nw_link_quality_t (Swift)

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
struct nw_link_quality_t
```

<a id="overview"></a>

## Overview

Link quality measurement is a representation of the expected capabilities of the link layer network attachment. Use this value to tune initial values for algorithms that can scale with the capabilities of the network. Do not use this value to gate connection attempts or to override adjustments that would be made based on actual network performance.

## Topics

### Initializers

- [init(\_:)](nw_link_quality_t/init%28__%29.md)
- [init(rawValue:)](nw_link_quality_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](nw_link_quality_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# nw_link_quality_t (Objective-C)

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
typedef enum { ... } nw_link_quality_t;
```

<a id="overview"></a>

## Overview

Link quality measurement is a representation of the expected capabilities of the link layer network attachment. Use this value to tune initial values for algorithms that can scale with the capabilities of the network. Do not use this value to gate connection attempts or to override adjustments that would be made based on actual network performance.

## Topics

### Enumeration Cases

- [nw_link_quality_good](nw_link_quality_good.md)
- [nw_link_quality_minimal](nw_link_quality_minimal.md)
- [nw_link_quality_moderate](nw_link_quality_moderate.md)
- [nw_link_quality_unknown](nw_link_quality_unknown.md)
