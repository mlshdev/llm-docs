> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/signalevent(_:value:)](https://developer.apple.com/documentation/metal/mtl4commandqueue/signalevent(_:value:))

# signalEvent(\_:value:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Schedules an operation to signal a GPU event with a specific value after all GPU work prior to this point is complete.

## Declaration

```swift
func signalEvent(_ event: any MTLEvent, value: UInt64)
```

## Parameters

- `event`: [MTLEvent](../mtlevent.md) to signal.
- `value`: The value to signal the [MTLEvent](../mtlevent.md) with.

# signalEvent:value: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Schedules an operation to signal a GPU event with a specific value after all GPU work prior to this point is complete.

## Declaration

```objectivec
- (void) signalEvent:(id<MTLEvent>) event value:(uint64_t) value;
```

## Parameters

- `event`: [MTLEvent](../mtlevent.md) to signal.
- `value`: The value to signal the [MTLEvent](../mtlevent.md) with.
