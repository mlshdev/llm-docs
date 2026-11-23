> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmodesports/eventstatus

# eventStatus (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Match details to display in the center of the Now Playing interface.

## Declaration

```swift
var eventStatus: CPNowPlayingSportsEventStatus? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to get details about the playing of the match. For example, a baseball game might display the inning number, the current runner positions, the number of outs, and the number of balls and strikes for the current batter.

## See Also

### Getting the event details

- [leftTeam](leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [rightTeam](rightteam.md): Details for the team that appears on the right side of the display.
- [backgroundArtwork](backgroundartwork.md): The image to display behind the match information.

# eventStatus (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Match details to display in the center of the Now Playing interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CPNowPlayingSportsEventStatus * eventStatus;
```

<a id="discussion"></a>

## Discussion

Use this property to get details about the playing of the match. For example, a baseball game might display the inning number, the current runner positions, the number of outs, and the number of balls and strikes for the current batter.

## See Also

### Getting the event details

- [leftTeam](leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [rightTeam](rightteam.md): Details for the team that appears on the right side of the display.
- [backgroundArtwork](backgroundartwork.md): The image to display behind the match information.
