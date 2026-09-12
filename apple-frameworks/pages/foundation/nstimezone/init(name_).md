> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/init(name:)](https://developer.apple.com/documentation/foundation/nstimezone/init(name:))

# init(name:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a time zone initialized with a given identifier.

## Declaration

```swift
init?(name tzName: String)
```

## Parameters

- `tzName`: The identifier for the time zone. Providing `nil` for this parameter raises an invalid argument exception.

<a id="return-value"></a>

## Return Value

A time zone object initialized with the identifier `tzName`.

<a id="Discussion"></a>

## Discussion

If `tzName` is a known identifier, this method calls [init(name:data:)](init%28name_data_%29.md) with the appropriate data object.

## See Also

### Creating Time Zones

- [init(name:data:)](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [init(abbreviation:)](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [init(forSecondsFromGMT:)](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

# initWithName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a time zone initialized with a given identifier.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) tzName;
```

## Parameters

- `tzName`: The identifier for the time zone. Providing `nil` for this parameter raises an invalid argument exception.

<a id="return-value"></a>

## Return Value

A time zone object initialized with the identifier `tzName`.

<a id="Discussion"></a>

## Discussion

If `tzName` is a known identifier, this method calls [initWithName:data:](init%28name_data_%29.md) with the appropriate data object.

## See Also

### Creating Time Zones

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.
- [timeZoneWithName:data:](timezonewithname_data_.md): Returns the time zone with a given identifier whose data has been initialized using given data.
- [initWithName:data:](init%28name_data_%29.md): Initializes a time zone with a given identifier and time zone data.
- [timeZoneWithAbbreviation:](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [timeZoneForSecondsFromGMT:](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
