> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutableexecutiondescriptor/wait(for:value:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutableexecutiondescriptor/wait(for:value:))

# wait(for:value:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Waits on these shared events before scheduling execution on the HW.

## Declaration

```swift
func wait(for event: any MTLSharedEvent, value: UInt64)
```

## Parameters

- `event`: Shared event to wait on.
- `value`: Value for shared event to wait on.

<a id="discussion"></a>

## Discussion

This does not include encoding which can still continue.

# waitForEvent:value: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Waits on these shared events before scheduling execution on the HW.

## Declaration

```objectivec
- (void) waitForEvent:(id<MTLSharedEvent>) event value:(uint64_t) value;
```

## Parameters

- `event`: Shared event to wait on.
- `value`: Value for shared event to wait on.

<a id="discussion"></a>

## Discussion

This does not include encoding which can still continue.
