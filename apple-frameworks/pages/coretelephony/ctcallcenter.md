> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcallcenter](https://developer.apple.com/documentation/coretelephony/ctcallcenter)

# CTCallCenter (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

An object that provides a list of current cellular calls, and provides the ability to respond to state changes for calls.

> Getting call information in Core Telephony is no longer supported. Use [CallKit](../callkit.md) instead.

## Declaration

```swift
class CTCallCenter
```

## Topics

### Responding to Cellular Call Events

- [callEventHandler](ctcallcenter/calleventhandler.md): Deprecated. A closure dispatched when a call changes state.
- [currentCalls](ctcallcenter/currentcalls.md): Deprecated. An array representing the cellular calls in progress.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated

- [CTCarrier](ctcarrier.md): Deprecated. Information about the user’s cellular service provider, such as its unique identifier and whether it allows VoIP calls on its network.
- [CTCall](ctcall.md): Deprecated. An object used to identify a cellular call and determine its state.

# CTCallCenter (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

An object that provides a list of current cellular calls, and provides the ability to respond to state changes for calls.

> Getting call information in Core Telephony is no longer supported. Use [CallKit](../callkit.md) instead.

## Declaration

```objectivec
@interface CTCallCenter : NSObject
```

## Topics

### Responding to Cellular Call Events

- [callEventHandler](ctcallcenter/calleventhandler.md): Deprecated. A closure dispatched when a call changes state.
- [currentCalls](ctcallcenter/currentcalls.md): Deprecated. An array representing the cellular calls in progress.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated

- [CTCarrier](ctcarrier.md): Deprecated. Information about the user’s cellular service provider, such as its unique identifier and whether it allows VoIP calls on its network.
- [CTCall](ctcall.md): Deprecated. An object used to identify a cellular call and determine its state.
