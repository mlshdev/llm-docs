> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/waitforevent(_:value:)](https://developer.apple.com/documentation/metal/mtliocommandbuffer/waitforevent(_:value:))

# waitForEvent(\_:value:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that pauses the command buffer’s execution until another part of your app signals a shared event.

## Declaration

```swift
func waitForEvent(_ event: any MTLSharedEvent, value: UInt64)
```

## Parameters

- `event`: A shared event instance the method waits for.
- `value`: A value the method compares to the event’s value. The method returns when the event’s value is greater than or equal to `value`.

## See Also

### Synchronizing a command buffer

- [signalEvent(\_:value:)](signalevent%28__value_%29.md): Encodes a command that signals a shared event to other parts of your app.

# waitForEvent:value: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that pauses the command buffer’s execution until another part of your app signals a shared event.

## Declaration

```objectivec
- (void) waitForEvent:(id<MTLSharedEvent>) event value:(uint64_t) value;
```

## Parameters

- `event`: A shared event instance the method waits for.
- `value`: A value the method compares to the event’s value. The method returns when the event’s value is greater than or equal to `value`.

## See Also

### Synchronizing a command buffer

- [signalEvent:value:](signalevent%28__value_%29.md): Encodes a command that signals a shared event to other parts of your app.
