> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/string(from:)](https://developer.apple.com/documentation/foundation/dateformatter/string(from:))

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of a specified date that the system formats using the receiver’s current settings.

## Declaration

```swift
func string(from date: Date) -> String
```

## Parameters

- `date`: The date to format.

<a id="return-value"></a>

## Return Value

A string representation of `date`.

<a id="Discussion"></a>

## Discussion

For more information about using [DateFormatter](../dateformatter.md) to produce a string representation of a date, see [Working With User-Visible Representations of Dates and Times](../dateformatter.md#Working-With-User-Visible-Representations-of-Dates-and-Times). For a sample code playground, see [Displaying Human-Friendly Content](../displaying-human-friendly-content.md).

## See Also

### Converting Objects

- [date(from:)](date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [localizedString(from:dateStyle:timeStyle:)](localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.
- [getObjectValue(\_:for:range:)](getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.

# stringFromDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of a specified date that the system formats using the receiver’s current settings.

## Declaration

```objectivec
- (NSString *) stringFromDate:(NSDate *) date;
```

## Parameters

- `date`: The date to format.

<a id="return-value"></a>

## Return Value

A string representation of `date`.

<a id="Discussion"></a>

## Discussion

For more information about using [NSDateFormatter](../dateformatter.md) to produce a string representation of a date, see [Working With User-Visible Representations of Dates and Times](../dateformatter.md#Working-With-User-Visible-Representations-of-Dates-and-Times). For a sample code playground, see [Displaying Human-Friendly Content](../displaying-human-friendly-content.md).

## See Also

### Converting Objects

- [dateFromString:](date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [localizedStringFromDate:dateStyle:timeStyle:](localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.
- [getObjectValue:forString:range:error:](getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.
