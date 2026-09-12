> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/rematch(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatch/rematch(completionhandler:))

# rematch(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a new match with the players from an existing match.

## Declaration

```swift
func rematch(completionHandler: (@Sendable (GKMatch?, (any Error)?) -> Void)? = nil)
```

```swift
func rematch() async throws -> GKMatch
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`match`**: A new match, or `nil` if an error occurs.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

This method uses automatching to recreate a previous match. If you use this method to create a match, each instance of your game on each device should call this same method.

## See Also

### Finishing the match

- [disconnect()](disconnect%28%29.md): Disconnects the local player from the match.

# rematchWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a new match with the players from an existing match.

## Declaration

```objectivec
- (void) rematchWithCompletionHandler:(void (^)(GKMatch *match, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - **`match`**: A new match, or `nil` if an error occurs.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

This method uses automatching to recreate a previous match. If you use this method to create a match, each instance of your game on each device should call this same method.

## See Also

### Finishing the match

- [disconnect](disconnect%28%29.md): Disconnects the local player from the match.
