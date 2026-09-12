> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncgettime(_:)](https://developer.apple.com/documentation/coremedia/cmsyncgettime(_:))

# CMSyncGetTime(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the time from a clock or timebase.

## Declaration

```swift
func CMSyncGetTime(_ clockOrTimebase: CMClockOrTimebase) -> CMTime
```

<a id="Discussion"></a>

## Discussion

`CMSyncGetTime` calls either [CMClockGetTime(\_:)](cmclockgettime%28__%29.md) or [CMTimebaseGetTime(\_:)](cmtimebasegettime%28__%29.md), as appropriate.

## See Also

### Getting and Syncing Time

- [CMSyncGetRelativeRate(\_:relativeTo:)](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncGetRelativeRateAndAnchorTime(\_:relativeTo:relativeRateOut:anchorTimeOut:relativeToAnchorTimeOut:)](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.
- [CMSyncConvertTime(\_:from:to:)](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.

# CMSyncGetTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the time from a clock or timebase.

## Declaration

```objectivec
extern CMTime CMSyncGetTime(CMClockOrTimebaseRef clockOrTimebase);
```

<a id="Discussion"></a>

## Discussion

`CMSyncGetTime` calls either [CMClockGetTime](cmclockgettime%28__%29.md) or [CMTimebaseGetTime](cmtimebasegettime%28__%29.md), as appropriate.

## See Also

### Getting and Syncing Time

- [CMSyncGetRelativeRate](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncGetRelativeRateAndAnchorTime](cmsyncgetrelativerateandanchortime%28__relativeto_relativerateout_anchortimeout_relativetoanchortimeout_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.
- [CMSyncConvertTime](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.
