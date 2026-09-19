> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsportsoverlay/init(leftteam:rightteam:eventstatus:)

# init(leftTeam:rightTeam:eventStatus:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a sports overlay with left and right team objects.

## Declaration

```swift
init(leftTeam: CPNowPlayingSportsTeam, rightTeam: CPNowPlayingSportsTeam, eventStatus: CPNowPlayingSportsEventStatus?)
```

## Parameters

- `leftTeam`: The left team information.
- `rightTeam`: The right team information.

# initWithLeftTeam:rightTeam:eventStatus: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a sports overlay with left and right team objects.

## Declaration

```objectivec
- (instancetype) initWithLeftTeam:(CPNowPlayingSportsTeam *) leftTeam rightTeam:(CPNowPlayingSportsTeam *) rightTeam eventStatus:(CPNowPlayingSportsEventStatus *) eventStatus;
```

## Parameters

- `leftTeam`: The left team information.
- `rightTeam`: The right team information.
