> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/signalevent(_:value:)](https://developer.apple.com/documentation/metal/mtliocommandbuffer/signalevent(_:value:))

# signalEvent(\_:value:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that signals a shared event to other parts of your app.

## Declaration

```swift
func signalEvent(_ event: any MTLSharedEvent, value: UInt64)
```

## Parameters

- `event`: A shared event instance the method waits for.
- `value`: A value the command uses to signal for the event to other parts of your app.

## See Also

### Synchronizing a command buffer

- [waitForEvent(\_:value:)](waitforevent%28__value_%29.md): Encodes a command that pauses the command buffer’s execution until another part of your app signals a shared event.

# signalEvent:value: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that signals a shared event to other parts of your app.

## Declaration

```objectivec
- (void) signalEvent:(id<MTLSharedEvent>) event value:(uint64_t) value;
```

## Parameters

- `event`: A shared event instance the method waits for.
- `value`: A value the command uses to signal for the event to other parts of your app.

## See Also

### Synchronizing a command buffer

- [waitForEvent:value:](waitforevent%28__value_%29.md): Encodes a command that pauses the command buffer’s execution until another part of your app signals a shared event.
