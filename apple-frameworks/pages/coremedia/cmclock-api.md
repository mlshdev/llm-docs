> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock-api](https://developer.apple.com/documentation/coremedia/cmclock-api)

# CMClock (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A reference clock you use to synchronize applications and devices.

<a id="overview"></a>

## Overview

`The CMSync` API provides a reference clock that you use to synchronize applications and devices. This API also provides functions to monitor relative drift between `CMClocks` and functions that are associated with timer services.

## Topics

### Accessing the Host Clock

- [CMClockGetHostTimeClock()](cmclockgethosttimeclock%28%29.md): Returns a reference to the singleton clock that reflects the host time.

### Stopping the Clock

- [CMClockInvalidate(\_:)](cmclockinvalidate%28__%29.md): Stops the clock.

### Accessing and Converting Time

- [CMClockGetTime(\_:)](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockGetAnchorTime(\_:clockTimeOut:referenceClockTimeOut:)](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockConvertHostTimeToSystemUnits(\_:)](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.
- [CMClockMakeHostTimeFromSystemUnits(\_:)](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.

### Getting and Syncing Time

- [CMSyncGetTime(\_:)](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRate(\_:relativeTo:)](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncGetRelativeRateAndAnchorTime(\_:relativeTo:relativeRateOut:anchorTimeOut:relativeToAnchorTimeOut:)](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.
- [CMSyncConvertTime(\_:from:to:)](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.

### Determining Clock Drift

- [CMClockMightDrift(\_:otherClock:)](cmclockmightdrift%28__otherclock_%29.md): Returns a Boolean value that indicates whether it’s possible for two clocks to drift relative to each other.
- [CMSyncMightDrift(\_:\_:)](cmsyncmightdrift%28____%29.md): Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to the other.

### Data Types

- [CMClock](cmclock.md): An object that represents a source of time.
- [CMClockOrTimebase](cmclockortimebase.md): A type you use in argument lists and function results to indicate that you can pass either a clock or timebase.
- [CMClockGetTypeID()](cmclockgettypeid%28%29.md): Returns the core foundation type identifier of a clock type.

### Constants

- [CMClock Error Codes](cmclock-error-codes.md): Constants that represent the errors in Core Media clock operations.
- [CMTimebase Error Codes](cmtimebase-errors.md): Constants that represent errors in Core Media timebase operations.
- [CMSync error codes](cmsync-error-codes.md): Constants that represent error codes Core Media sync operations return.
- [Timebase Notifications](timebase-notifications.md): Keys that represent timebase notifications.

## See Also

### Media Synchronization

- [CMAudioClock](cmaudioclock-api.md): A specialized reference clock that synchronizes with audio sources.
- [CMTimebase](cmtimebase-api.md): A model of a timeline under application control.

# CMClock (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A reference clock you use to synchronize applications and devices.

<a id="overview"></a>

## Overview

`The CMSync` API provides a reference clock that you use to synchronize applications and devices. This API also provides functions to monitor relative drift between `CMClocks` and functions that are associated with timer services.

## Topics

### Accessing the Host Clock

- [CMClockGetHostTimeClock](cmclockgethosttimeclock%28%29.md): Returns a reference to the singleton clock that reflects the host time.

### Stopping the Clock

- [CMClockInvalidate](cmclockinvalidate%28__%29.md): Stops the clock.

### Accessing and Converting Time

- [CMClockGetTime](cmclockgettime%28__%29.md): Returns the current time from a clock.
- [CMClockGetAnchorTime](cmclockgetanchortime%28__clocktimeout_referenceclocktimeout_%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [CMClockConvertHostTimeToSystemUnits](cmclockconverthosttimetosystemunits%28__%29.md): Converts a host time from a core media time structure to the host time’s native units.
- [CMClockMakeHostTimeFromSystemUnits](cmclockmakehosttimefromsystemunits%28__%29.md): Converts a host time from native units to a core media time structure.

### Getting and Syncing Time

- [CMSyncGetTime](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRate](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncGetRelativeRateAndAnchorTime](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.
- [CMSyncConvertTime](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.

### Determining Clock Drift

- [CMClockMightDrift](cmclockmightdrift%28__otherclock_%29.md): Returns a Boolean value that indicates whether it’s possible for two clocks to drift relative to each other.
- [CMSyncMightDrift](cmsyncmightdrift%28____%29.md): Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to the other.

### Data Types

- [CMClockRef](cmclock.md): An object that represents a source of time.
- [CMClockOrTimebaseRef](cmclockortimebase.md): A type you use in argument lists and function results to indicate that you can pass either a clock or timebase.
- [CMClockGetTypeID](cmclockgettypeid%28%29.md): Returns the core foundation type identifier of a clock type.

### Constants

- [CMClock Error Codes](cmclock-error-codes.md): Constants that represent the errors in Core Media clock operations.
- [CMTimebase Error Codes](cmtimebase-errors.md): Constants that represent errors in Core Media timebase operations.
- [CMSync error codes](cmsync-error-codes.md): Constants that represent error codes Core Media sync operations return.
- [Timebase Notifications](timebase-notifications.md): Keys that represent timebase notifications.

## See Also

### Media Synchronization

- [CMAudioClock](cmaudioclock-api.md): A specialized reference clock that synchronizes with audio sources.
- [CMTimebase](cmtimebase-api.md): A model of a timeline under application control.
