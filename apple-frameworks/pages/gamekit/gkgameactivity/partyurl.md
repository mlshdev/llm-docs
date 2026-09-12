> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/partyurl](https://developer.apple.com/documentation/gamekit/gkgameactivity/partyurl)

# partyURL (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

If the game supports party code, this is the URL that can be shared among players to join the party.

## Declaration

```swift
var partyURL: URL? { get }
```

## See Also

### Getting and verifying the party code

- [partyCode](partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [validPartyCodeAlphabet](validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.
- [isValidPartyCode(\_:)](isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.

# partyURL (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

If the game supports party code, this is the URL that can be shared among players to join the party.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSURL * partyURL;
```

## See Also

### Getting and verifying the party code

- [partyCode](partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [validPartyCodeAlphabet](validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.
- [isValidPartyCode:](isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.
