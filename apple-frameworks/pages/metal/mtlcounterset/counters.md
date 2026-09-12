> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterset/counters](https://developer.apple.com/documentation/metal/mtlcounterset/counters)

# counters (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An array of the counter instances a GPU device supports.

## Declaration

```swift
var counters: [any MTLCounter] { get }
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)

<a id="discussion"></a>

## Discussion

Check whether a GPU device supports a specific counter by comparing its common name (see [MTLCommonCounter](../mtlcommoncounter.md)) with each element in the property’s array.

> **Important**

>  Some GPUs may only support some of the counters within a counter set.

For more information, see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md).

# counters (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An array of the counter instances a GPU device supports.

## Declaration

```objectivec
@property (copy, readonly) NSArray<id<MTLCounter>> * counters;
```

## Mentioned In

- [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)

<a id="discussion"></a>

## Discussion

Check whether a GPU device supports a specific counter by comparing its common name (see [MTLCommonCounter](../mtlcommoncounter.md)) with each element in the property’s array.

> **Important**

>  Some GPUs may only support some of the counters within a counter set.

For more information, see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md).
