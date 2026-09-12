> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase-api](https://developer.apple.com/documentation/coremedia/cmtimebase-api)

# CMTimebase (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A model of a timeline under application control.

<a id="overview"></a>

## Overview

A timebase represents a timeline that clients can control by setting the rate and time. Each timebase has either a host clock or a host timebase, and its rate is expressed relative to its host:

- When a timebase has rate 0.0, its time is fixed and doesn’t change as its host’s time changes.
- When a timebase has rate 1.0, its time increases one second as its host’s time increases by one second.
- When a timebase has rate 2.0, its time increases two seconds as its host’s time increases by one second.
- When a timebase has rate -1.0, its time decreases one second as its host’s time increases by one second.

If a timebase has a host timebase, the host timebase’s rate is a factor in determining the timebase’s effective rate. In fact, a timebase’s effective rate is defined as the product of its rate, its host timebase’s rate, its host timebase’s host timebase’s rate, and so on up to the ultimate host clock. This is the rate at which the timebase’s time changes relative to the ultimate host clock.

## Topics

### Creating Timebases

- [CMTimebaseCreateWithSourceClock(allocator:sourceClock:timebaseOut:)](cmtimebasecreatewithsourceclock%28allocator_sourceclock_timebaseout_%29.md): Creates a timebase by using a source clock.
- [CMTimebaseCreateWithSourceTimebase(allocator:sourceTimebase:timebaseOut:)](cmtimebasecreatewithsourcetimebase%28allocator_sourcetimebase_timebaseout_%29.md): Creates a timebase by using a source timebase.

### Copying Timebases

- [CMTimebaseCopySource(\_:)](cmtimebasecopysource%28__%29.md): Returns the immediate source — either a clock or timebase — of a timebase.
- [CMTimebaseCopySourceClock(\_:)](cmtimebasecopysourceclock%28__%29.md): Returns the immediate source clock of a timebase.
- [CMTimebaseCopySourceTimebase(\_:)](cmtimebasecopysourcetimebase%28__%29.md): Returns the immediate source timebase of a timebase.
- [CMTimebaseCopyUltimateSourceClock(\_:)](cmtimebasecopyultimatesourceclock%28__%29.md): Returns the source clock that’s the source of all of a timebase’s source timebases.

### Getting and Setting Time

- [CMTimebaseGetTime(\_:)](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale(\_:timescale:method:)](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseGetTimeAndRate(\_:timeOut:rateOut:)](cmtimebasegettimeandrate%28__timeout_rateout_%29.md): Returns the current time and rate of a timebase.
- [CMTimebaseSetTime(\_:time:)](cmtimebasesettime%28__time_%29.md): Sets the current time of a timebase.
- [CMTimebaseSetSourceClock(\_:\_:)](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase(\_:\_:)](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.
- [CMTimebaseSetAnchorTime(\_:timebaseTime:immediateSourceTime:)](cmtimebasesetanchortime%28__timebasetime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time.

### Getting and Setting the Time Rate

- [CMTimebaseGetRate(\_:)](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseGetEffectiveRate(\_:)](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRate(\_:rate:)](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.
- [CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateSourceTime:)](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.

### Interacting with Timers

- [CMTimebaseAddTimer(\_:timer:runloop:)](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseAddTimerDispatchSource(\_:timerSource:)](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer(\_:timer:)](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource(\_:timerSource:)](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime(\_:timer:fireTime:flags:)](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately(\_:timer:)](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime(\_:timerSource:fireTime:flags:)](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately(\_:timerSource:)](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.

### Pausing Time Notifications

- [CMTimebaseNotificationBarrier(\_:)](cmtimebasenotificationbarrier%28__%29.md): Requests that the timebase wait until it isn’t posting notifications.

### Data Types

- [CMTimebase](cmtimebase.md): A model of a timeline under application control.
- [CMSync](cmsync.md): A type that represents time syncing.
- [CMSyncProtocol](cmsyncprotocol.md): A type that provides behavior for syncing time.

### Timebase Errors

- [kCMTimebaseError_MissingRequiredParameter](kcmtimebaseerror_missingrequiredparameter.md): A timebase error that indicates a parameter is missing.
- [kCMTimebaseError_InvalidParameter](kcmtimebaseerror_invalidparameter.md): A timebase error that indicates a parameter isn’t valid.
- [kCMTimebaseError_AllocationFailed](kcmtimebaseerror_allocationfailed.md): A timebase error that indicates the memory allocation fails.
- [kCMTimebaseError_TimerIntervalTooShort](kcmtimebaseerror_timerintervaltooshort.md): A timebase error that indicates the time interval is too short.
- [kCMTimebaseError_ReadOnly](kcmtimebaseerror_readonly.md): A timebase error that indicates the system attempts to modify a read-only timebase.

### Constants

- [CMTimebaseGetTypeID()](cmtimebasegettypeid%28%29.md): Returns the Core Foundation type identifier that identifies a timebase object.

### Notifications

- [kCMTimebaseNotificationKey_EventTime](kcmtimebasenotificationkey_eventtime.md): A notification that a timebase posts after a discontinuous time jump.

### Deprecations

- [CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateMasterTime:)](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatemastertime_%29.md): Deprecated.
- [CMTimebaseGetMasterTimebase(\_:)](cmtimebasegetmastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseGetMasterClock(\_:)](cmtimebasegetmasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseGetMaster(\_:)](cmtimebasegetmaster%28__%29.md): Deprecated. Returns the immediate host (either timebase or clock) of a timebase.
- [CMTimebaseGetUltimateMasterClock(\_:)](cmtimebasegetultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseSetMasterClock(\_:\_:)](cmtimebasesetmasterclock%28____%29.md): Deprecated. Sets the time of a timebase at a particular source time.
- [CMTimebaseSetMasterTimebase(\_:\_:)](cmtimebasesetmastertimebase%28____%29.md): Deprecated.
- [CMTimebaseSetAnchorTime(\_:timebaseTime:immediateMasterTime:)](cmtimebasesetanchortime%28__timebasetime_immediatemastertime_%29.md): Deprecated. Sets the time of a timebase at a particular source time.
- [CMTimebaseCopyMaster(\_:)](cmtimebasecopymaster%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyMasterClock(\_:)](cmtimebasecopymasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseCopyMasterTimebase(\_:)](cmtimebasecopymastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyUltimateMasterClock(\_:)](cmtimebasecopyultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseCreateWithMasterClock(allocator:masterClock:timebaseOut:)](cmtimebasecreatewithmasterclock%28allocator_masterclock_timebaseout_%29.md): Deprecated. Creates a timebase by using a primary clock.
- [CMTimebaseCreateWithMasterTimebase(allocator:masterTimebase:timebaseOut:)](cmtimebasecreatewithmastertimebase%28allocator_mastertimebase_timebaseout_%29.md): Deprecated. Creates a timebase by using a host timebase.

## See Also

### Media Synchronization

- [CMClock](cmclock-api.md): A reference clock you use to synchronize applications and devices.
- [CMAudioClock](cmaudioclock-api.md): A specialized reference clock that synchronizes with audio sources.

# CMTimebase (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A model of a timeline under application control.

<a id="overview"></a>

## Overview

A timebase represents a timeline that clients can control by setting the rate and time. Each timebase has either a host clock or a host timebase, and its rate is expressed relative to its host:

- When a timebase has rate 0.0, its time is fixed and doesn’t change as its host’s time changes.
- When a timebase has rate 1.0, its time increases one second as its host’s time increases by one second.
- When a timebase has rate 2.0, its time increases two seconds as its host’s time increases by one second.
- When a timebase has rate -1.0, its time decreases one second as its host’s time increases by one second.

If a timebase has a host timebase, the host timebase’s rate is a factor in determining the timebase’s effective rate. In fact, a timebase’s effective rate is defined as the product of its rate, its host timebase’s rate, its host timebase’s host timebase’s rate, and so on up to the ultimate host clock. This is the rate at which the timebase’s time changes relative to the ultimate host clock.

## Topics

### Creating Timebases

- [CMTimebaseCreateWithSourceClock](cmtimebasecreatewithsourceclock%28allocator_sourceclock_timebaseout_%29.md): Creates a timebase by using a source clock.
- [CMTimebaseCreateWithSourceTimebase](cmtimebasecreatewithsourcetimebase%28allocator_sourcetimebase_timebaseout_%29.md): Creates a timebase by using a source timebase.

### Copying Timebases

- [CMTimebaseCopySource](cmtimebasecopysource%28__%29.md): Returns the immediate source — either a clock or timebase — of a timebase.
- [CMTimebaseCopySourceClock](cmtimebasecopysourceclock%28__%29.md): Returns the immediate source clock of a timebase.
- [CMTimebaseCopySourceTimebase](cmtimebasecopysourcetimebase%28__%29.md): Returns the immediate source timebase of a timebase.
- [CMTimebaseCopyUltimateSourceClock](cmtimebasecopyultimatesourceclock%28__%29.md): Returns the source clock that’s the source of all of a timebase’s source timebases.

### Getting and Setting Time

- [CMTimebaseGetTime](cmtimebasegettime%28__%29.md): Returns the current time from a timebase.
- [CMTimebaseGetTimeWithTimeScale](cmtimebasegettimewithtimescale%28__timescale_method_%29.md): Returns the current time from a timebase in the specified timescale.
- [CMTimebaseGetTimeAndRate](cmtimebasegettimeandrate%28__timeout_rateout_%29.md): Returns the current time and rate of a timebase.
- [CMTimebaseSetTime](cmtimebasesettime%28__time_%29.md): Sets the current time of a timebase.
- [CMTimebaseSetSourceClock](cmtimebasesetsourceclock%28____%29.md): Sets the source clock of a timebase.
- [CMTimebaseSetSourceTimebase](cmtimebasesetsourcetimebase%28____%29.md): Sets the source timebase of a timebase.
- [CMTimebaseSetAnchorTime](cmtimebasesetanchortime%28__timebasetime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time.

### Getting and Setting the Time Rate

- [CMTimebaseGetRate](cmtimebasegetrate%28__%29.md): Returns the current rate of a timebase.
- [CMTimebaseGetEffectiveRate](cmtimebasegeteffectiverate%28__%29.md): Returns the effective rate of a timebase, which combines its rate with the rates of all its host timebases.
- [CMTimebaseSetRate](cmtimebasesetrate%28__rate_%29.md): Sets the rate of a timebase.
- [CMTimebaseSetRateAndAnchorTime](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatesourcetime_%29.md): Sets the time of a timebase at a particular host time, and changes the rate at exactly that time.

### Interacting with Timers

- [CMTimebaseAddTimer](cmtimebaseaddtimer%28__timer_runloop_%29.md): Adds the timer to the list of timers the timebase manages.
- [CMTimebaseAddTimerDispatchSource](cmtimebaseaddtimerdispatchsource%28__timersource_%29.md): Adds the timer dispatch source to the list of timers the timebase manages.
- [CMTimebaseRemoveTimer](cmtimebaseremovetimer%28__timer_%29.md): Removes the timer from the list of timers the timebase manages.
- [CMTimebaseRemoveTimerDispatchSource](cmtimebaseremovetimerdispatchsource%28__timersource_%29.md): Removes the timer dispatch source from the list of timers the timebase manages.
- [CMTimebaseSetTimerNextFireTime](cmtimebasesettimernextfiretime%28__timer_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [CMTimebaseSetTimerToFireImmediately](cmtimebasesettimertofireimmediately%28__timer_%29.md): Sets the timer to fire immediately once, overriding any previous timer calls.
- [CMTimebaseSetTimerDispatchSourceNextFireTime](cmtimebasesettimerdispatchsourcenextfiretime%28__timersource_firetime_flags_%29.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [CMTimebaseSetTimerDispatchSourceToFireImmediately](cmtimebasesettimerdispatchsourcetofireimmediately%28__timersource_%29.md): Sets the timer dispatch source to fire immediately once, overriding any previous timer call.

### Pausing Time Notifications

- [CMTimebaseNotificationBarrier](cmtimebasenotificationbarrier%28__%29.md): Requests that the timebase wait until it isn’t posting notifications.

### Data Types

- [CMTimebaseRef](cmtimebase.md): A model of a timeline under application control.

### Timebase Errors

- [kCMTimebaseError_MissingRequiredParameter](kcmtimebaseerror_missingrequiredparameter.md): A timebase error that indicates a parameter is missing.
- [kCMTimebaseError_InvalidParameter](kcmtimebaseerror_invalidparameter.md): A timebase error that indicates a parameter isn’t valid.
- [kCMTimebaseError_AllocationFailed](kcmtimebaseerror_allocationfailed.md): A timebase error that indicates the memory allocation fails.
- [kCMTimebaseError_TimerIntervalTooShort](kcmtimebaseerror_timerintervaltooshort.md): A timebase error that indicates the time interval is too short.
- [kCMTimebaseError_ReadOnly](kcmtimebaseerror_readonly.md): A timebase error that indicates the system attempts to modify a read-only timebase.

### Constants

- [kCMTimebaseVeryLongCFTimeInterval](kcmtimebaseverylongcftimeinterval.md): A constant that defines a very long elapsed time in seconds.
- [kCMTimebaseFarFutureCFAbsoluteTime](kcmtimebasefarfuturecfabsolutetime.md): A constant that defines a point of time in the far, far future.
- [CMTimebaseGetTypeID](cmtimebasegettypeid%28%29.md): Returns the Core Foundation type identifier that identifies a timebase object.

### Notifications

- [kCMTimebaseNotificationKey_EventTime](kcmtimebasenotificationkey_eventtime.md): A notification that a timebase posts after a discontinuous time jump.

### Deprecations

- [CMTimebaseGetMasterTimebase](cmtimebasegetmastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseGetMasterClock](cmtimebasegetmasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseGetMaster](cmtimebasegetmaster%28__%29.md): Deprecated. Returns the immediate host (either timebase or clock) of a timebase.
- [CMTimebaseGetUltimateMasterClock](cmtimebasegetultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseSetMasterClock](cmtimebasesetmasterclock%28____%29.md): Deprecated. Sets the time of a timebase at a particular source time.
- [CMTimebaseSetMasterTimebase](cmtimebasesetmastertimebase%28____%29.md): Deprecated.
- [CMTimebaseCopyMaster](cmtimebasecopymaster%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyMasterClock](cmtimebasecopymasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseCopyMasterTimebase](cmtimebasecopymastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyUltimateMasterClock](cmtimebasecopyultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseCreateWithMasterClock](cmtimebasecreatewithmasterclock%28allocator_masterclock_timebaseout_%29.md): Deprecated. Creates a timebase by using a primary clock.
- [CMTimebaseCreateWithMasterTimebase](cmtimebasecreatewithmastertimebase%28allocator_mastertimebase_timebaseout_%29.md): Deprecated. Creates a timebase by using a host timebase.

## See Also

### Media Synchronization

- [CMClock](cmclock-api.md): A reference clock you use to synchronize applications and devices.
- [CMAudioClock](cmaudioclock-api.md): A specialized reference clock that synchronizes with audio sources.
