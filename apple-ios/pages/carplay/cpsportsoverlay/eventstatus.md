> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsportsoverlay/eventstatus

# eventStatus (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Match details to display in the bottom center of the thumbnail image.

## Declaration

```swift
var eventStatus: CPNowPlayingSportsEventStatus? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to get details about the playing of the sports event. For example, a baseball game might display the inning number, the current runner positions, the number of outs, and the number of balls and strikes for the current batter.

## See Also

### Getting the overlay information

- [leftTeam](leftteam.md): Team-specific details to display in the left-bottom portion of the thumbnail image.
- [rightTeam](rightteam.md): Team-specific details to display in the right-bottom portion of the thumbnail image.

# eventStatus (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Match details to display in the bottom center of the thumbnail image.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CPNowPlayingSportsEventStatus * eventStatus;
```

<a id="discussion"></a>

## Discussion

Use this property to get details about the playing of the sports event. For example, a baseball game might display the inning number, the current runner positions, the number of outs, and the number of balls and strikes for the current batter.

## See Also

### Getting the overlay information

- [leftTeam](leftteam.md): Team-specific details to display in the left-bottom portion of the thumbnail image.
- [rightTeam](rightteam.md): Team-specific details to display in the right-bottom portion of the thumbnail image.
