> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/loadachievementdescriptions(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievementdescription/loadachievementdescriptions(completionhandler:))

# loadAchievementDescriptions(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Downloads the localized descriptions of achievements from Game Center.

## Declaration

```swift
class func loadAchievementDescriptions(completionHandler: (@Sendable ([GKAchievementDescription]?, (any Error)?) -> Void)? = nil)
```

```swift
class func loadAchievementDescriptions() async throws -> [GKAchievementDescription]
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the download.

  The block receives the following parameters:

  - **`descriptions`**: The [GKAchievementDescription](../gkachievementdescription.md) objects that contain the localized text for the achievements in your game.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

To load the artwork for an achievement, use the [loadImage(completionHandler:)](loadimage%28completionhandler_%29.md) method after using this method.

# loadAchievementDescriptionsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Downloads the localized descriptions of achievements from Game Center.

## Declaration

```objectivec
+ (void) loadAchievementDescriptionsWithCompletionHandler:(void (^)(NSArray<GKAchievementDescription *> *descriptions, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the download.

  The block receives the following parameters:

  - **`descriptions`**: The [GKAchievementDescription](../gkachievementdescription.md) objects that contain the localized text for the achievements in your game.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

To load the artwork for an achievement, use the [loadImageWithCompletionHandler:](loadimage%28completionhandler_%29.md) method after using this method.
