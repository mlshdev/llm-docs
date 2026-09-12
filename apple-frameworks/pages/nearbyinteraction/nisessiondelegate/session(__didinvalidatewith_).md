> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/session(_:didinvalidatewith:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/session(_:didinvalidatewith:))

# session(\_:didInvalidateWith:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you of an invalidated session.

## Declaration

```swift
optional func session(_ session: NISession, didInvalidateWith error: any Error)
```

## Parameters

- `session`: The invalidated session.
- `error`: The error that invalidated the session.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The delegate of an invalidated session receives no further callbacks, and the app can’t restart the session. To resume peer interaction, remove references to the invalidated session and begin a new session.

# session:didInvalidateWithError: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Notifies you of an invalidated session.

## Declaration

```objectivec
- (void) session:(NISession *) session didInvalidateWithError:(NSError *) error;
```

## Parameters

- `session`: The invalidated session.
- `error`: The error that invalidated the session.

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

The delegate of an invalidated session receives no further callbacks, and the app can’t restart the session. To resume peer interaction, remove references to the invalidated session and begin a new session.
