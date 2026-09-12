> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomic/bitwiseor(_:ordering:)-aa7f](https://developer.apple.com/documentation/synchronization/atomic/bitwiseor(_:ordering:)-aa7f)

# bitwiseOr(\_:ordering:)

**Framework:** Synchronization  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Perform an atomic bitwise OR operation and return the old and new value, applying the specified memory ordering.

## Declaration

```swift
@discardableResult func bitwiseOr(_ operand: Int8, ordering: AtomicUpdateOrdering) -> (oldValue: Int8, newValue: Int8)
```

## Parameters

- `operand`: An integer value.
- `ordering`: The memory ordering to apply on this operation.

<a id="return-value"></a>

## Return Value

A tuple containing the original value before the operation and the new value after the operation.
