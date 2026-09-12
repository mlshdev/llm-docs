> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/delegate](https://developer.apple.com/documentation/gamekit/gksession/delegate)

# delegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

The delegate of the session object.

> No longer supported.

## Declaration

```swift
weak var delegate: (any GKSessionDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

A session’s delegate is responsible for observing changes to other peers running with the same session ID. Your application must set a delegate before making your session known to other peers.

## See Also

### Related Documentation

- [GKSessionDelegate](../gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](../gksessiondelegate.md) protocol to control the behavior of a [GKSession](../gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.

# delegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

The delegate of the session object.

> No longer supported.

## Declaration

```objectivec
@property (weak) id<GKSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A session’s delegate is responsible for observing changes to other peers running with the same session ID. Your application must set a delegate before making your session known to other peers.

## See Also

### Related Documentation

- [GKSessionDelegate](../gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](../gksessiondelegate.md) protocol to control the behavior of a [GKSession](../gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
