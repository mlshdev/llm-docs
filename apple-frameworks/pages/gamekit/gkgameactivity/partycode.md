> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/partycode](https://developer.apple.com/documentation/gamekit/gkgameactivity/partycode)

# partyCode (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

If the game supports party code, this is the party code that can be shared among players to join the party.

## Declaration

```swift
var partyCode: String? { get }
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

If the game doesn’t support party code, this value will be `nil`. Use [start(definition:partyCode:)](start%28definition_partycode_%29.md) to create a game activity with a custom party code.

## See Also

### Getting and verifying the party code

- [partyURL](partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [validPartyCodeAlphabet](validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.
- [isValidPartyCode(\_:)](isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.

# partyCode (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

If the game supports party code, this is the party code that can be shared among players to join the party.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * partyCode;
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

If the game doesn’t support party code, this value will be `nil`. Use [startWithDefinition:partyCode:error:](start%28definition_partycode_%29.md) to create a game activity with a custom party code.

## See Also

### Getting and verifying the party code

- [partyURL](partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [validPartyCodeAlphabet](validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.
- [isValidPartyCode:](isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.
