> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmodesports/backgroundartwork

# backgroundArtwork (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The image to display behind the match information.

## Declaration

```swift
@NSCopying var backgroundArtwork: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

This property stores the image at the expected size, which is 500 by 500 points. A gradient or crossfade image works best for backgrounds, especially when it includes the primary colors of the competing teams.

## See Also

### Getting the event details

- [leftTeam](leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [rightTeam](rightteam.md): Details for the team that appears on the right side of the display.
- [eventStatus](eventstatus.md): Match details to display in the center of the Now Playing interface.

# backgroundArtwork (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The image to display behind the match information.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * backgroundArtwork;
```

<a id="discussion"></a>

## Discussion

This property stores the image at the expected size, which is 500 by 500 points. A gradient or crossfade image works best for backgrounds, especially when it includes the primary colors of the competing teams.

## See Also

### Getting the event details

- [leftTeam](leftteam.md): Team-specific details to display on the left side of the Now Playing interface.
- [rightTeam](rightteam.md): Details for the team that appears on the right side of the display.
- [eventStatus](eventstatus.md): Match details to display in the center of the Now Playing interface.
