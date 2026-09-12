> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/loadimage(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkachievementdescription/loadimage(completionhandler:))

# loadImage(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Loads the image to display when the player completes the achievement.

## Declaration

```swift
func loadImage(completionHandler: (@Sendable (UIImage?, (any Error)?) -> Void)? = nil)
```

```swift
func loadImage() async throws -> UIImage
```

```swift
func loadImage(completionHandler: (@Sendable (NSImage?, (any Error)?) -> Void)? = nil)
```

```swift
func loadImage() async throws -> NSImage
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the download.

  The block receives the following parameters:

  - **`image`**: The image that represents the completed achievement. This parameter is `nil` if an error occurs.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

First, use the [loadAchievementDescriptions(completionHandler:)](loadachievementdescriptions%28completionhandler_%29.md) method to download the achievement description objects, and then use this method to download the individual achievement images. While GameKit downloads an achievement image, you can display the placeholder image. If successful, GameKit sets the image property to the image it passes to the completion handler.

## See Also

### Working with Achievement Images

- [incompleteAchievementImage()](incompleteachievementimage%28%29.md): A common image that you can display when the player hasn’t completed the achievement.
- [placeholderCompletedAchievementImage()](placeholdercompletedachievementimage%28%29.md): A placeholder image that you can display when the player completes the achievement.

# loadImageWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Loads the image to display when the player completes the achievement.

## Declaration

```objectivec
- (void) loadImageWithCompletionHandler:(void (^)(UIImage *image, NSError *error)) completionHandler;
```

```objectivec
- (void) loadImageWithCompletionHandler:(void (^)(NSImage *image, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method completes the download.

  The block receives the following parameters:

  - **`image`**: The image that represents the completed achievement. This parameter is `nil` if an error occurs.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Rewarding players with achievements](../rewarding-players-with-achievements.md)

<a id="Discussion"></a>

## Discussion

First, use the [loadAchievementDescriptionsWithCompletionHandler:](loadachievementdescriptions%28completionhandler_%29.md) method to download the achievement description objects, and then use this method to download the individual achievement images. While GameKit downloads an achievement image, you can display the placeholder image. If successful, GameKit sets the image property to the image it passes to the completion handler.

## See Also

### Working with Achievement Images

- [incompleteAchievementImage](incompleteachievementimage%28%29.md): A common image that you can display when the player hasn’t completed the achievement.
- [placeholderCompletedAchievementImage](placeholdercompletedachievementimage%28%29.md): A placeholder image that you can display when the player completes the achievement.
