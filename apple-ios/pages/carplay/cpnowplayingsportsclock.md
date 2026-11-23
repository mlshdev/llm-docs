> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock

# CPNowPlayingSportsClock (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that specifies the elapsed or remaining time in a match and the state of the clock.

## Declaration

```swift
@MainActor class CPNowPlayingSportsClock
```

<a id="overview"></a>

## Overview

Use a `CPNowPlayingSportsClock` object to specify clock-related information for the current section of a sporting event. Clocks in sporting events either count up to reflect the elapsed time of the match or count down to indicate the amount of time remaining. For example, the clock in a hockey game counts down from an initial value of 20 minutes.

Create a `CPNowPlayingSportsClock` object with the initial time information when configuring the Now Playing interface. Create additional instances throughout the match when gameplay pauses or resumes, or when you need to adjust the time on the clock. Assign your clock objects to the [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md) object you use to report the state of the match to the Now Playing interface.

Keep the clock in the Now Playing interface synchronized with the rest of your content. When the [isPaused](cpnowplayingsportsclock/ispaused.md) property is `false`, CarPlay increments and decrements the clock value once a second as a convenience so you don’t have to update the clock information yourself. However, CarPlay doesn’t make the updated clock value available to your app. When you need to create new [CPNowPlayingSportsClock](cpnowplayingsportsclock.md) objects, initialize them with actual game data to ensure the displayed clock remains synchronized with the rest of your content.

## Topics

### Creating a sports mode type

- [init(elapsedTime:paused:)](cpnowplayingsportsclock/init%28elapsedtime_paused_%29.md): Creates a clock that counts up to measure the elapsed time from the specified value.
- [init(timeRemaining:paused:)](cpnowplayingsportsclock/init%28timeremaining_paused_%29.md): Creates a clock that counts down from the specified value.
- [init(coder:)](cpnowplayingsportsclock/init%28coder_%29.md)

### Getting the clock attributes

- [timeValue](cpnowplayingsportsclock/timevalue.md): The time value you specify at initialization.
- [countsUp](cpnowplayingsportsclock/countsup.md): A Boolean value that indicates whether the event clock counts up.
- [isPaused](cpnowplayingsportsclock/ispaused.md): A Boolean value that indicates whether the clock is paused.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sports mode content

- [CPNowPlayingSportsTeam](cpnowplayingsportsteam.md): A type that specifies team-specific details, including the name, standings, and current score in the match.
- [CPNowPlayingSportsTeamLogo](cpnowplayingsportsteamlogo.md): A type that manages logo information for a sports team.
- [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md): A type that manages match-focused information, including the event clock.

# CPNowPlayingSportsClock (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that specifies the elapsed or remaining time in a match and the state of the clock.

## Declaration

```objectivec
@interface CPNowPlayingSportsClock : NSObject
```

<a id="overview"></a>

## Overview

Use a `CPNowPlayingSportsClock` object to specify clock-related information for the current section of a sporting event. Clocks in sporting events either count up to reflect the elapsed time of the match or count down to indicate the amount of time remaining. For example, the clock in a hockey game counts down from an initial value of 20 minutes.

Create a `CPNowPlayingSportsClock` object with the initial time information when configuring the Now Playing interface. Create additional instances throughout the match when gameplay pauses or resumes, or when you need to adjust the time on the clock. Assign your clock objects to the [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md) object you use to report the state of the match to the Now Playing interface.

Keep the clock in the Now Playing interface synchronized with the rest of your content. When the [paused](cpnowplayingsportsclock/ispaused.md) property is `false`, CarPlay increments and decrements the clock value once a second as a convenience so you don’t have to update the clock information yourself. However, CarPlay doesn’t make the updated clock value available to your app. When you need to create new [CPNowPlayingSportsClock](cpnowplayingsportsclock.md) objects, initialize them with actual game data to ensure the displayed clock remains synchronized with the rest of your content.

## Topics

### Creating a sports mode type

- [initWithElapsedTime:paused:](cpnowplayingsportsclock/init%28elapsedtime_paused_%29.md): Creates a clock that counts up to measure the elapsed time from the specified value.
- [initWithTimeRemaining:paused:](cpnowplayingsportsclock/init%28timeremaining_paused_%29.md): Creates a clock that counts down from the specified value.

### Getting the clock attributes

- [timeValue](cpnowplayingsportsclock/timevalue.md): The time value you specify at initialization.
- [countsUp](cpnowplayingsportsclock/countsup.md): A Boolean value that indicates whether the event clock counts up.
- [paused](cpnowplayingsportsclock/ispaused.md): A Boolean value that indicates whether the clock is paused.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Sports mode content

- [CPNowPlayingSportsTeam](cpnowplayingsportsteam.md): A type that specifies team-specific details, including the name, standings, and current score in the match.
- [CPNowPlayingSportsTeamLogo](cpnowplayingsportsteamlogo.md): A type that manages logo information for a sports team.
- [CPNowPlayingSportsEventStatus](cpnowplayingsportseventstatus.md): A type that manages match-focused information, including the event clock.
