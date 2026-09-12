> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcallcenter/calleventhandler](https://developer.apple.com/documentation/coretelephony/ctcallcenter/calleventhandler)

# callEventHandler (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A closure dispatched when a call changes state.

> To monitor state changes in calls, use [CXCallObserver](../../callkit/cxcallobserver.md) in [CallKit](../../callkit.md) instead.

## Declaration

```swift
var callEventHandler: ((CTCall) -> Void)? { get set }
```

## See Also

### Responding to Cellular Call Events

- [currentCalls](currentcalls.md): Deprecated. An array representing the cellular calls in progress.

# callEventHandler (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A closure dispatched when a call changes state.

> To monitor state changes in calls, use [CXCallObserver](../../callkit/cxcallobserver.md) in [CallKit](../../callkit.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(CTCall *) callEventHandler;
```

## See Also

### Responding to Cellular Call Events

- [currentCalls](currentcalls.md): Deprecated. An array representing the cellular calls in progress.
