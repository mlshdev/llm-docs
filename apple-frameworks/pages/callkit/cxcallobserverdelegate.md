> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallobserverdelegate](https://developer.apple.com/documentation/callkit/cxcallobserverdelegate)

# CXCallObserverDelegate (Swift)

**Framework:** CallKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A collection of methods the system calls when a call changes state.

## Declaration

```swift
protocol CXCallObserverDelegate : NSObjectProtocol
```

## Topics

### Responding to Changes in Call State

- [callObserver(\_:callChanged:)](cxcallobserverdelegate/callobserver%28__callchanged_%29.md): Called when a call is changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Call information

- [CXCall](cxcall.md): A telephony call.
- [CXCallObserver](cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXHandle](cxhandle.md): A way to reach a call recipient, such as a phone number or email address.

# CXCallObserverDelegate (Objective-C)

**Framework:** CallKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A collection of methods the system calls when a call changes state.

## Declaration

```objectivec
@protocol CXCallObserverDelegate <NSObject>
```

## Topics

### Responding to Changes in Call State

- [callObserver:callChanged:](cxcallobserverdelegate/callobserver%28__callchanged_%29.md): Called when a call is changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Call information

- [CXCall](cxcall.md): A telephony call.
- [CXCallObserver](cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXHandle](cxhandle.md): A way to reach a call recipient, such as a phone number or email address.
