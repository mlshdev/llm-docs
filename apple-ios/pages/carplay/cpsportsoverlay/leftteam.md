> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsportsoverlay/leftteam

# leftTeam (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Team-specific details to display in the left-bottom portion of the thumbnail image.

## Declaration

```swift
var leftTeam: CPNowPlayingSportsTeam { get }
```

<a id="discussion"></a>

## Discussion

This property contains information about the team, including its name, logo artwork, and the number of points the team scored. Typically, the visiting team appears on the left side of the element and the home team appears on the right side.

## See Also

### Getting the overlay information

- [rightTeam](rightteam.md): Team-specific details to display in the right-bottom portion of the thumbnail image.
- [eventStatus](eventstatus.md): Match details to display in the bottom center of the thumbnail image.

# leftTeam (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Team-specific details to display in the left-bottom portion of the thumbnail image.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CPNowPlayingSportsTeam * leftTeam;
```

<a id="discussion"></a>

## Discussion

This property contains information about the team, including its name, logo artwork, and the number of points the team scored. Typically, the visiting team appears on the left side of the element and the home team appears on the right side.

## See Also

### Getting the overlay information

- [rightTeam](rightteam.md): Team-specific details to display in the right-bottom portion of the thumbnail image.
- [eventStatus](eventstatus.md): Match details to display in the bottom center of the thumbnail image.
