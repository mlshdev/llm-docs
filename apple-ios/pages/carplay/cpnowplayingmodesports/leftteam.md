> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmodesports/leftteam

# leftTeam (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Team-specific details to display on the left side of the Now Playing interface.

## Declaration

```swift
var leftTeam: CPNowPlayingSportsTeam { get }
```

<a id="discussion"></a>

## Discussion

This property displays information about the team, including its name, logo artwork, and the team’s current points. CarPlay displays this information on the left side of the display, even for right-to-left languages and right-hand-drive vehicles. Typically, the visiting team appears on the left side and the home team appears on the right side of the display.

## See Also

### Getting the event details

- [rightTeam](rightteam.md): Details for the team that appears on the right side of the display.
- [eventStatus](eventstatus.md): Match details to display in the center of the Now Playing interface.
- [backgroundArtwork](backgroundartwork.md): The image to display behind the match information.

# leftTeam (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Team-specific details to display on the left side of the Now Playing interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CPNowPlayingSportsTeam * leftTeam;
```

<a id="discussion"></a>

## Discussion

This property displays information about the team, including its name, logo artwork, and the team’s current points. CarPlay displays this information on the left side of the display, even for right-to-left languages and right-hand-drive vehicles. Typically, the visiting team appears on the left side and the home team appears on the right side of the display.

## See Also

### Getting the event details

- [rightTeam](rightteam.md): Details for the team that appears on the right side of the display.
- [eventStatus](eventstatus.md): Match details to display in the center of the Now Playing interface.
- [backgroundArtwork](backgroundartwork.md): The image to display behind the match information.
