> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/synchronization/atomic/load(ordering:)-8ufx2

# load(ordering:)

**Framework:** Synchronization  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Atomically loads and returns the current value, applying the specified memory ordering.

## Declaration

```swift
func load(ordering: AtomicLoadOrdering) -> Value
```

## Parameters

- `ordering`: The memory ordering to apply on this operation.

<a id="return-value"></a>

## Return Value

The current value.
