> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/date(from:)](https://developer.apple.com/documentation/foundation/dateformatter/date(from:))

# date(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representation of a specified string that the system interprets using the receiver’s current settings.

## Declaration

```swift
func date(from string: String) -> Date?
```

## Parameters

- `string`: The string to parse.

<a id="return-value"></a>

## Return Value

A date representation of `string`. If [date(from:)](date%28from_%29.md) can’t parse the string, returns `nil`.

<a id="Discussion"></a>

## Discussion

For more information about using [DateFormatter](../dateformatter.md) to convert a string to a date, see [Working With Fixed Format Date Representations](../dateformatter.md#Working-With-Fixed-Format-Date-Representations). For a sample code playground, see [Displaying Human-Friendly Content](../displaying-human-friendly-content.md).

## See Also

### Converting Objects

- [string(from:)](string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [localizedString(from:dateStyle:timeStyle:)](localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.
- [getObjectValue(\_:for:range:)](getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.

# dateFromString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date representation of a specified string that the system interprets using the receiver’s current settings.

## Declaration

```objectivec
- (NSDate *) dateFromString:(NSString *) string;
```

## Parameters

- `string`: The string to parse.

<a id="return-value"></a>

## Return Value

A date representation of `string`. If [dateFromString:](date%28from_%29.md) can’t parse the string, returns `nil`.

<a id="Discussion"></a>

## Discussion

For more information about using [NSDateFormatter](../dateformatter.md) to convert a string to a date, see [Working With Fixed Format Date Representations](../dateformatter.md#Working-With-Fixed-Format-Date-Representations). For a sample code playground, see [Displaying Human-Friendly Content](../displaying-human-friendly-content.md).

## See Also

### Converting Objects

- [stringFromDate:](string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [localizedStringFromDate:dateStyle:timeStyle:](localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.
- [getObjectValue:forString:range:error:](getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.
