> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/loadgameactivitydefinitions(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/loadgameactivitydefinitions(completionhandler:))

# loadGameActivityDefinitions(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Loads all the game activity definitions for the current game.

## Declaration

```swift
class func loadGameActivityDefinitions(completionHandler: @escaping @Sendable ([GKGameActivityDefinition]?, (any Error)?) -> Void)
```

```swift
class var all: [GKGameActivityDefinition] { get async throws }
```

## See Also

### Loading activity definitions

- [loadGameActivityDefinitions(IDs:completionHandler:)](loadgameactivitydefinitions%28ids_completionhandler_%29.md): Loads game activity definitions with the supplied App Store Connect identifiers.

# loadGameActivityDefinitionsWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Loads all the game activity definitions for the current game.

## Declaration

```objectivec
+ (void) loadGameActivityDefinitionsWithCompletionHandler:(void (^)(NSArray<GKGameActivityDefinition *> *activityDefinitions, NSError *error)) completionHandler;
```

## See Also

### Loading activity definitions

- [loadGameActivityDefinitionsWithIDs:completionHandler:](loadgameactivitydefinitions%28ids_completionhandler_%29.md): Loads game activity definitions with the supplied App Store Connect identifiers.
