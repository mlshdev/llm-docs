> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/init(abbreviation:)](https://developer.apple.com/documentation/foundation/nstimezone/init(abbreviation:))

# init(abbreviation:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the time zone object identified by a given abbreviation.

## Declaration

```swift
convenience init?(abbreviation: String)
```

## Parameters

- `abbreviation`: An abbreviation for a time zone.

<a id="return-value"></a>

## Return Value

The time zone object identified by `abbreviation` determined by resolving the abbreviation to a name using the abbreviation dictionary and then returning the time zone for that name. Returns `nil` if there is no match for `abbreviation`.

<a id="Discussion"></a>

## Discussion

In general, you are discouraged from using abbreviations except for unique instances such as “GMT”. Time Zone abbreviations are not standardized and so a given abbreviation may have multiple meanings—for example, “EST” refers to Eastern Time in both the United States and Australia

## See Also

### Related Documentation

- [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i)

### Creating Time Zones

- [init(name:)](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [init(name:data:)](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [init(forSecondsFromGMT:)](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

# timeZoneWithAbbreviation: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the time zone object identified by a given abbreviation.

## Declaration

```objectivec
+ (instancetype) timeZoneWithAbbreviation:(NSString *) abbreviation;
```

## Parameters

- `abbreviation`: An abbreviation for a time zone.

<a id="return-value"></a>

## Return Value

The time zone object identified by `abbreviation` determined by resolving the abbreviation to a name using the abbreviation dictionary and then returning the time zone for that name. Returns `nil` if there is no match for `abbreviation`.

<a id="Discussion"></a>

## Discussion

In general, you are discouraged from using abbreviations except for unique instances such as “GMT”. Time Zone abbreviations are not standardized and so a given abbreviation may have multiple meanings—for example, “EST” refers to Eastern Time in both the United States and Australia

## See Also

### Related Documentation

- [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i)
- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.

### Creating Time Zones

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.
- [timeZoneWithName:data:](timezonewithname_data_.md): Returns the time zone with a given identifier whose data has been initialized using given data.
- [initWithName:](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [initWithName:data:](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [timeZoneForSecondsFromGMT:](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
