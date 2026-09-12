> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessiondelegate/session(_:didfailwitherror:)](https://developer.apple.com/documentation/gamekit/gksessiondelegate/session(_:didfailwitherror:))

# session(\_:didFailWithError:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent to the delegate when a serious error has occurred in the session.

## Declaration

```swift
optional func session(_ session: GKSession, didFailWithError error: any Error)
```

## Parameters

- `session`: The session that failed.
- `error`: The error that occurred.

<a id="Discussion"></a>

## Discussion

This method is called when a serious internal error occurred in the session. Your application should disconnect the session from other peers and release the session.

## See Also

### Connection Errors

- [session(\_:connectionWithPeerFailed:withError:)](session%28__connectionwithpeerfailed_witherror_%29.md): Deprecated. Received by the delegate when an attempt to connect to another peer failed.

# session:didFailWithError: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sent to the delegate when a serious error has occurred in the session.

## Declaration

```objectivec
- (void) session:(GKSession *) session didFailWithError:(NSError *) error;
```

## Parameters

- `session`: The session that failed.
- `error`: The error that occurred.

<a id="Discussion"></a>

## Discussion

This method is called when a serious internal error occurred in the session. Your application should disconnect the session from other peers and release the session.

## See Also

### Connection Errors

- [session:connectionWithPeerFailed:withError:](session%28__connectionwithpeerfailed_witherror_%29.md): Deprecated. Received by the delegate when an attempt to connect to another peer failed.
