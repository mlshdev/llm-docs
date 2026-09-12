> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounter](https://developer.apple.com/documentation/metal/mtlcounter)

# MTLCounter (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An individual counter a GPU device lists within one of its counter sets.

## Declaration

```swift
protocol MTLCounter : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

You can determine which counters a GPU supports within a counter set (see [MTLCounterSet](mtlcounterset.md)) by checking the elements of its [counters](mtlcounterset/counters.md) property. A counter’s [name](mtlcounter/name.md) property typically matches one of the common counter set names that [MTLCommonCounter](mtlcommoncounter.md) defines. For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Identifying a counter

- [name](mtlcounter/name.md): The name of a GPU’s counter instance.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Counters and counter sets

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md): Check whether a GPU produces the runtime performance data you want to sample.
- [MTLCounterSet](mtlcounterset.md): A collection of individual counters a GPU device supports for a counter set.
- [MTLCommonCounterSet](mtlcommoncounterset.md): The name of a specific counter set that a GPU device can support.
- [MTLCommonCounter](mtlcommoncounter.md): The name of a specific counter that can appear in a GPU device’s counter sets.

# MTLCounter (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An individual counter a GPU device lists within one of its counter sets.

## Declaration

```objectivec
@protocol MTLCounter <NSObject>
```

<a id="overview"></a>

## Overview

You can determine which counters a GPU supports within a counter set (see [MTLCounterSet](mtlcounterset.md)) by checking the elements of its [counters](mtlcounterset/counters.md) property. A counter’s [name](mtlcounter/name.md) property typically matches one of the common counter set names that [MTLCommonCounter](mtlcommoncounter.md) defines. For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Identifying a counter

- [name](mtlcounter/name.md): The name of a GPU’s counter instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Counters and counter sets

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md): Check whether a GPU produces the runtime performance data you want to sample.
- [MTLCounterSet](mtlcounterset.md): A collection of individual counters a GPU device supports for a counter set.
- [MTLCommonCounterSet](mtlcommoncounterset.md): The name of a specific counter set that a GPU device can support.
- [MTLCommonCounter](mtlcommoncounter.md): The name of a specific counter that can appear in a GPU device’s counter sets.
