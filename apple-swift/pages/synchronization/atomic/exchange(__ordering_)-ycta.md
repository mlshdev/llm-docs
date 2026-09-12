> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomic/exchange(_:ordering:)-ycta](https://developer.apple.com/documentation/synchronization/atomic/exchange(_:ordering:)-ycta)

# exchange(\_:ordering:)

**Framework:** Synchronization  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Atomically sets the current value to `desired` and returns the original value, applying the specified memory ordering.

## Declaration

```swift
func exchange(_ desired: consuming Value, ordering: AtomicUpdateOrdering) -> Value
```

## Parameters

- `desired`: The desired new value.
- `ordering`: The memory ordering to apply on this operation.

<a id="return-value"></a>

## Return Value

The original value.
