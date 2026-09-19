> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/loadachievementdescriptions(completionhandler:)

# loadAchievementDescriptions(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Loads all associated achievements that have defined deep links to this game activity definition.

## Declaration

```swift
func loadAchievementDescriptions(completionHandler: @escaping @Sendable ([GKAchievementDescription]?, (any Error)?) -> Void)
```

```swift
var achievementDescriptions: [GKAchievementDescription] { get async throws }
```

# loadAchievementDescriptionsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Loads all associated achievements that have defined deep links to this game activity definition.

## Declaration

```objectivec
- (void) loadAchievementDescriptionsWithCompletionHandler:(void (^)(NSArray<GKAchievementDescription *> *achievementDescriptions, NSError *error)) completionHandler;
```
