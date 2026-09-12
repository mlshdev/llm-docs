> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/validpartycodealphabet](https://developer.apple.com/documentation/gamekit/gkgameactivity/validpartycodealphabet)

# validPartyCodeAlphabet (Swift)

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Allowed characters for the party code to be used to share this activity.

## Declaration

```swift
class var validPartyCodeAlphabet: [String] { get }
```

## See Also

### Getting and verifying the party code

- [partyCode](partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [partyURL](partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [isValidPartyCode(\_:)](isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.

# validPartyCodeAlphabet (Objective-C)

**Framework:** GameKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Allowed characters for the party code to be used to share this activity.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * validPartyCodeAlphabet;
```

## See Also

### Getting and verifying the party code

- [partyCode](partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [partyURL](partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [isValidPartyCode:](isvalidpartycode%28__%29.md): Checks whether a party code is in valid format.
