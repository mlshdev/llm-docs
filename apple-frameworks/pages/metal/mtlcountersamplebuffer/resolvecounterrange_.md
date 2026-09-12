> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffer/resolvecounterrange:](https://developer.apple.com/documentation/metal/mtlcountersamplebuffer/resolvecounterrange:)

# resolveCounterRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Transforms samples of a GPU’s counter set from the driver’s internal format to a standard Metal data structure.

## Declaration

```objectivec
- (NSData *) resolveCounterRange:(NSRange) range;
```

## Parameters

- `range`: A range that indicates which sample instances the method resolves in the counter sample buffer.

<a id="return-value"></a>

## Return Value

An [NSData](../../foundation/nsdata.md) instance if the method successfully resolves the range of samples in the buffer; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

You can only call this method on a counter sample buffer that you create with [MTLStorageModeShared](../mtlstoragemode/shared.md) (see [storageMode](../mtlcountersamplebufferdescriptor/storagemode.md)). For an example of how and when to use this method, see [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md).

> **Note**

>  The GPU stores [MTLCounterErrorValue](../mtlcountererrorvalue.md) in `destinationBuffer` each time it encounters an error resolving a sample.
