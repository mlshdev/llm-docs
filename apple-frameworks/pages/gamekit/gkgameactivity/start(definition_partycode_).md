> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/start(definition:partycode:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/start(definition:partycode:))

# start(definition:partyCode:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates and starts a new game activity with a custom party code.

## Declaration

```swift
class func start(definition activityDefinition: GKGameActivityDefinition, partyCode: String) throws -> GKGameActivity
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

The framework converts the party code to uppercase.

## See Also

### Creating an activity

- [init(definition:)](init%28definition_%29.md): Creates a game activity with definition.
- [start(definition:)](start%28definition_%29.md): Creates and starts a game activity with a definition.

# startWithDefinition:partyCode:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates and starts a new game activity with a custom party code.

## Declaration

```objectivec
+ (GKGameActivity *) startWithDefinition:(GKGameActivityDefinition *) activityDefinition partyCode:(NSString *) partyCode error:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

The framework converts the party code to uppercase.

## See Also

### Creating an activity

- [initWithDefinition:](init%28definition_%29.md): Creates a game activity with definition.
- [startWithDefinition:error:](start%28definition_%29.md): Creates and starts a game activity with a definition.
