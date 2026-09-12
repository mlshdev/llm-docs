> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncconverttime(_:from:to:)](https://developer.apple.com/documentation/coremedia/cmsyncconverttime(_:from:to:))

# CMSyncConvertTime(\_:from:to:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a time from one timebase or clock to another timebase or clock.

## Declaration

```swift
func CMSyncConvertTime(_ time: CMTime, from fromClockOrTimebase: CMClockOrTimebase, to toClockOrTimebase: CMClockOrTimebase) -> CMTime
```

<a id="Discussion"></a>

## Discussion

If both have a common host, the function syncs the clock or timebase based on the rates in the common tree rooted in that host.

If they have different host clocks (or are both clocks), this calculation also compensates for measured drift between the clocks. To convert to or from host time, pass `CMClockGetHostTimeClock`() as the appropriate argument.

## See Also

### Getting and Syncing Time

- [CMSyncGetTime(\_:)](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRate(\_:relativeTo:)](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncGetRelativeRateAndAnchorTime(\_:relativeTo:relativeRateOut:anchorTimeOut:relativeToAnchorTimeOut:)](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.

# CMSyncConvertTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a time from one timebase or clock to another timebase or clock.

## Declaration

```objectivec
extern CMTime CMSyncConvertTime(CMTime time, CMClockOrTimebaseRef fromClockOrTimebase, CMClockOrTimebaseRef toClockOrTimebase);
```

<a id="Discussion"></a>

## Discussion

If both have a common host, the function syncs the clock or timebase based on the rates in the common tree rooted in that host.

If they have different host clocks (or are both clocks), this calculation also compensates for measured drift between the clocks. To convert to or from host time, pass `CMClockGetHostTimeClock`() as the appropriate argument.

## See Also

### Getting and Syncing Time

- [CMSyncGetTime](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRate](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncGetRelativeRateAndAnchorTime](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.
