> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/remove(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/remove(completionhandler:))

# remove(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a match from Game Center that the local player participants in.

## Declaration

```swift
func remove(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func remove() async throws
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

If you don’t use the [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) interface, where players can delete their matches, use this method to delete a match that the local player no longer actively participants in. This method only removes the match from the local player’s Game Center data — it doesn’t impact other participants in the match.

# removeWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a match from Game Center that the local player participants in.

## Declaration

```objectivec
- (void) removeWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

If you don’t use the [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) interface, where players can delete their matches, use this method to delete a match that the local player no longer actively participants in. This method only removes the match from the local player’s Game Center data — it doesn’t impact other participants in the match.
