> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/loadachievements(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievement/loadachievements(completionhandler:))

# loadAchievements(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads the achievements that you previously reported the player making progress toward.

## Declaration

```swift
class func loadAchievements(completionHandler: (@Sendable ([GKAchievement]?, (any Error)?) -> Void)? = nil)
```

```swift
class func loadAchievements() async throws -> [GKAchievement]
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method loads the achievements.

  The block receives the following parameters:

  - **`achievements`**: The achievements that you previously reported progress for the local player.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

## See Also

### Loading and Initializing Achievements

- [init(identifier:)](init%28identifier_%29.md): Initializes an achievement for the local player.
- [init(identifier:player:)](init%28identifier_player_%29.md): Initializes an achievement for a player.

# loadAchievementsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads the achievements that you previously reported the player making progress toward.

## Declaration

```objectivec
+ (void) loadAchievementsWithCompletionHandler:(void (^)(NSArray<GKAchievement *> *achievements, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method loads the achievements.

  The block receives the following parameters:

  - **`achievements`**: The achievements that you previously reported progress for the local player.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

## See Also

### Loading and Initializing Achievements

- [initWithIdentifier:](init%28identifier_%29.md): Initializes an achievement for the local player.
- [initWithIdentifier:player:](init%28identifier_player_%29.md): Initializes an achievement for a player.
