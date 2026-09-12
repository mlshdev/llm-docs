> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessiondelegate/session(_:connectionwithpeerfailed:witherror:)](https://developer.apple.com/documentation/gamekit/gksessiondelegate/session(_:connectionwithpeerfailed:witherror:))

# session(\_:connectionWithPeerFailed:withError:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Received by the delegate when an attempt to connect to another peer failed.

## Declaration

```swift
optional func session(_ session: GKSession, connectionWithPeerFailed peerID: String, withError error: any Error)
```

## Parameters

- `session`: The session that received the message.
- `peerID`: A string that uniquely identifies the peer.
- `error`: The error that occurred.

<a id="Discussion"></a>

## Discussion

The `error` parameter can be used to inform the user of why the connection failed.

> **Important**

>  If a [GKPeerPickerController](../gkpeerpickercontroller.md) object is being used to configure the session, the controller handles this message automatically. Your delegate can ignore it if the peer picker dialog is in use.

## See Also

### Connection Errors

- [session(\_:didFailWithError:)](session%28__didfailwitherror_%29.md): Deprecated. Sent to the delegate when a serious error has occurred in the session.

# session:connectionWithPeerFailed:withError: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Received by the delegate when an attempt to connect to another peer failed.

## Declaration

```objectivec
- (void) session:(GKSession *) session connectionWithPeerFailed:(NSString *) peerID withError:(NSError *) error;
```

## Parameters

- `session`: The session that received the message.
- `peerID`: A string that uniquely identifies the peer.
- `error`: The error that occurred.

<a id="Discussion"></a>

## Discussion

The `error` parameter can be used to inform the user of why the connection failed.

> **Important**

>  If a [GKPeerPickerController](../gkpeerpickercontroller.md) object is being used to configure the session, the controller handles this message automatically. Your delegate can ignore it if the peer picker dialog is in use.

## See Also

### Connection Errors

- [session:didFailWithError:](session%28__didfailwitherror_%29.md): Deprecated. Sent to the delegate when a serious error has occurred in the session.
