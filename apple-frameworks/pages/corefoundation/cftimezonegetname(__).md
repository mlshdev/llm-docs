> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonegetname(_:)](https://developer.apple.com/documentation/corefoundation/cftimezonegetname(_:))

# CFTimeZoneGetName(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the geopolitical region name that identifies a given time zone.

## Declaration

```swift
func CFTimeZoneGetName(_ tz: CFTimeZone!) -> CFString!
```

## Parameters

- `tz`: The time zone to analyze.

<a id="return-value"></a>

## Return Value

A string containing the geopolitical region name that identifies `tz`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About Time Zones

- [CFTimeZoneCopyLocalizedName(\_:\_:\_:)](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetSecondsFromGMT(\_:\_:)](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.
- [CFTimeZoneGetData(\_:)](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.

# CFTimeZoneGetName (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the geopolitical region name that identifies a given time zone.

## Declaration

```objectivec
extern CFStringRefCFTimeZoneGetName(CFTimeZoneRef tz);
```

## Parameters

- `tz`: The time zone to analyze.

<a id="return-value"></a>

## Return Value

A string containing the geopolitical region name that identifies `tz`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About Time Zones

- [CFTimeZoneCopyLocalizedName](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetSecondsFromGMT](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.
- [CFTimeZoneGetData](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.
