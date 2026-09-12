> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/image](https://developer.apple.com/documentation/gamekit/gkachievementdescription/image)

# image (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 4.1+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 14.2) · tvOS 9.0+ (deprecated in 17.2) · visionOS 1.0+ (deprecated in 1.0)

The achievement’s artwork that you display when the player completes the achievement.

## Declaration

```swift
var image: NSImage? { get }
```

```swift
var image: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined until you load the image using the [loadImage(completionHandler:)](loadimage%28completionhandler_%29.md) method.

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [unachievedDescription](unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [isHidden](ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [isReplayable](isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](raritypercent-4bh6k.md): The percentage of players of this game that earned the achievement.

# image (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 7.0) · iPadOS 4.1+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 14.2) · tvOS 9.0+ (deprecated in 17.2) · visionOS 1.0+ (deprecated in 1.0)

The achievement’s artwork that you display when the player completes the achievement.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) UIImage * image;
```

```objectivec
@property (atomic, retain, readonly, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

The value of this property is undefined until you load the image using the [loadImageWithCompletionHandler:](loadimage%28completionhandler_%29.md) method.

## See Also

### Reading and Writing Achievement Properties

- [identifier](identifier.md): The string you enter in App Store Connect that uniquely identifies the achievement.
- [title](title.md): A localized title for the achievement.
- [unachievedDescription](unachieveddescription.md): A localized description of the achievement that you display when the player hasn’t completed the achievement.
- [achievedDescription](achieveddescription.md): A localized description of the achievement that you display when the player completes the achievement.
- [maximumPoints](maximumpoints.md): The number of points that the player earns when completing the achievement.
- [hidden](ishidden.md): A Boolean value that states whether the achievement is initially visible to players.
- [replayable](isreplayable.md): A Boolean value that states whether the player can earn the achievement multiple times.
- [rarityPercent](raritypercent-3zqw6.md): The percentage of players of this game that earned the achievement.
