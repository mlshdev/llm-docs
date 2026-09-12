> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/withextendedlifetime(_:_:)-59dz3](https://developer.apple.com/documentation/swift/withextendedlifetime(_:_:)-59dz3)

# withExtendedLifetime(\_:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a closure while ensuring that the given instance is not destroyed before the closure returns.

## Declaration

```swift
func withExtendedLifetime<T, E, Result>(_ x: borrowing T, _ body: (borrowing T) throws(E) -> Result) throws(E) -> Result where E : Error, T : ~Copyable, T : ~Escapable, Result : ~Copyable
```

## Parameters

- `x`: An instance to preserve until the execution of `body` is completed.
- `body`: A closure to execute that depends on the lifetime of `x` being extended. If `body` has a return value, that value is also used as the return value for the `withExtendedLifetime(_:_:)` method.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure parameter.

## See Also

### Reference Counting

- [Unmanaged](unmanaged.md): A type for propagating an unmanaged object reference.
- [withExtendedLifetime(\_:\_:)](withextendedlifetime%28____%29-4mmpv.md): Evaluates a closure while ensuring that the given instance is not destroyed before the closure returns.
- [extendLifetime(\_:)](extendlifetime%28__%29.md): Extends the lifetime of the given instance.
