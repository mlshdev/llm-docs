> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonecopylocalizedname(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cftimezonecopylocalizedname(_:_:_:))

# CFTimeZoneCopyLocalizedName(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized name of a given time zone.

## Declaration

```swift
func CFTimeZoneCopyLocalizedName(_ tz: CFTimeZone!, _ style: CFTimeZoneNameStyle, _ locale: CFLocale!) -> CFString!
```

## Parameters

- `tz`: The time zone to analyze.
- `style`: The style for the returned name.
- `locale`: The locale for which to localize the returned name.

<a id="return-value"></a>

## Return Value

The name of `tz` localized for `locale`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About Time Zones

- [CFTimeZoneGetName(\_:)](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneGetSecondsFromGMT(\_:\_:)](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.
- [CFTimeZoneGetData(\_:)](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.

# CFTimeZoneCopyLocalizedName (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized name of a given time zone.

## Declaration

```objectivec
extern CFStringRefCFTimeZoneCopyLocalizedName(CFTimeZoneRef tz, CFTimeZoneNameStyle style, CFLocaleRef locale);
```

## Parameters

- `tz`: The time zone to analyze.
- `style`: The style for the returned name.
- `locale`: The locale for which to localize the returned name.

<a id="return-value"></a>

## Return Value

The name of `tz` localized for `locale`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About Time Zones

- [CFTimeZoneGetName](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneGetSecondsFromGMT](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.
- [CFTimeZoneGetData](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.
