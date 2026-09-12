> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncgetrelativerate(_:relativeto:)](https://developer.apple.com/documentation/coremedia/cmsyncgetrelativerate(_:relativeto:))

# CMSyncGetRelativeRate(\_:relativeTo:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the relative rate of one timebase or clock relative to another timebase or clock.

## Declaration

```swift
func CMSyncGetRelativeRate(_ ofClockOrTimebase: CMClockOrTimebase, relativeTo relativeToClockOrTimebase: CMClockOrTimebase) -> Float64
```

<a id="Discussion"></a>

## Discussion

If both have a common host, the function syncs the clock or timebase based on the rates in the common tree rooted in that host.

If they have different host clocks (or are both clocks), this calculation takes into account the measured drift between the two clocks, using host time as a pivot. The rate of a moving timebase relative to a stopped timebase is a NaN. Calling `CMTimebaseGetEffectiveRate(timebase)` is equivalent to calling `CMSyncGetRelativeRate(timebase, CMTimebaseGetUltimateMasterClock(timebase)`).

## See Also

### Getting and Syncing Time

- [CMSyncGetTime(\_:)](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRateAndAnchorTime(\_:relativeTo:relativeRateOut:anchorTimeOut:relativeToAnchorTimeOut:)](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.
- [CMSyncConvertTime(\_:from:to:)](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.

# CMSyncGetRelativeRate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the relative rate of one timebase or clock relative to another timebase or clock.

## Declaration

```objectivec
extern Float64 CMSyncGetRelativeRate(CMClockOrTimebaseRef ofClockOrTimebase, CMClockOrTimebaseRef relativeToClockOrTimebase);
```

<a id="Discussion"></a>

## Discussion

If both have a common host, the function syncs the clock or timebase based on the rates in the common tree rooted in that host.

If they have different host clocks (or are both clocks), this calculation takes into account the measured drift between the two clocks, using host time as a pivot. The rate of a moving timebase relative to a stopped timebase is a NaN. Calling `CMTimebaseGetEffectiveRate(timebase)` is equivalent to calling `CMSyncGetRelativeRate(timebase, CMTimebaseGetUltimateMasterClock(timebase)`).

## See Also

### Getting and Syncing Time

- [CMSyncGetTime](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRateAndAnchorTime](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.
- [CMSyncConvertTime](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.
