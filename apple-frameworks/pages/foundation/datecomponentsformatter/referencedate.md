> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/datecomponentsformatter/referencedate

# referenceDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Where units have variable length (number of days in a month, number of hours in a day, etc.), `NSDateComponentsFormatter` will calculate as though counting from the date specified by the `referenceDate` in the appropriate calendar. Defaults to `[NSDate dateWithTimeIntervalSinceReferenceDate:0]` at the time of the `-stringForObjectValue:` call if not set. Set to `nil` to get the default behavior.

## Declaration

```swift
var referenceDate: Date? { get set }
```

# referenceDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Where units have variable length (number of days in a month, number of hours in a day, etc.), `NSDateComponentsFormatter` will calculate as though counting from the date specified by the `referenceDate` in the appropriate calendar. Defaults to `[NSDate dateWithTimeIntervalSinceReferenceDate:0]` at the time of the `-stringForObjectValue:` call if not set. Set to `nil` to get the default behavior.

## Declaration

```objectivec
@property (copy, nullable) NSDate * referenceDate;
```
