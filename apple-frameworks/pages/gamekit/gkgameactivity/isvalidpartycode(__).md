> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/isvalidpartycode(_:)](https://developer.apple.com/documentation/gamekit/gkgameactivity/isvalidpartycode(_:))

# isValidPartyCode(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Checks whether a party code is in valid format.

## Declaration

```swift
class func isValidPartyCode(_ partyCode: String) -> Bool
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

Party code should be two parts of strings with the same length (2-6) connected with a dash, and the code can be either pure digits (0-9), or both parts are uppercased characters from [validPartyCodeAlphabet](validpartycodealphabet.md).

## See Also

### Getting and verifying the party code

- [partyCode](partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [partyURL](partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [validPartyCodeAlphabet](validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.

# isValidPartyCode: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Checks whether a party code is in valid format.

## Declaration

```objectivec
+ (BOOL) isValidPartyCode:(NSString *) partyCode;
```

## Mentioned In

- [Creating activities for your game](../creating-activities-for-your-game.md)

<a id="discussion"></a>

## Discussion

Party code should be two parts of strings with the same length (2-6) connected with a dash, and the code can be either pure digits (0-9), or both parts are uppercased characters from [validPartyCodeAlphabet](validpartycodealphabet.md).

## See Also

### Getting and verifying the party code

- [partyCode](partycode.md): If the game supports party code, this is the party code that can be shared among players to join the party.
- [partyURL](partyurl.md): If the game supports party code, this is the URL that can be shared among players to join the party.
- [validPartyCodeAlphabet](validpartycodealphabet.md): Allowed characters for the party code to be used to share this activity.
