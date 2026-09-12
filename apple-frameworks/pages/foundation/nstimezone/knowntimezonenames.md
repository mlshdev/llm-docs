> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/knowntimezonenames](https://developer.apple.com/documentation/foundation/nstimezone/knowntimezonenames)

# knownTimeZoneNames (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings listing the IDs of all the time zones known to the system.

## Declaration

```swift
class var knownTimeZoneNames: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of strings listing the IDs of all the time zones known to the system.

<a id="Discussion"></a>

## Discussion

An array of strings listing the IDs of all the time zones known to the system.

## See Also

### Creating Time Zones

- [init(name:)](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [init(name:data:)](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [init(abbreviation:)](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [init(forSecondsFromGMT:)](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

# knownTimeZoneNames (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of strings listing the IDs of all the time zones known to the system.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * knownTimeZoneNames;
```

<a id="return-value"></a>

## Return Value

An array of strings listing the IDs of all the time zones known to the system.

<a id="Discussion"></a>

## Discussion

An array of strings listing the IDs of all the time zones known to the system.

## See Also

### Creating Time Zones

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.
- [timeZoneWithName:data:](timezonewithname_data_.md): Returns the time zone with a given identifier whose data has been initialized using given data.
- [initWithName:](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [initWithName:data:](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [timeZoneWithAbbreviation:](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [timeZoneForSecondsFromGMT:](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
