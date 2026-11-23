> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsportsoverlay/init(leftteam:rightteam:eventstatus:)

# init(leftTeam:rightTeam:eventStatus:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a now playing mode object configured with the specified team and sporting event information.

## Declaration

```swift
init(leftTeam: CPNowPlayingSportsTeam, rightTeam: CPNowPlayingSportsTeam, eventStatus: CPNowPlayingSportsEventStatus?)
```

## Parameters

- `leftTeam`: The visiting team information. CarPlay displays this information on the left side of the thumbnail image.
- `rightTeam`: The home team information. CarPlay displays this information on the right side of the thumbnail image.
- `eventStatus`: The current state of the sports event. Specify the event clock information and event-specific details.

<a id="return-value"></a>

## Return Value

An initialized sports overlay object.

<a id="discussion"></a>

## Discussion

After creating the overlay object, initialize a [CPThumbnailImage](../cpthumbnailimage.md) object with it or assign it to the thumbnail image’s [sportsOverlay](../cpthumbnailimage/sportsoverlay.md) property.

## See Also

### Creating a sports overlay

- [init(coder:)](init%28coder_%29.md)

# initWithLeftTeam:rightTeam:eventStatus: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a now playing mode object configured with the specified team and sporting event information.

## Declaration

```objectivec
- (instancetype) initWithLeftTeam:(CPNowPlayingSportsTeam *) leftTeam rightTeam:(CPNowPlayingSportsTeam *) rightTeam eventStatus:(CPNowPlayingSportsEventStatus *) eventStatus;
```

## Parameters

- `leftTeam`: The visiting team information. CarPlay displays this information on the left side of the thumbnail image.
- `rightTeam`: The home team information. CarPlay displays this information on the right side of the thumbnail image.
- `eventStatus`: The current state of the sports event. Specify the event clock information and event-specific details.

<a id="return-value"></a>

## Return Value

An initialized sports overlay object.

<a id="discussion"></a>

## Discussion

After creating the overlay object, initialize a [CPThumbnailImage](../cpthumbnailimage.md) object with it or assign it to the thumbnail image’s [sportsOverlay](../cpthumbnailimage/sportsoverlay.md) property.
