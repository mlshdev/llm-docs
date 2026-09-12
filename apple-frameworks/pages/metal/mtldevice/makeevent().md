> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeevent()](https://developer.apple.com/documentation/metal/mtldevice/makeevent())

# makeEvent() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.

## Declaration

```swift
func makeEvent() -> (any MTLEvent)?
```

## See Also

### Creating fences and events

- [makeFence()](makefence%28%29.md): Creates a new memory fence instance.
- [makeSharedEvent()](makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.
- [makeSharedEvent(handle:)](makesharedevent%28handle_%29.md): Recreates a shared event from a handle.

# newEvent (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.

## Declaration

```objectivec
- (id<MTLEvent>) newEvent;
```

## See Also

### Creating fences and events

- [newFence](makefence%28%29.md): Creates a new memory fence instance.
- [newSharedEvent](makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.
- [newSharedEventWithHandle:](makesharedevent%28handle_%29.md): Recreates a shared event from a handle.
