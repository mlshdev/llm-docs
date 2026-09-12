> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessionsenddatamode/reliable](https://developer.apple.com/documentation/multipeerconnectivity/mcsessionsenddatamode/reliable)

# MCSessionSendDataMode.reliable (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Case  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The framework should guarantee delivery of each message, enqueueing and retransmitting data as needed, and ensuring in-order delivery.

> Use Network Framework instead

## Declaration

```swift
case reliable
```

<a id="Discussion"></a>

## Discussion

Use this message type for application-critical data.

## See Also

### Constants

- [MCSessionSendDataMode.unreliable](unreliable.md): Deprecated. Messages to peers should be sent immediately without socket-level queueing. If a message cannot be sent immediately, it should be dropped. The order of messages is not guaranteed.

# MCSessionSendDataReliable (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The framework should guarantee delivery of each message, enqueueing and retransmitting data as needed, and ensuring in-order delivery.

> Use Network Framework instead

## Declaration

```objectivec
MCSessionSendDataReliable
```

<a id="Discussion"></a>

## Discussion

Use this message type for application-critical data.

## See Also

### Constants

- [MCSessionSendDataUnreliable](unreliable.md): Deprecated. Messages to peers should be sent immediately without socket-level queueing. If a message cannot be sent immediately, it should be dropped. The order of messages is not guaranteed.
