> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcallcenter/currentcalls](https://developer.apple.com/documentation/coretelephony/ctcallcenter/currentcalls)

# currentCalls (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

An array representing the cellular calls in progress.

> To get a list of active calls, use [CXCallObserver](../../callkit/cxcallobserver.md) in [CallKit](../../callkit.md) instead.

## Declaration

```swift
var currentCalls: Set<CTCall>? { get }
```

<a id="Discussion"></a>

## Discussion

An array containing a `CTCall` object for each cellular call in progress. If no calls are in progress, the value of this property is `nil`.

## See Also

### Responding to Cellular Call Events

- [callEventHandler](calleventhandler.md): Deprecated. A closure dispatched when a call changes state.

# currentCalls (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

An array representing the cellular calls in progress.

> To get a list of active calls, use [CXCallObserver](../../callkit/cxcallobserver.md) in [CallKit](../../callkit.md) instead.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSSet<CTCall *> * currentCalls;
```

<a id="Discussion"></a>

## Discussion

An array containing a `CTCall` object for each cellular call in progress. If no calls are in progress, the value of this property is `nil`.

## See Also

### Responding to Cellular Call Events

- [callEventHandler](calleventhandler.md): Deprecated. A closure dispatched when a call changes state.
