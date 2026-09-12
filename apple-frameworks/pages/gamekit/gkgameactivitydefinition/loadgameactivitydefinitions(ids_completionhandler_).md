> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/loadgameactivitydefinitions(ids:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/loadgameactivitydefinitions(ids:completionhandler:))

# loadGameActivityDefinitions(IDs:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Loads game activity definitions with the supplied App Store Connect identifiers.

## Declaration

```swift
class func loadGameActivityDefinitions(IDs activityDefinitionIDs: [String]?, completionHandler: @escaping @Sendable ([GKGameActivityDefinition]?, (any Error)?) -> Void)
```

```swift
class func loadGameActivityDefinitions(IDs activityDefinitionIDs: [String]?) async throws -> [GKGameActivityDefinition]
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

## See Also

### Loading activity definitions

- [loadGameActivityDefinitions(completionHandler:)](loadgameactivitydefinitions%28completionhandler_%29.md): Loads all the game activity definitions for the current game.

# loadGameActivityDefinitionsWithIDs:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Loads game activity definitions with the supplied App Store Connect identifiers.

## Declaration

```objectivec
+ (void) loadGameActivityDefinitionsWithIDs:(NSArray<NSString *> *) activityDefinitionIDs completionHandler:(void (^)(NSArray<GKGameActivityDefinition *> *activityDefinitions, NSError *error)) completionHandler;
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

## See Also

### Loading activity definitions

- [loadGameActivityDefinitionsWithCompletionHandler:](loadgameactivitydefinitions%28completionhandler_%29.md): Loads all the game activity definitions for the current game.
