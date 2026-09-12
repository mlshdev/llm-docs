> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasegetmaster(_:)](https://developer.apple.com/documentation/coremedia/cmtimebasegetmaster(_:))

# CMTimebaseGetMaster(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the immediate host (either timebase or clock) of a timebase.

> Use [CMTimebaseCopySource(\_:)](cmtimebasecopysource%28__%29.md) instead.

## Declaration

```swift
func CMTimebaseGetMaster(_ timebase: CMTimebase) -> CMClockOrTimebase?
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if there was an error (such as timebase == NULL). Example of use: time = `CMSyncGetTime(CMTimebaseGetMaster(timebase));`

## See Also

### Deprecations

- [CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateMasterTime:)](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatemastertime_%29.md): Deprecated.
- [CMTimebaseGetMasterTimebase(\_:)](cmtimebasegetmastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseGetMasterClock(\_:)](cmtimebasegetmasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
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

# CMTimebaseGetMaster (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the immediate host (either timebase or clock) of a timebase.

> Use [CMTimebaseCopySource](cmtimebasecopysource%28__%29.md) instead.

## Declaration

```objectivec
extern CMClockOrTimebaseRefCMTimebaseGetMaster(CMTimebaseRef timebase);
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if there was an error (such as timebase == NULL). Example of use: time = `CMSyncGetTime(CMTimebaseGetMaster(timebase));`

## See Also

### Deprecations

- [CMTimebaseGetMasterTimebase](cmtimebasegetmastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseGetMasterClock](cmtimebasegetmasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseGetUltimateMasterClock](cmtimebasegetultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseSetMasterClock](cmtimebasesetmasterclock%28____%29.md): Deprecated. Sets the time of a timebase at a particular source time.
- [CMTimebaseSetMasterTimebase](cmtimebasesetmastertimebase%28____%29.md): Deprecated.
- [CMTimebaseCopyMaster](cmtimebasecopymaster%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyMasterClock](cmtimebasecopymasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseCopyMasterTimebase](cmtimebasecopymastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyUltimateMasterClock](cmtimebasecopyultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseCreateWithMasterClock](cmtimebasecreatewithmasterclock%28allocator_masterclock_timebaseout_%29.md): Deprecated. Creates a timebase by using a primary clock.
- [CMTimebaseCreateWithMasterTimebase](cmtimebasecreatewithmastertimebase%28allocator_mastertimebase_timebaseout_%29.md): Deprecated. Creates a timebase by using a host timebase.
