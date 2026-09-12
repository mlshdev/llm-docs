> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayer/anonymousguestplayer(withidentifier:)](https://developer.apple.com/documentation/gamekit/gkplayer/anonymousguestplayer(withidentifier:))

# anonymousGuestPlayer(withIdentifier:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a guest player with the specified identifier.

## Declaration

```swift
class func anonymousGuestPlayer(withIdentifier guestIdentifier: String) -> Self
```

## Parameters

- `guestIdentifier`: An identifier to use for the guest player.

<a id="return-value"></a>

## Return Value

A player object that represents the guest.

<a id="Discussion"></a>

## Discussion

You can treat a guest player the same as an initialized player in regard to matchmaking services.

## See Also

### Creating a guest player

- [guestIdentifier](guestidentifier.md): A developer-created string that identifies a guest player.

# anonymousGuestPlayerWithIdentifier: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a guest player with the specified identifier.

## Declaration

```objectivec
+ (instancetype) anonymousGuestPlayerWithIdentifier:(NSString *) guestIdentifier;
```

## Parameters

- `guestIdentifier`: An identifier to use for the guest player.

<a id="return-value"></a>

## Return Value

A player object that represents the guest.

<a id="Discussion"></a>

## Discussion

You can treat a guest player the same as an initialized player in regard to matchmaking services.

## See Also

### Creating a guest player

- [guestIdentifier](guestidentifier.md): A developer-created string that identifies a guest player.
