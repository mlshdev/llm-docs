> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasesetanchortime(_:timebasetime:immediatemastertime:)](https://developer.apple.com/documentation/coremedia/cmtimebasesetanchortime(_:timebasetime:immediatemastertime:))

# CMTimebaseSetAnchorTime(\_:timebaseTime:immediateMasterTime:)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 6.0+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS · watchOS 6.0+ (deprecated in 8.0)

Sets the time of a timebase at a particular source time.

> Use [CMTimebaseSetAnchorTime(\_:timebaseTime:immediateSourceTime:)](cmtimebasesetanchortime%28__timebasetime_immediatesourcetime_%29.md) instead.

## Declaration

```swift
func CMTimebaseSetAnchorTime(_ timebase: CMTimebase, timebaseTime: CMTime, immediateMasterTime: CMTime)
```

## See Also

### Deprecations

- [CMTimebaseSetRateAndAnchorTime(\_:rate:anchorTime:immediateMasterTime:)](cmtimebasesetrateandanchortime%28__rate_anchortime_immediatemastertime_%29.md): Deprecated.
- [CMTimebaseGetMasterTimebase(\_:)](cmtimebasegetmastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseGetMasterClock(\_:)](cmtimebasegetmasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseGetMaster(\_:)](cmtimebasegetmaster%28__%29.md): Deprecated. Returns the immediate host (either timebase or clock) of a timebase.
- [CMTimebaseGetUltimateMasterClock(\_:)](cmtimebasegetultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseSetMasterClock(\_:\_:)](cmtimebasesetmasterclock%28____%29.md): Deprecated. Sets the time of a timebase at a particular source time.
- [CMTimebaseSetMasterTimebase(\_:\_:)](cmtimebasesetmastertimebase%28____%29.md): Deprecated.
- [CMTimebaseCopyMaster(\_:)](cmtimebasecopymaster%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyMasterClock(\_:)](cmtimebasecopymasterclock%28__%29.md): Deprecated. Returns the immediate host clock of a timebase.
- [CMTimebaseCopyMasterTimebase(\_:)](cmtimebasecopymastertimebase%28__%29.md): Deprecated. Returns the immediate host timebase of a timebase.
- [CMTimebaseCopyUltimateMasterClock(\_:)](cmtimebasecopyultimatemasterclock%28__%29.md): Deprecated. Returns the host clock that is the host of all of a timebase’s host timebases.
- [CMTimebaseCreateWithMasterClock(allocator:masterClock:timebaseOut:)](cmtimebasecreatewithmasterclock%28allocator_masterclock_timebaseout_%29.md): Deprecated. Creates a timebase by using a primary clock.
- [CMTimebaseCreateWithMasterTimebase(allocator:masterTimebase:timebaseOut:)](cmtimebasecreatewithmastertimebase%28allocator_mastertimebase_timebaseout_%29.md): Deprecated. Creates a timebase by using a host timebase.
