> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/sendping(pongreceivehandler:)](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/sendping(pongreceivehandler:))

# sendPing(pongReceiveHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a ping frame from the client side, with a closure to receive the pong from the server endpoint.

## Declaration

```swift
func sendPing(pongReceiveHandler: @escaping @Sendable ((any Error)?) -> Void)
```

## Parameters

- `pongReceiveHandler`: A closure called by the task when it receives the pong from the server. The block/closure receives an [NSError](../nserror.md) that indicates a lost connection or other problem, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

When sending multiple pings, the task always calls `pongReceiveHandler` in the order it sent the pings.

# sendPingWithPongReceiveHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sends a ping frame from the client side, with a closure to receive the pong from the server endpoint.

## Declaration

```objectivec
- (void) sendPingWithPongReceiveHandler:(void (^)(NSError *error)) pongReceiveHandler;
```

## Parameters

- `pongReceiveHandler`: A closure called by the task when it receives the pong from the server. The block/closure receives an [NSError](../nserror.md) that indicates a lost connection or other problem, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

When sending multiple pings, the task always calls `pongReceiveHandler` in the order it sent the pings.
