> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate](https://developer.apple.com/documentation/foundation/nsdate)

# NSDate (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of a specific point in time, independent of any calendar or time zone.

## Declaration

```swift
class NSDate
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

In Swift, use this type when you need reference semantics or other Foundation-specific behavior.

[NSDate](nsdate.md) objects encapsulate a single point in time, independent of any particular calendrical system or time zone. Date objects are immutable, representing an invariant time interval relative to an absolute reference date (00:00:00 UTC on 1 January 2001).

The [NSDate](nsdate.md) class provides methods for comparing dates, calculating the time interval between two dates, and creating a new date from a time interval relative to another date. [NSDate](nsdate.md) objects can be used in conjunction with [DateFormatter](dateformatter.md) objects to create localized representations of dates and times, as well as with [NSCalendar](nscalendar.md) objects to perform calendar arithmetic.

[NSDate](nsdate.md) is *toll-free bridged* with its Core Foundation counterpart, [CFDate](../corefoundation/cfdate.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Date](date.md) structure, which bridges to the [NSDate](nsdate.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You might subclass [NSDate](nsdate.md) in order to make it easier to work with a particular calendrical system, or to work with date and time values with a finer temporal granularity.

<a id="Methods-to-Override-and-Other-Requirements"></a>

#### Methods to Override and Other Requirements

If you want to subclass [NSDate](nsdate.md) to obtain behavior different than that provided by the private or public subclasses, you must:

- Declare a suitable instance variable to hold the date and time value (relative to an absolute reference date)
- Override the [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.property.md) instance method to provide the correct date and time value based on your instance variable
- Override [init(timeIntervalSinceReferenceDate:)](nsdate/init%28timeintervalsincereferencedate_%29.md), one of the designated initializer methods
- If creating a subclass that represents a calendrical system, define methods that partition past and future periods into the units of this calendar
- Implement the methods required by the [NSCopying](nscopying.md) and [NSCoding](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/BuildingCocoaApps/WritingSwiftClassesWithObjective-CBehavior.html#//apple_ref/doc/uid/TP40014216-CH5-ID152) protocols, because [NSDate](nsdate.md) adopts these protocols

<a id="Special-Considerations"></a>

#### Special Considerations

Your subclass may use a different reference date than the absolute reference date used by [NSDate](nsdate.md) (00:00:00 UTC on 1 January 2001). If it does, it must still use the absolute reference date in its implementations of the methods [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.property.md) and [init(timeIntervalSinceReferenceDate:)](nsdate/init%28timeintervalsincereferencedate_%29.md). That is, the reference date referred to in the titles of these methods is the absolute reference date. If you do not use the absolute reference date in these methods, comparisons between [NSDate](nsdate.md) objects of your subclass and `NSDate` objects of a private subclass will not work.

## Topics

### Initializing a Date

- [init()](nsdate/init%28%29.md): Returns a date object initialized to the current date and time.
- [init(timeIntervalSinceNow:)](nsdate/init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [init(timeIntervalSinceReferenceDate:)](nsdate/init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [init(timeIntervalSince1970:)](nsdate/init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [init(coder:)](nsdate/init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.

### Getting Temporal Boundaries

- [distantFuture](nsdate/distantfuture.md): A date object representing a date in the distant future.
- [distantPast](nsdate/distantpast.md): A date object representing a date in the distant past.

### Retrieving the Current Date

- [now](nsdate/now.md): The current date and time, as of the time of access.

### Comparing Dates

- [isEqual(to:)](nsdate/isequal%28to_%29.md): Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.
- [earlierDate(\_:)](nsdate/earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [laterDate(\_:)](nsdate/laterdate%28__%29.md): Returns the later of the receiver and another given date.
- [compare(\_:)](nsdate/compare%28__%29.md): Indicates the temporal ordering of the receiver and another given date.

### Getting Time Intervals

- [timeIntervalSince(\_:)](nsdate/timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceNow](nsdate/timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](nsdate/timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.

### Adding Time Intervals

- [addingTimeInterval(\_:)](nsdate/addingtimeinterval%28__%29.md): Returns a new date object that is set to a given number of seconds relative to the receiver.

### Describing Dates

- [description](nsdate/description.md): A string representation of the date object.
- [description(with:)](nsdate/description%28with_%29.md): Returns a string representation of the date using the given locale.
- [customPlaygroundQuickLook](nsdate/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for this object.

### Recognizing Notifications

- [NSSystemClockDidChange](nsnotification/name-swift.struct/nssystemclockdidchange.md): A notification posted whenever the system clock is changed.

### Legacy Operations

- [date(withNaturalLanguageString:)](nsdate/date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(withNaturalLanguageString:locale:)](nsdate/date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [date(with:)](nsdate/date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [init(string:)](nsdate/init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval(\_:)](nsdate/addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [date(withCalendarFormat:timeZone:)](nsdate/date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [description(withCalendarFormat:timeZone:locale:)](nsdate/description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.

### Initializers

- [init(SRAbsoluteTime:)](nsdate/init%28srabsolutetime_%29-886t8.md)
- [init(SRAbsoluteTime:)](nsdate/init%28srabsolutetime_%29-9wpl1.md)
- [init(timeInterval:since:)](nsdate/init%28timeinterval_since_%29.md): Returns a date object initialized relative to another given date by a given number of seconds.

### Instance Properties

- [srAbsoluteTime](nsdate/srabsolutetime.md)

### Default Implementations

- [NSDate Implementations](nsdate/nsdate-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSDate (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of a specific point in time, independent of any calendar or time zone.

## Declaration

```objectivec
@interface NSDate : NSObject
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

In Swift, use this type when you need reference semantics or other Foundation-specific behavior.

[NSDate](nsdate.md) objects encapsulate a single point in time, independent of any particular calendrical system or time zone. Date objects are immutable, representing an invariant time interval relative to an absolute reference date (00:00:00 UTC on 1 January 2001).

The [NSDate](nsdate.md) class provides methods for comparing dates, calculating the time interval between two dates, and creating a new date from a time interval relative to another date. [NSDate](nsdate.md) objects can be used in conjunction with [NSDateFormatter](dateformatter.md) objects to create localized representations of dates and times, as well as with [NSCalendar](nscalendar.md) objects to perform calendar arithmetic.

[NSDate](nsdate.md) is *toll-free bridged* with its Core Foundation counterpart, [CFDateRef](../corefoundation/cfdate.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Date](date.md) structure, which bridges to the [NSDate](nsdate.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You might subclass [NSDate](nsdate.md) in order to make it easier to work with a particular calendrical system, or to work with date and time values with a finer temporal granularity.

<a id="Methods-to-Override-and-Other-Requirements"></a>

#### Methods to Override and Other Requirements

If you want to subclass [NSDate](nsdate.md) to obtain behavior different than that provided by the private or public subclasses, you must:

- Declare a suitable instance variable to hold the date and time value (relative to an absolute reference date)
- Override the [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.property.md) instance method to provide the correct date and time value based on your instance variable
- Override [initWithTimeIntervalSinceReferenceDate:](nsdate/init%28timeintervalsincereferencedate_%29.md), one of the designated initializer methods
- If creating a subclass that represents a calendrical system, define methods that partition past and future periods into the units of this calendar
- Implement the methods required by the [NSCopying](nscopying.md) and [NSCoding](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/BuildingCocoaApps/WritingSwiftClassesWithObjective-CBehavior.html#//apple_ref/doc/uid/TP40014216-CH5-ID152) protocols, because [NSDate](nsdate.md) adopts these protocols

<a id="Special-Considerations"></a>

#### Special Considerations

Your subclass may use a different reference date than the absolute reference date used by [NSDate](nsdate.md) (00:00:00 UTC on 1 January 2001). If it does, it must still use the absolute reference date in its implementations of the methods [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.property.md) and [initWithTimeIntervalSinceReferenceDate:](nsdate/init%28timeintervalsincereferencedate_%29.md). That is, the reference date referred to in the titles of these methods is the absolute reference date. If you do not use the absolute reference date in these methods, comparisons between [NSDate](nsdate.md) objects of your subclass and `NSDate` objects of a private subclass will not work.

## Topics

### Creating a Date

- [date](nsdate/date.md): Creates and returns a new date object set to the current date and time.
- [dateWithTimeIntervalSinceNow:](nsdate/datewithtimeintervalsincenow_.md): Creates and returns a date object set to a given number of seconds from the current date and time.
- [dateWithTimeIntervalSinceReferenceDate:](nsdate/datewithtimeintervalsincereferencedate_.md): Creates and returns a date object set to a given number of seconds from 00:00:00 UTC on 1 January 2001.
- [dateWithTimeIntervalSince1970:](nsdate/datewithtimeintervalsince1970_.md): Creates and returns a date object set to the given number of seconds from 00:00:00 UTC on 1 January 1970.

### Initializing a Date

- [init](nsdate/init%28%29.md): Returns a date object initialized to the current date and time.
- [initWithTimeIntervalSinceNow:](nsdate/init%28timeintervalsincenow_%29.md): Returns a date object initialized relative to the current date and time by a given number of seconds.
- [initWithTimeIntervalSinceReferenceDate:](nsdate/init%28timeintervalsincereferencedate_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 2001 by a given number of seconds.
- [initWithTimeIntervalSince1970:](nsdate/init%28timeintervalsince1970_%29.md): Returns a date object initialized relative to 00:00:00 UTC on 1 January 1970 by a given number of seconds.
- [initWithCoder:](nsdate/init%28coder_%29.md): Returns a date object initialized from data in the given unarchiver.

### Getting Temporal Boundaries

- [distantFuture](nsdate/distantfuture.md): A date object representing a date in the distant future.
- [distantPast](nsdate/distantpast.md): A date object representing a date in the distant past.

### Retrieving the Current Date

- [now](nsdate/now.md): The current date and time, as of the time of access.

### Comparing Dates

- [isEqualToDate:](nsdate/isequal%28to_%29.md): Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.
- [earlierDate:](nsdate/earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [laterDate:](nsdate/laterdate%28__%29.md): Returns the later of the receiver and another given date.
- [compare:](nsdate/compare%28__%29.md): Indicates the temporal ordering of the receiver and another given date.

### Getting Time Intervals

- [timeIntervalSinceDate:](nsdate/timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
- [timeIntervalSinceNow](nsdate/timeintervalsincenow.md): The interval between the date object and the current date and time.
- [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.property.md): The interval between the date object and 00:00:00 UTC on 1 January 2001.
- [timeIntervalSince1970](nsdate/timeintervalsince1970.md): The interval between the date object and 00:00:00 UTC on 1 January 1970.
- [timeIntervalSinceReferenceDate](nsdate/timeintervalsincereferencedate-swift.type.property.md): The interval between 00:00:00 UTC on 1 January 2001 and the current date and time.
- [NSTimeIntervalSince1970](nstimeintervalsince1970.md): The number of seconds from 1 January 1970 to the reference date, 1 January 2001.

### Adding Time Intervals

- [dateByAddingTimeInterval:](nsdate/addingtimeinterval%28__%29.md): Returns a new date object that is set to a given number of seconds relative to the receiver.

### Describing Dates

- [description](nsdate/description.md): A string representation of the date object.
- [descriptionWithLocale:](nsdate/description%28with_%29.md): Returns a string representation of the date using the given locale.

### Recognizing Notifications

- [NSSystemClockDidChangeNotification](nsnotification/name-swift.struct/nssystemclockdidchange.md): A notification posted whenever the system clock is changed.

### Legacy Operations

- [dateWithNaturalLanguageString:](nsdate/date%28withnaturallanguagestring_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithNaturalLanguageString:locale:](nsdate/date%28withnaturallanguagestring_locale_%29.md): Deprecated. Creates and returns a date object set to the date and time specified by a given string.
- [dateWithString:](nsdate/date%28with_%29.md): Deprecated. Creates and returns a date object with a date and time value specified by a given string in the international string representation format (`YYYY-MM-DD HH:MM:SS ±HHMM`).
- [initWithString:](nsdate/init%28string_%29.md): Deprecated. Returns a date object initialized with a date and time value specified by a given string in the international string representation format.
- [addTimeInterval:](nsdate/addtimeinterval%28__%29.md): Deprecated. Returns a new date object that is set to a given number of seconds relative to the receiver.
- [dateWithCalendarFormat:timeZone:](nsdate/date%28withcalendarformat_timezone_%29.md): Deprecated. Converts the receiver to a calendar date with a given format string and time zone.
- [descriptionWithCalendarFormat:timeZone:locale:](nsdate/description%28withcalendarformat_timezone_locale_%29.md): Deprecated. Returns a string representation of the date formatted as specified by given conversion specifiers.

### Instance Properties

- [srAbsoluteTime](nsdate/srabsolutetime.md)

### Instance Methods

- [initWithSRAbsoluteTime:](nsdate/init%28srabsolutetime_%29-886t8.md)
- [initWithTimeInterval:sinceDate:](nsdate/init%28timeinterval_since_%29.md): Returns a date object initialized relative to another given date by a given number of seconds.

### Type Methods

- [dateWithTimeInterval:sinceDate:](nsdate/datewithtimeinterval_sincedate_.md): Creates and returns a date object set to a given number of seconds from the specified date.
- [dateWithSRAbsoluteTime:](nsdate/init%28srabsolutetime_%29-9wpl1.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSCalendarDate](nscalendardate.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Date Representations

- [NSDateInterval](nsdateinterval.md): An object representing the span of time between a specific start date and end date.
- [NSTimeInterval](timeinterval.md): A number of seconds.
