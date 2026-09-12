> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterset](https://developer.apple.com/documentation/metal/mtlcounterset)

# MTLCounterSet (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A collection of individual counters a GPU device supports for a counter set.

## Declaration

```swift
protocol MTLCounterSet : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

You can determine which counter sets a GPU supports by checking an [MTLDevice](mtldevice.md) instance’s [counterSets](mtldevice/countersets.md) property. A counter set’s [name](mtlcounterset/name.md) property typically matches one of the common counter set names that [MTLCommonCounterSet](mtlcommoncounterset.md) defines. Check whether a GPU device supports a specific counter by comparing elements of the [counters](mtlcounterset/counters.md) property with a counter’s common name that [MTLCommonCounter](mtlcommoncounter.md) defines.

> **Important**

>  Some GPUs may only support some of the counters within a counter set.

For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Identifying a counter set

- [name](mtlcounterset/name.md): The name of the GPU’s counter set instance.

### Checking which counters a GPU supports

- [counters](mtlcounterset/counters.md): An array of the counter instances a GPU device supports.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Counters and counter sets

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md): Check whether a GPU produces the runtime performance data you want to sample.
- [MTLCommonCounterSet](mtlcommoncounterset.md): The name of a specific counter set that a GPU device can support.
- [MTLCounter](mtlcounter.md): An individual counter a GPU device lists within one of its counter sets.
- [MTLCommonCounter](mtlcommoncounter.md): The name of a specific counter that can appear in a GPU device’s counter sets.

# MTLCounterSet (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A collection of individual counters a GPU device supports for a counter set.

## Declaration

```objectivec
@protocol MTLCounterSet <NSObject>
```

<a id="overview"></a>

## Overview

You can determine which counter sets a GPU supports by checking an [MTLDevice](mtldevice.md) instance’s [counterSets](mtldevice/countersets.md) property. A counter set’s [name](mtlcounterset/name.md) property typically matches one of the common counter set names that [MTLCommonCounterSet](mtlcommoncounterset.md) defines. Check whether a GPU device supports a specific counter by comparing elements of the [counters](mtlcounterset/counters.md) property with a counter’s common name that [MTLCommonCounter](mtlcommoncounter.md) defines.

> **Important**

>  Some GPUs may only support some of the counters within a counter set.

For more information, see [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md).

## Topics

### Identifying a counter set

- [name](mtlcounterset/name.md): The name of the GPU’s counter set instance.

### Checking which counters a GPU supports

- [counters](mtlcounterset/counters.md): An array of the counter instances a GPU device supports.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Counters and counter sets

- [Confirming which counters and counter sets a GPU supports](confirming-which-counters-and-counter-sets-a-gpu-supports.md): Check whether a GPU produces the runtime performance data you want to sample.
- [MTLCommonCounterSet](mtlcommoncounterset.md): The name of a specific counter set that a GPU device can support.
- [MTLCounter](mtlcounter.md): An individual counter a GPU device lists within one of its counter sets.
- [MTLCommonCounter](mtlcommoncounter.md): The name of a specific counter that can appear in a GPU device’s counter sets.
