> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/timezonewithname:data:](https://developer.apple.com/documentation/foundation/nstimezone/timezonewithname:data:)

# timeZoneWithName:data:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the time zone with a given identifier whose data has been initialized using given data.

## Declaration

```objectivec
+ (instancetype) timeZoneWithName:(NSString *) tzName data:(NSData *) aData;
```

## Parameters

- `tzName`: The ID for the time zone.
- `aData`: This parameter is ignored.

<a id="return-value"></a>

## Return Value

The time zone with the ID `tzName`.

<a id="Discussion"></a>

## Discussion

As of macOS 10.6, the underlying implementation of this method has been changed to ignore the specified `data` parameter.

> **Important**

>  You should not use this method. Instead, use [timeZoneWithName:](timezonewithname_.md) to get the time zone object for a given name.

## See Also

### Creating Time Zones

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.
- [initWithName:](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [initWithName:data:](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [timeZoneWithAbbreviation:](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [timeZoneForSecondsFromGMT:](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
