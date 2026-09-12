> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomic/wrappingadd(_:ordering:)-8rrye](https://developer.apple.com/documentation/synchronization/atomic/wrappingadd(_:ordering:)-8rrye)

# wrappingAdd(\_:ordering:)

**Framework:** Synchronization  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Perform an atomic wrapping add operation and return the old and new value, applying the specified memory ordering.

## Declaration

```swift
@discardableResult func wrappingAdd(_ operand: UInt128, ordering: AtomicUpdateOrdering) -> (oldValue: UInt128, newValue: UInt128)
```

## Parameters

- `operand`: An integer value.
- `ordering`: The memory ordering to apply on this operation.

<a id="return-value"></a>

## Return Value

A tuple containing the original value before the operation and the new value after the operation.

<a id="discussion"></a>

## Discussion

> **Note**

> This operation silently wraps around on overflow, like the `&+` operator does on `UInt128` values.
