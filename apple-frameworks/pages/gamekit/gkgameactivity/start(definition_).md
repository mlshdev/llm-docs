> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/start(definition:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/start(definition:))

# start(definition:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates and starts a game activity with a definition.

## Declaration

```swift
class func start(definition activityDefinition: GKGameActivityDefinition) throws -> GKGameActivity
```

## See Also

### Creating an activity

- [init(definition:)](init%28definition_%29.md): Creates a game activity with definition.
- [start(definition:partyCode:)](start%28definition_partycode_%29.md): Creates and starts a new game activity with a custom party code.

# startWithDefinition:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates and starts a game activity with a definition.

## Declaration

```objectivec
+ (GKGameActivity *) startWithDefinition:(GKGameActivityDefinition *) activityDefinition error:(NSError **) error;
```

## See Also

### Creating an activity

- [initWithDefinition:](init%28definition_%29.md): Creates a game activity with definition.
- [startWithDefinition:partyCode:error:](start%28definition_partycode_%29.md): Creates and starts a new game activity with a custom party code.
