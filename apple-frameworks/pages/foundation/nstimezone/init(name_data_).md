> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/init(name:data:)](https://developer.apple.com/documentation/foundation/nstimezone/init(name:data:))

# init(name:data:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a time zone with a given identifier and time zone data.

## Declaration

```swift
init?(name tzName: String, data aData: Data?)
```

## Parameters

- `tzName`: The identifier for the time zone. Providing `nil` for this parameter raises an invalid argument exception.
- `aData`: This parameter is ignored.

<a id="Discussion"></a>

## Discussion

As of macOS 10.6, the underlying implementation of this method has been changed to ignore the specified `data` parameter.

> **Important**

>  You should not use this method. Instead, use [init(name:)](init%28name_%29.md) to initialize a time zone object with a given name.

## See Also

### Creating Time Zones

- [init(name:)](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [init(abbreviation:)](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [init(forSecondsFromGMT:)](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.

# initWithName:data: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a time zone with a given identifier and time zone data.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) tzName data:(NSData *) aData;
```

## Parameters

- `tzName`: The identifier for the time zone. Providing `nil` for this parameter raises an invalid argument exception.
- `aData`: This parameter is ignored.

<a id="Discussion"></a>

## Discussion

As of macOS 10.6, the underlying implementation of this method has been changed to ignore the specified `data` parameter.

> **Important**

>  You should not use this method. Instead, use [initWithName:](init%28name_%29.md) to initialize a time zone object with a given name.

## See Also

### Creating Time Zones

- [timeZoneWithName:](timezonewithname_.md): Returns the time zone object identified by a given identifier.
- [timeZoneWithName:data:](timezonewithname_data_.md): Returns the time zone with a given identifier whose data has been initialized using given data.
- [initWithName:](init%28name_%29.md): Returns a time zone initialized with a given identifier.
- [timeZoneWithAbbreviation:](init%28abbreviation_%29.md): Returns the time zone object identified by a given abbreviation.
- [timeZoneForSecondsFromGMT:](init%28forsecondsfromgmt_%29.md): Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.
- [knownTimeZoneNames](knowntimezonenames.md): Returns an array of strings listing the IDs of all the time zones known to the system.
- [abbreviationDictionary](abbreviationdictionary.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
