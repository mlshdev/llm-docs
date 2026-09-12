> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldispatchtype/concurrent](https://developer.apple.com/documentation/metal/mtldispatchtype/concurrent)

# MTLDispatchType.concurrent (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Sets a command encoder to dispatch encoded commands concurrently during your pass.

## Declaration

```swift
case concurrent
```

<a id="discussion"></a>

## Discussion

If you encode multiple commands that access a single resource, you’re responsible for synchronizing the memory operations to that resource. For more information, see [Resource synchronization](../resource-synchronization.md).

## See Also

### Execution dispatch types

- [MTLDispatchType.serial](serial.md): Sets a command encoder to dispatch encoded commands serially during your pass.

# MTLDispatchTypeConcurrent (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Sets a command encoder to dispatch encoded commands concurrently during your pass.

## Declaration

```objectivec
MTLDispatchTypeConcurrent
```

<a id="discussion"></a>

## Discussion

If you encode multiple commands that access a single resource, you’re responsible for synchronizing the memory operations to that resource. For more information, see [Resource synchronization](../resource-synchronization.md).

## See Also

### Execution dispatch types

- [MTLDispatchTypeSerial](serial.md): Sets a command encoder to dispatch encoded commands serially during your pass.
