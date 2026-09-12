> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingmodesports/init(leftteam:rightteam:eventstatus:backgroundartwork:)](https://developer.apple.com/documentation/carplay/cpnowplayingmodesports/init(leftteam:rightteam:eventstatus:backgroundartwork:))

# init(leftTeam:rightTeam:eventStatus:backgroundArtwork:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Initialize a sports mode for display on the CarPlay now playing screen.

## Declaration

```swift
init(leftTeam: CPNowPlayingSportsTeam, rightTeam: CPNowPlayingSportsTeam, eventStatus: CPNowPlayingSportsEventStatus?, backgroundArtwork: UIImage?)
```

## Parameters

- `leftTeam`: The sports team that should appear on the left side of the now playing screen. This is commonly (but not always) the AWAY or VISITING team. This team will be on the left in all layouts; it does not flip to the right side when in a right-to-left language or a right-hand-drive vehicle.
- `rightTeam`: The sports team that should appear on the right side of the now playing screen. This is commonly (but not always) the HOME team. This team will be on the right in all layouts; it does not flip to the left side when in a right-to-left language or a right-hand-drive vehicle.
- `eventStatus`: A representation of the current event status. See
- `backgroundArtwork`: A large colorful image for the background of the now playing screen. A gradient or crossfade image works best, especially when it includes the primary colors of each team. Provide an image no larger than 500x500.

# initWithLeftTeam:rightTeam:eventStatus:backgroundArtwork: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Initialize a sports mode for display on the CarPlay now playing screen.

## Declaration

```objectivec
- (instancetype) initWithLeftTeam:(CPNowPlayingSportsTeam *) leftTeam rightTeam:(CPNowPlayingSportsTeam *) rightTeam eventStatus:(CPNowPlayingSportsEventStatus *) eventStatus backgroundArtwork:(UIImage *) backgroundArtwork;
```

## Parameters

- `leftTeam`: The sports team that should appear on the left side of the now playing screen. This is commonly (but not always) the AWAY or VISITING team. This team will be on the left in all layouts; it does not flip to the right side when in a right-to-left language or a right-hand-drive vehicle.
- `rightTeam`: The sports team that should appear on the right side of the now playing screen. This is commonly (but not always) the HOME team. This team will be on the right in all layouts; it does not flip to the left side when in a right-to-left language or a right-hand-drive vehicle.
- `eventStatus`: A representation of the current event status. See
- `backgroundArtwork`: A large colorful image for the background of the now playing screen. A gradient or crossfade image works best, especially when it includes the primary colors of each team. Provide an image no larger than 500x500.
