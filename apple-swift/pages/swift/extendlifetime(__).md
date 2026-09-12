> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/extendlifetime(_:)](https://developer.apple.com/documentation/swift/extendlifetime(_:))

# extendLifetime(\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Extends the lifetime of the given instance.

## Declaration

```swift
func extendLifetime<T>(_ x: borrowing T) where T : ~Copyable, T : ~Escapable
```

## Parameters

- `x`: An instance to preserve until this function returns.

## See Also

### Reference Counting

- [Unmanaged](unmanaged.md): A type for propagating an unmanaged object reference.
- [withExtendedLifetime(\_:\_:)](withextendedlifetime%28____%29-4mmpv.md): Evaluates a closure while ensuring that the given instance is not destroyed before the closure returns.
- [withExtendedLifetime(\_:\_:)](withextendedlifetime%28____%29-59dz3.md): Evaluates a closure while ensuring that the given instance is not destroyed before the closure returns.
