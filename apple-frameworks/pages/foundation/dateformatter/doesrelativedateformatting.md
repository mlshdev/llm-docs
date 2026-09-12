> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/doesrelativedateformatting](https://developer.apple.com/documentation/foundation/dateformatter/doesrelativedateformatting)

# doesRelativeDateFormatting (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.

## Declaration

```swift
var doesRelativeDateFormatting: Bool { get set }
```

<a id="discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses relative date formatting, otherwise [false](https://developer.apple.com/documentation/swift/false).

If a date formatter uses relative date formatting, where possible it replaces the date component of its output with a phrase—such as “today” or “tomorrow”—that indicates a relative date. The available phrases depend on the locale for the date formatter; whereas, for dates in the future, English may only allow “tomorrow,” French may allow “the day after the day after tomorrow,” as illustrated in the following example.

**Swift**

```swift
let dateFormatter = DateFormatter()
dateFormatter.timeStyle = .none
dateFormatter.dateStyle = .medium
dateFormatter.locale = Locale(identifier: "fr_FR")
 
dateFormatter.doesRelativeDateFormatting = true
 
let date = Date(timeIntervalSinceNow: 60 * 60 * 24 * 2)
let dateString = dateFormatter.string(from: date)
print(dateString)  // après-demain
```

**Objective-C**

```objc
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
dateFormatter.timeStyle = NSDateFormatterNoStyle;
dateFormatter.dateStyle = NSDateFormatterMediumStyle;
NSLocale *frLocale = [[NSLocale alloc] initWithLocaleIdentifier:@"fr_FR"];
dateFormatter.locale = frLocale;
 
dateFormatter.doesRelativeDateFormatting = YES;
 
NSDate *date = [NSDate dateWithTimeIntervalSinceNow:60*60*24*2];
NSString *dateString = [dateFormatter stringFromDate:date];
 
NSLog(@"dateString: %@", dateString);
// Output
// dateString: après-demain
```

## See Also

### Managing Natural Language Support

- [isLenient](islenient.md): A Boolean value that indicates whether the receiver uses heuristics when parsing a string.

# doesRelativeDateFormatting (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver uses phrases such as “today” and “tomorrow” for the date component.

## Declaration

```objectivec
@property BOOL doesRelativeDateFormatting;
```

<a id="discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses relative date formatting, otherwise [false](https://developer.apple.com/documentation/swift/false).

If a date formatter uses relative date formatting, where possible it replaces the date component of its output with a phrase—such as “today” or “tomorrow”—that indicates a relative date. The available phrases depend on the locale for the date formatter; whereas, for dates in the future, English may only allow “tomorrow,” French may allow “the day after the day after tomorrow,” as illustrated in the following example.

**Swift**

```swift
let dateFormatter = DateFormatter()
dateFormatter.timeStyle = .none
dateFormatter.dateStyle = .medium
dateFormatter.locale = Locale(identifier: "fr_FR")
 
dateFormatter.doesRelativeDateFormatting = true
 
let date = Date(timeIntervalSinceNow: 60 * 60 * 24 * 2)
let dateString = dateFormatter.string(from: date)
print(dateString)  // après-demain
```

**Objective-C**

```objc
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
dateFormatter.timeStyle = NSDateFormatterNoStyle;
dateFormatter.dateStyle = NSDateFormatterMediumStyle;
NSLocale *frLocale = [[NSLocale alloc] initWithLocaleIdentifier:@"fr_FR"];
dateFormatter.locale = frLocale;
 
dateFormatter.doesRelativeDateFormatting = YES;
 
NSDate *date = [NSDate dateWithTimeIntervalSinceNow:60*60*24*2];
NSString *dateString = [dateFormatter stringFromDate:date];
 
NSLog(@"dateString: %@", dateString);
// Output
// dateString: après-demain
```

## See Also

### Managing Natural Language Support

- [allowsNaturalLanguage](../nsdateformatter/allowsnaturallanguage.md): Deprecated. Returns a Boolean value that indicates whether the receiver attempts to process dates entered as a vernacular string.
- [lenient](islenient.md): A Boolean value that indicates whether the receiver uses heuristics when parsing a string.
