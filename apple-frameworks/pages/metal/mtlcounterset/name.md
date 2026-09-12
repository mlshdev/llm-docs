> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterset/name](https://developer.apple.com/documentation/metal/mtlcounterset/name)

# name (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name of the GPU’s counter set instance.

## Declaration

```swift
var name: String { get }
```

<a id="discussion"></a>

## Discussion

The property typically matches one of the common counter set names that [MTLCommonCounterSet](../mtlcommoncounterset.md) defines (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).

# name (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The name of the GPU’s counter set instance.

## Declaration

```objectivec
@property (copy, readonly) NSString * name;
```

<a id="discussion"></a>

## Discussion

The property typically matches one of the common counter set names that [MTLCommonCounterSet](../mtlcommoncounterset.md) defines (see [Confirming which counters and counter sets a GPU supports](../confirming-which-counters-and-counter-sets-a-gpu-supports.md)).
