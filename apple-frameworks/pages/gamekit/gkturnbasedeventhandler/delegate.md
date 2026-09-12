> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventhandler/delegate](https://developer.apple.com/documentation/gamekit/gkturnbasedeventhandler/delegate)

# delegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The delegate for the event handler.

## Declaration

```swift
weak var delegate: (any GKTurnBasedEventHandlerDelegate & NSObjectProtocol)? { get set }
```

<a id="Discussion"></a>

## Discussion

If your game implements turn-based matches, it should set the delegate immediately after the local player is successfully initialized. You want to set the delegate immediately because your game may have been launched specifically to handle a turn-based match event.

# delegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The delegate for the event handler.

## Declaration

```objectivec
@property (nonatomic, weak) NSObject<GKTurnBasedEventHandlerDelegate> * delegate;
```

```objectivec
@property (atomic, weak) NSObject<GKTurnBasedEventHandlerDelegate> * delegate;
```

<a id="Discussion"></a>

## Discussion

If your game implements turn-based matches, it should set the delegate immediately after the local player is successfully initialized. You want to set the delegate immediately because your game may have been launched specifically to handle a turn-based match event.
