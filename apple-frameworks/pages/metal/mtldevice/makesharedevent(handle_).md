> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makesharedevent(handle:)](https://developer.apple.com/documentation/metal/mtldevice/makesharedevent(handle:))

# makeSharedEvent(handle:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Recreates a shared event from a handle.

## Declaration

```swift
func makeSharedEvent(handle sharedEventHandle: MTLSharedEventHandle) -> (any MTLSharedEvent)?
```

## Parameters

- `sharedEventHandle`: An [MTLSharedEventHandle](../mtlsharedeventhandle.md) instance from another GPU device or process.

<a id="return-value"></a>

## Return Value

A new [MTLSharedEvent](../mtlsharedevent.md) instance if the method completed successfully; otherwise nil.

## See Also

### Creating fences and events

- [makeFence()](makefence%28%29.md): Creates a new memory fence instance.
- [makeEvent()](makeevent%28%29.md): Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.
- [makeSharedEvent()](makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.

# newSharedEventWithHandle: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Recreates a shared event from a handle.

## Declaration

```objectivec
- (id<MTLSharedEvent>) newSharedEventWithHandle:(MTLSharedEventHandle *) sharedEventHandle;
```

## Parameters

- `sharedEventHandle`: An [MTLSharedEventHandle](../mtlsharedeventhandle.md) instance from another GPU device or process.

<a id="return-value"></a>

## Return Value

A new [MTLSharedEvent](../mtlsharedevent.md) instance if the method completed successfully; otherwise nil.

## See Also

### Creating fences and events

- [newFence](makefence%28%29.md): Creates a new memory fence instance.
- [newEvent](makeevent%28%29.md): Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.
- [newSharedEvent](makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.
