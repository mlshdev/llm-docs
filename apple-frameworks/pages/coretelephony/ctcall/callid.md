> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcall/callid](https://developer.apple.com/documentation/coretelephony/ctcall/callid)

# callID (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A unique identifier for the cellular call.

> Obsolete and will be a useless stub before final removal. Replaced by \<CallKit/CXCall.h\> properties

## Declaration

```swift
var callID: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to differentiate multiple active cellular calls.

## See Also

### Obtaining Information About a Cellular Call

- [callState](callstate.md): Deprecated. The state of the cellular call.

# callID (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A unique identifier for the cellular call.

> Obsolete and will be a useless stub before final removal. Replaced by \<CallKit/CXCall.h\> properties

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * callID;
```

<a id="Discussion"></a>

## Discussion

Use this value to differentiate multiple active cellular calls.

## See Also

### Obtaining Information About a Cellular Call

- [callState](callstate.md): Deprecated. The state of the cellular call.
