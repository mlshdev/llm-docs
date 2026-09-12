> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportsclock](https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock)

# CPNowPlayingSportsClock (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A representation of the amount of time elapsed so far in this event, for events where the clock counts UP.

## Declaration

```swift
@MainActor class CPNowPlayingSportsClock
```

<a id="overview"></a>

## Overview

Or, a representation of the amount of time remaining in the event, or a section of the event (period/quarter/etc.) for events where the clock counts DOWN.

## Topics

### Initializers

- [init(coder:)](cpnowplayingsportsclock/init%28coder_%29.md)
- [init(elapsedTime:paused:)](cpnowplayingsportsclock/init%28elapsedtime_paused_%29.md): Represents a duration of time that has elapsed so far in this event, or play period of the event (quarter/inning/period).
- [init(timeRemaining:paused:)](cpnowplayingsportsclock/init%28timeremaining_paused_%29.md): Represents an amount of time remaining in the event, or play period of the event (quarter/inning/period).

### Instance Properties

- [countsUp](cpnowplayingsportsclock/countsup.md): If true, the timer is counting UP, so as to indicate an amount of time elapsed so far in this event.
- [isPaused](cpnowplayingsportsclock/ispaused.md): Whether the clock should be paused, e.g. due to a stoppage in play.
- [timeValue](cpnowplayingsportsclock/timevalue.md): The time value in the clock; either elapsed time or time remaining.

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

# CPNowPlayingSportsClock (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A representation of the amount of time elapsed so far in this event, for events where the clock counts UP.

## Declaration

```objectivec
@interface CPNowPlayingSportsClock : NSObject
```

<a id="overview"></a>

## Overview

Or, a representation of the amount of time remaining in the event, or a section of the event (period/quarter/etc.) for events where the clock counts DOWN.

## Topics

### Instance Properties

- [countsUp](cpnowplayingsportsclock/countsup.md): If true, the timer is counting UP, so as to indicate an amount of time elapsed so far in this event.
- [paused](cpnowplayingsportsclock/ispaused.md): Whether the clock should be paused, e.g. due to a stoppage in play.
- [timeValue](cpnowplayingsportsclock/timevalue.md): The time value in the clock; either elapsed time or time remaining.

### Instance Methods

- [initWithElapsedTime:paused:](cpnowplayingsportsclock/init%28elapsedtime_paused_%29.md): Represents a duration of time that has elapsed so far in this event, or play period of the event (quarter/inning/period).
- [initWithTimeRemaining:paused:](cpnowplayingsportsclock/init%28timeremaining_paused_%29.md): Represents an amount of time remaining in the event, or play period of the event (quarter/inning/period).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
