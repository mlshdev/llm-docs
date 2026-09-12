> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/init(forsecondsfromgmt:)](https://developer.apple.com/documentation/foundation/nstimezone/init(forsecondsfromgmt:))

# init(forSecondsFromGMT:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.

## Declaration

```swift
convenience init(forSecondsFromGMT seconds: Int)
```

## Parameters

- `seconds`: The number of seconds by which the new time zone is offset from GMT.

<a id="return-value"></a>

## Return Value

A time zone object offset from Greenwich Mean Time by `seconds`.

<a id="Discussion"></a>

## Discussion

The name of the new time zone is GMT +/– the offset, in hours and minutes. Time zones created with this method never have daylight savings, and the offset is constant no matter the date.

## See Also

### Creating Time Zones

- [init(name:)](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [init(name:data:)](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [init(abbreviation:)](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

# timeZoneForSecondsFromGMT: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.

## Declaration

```objectivec
+ (instancetype) timeZoneForSecondsFromGMT:(NSInteger) seconds;
```

## Parameters

- `seconds`: The number of seconds by which the new time zone is offset from GMT.

<a id="return-value"></a>

## Return Value

A time zone object offset from Greenwich Mean Time by `seconds`.

<a id="Discussion"></a>

## Discussion

The name of the new time zone is GMT +/– the offset, in hours and minutes. Time zones created with this method never have daylight savings, and the offset is constant no matter the date.

## See Also

### Related Documentation

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.

### Creating Time Zones

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.
- [timeZoneWithName:data:](timezonewithname_data_.md): Returns the time zone with a given identifier whose data has been initialized using given data.
- [initWithName:](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [initWithName:data:](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [timeZoneWithAbbreviation:](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
