> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmodesports/rightteam

# rightTeam (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Details for the team that appears on the right side of the display.

## Declaration

```swift
var rightTeam: CPNowPlayingSportsTeam { get }
```

<a id="discussion"></a>

## Discussion

This property displays information about a team, including its name, logo artwork, and the team’s current points. CarPlay displays this information on the right side of the display, even for right-to-left languages and right-hand-drive vehicles. Typically, the visiting team appears on the left side and the home team appears on the right side of the display.

## See Also

### Getting the event details

- [leftTeam](leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [eventStatus](eventstatus.md): Match details to display in the center of the Now Playing interface.
- [backgroundArtwork](backgroundartwork.md): The image to display behind the match information.

# rightTeam (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Details for the team that appears on the right side of the display.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CPNowPlayingSportsTeam * rightTeam;
```

<a id="discussion"></a>

## Discussion

This property displays information about a team, including its name, logo artwork, and the team’s current points. CarPlay displays this information on the right side of the display, even for right-to-left languages and right-hand-drive vehicles. Typically, the visiting team appears on the left side and the home team appears on the right side of the display.

## See Also

### Getting the event details

- [leftTeam](leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [eventStatus](eventstatus.md): Match details to display in the center of the Now Playing interface.
- [backgroundArtwork](backgroundartwork.md): The image to display behind the match information.
