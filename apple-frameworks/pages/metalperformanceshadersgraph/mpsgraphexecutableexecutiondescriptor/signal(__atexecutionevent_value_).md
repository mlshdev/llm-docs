> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutableexecutiondescriptor/signal(_:atexecutionevent:value:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutableexecutiondescriptor/signal(_:atexecutionevent:value:))

# signal(\_:atExecutionEvent:value:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Signals these shared events at execution stage and immediately proceeds.

## Declaration

```swift
func signal(_ event: any MTLSharedEvent, atExecutionEvent executionStage: MPSGraphExecutionStage, value: UInt64)
```

## Parameters

- `event`: Shared event to signal.
- `executionStage`: Execution stage to signal event at.
- `value`: Value for shared event to wait on.

# signalEvent:atExecutionEvent:value: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Signals these shared events at execution stage and immediately proceeds.

## Declaration

```objectivec
- (void) signalEvent:(id<MTLSharedEvent>) event atExecutionEvent:(MPSGraphExecutionStage) executionStage value:(uint64_t) value;
```

## Parameters

- `event`: Shared event to signal.
- `executionStage`: Execution stage to signal event at.
- `value`: Value for shared event to wait on.
