> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonegetdata(_:)](https://developer.apple.com/documentation/corefoundation/cftimezonegetdata(_:))

# CFTimeZoneGetData(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the data that stores the information used by a time zone.

## Declaration

```swift
func CFTimeZoneGetData(_ tz: CFTimeZone!) -> CFData!
```

## Parameters

- `tz`: The time zone to analyze.

<a id="return-value"></a>

## Return Value

The data used to store `tz`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1). May be `NULL` if the timezone does not have any data or use Olson data for its information.

## See Also

### Getting Information About Time Zones

- [CFTimeZoneGetName(\_:)](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneCopyLocalizedName(\_:\_:\_:)](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetSecondsFromGMT(\_:\_:)](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.

# CFTimeZoneGetData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the data that stores the information used by a time zone.

## Declaration

```objectivec
extern CFDataRefCFTimeZoneGetData(CFTimeZoneRef tz);
```

## Parameters

- `tz`: The time zone to analyze.

<a id="return-value"></a>

## Return Value

The data used to store `tz`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1). May be `NULL` if the timezone does not have any data or use Olson data for its information.

## See Also

### Getting Information About Time Zones

- [CFTimeZoneGetName](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneCopyLocalizedName](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetSecondsFromGMT](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.
