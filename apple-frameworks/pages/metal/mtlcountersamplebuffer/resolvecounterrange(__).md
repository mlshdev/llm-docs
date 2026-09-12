> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffer/resolvecounterrange(_:)](https://developer.apple.com/documentation/metal/mtlcountersamplebuffer/resolvecounterrange(_:))

# resolveCounterRange(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS

Transforms samples of a GPU’s counter set from the driver’s internal format to a standard Metal data structure.

## Declaration

```swift
func resolveCounterRange(_ range: Range<Int>) throws -> Data?
```

## Parameters

- `range`: A range that indicates which sample instances the method resolves in the counter sample buffer.

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) instance in Swift, or an [NSData](../../foundation/nsdata.md) instance in Objective-C, if the method successfully resolves the range of samples in the buffer; otherwise, `nil`.

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)

<a id="discussion"></a>

## Discussion

You can only call this method on a counter sample buffer that you create with [MTLStorageMode.shared](../mtlstoragemode/shared.md) (see [storageMode](../mtlcountersamplebufferdescriptor/storagemode.md)). For an example of how and when to use this method, see [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md).

> **Note**

>  The GPU stores [MTLCounterErrorValue](../mtlcountererrorvalue.md) in `destinationBuffer` each time it encounters an error resolving a sample.
