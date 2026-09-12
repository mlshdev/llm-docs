> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcall/callstate](https://developer.apple.com/documentation/coretelephony/ctcall/callstate)

# callState (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The state of the cellular call.

> Obsolete and will be a useless stub before final removal. Replaced by \<CallKit/CXCall.h\> properties

## Declaration

```swift
var callState: String { get }
```

<a id="Discussion"></a>

## Discussion

A cellular call’s initial state is either [CTCallStateDialing](../ctcallstatedialing.md) or [CTCallStateIncoming](../ctcallstateincoming.md). After establishing the call for all parties involved, the state transitions to [CTCallStateConnected](../ctcallstateconnected.md). When the call ends, the state transitions to [CTCallStateDisconnected](../ctcallstatedisconnected.md).

## See Also

### Obtaining Information About a Cellular Call

- [callID](callid.md): Deprecated. A unique identifier for the cellular call.

# callState (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The state of the cellular call.

> Obsolete and will be a useless stub before final removal. Replaced by \<CallKit/CXCall.h\> properties

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * callState;
```

<a id="Discussion"></a>

## Discussion

A cellular call’s initial state is either [CTCallStateDialing](../ctcallstatedialing.md) or [CTCallStateIncoming](../ctcallstateincoming.md). After establishing the call for all parties involved, the state transitions to [CTCallStateConnected](../ctcallstateconnected.md). When the call ends, the state transitions to [CTCallStateDisconnected](../ctcallstatedisconnected.md).

## See Also

### Obtaining Information About a Cellular Call

- [callID](callid.md): Deprecated. A unique identifier for the cellular call.
