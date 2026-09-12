> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/localizedname(_:locale:)](https://developer.apple.com/documentation/foundation/nstimezone/localizedname(_:locale:))

# localizedName(\_:locale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized name of the time zone.

## Declaration

```swift
func localizedName(_ style: NSTimeZone.NameStyle, locale: Locale?) -> String?
```

## Parameters

- `style`: The format style for the returned string.
- `locale`: The locale for which to format the name.

<a id="return-value"></a>

## Return Value

The name of the receiver localized for `locale` using `style`.

## See Also

### Describing Time Zones

- [description](description.md): A textual description of the time zone including the name, abbreviation, offset from GMT, and whether or not daylight saving time is currently in effect.

# localizedName:locale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized name of the time zone.

## Declaration

```objectivec
- (NSString *) localizedName:(NSTimeZoneNameStyle) style locale:(NSLocale *) locale;
```

## Parameters

- `style`: The format style for the returned string.
- `locale`: The locale for which to format the name.

<a id="return-value"></a>

## Return Value

The name of the receiver localized for `locale` using `style`.

## See Also

### Describing Time Zones

- [description](description.md): A textual description of the time zone including the name, abbreviation, offset from GMT, and whether or not daylight saving time is currently in effect.
