> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncgetrelativerateandanchortime(_:relativeto:relativerateout:anchortimeout:relativetoanchortimeout:)](https://developer.apple.com/documentation/coremedia/cmsyncgetrelativerateandanchortime(_:relativeto:relativerateout:anchortimeout:relativetoanchortimeout:))

# CMSyncGetRelativeRateAndAnchorTime(\_:relativeTo:relativeRateOut:anchorTimeOut:relativeToAnchorTimeOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.

## Declaration

```swift
func CMSyncGetRelativeRateAndAnchorTime(_ ofClockOrTimebase: CMClockOrTimebase, relativeTo relativeToClockOrTimebase: CMClockOrTimebase, relativeRateOut outRelativeRate: UnsafeMutablePointer<Float64>?, anchorTimeOut outOfClockOrTimebaseAnchorTime: UnsafeMutablePointer<CMTime>?, relativeToAnchorTimeOut outRelativeToClockOrTimebaseAnchorTime: UnsafeMutablePointer<CMTime>?) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

If both have a common host, the function syncs the clock or timebase based on the rates in the common tree rooted in that host.

If they have different host clocks (or are both clocks), this calculation takes into account the measured drift between the two clocks, using host time as a pivot. The rate of a moving timebase relative to a stopped timebase is a NaN.

## See Also

### Getting and Syncing Time

- [CMSyncGetTime(\_:)](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRate(\_:relativeTo:)](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncConvertTime(\_:from:to:)](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.

# CMSyncGetRelativeRateAndAnchorTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the relative rate of one timebase or clock relative to another timebase or clock and the times of each timebase or clock at which the relative rate went into effect.

## Declaration

```objectivec
extern OSStatus CMSyncGetRelativeRateAndAnchorTime(CMClockOrTimebaseRef ofClockOrTimebase, CMClockOrTimebaseRef relativeToClockOrTimebase, Float64 *outRelativeRate, CMTime *outOfClockOrTimebaseAnchorTime, CMTime *outRelativeToClockOrTimebaseAnchorTime);
```

<a id="Discussion"></a>

## Discussion

If both have a common host, the function syncs the clock or timebase based on the rates in the common tree rooted in that host.

If they have different host clocks (or are both clocks), this calculation takes into account the measured drift between the two clocks, using host time as a pivot. The rate of a moving timebase relative to a stopped timebase is a NaN.

## See Also

### Getting and Syncing Time

- [CMSyncGetTime](cmsyncgettime%28__%29.md): Returns the time from a clock or timebase.
- [CMSyncGetRelativeRate](cmsyncgetrelativerate%28__relativeto_%29.md): Returns the relative rate of one timebase or clock relative to another timebase or clock.
- [CMSyncConvertTime](cmsyncconverttime%28__from_to_%29.md): Converts a time from one timebase or clock to another timebase or clock.
