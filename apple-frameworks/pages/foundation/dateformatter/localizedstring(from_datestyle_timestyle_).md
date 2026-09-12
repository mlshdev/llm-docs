> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/localizedstring(from:datestyle:timestyle:)](https://developer.apple.com/documentation/foundation/dateformatter/localizedstring(from:datestyle:timestyle:))

# localizedString(from:dateStyle:timeStyle:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.

## Declaration

```swift
class func localizedString(from date: Date, dateStyle dstyle: DateFormatter.Style, timeStyle tstyle: DateFormatter.Style) -> String
```

## Parameters

- `date`: A date.
- `dstyle`: A format style for the date. For possible values, see [DateFormatter.Style](style.md).
- `tstyle`: A format style for the time. For possible values, see [DateFormatter.Style](style.md).

<a id="return-value"></a>

## Return Value

A localized string representation of `date` using the specified date and time styles.

<a id="Discussion"></a>

## Discussion

This method uses a date formatter configured with the current default settings. The returned string is the same as if you configured and used a date formatter as shown in the following example:

```objc
NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
formatter.formatterBehavior = NSDateFormatterBehavior10_4;
formatter.dateStyle = dateStyle;
formatter.timeStyle = timeStyle;
NSString *result = [formatter stringForObjectValue:date];
```

## See Also

### Converting Objects

- [date(from:)](date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [string(from:)](string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [getObjectValue(\_:for:range:)](getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.

# localizedStringFromDate:dateStyle:timeStyle: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.

## Declaration

```objectivec
+ (NSString *) localizedStringFromDate:(NSDate *) date dateStyle:(NSDateFormatterStyle) dstyle timeStyle:(NSDateFormatterStyle) tstyle;
```

## Parameters

- `date`: A date.
- `dstyle`: A format style for the date. For possible values, see [NSDateFormatterStyle](style.md).
- `tstyle`: A format style for the time. For possible values, see [NSDateFormatterStyle](style.md).

<a id="return-value"></a>

## Return Value

A localized string representation of `date` using the specified date and time styles.

<a id="Discussion"></a>

## Discussion

This method uses a date formatter configured with the current default settings. The returned string is the same as if you configured and used a date formatter as shown in the following example:

```objc
NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
formatter.formatterBehavior = NSDateFormatterBehavior10_4;
formatter.dateStyle = dateStyle;
formatter.timeStyle = timeStyle;
NSString *result = [formatter stringForObjectValue:date];
```

## See Also

### Converting Objects

- [dateFromString:](date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [stringFromDate:](string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [getObjectValue:forString:range:error:](getobjectvalue%28__for_range_%29.md): Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.
