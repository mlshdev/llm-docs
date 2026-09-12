> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/waitforevent(_:value:)](https://developer.apple.com/documentation/metal/mtl4commandqueue/waitforevent(_:value:))

# waitForEvent(\_:value:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Schedules an operation to wait for a GPU event of a specific value before continuing to execute any future GPU work.

## Declaration

```swift
func waitForEvent(_ event: any MTLEvent, value: UInt64)
```

## Parameters

- `event`: [MTLEvent](../mtlevent.md) to wait on.
- `value`: The specific value to wait for.

# waitForEvent:value: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Schedules an operation to wait for a GPU event of a specific value before continuing to execute any future GPU work.

## Declaration

```objectivec
- (void) waitForEvent:(id<MTLEvent>) event value:(uint64_t) value;
```

## Parameters

- `event`: [MTLEvent](../mtlevent.md) to wait on.
- `value`: The specific value to wait for.
