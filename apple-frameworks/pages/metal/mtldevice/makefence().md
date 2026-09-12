> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makefence()](https://developer.apple.com/documentation/metal/mtldevice/makefence())

# makeFence() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a new memory fence instance.

## Declaration

```swift
func makeFence() -> (any MTLFence)?
```

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)

## See Also

### Creating fences and events

- [makeEvent()](makeevent%28%29.md): Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.
- [makeSharedEvent()](makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.
- [makeSharedEvent(handle:)](makesharedevent%28handle_%29.md): Recreates a shared event from a handle.

# newFence (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a new memory fence instance.

## Declaration

```objectivec
- (id<MTLFence>) newFence;
```

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)

## See Also

### Creating fences and events

- [newEvent](makeevent%28%29.md): Creates a new event instance that you can use to synchronize commands and resources within the same GPU device.
- [newSharedEvent](makesharedevent%28%29.md): Creates a new shared event instance that you can use to synchronize commands and resources across different GPU devices.
- [newSharedEventWithHandle:](makesharedevent%28handle_%29.md): Recreates a shared event from a handle.
