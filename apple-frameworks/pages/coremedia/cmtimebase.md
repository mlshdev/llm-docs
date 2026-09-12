> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase](https://developer.apple.com/documentation/coremedia/cmtimebase)

# CMTimebase (Swift)

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A model of a timeline under application control.

## Declaration

```swift
class CMTimebase
```

## Topics

### Timebases

- [farFuture](cmtimebase/farfuture.md): A time far into the future that represents the year 2257.
- [veryLongTimeInterval](cmtimebase/verylongtimeinterval.md): A time far into the future that represents 256 years.

### Inspecting Timebases

- [time](cmtimebase/time.md): The current time.
- [rate](cmtimebase/rate.md): The current rate relative to its immediate primary clock or timebase.
- [source](cmtimebase/source.md): The immediate source that represents the clock or timebase.
- [sourceClock](cmtimebase/sourceclock.md): Returns the immediate source clock, if any.
- [sourceTimebase](cmtimebase/sourcetimebase.md): Returns the immediate source timebase, if any.
- [effectiveRate](cmtimebase/effectiverate.md): The effective rate that combines its rate with the rates of all its primary timebases.
- [timeAndRate](cmtimebase/timeandrate.md): Returns the current time and rate.
- [ultimateSourceClock](cmtimebase/ultimatesourceclock.md): Returns the source clock that’s the source of all the other source timebases.

### Adding and Removing Timers

- [addTimer(\_:on:)](cmtimebase/addtimer%28__on_%29.md): Adds the timer to the list of timers the timebase manages.
- [addTimer(\_:)](cmtimebase/addtimer%28__%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [removeTimer(\_:)](cmtimebase/removetimer%28__%29-4f6re.md): Removes the timer from the list of timers the timebase manages.
- [removeTimer(\_:)](cmtimebase/removetimer%28__%29-448o2.md): Removes the timer dispatch source from the list of timers the timebase manages.

### Getting and Setting Time

- [setTime(\_:)](cmtimebase/settime%28__%29.md): Sets the current time.
- [time(withTimescale:rounding:)](cmtimebase/time%28withtimescale_rounding_%29.md): Returns the current time in the timescale you request.

### Getting and Setting the Timebase Rate

- [setRate(\_:)](cmtimebase/setrate%28__%29.md): Sets the rate.
- [setRateAndAnchorTime(rate:anchorTime:referenceTime:)](cmtimebase/setrateandanchortime%28rate_anchortime_referencetime_%29.md): Sets the time at a particular primary time, and changes the rate at exactly that time.

### Setting Timers

- [setTimerNextFireTime(\_:fireTime:)](cmtimebase/settimernextfiretime%28__firetime_%29-13hjt.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [setTimerNextFireTime(\_:fireTime:)](cmtimebase/settimernextfiretime%28__firetime_%29-2yvaa.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [setTimerToFireImmediately(\_:)](cmtimebase/settimertofireimmediately%28__%29-9t3wi.md): Sets the timer to fire immediately once, overriding any previous calls.
- [setTimerToFireImmediately(\_:)](cmtimebase/settimertofireimmediately%28__%29-4903g.md): Sets the timer dispatch source to fire immediately once, overriding any previous calls.

### Pausing Time Notifications

- [notificationBarrier()](cmtimebase/notificationbarrier%28%29.md): Requests that the timebase wait until it isn’t posting notifications.

### Setting the Anchor Time

- [setAnchorTime(\_:referenceTime:)](cmtimebase/setanchortime%28__referencetime_%29.md): Sets the time at a particular source time.

### Notifications

- [effectiveRateChanged](cmtimebase/effectiveratechanged.md): A notification that posts by a timebase after the effective rate changes.
- [timeJumped](cmtimebase/timejumped.md): A notification that posts by a timebase after a discontinuous time jump.

### Constants

- [CMTimebase.Error](cmtimebase/error.md): Constants that describe timebase errors.
- [CMTimebase.NotificationKey](cmtimebase/notificationkey.md): Constants that describe notification keys.
- [typeID](cmtimebase/typeid.md): A Core Foundation type identifier that represents a timebase object.

### Deprecations

- [master](cmtimebase/master.md): Deprecated.
- [masterClock](cmtimebase/masterclock.md): Deprecated.
- [masterTimebase](cmtimebase/mastertimebase.md): Deprecated.
- [ultimateMasterClock](cmtimebase/ultimatemasterclock.md): Deprecated.

### Initializers

- [init(referencing:)](cmtimebase/init%28referencing_%29.md)

### Type Aliases

- [CMTimebase.T](cmtimebase/t.md)

### Default Implementations

- [CMSyncProtocol Implementations](cmtimebase/cmsyncprotocol-implementations.md)

## Relationships

### Conforms To

- [CMSyncProtocol](cmsyncprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CMSync](cmsync.md): A type that represents time syncing.
- [CMSyncProtocol](cmsyncprotocol.md): A type that provides behavior for syncing time.

# CMTimebaseRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A model of a timeline under application control.

## Declaration

```objectivec
typedef struct OpaqueCMTimebase * CMTimebaseRef;
```
