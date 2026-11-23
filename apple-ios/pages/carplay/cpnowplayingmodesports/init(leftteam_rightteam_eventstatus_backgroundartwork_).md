> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmodesports/init(leftteam:rightteam:eventstatus:backgroundartwork:)

# init(leftTeam:rightTeam:eventStatus:backgroundArtwork:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates an object with information about a sporting event and the teams playing.

## Declaration

```swift
init(leftTeam: CPNowPlayingSportsTeam, rightTeam: CPNowPlayingSportsTeam, eventStatus: CPNowPlayingSportsEventStatus?, backgroundArtwork: UIImage?)
```

## Parameters

- `leftTeam`: The visiting team information to display on the left side of the display.
- `rightTeam`: The home team information to display on the right side of the display.
- `eventStatus`: The current state of the match. Specify the match clock information and match-specific details. For example, a baseball game might display the inning number, the current runner positions, the number of outs, and the number of balls and strikes for the current batter.
- `backgroundArtwork`: An image to display behind the match information. Specify an image that is 500 by 500 points in size. CarPlay scales images to the expected size.

<a id="return-value"></a>

## Return Value

An initialized sports mode object.

<a id="discussion"></a>

## Discussion

After creating this object, assign it to the [nowPlayingMode](../cpnowplayingtemplate/nowplayingmode.md) property of your app’s [CPNowPlayingTemplate](../cpnowplayingtemplate.md) object to display the information.

# initWithLeftTeam:rightTeam:eventStatus:backgroundArtwork: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates an object with information about a sporting event and the teams playing.

## Declaration

```objectivec
- (instancetype) initWithLeftTeam:(CPNowPlayingSportsTeam *) leftTeam rightTeam:(CPNowPlayingSportsTeam *) rightTeam eventStatus:(CPNowPlayingSportsEventStatus *) eventStatus backgroundArtwork:(UIImage *) backgroundArtwork;
```

## Parameters

- `leftTeam`: The visiting team information to display on the left side of the display.
- `rightTeam`: The home team information to display on the right side of the display.
- `eventStatus`: The current state of the match. Specify the match clock information and match-specific details. For example, a baseball game might display the inning number, the current runner positions, the number of outs, and the number of balls and strikes for the current batter.
- `backgroundArtwork`: An image to display behind the match information. Specify an image that is 500 by 500 points in size. CarPlay scales images to the expected size.

<a id="return-value"></a>

## Return Value

An initialized sports mode object.

<a id="discussion"></a>

## Discussion

After creating this object, assign it to the [nowPlayingMode](../cpnowplayingtemplate/nowplayingmode.md) property of your app’s [CPNowPlayingTemplate](../cpnowplayingtemplate.md) object to display the information.
