> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonegetsecondsfromgmt(_:_:)](https://developer.apple.com/documentation/corefoundation/cftimezonegetsecondsfromgmt(_:_:))

# CFTimeZoneGetSecondsFromGMT(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.

## Declaration

```swift
func CFTimeZoneGetSecondsFromGMT(_ tz: CFTimeZone!, _ at: CFAbsoluteTime) -> CFTimeInterval
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: The date at which the interval is to be computed.

<a id="return-value"></a>

## Return Value

The difference in seconds between `tz` and GMT at the specified date, `at`.

## See Also

### Getting Information About Time Zones

- [CFTimeZoneGetName(\_:)](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneCopyLocalizedName(\_:\_:\_:)](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetData(\_:)](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.

# CFTimeZoneGetSecondsFromGMT (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.

## Declaration

```objectivec
extern CFTimeInterval CFTimeZoneGetSecondsFromGMT(CFTimeZoneRef tz, CFAbsoluteTime at);
```

## Parameters

- `tz`: The time zone to analyze.
- `at`: The date at which the interval is to be computed.

<a id="return-value"></a>

## Return Value

The difference in seconds between `tz` and GMT at the specified date, `at`.

## See Also

### Getting Information About Time Zones

- [CFTimeZoneGetName](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneCopyLocalizedName](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetData](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.
