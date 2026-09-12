> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/abbreviationdictionary](https://developer.apple.com/documentation/foundation/nstimezone/abbreviationdictionary)

# abbreviationDictionary (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

## Declaration

```swift
class var abbreviationDictionary: [String : String] { get set }
```

<a id="return-value"></a>

## Return Value

A dictionary holding the mappings of time zone abbreviations to time zone names.

<a id="Discussion"></a>

## Discussion

Note that more than one time zone may have the same abbreviation—for example, US/Pacific and Canada/Pacific both use the abbreviation “PST.” In these cases, [abbreviationDictionary](abbreviationdictionary.md) chooses a single name to map the abbreviation to.

## See Also

### Creating Time Zones

- [init(name:)](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [init(name:data:)](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [init(abbreviation:)](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [init(forSecondsFromGMT:)](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.

# abbreviationDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

## Declaration

```objectivec
@property (class, copy) NSDictionary<NSString *,NSString *> * abbreviationDictionary;
```

<a id="return-value"></a>

## Return Value

A dictionary holding the mappings of time zone abbreviations to time zone names.

<a id="Discussion"></a>

## Discussion

Note that more than one time zone may have the same abbreviation—for example, US/Pacific and Canada/Pacific both use the abbreviation “PST.” In these cases, [abbreviationDictionary](abbreviationdictionary.md) chooses a single name to map the abbreviation to.

## See Also

### Creating Time Zones

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.
- [timeZoneWithName:data:](timezonewithname_data_.md): Returns the time zone with a given identifier whose data has been initialized using given data.
- [initWithName:](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [initWithName:data:](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [timeZoneWithAbbreviation:](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [timeZoneForSecondsFromGMT:](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
