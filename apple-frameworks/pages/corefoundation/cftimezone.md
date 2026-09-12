> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezone](https://developer.apple.com/documentation/corefoundation/cftimezone)

# CFTimeZone (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFTimeZone
```

<a id="Overview"></a>

## Overview

CFTimeZone defines the behavior of time zone objects. Time zone objects represent geopolitical regions. Consequently, these objects have names for these regions. Time zone objects also represent a temporal offset, either plus or minus, from Greenwich Mean Time (GMT) and an abbreviation (such as PST for Pacific Standard Time).

CFTimeZone provides several functions to create time zone objects: [CFTimeZoneCreateWithName(\_:\_:\_:)](cftimezonecreatewithname%28______%29.md) and [CFTimeZoneCreateWithTimeIntervalFromGMT(\_:\_:)](cftimezonecreatewithtimeintervalfromgmt%28____%29.md). CFTimeZone also permits you to set the default time zone within your application using the [CFTimeZoneSetDefault(\_:)](cftimezonesetdefault%28__%29.md) function. You can access this default time zone at any time with the [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md) function.

CFTimeZone is “toll-free bridged” with its Cocoa Foundation counterpart, [NSTimeZone](../foundation/nstimezone.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSTimeZone *` parameter, you can pass in a `CFTimeZoneRef`, and in a function where you see a `CFTimeZoneRef` parameter, you can pass in an NSTimeZone instance. This fact also applies to concrete subclasses of NSTimeZone. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Time Zone

- [CFTimeZoneCreateWithName(\_:\_:\_:)](cftimezonecreatewithname%28______%29.md): Returns the time zone object identified by a given name or abbreviation.
- [CFTimeZoneCreateWithTimeIntervalFromGMT(\_:\_:)](cftimezonecreatewithtimeintervalfromgmt%28____%29.md): Returns a time zone object for the specified time interval offset from Greenwich Mean Time (GMT).
- [CFTimeZoneCreate(\_:\_:\_:)](cftimezonecreate%28______%29.md): Creates a time zone with a given name and data.

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary()](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation(\_:\_:)](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault()](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem()](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault(\_:)](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames()](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem()](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary(\_:)](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.

### Getting Information About Time Zones

- [CFTimeZoneGetName(\_:)](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneCopyLocalizedName(\_:\_:\_:)](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetSecondsFromGMT(\_:\_:)](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.
- [CFTimeZoneGetData(\_:)](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.

### Getting Daylight Savings Time Information

- [CFTimeZoneIsDaylightSavingTime(\_:\_:)](cftimezoneisdaylightsavingtime%28____%29.md): Returns whether or not a time zone is in daylight savings time at a specified date.
- [CFTimeZoneGetDaylightSavingTimeOffset(\_:\_:)](cftimezonegetdaylightsavingtimeoffset%28____%29.md): Returns the daylight saving time offset for a time zone at a given time.
- [CFTimeZoneGetNextDaylightSavingTimeTransition(\_:\_:)](cftimezonegetnextdaylightsavingtimetransition%28____%29.md): Returns the time in a given time zone of the next daylight saving time transition after a given time.

### Getting the CFTimeZone Type ID

- [CFTimeZoneGetTypeID()](cftimezonegettypeid%28%29.md): Returns the type identifier for the CFTimeZone opaque type.

### Data Types

- [CFTimeZoneNameStyle](cftimezonenamestyle.md): Index type for constants used to specify styles of time zone names.

### Constants

- [Notification Name](notification-name.md): Name of the notification posted when the time zone changes.
- [Time Zone Name Styles](time_zone_name_styles.md): Constants to specify styles for time zone names.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Date and Time Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDatesAndTimes/CFDatesAndTimes.html#//apple_ref/doc/uid/10000125i)

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFTimeZoneRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef const struct __CFTimeZone * CFTimeZoneRef;
```

<a id="Overview"></a>

## Overview

CFTimeZone defines the behavior of time zone objects. Time zone objects represent geopolitical regions. Consequently, these objects have names for these regions. Time zone objects also represent a temporal offset, either plus or minus, from Greenwich Mean Time (GMT) and an abbreviation (such as PST for Pacific Standard Time).

CFTimeZone provides several functions to create time zone objects: [CFTimeZoneCreateWithName](cftimezonecreatewithname%28______%29.md) and [CFTimeZoneCreateWithTimeIntervalFromGMT](cftimezonecreatewithtimeintervalfromgmt%28____%29.md). CFTimeZone also permits you to set the default time zone within your application using the [CFTimeZoneSetDefault](cftimezonesetdefault%28__%29.md) function. You can access this default time zone at any time with the [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md) function.

CFTimeZone is “toll-free bridged” with its Cocoa Foundation counterpart, [NSTimeZone](../foundation/nstimezone.md). This means that the Core Foundation type is interchangeable in function or method calls with the bridged Foundation object. Therefore, in a method where you see an `NSTimeZone *` parameter, you can pass in a `CFTimeZoneRef`, and in a function where you see a `CFTimeZoneRef` parameter, you can pass in an NSTimeZone instance. This fact also applies to concrete subclasses of NSTimeZone. See [Toll-Free Bridged Types](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDesignConcepts/Articles/tollFreeBridgedTypes.html#//apple_ref/doc/uid/TP40010677) for more information on toll-free bridging.

## Topics

### Creating a Time Zone

- [CFTimeZoneCreateWithName](cftimezonecreatewithname%28______%29.md): Returns the time zone object identified by a given name or abbreviation.
- [CFTimeZoneCreateWithTimeIntervalFromGMT](cftimezonecreatewithtimeintervalfromgmt%28____%29.md): Returns a time zone object for the specified time interval offset from Greenwich Mean Time (GMT).
- [CFTimeZoneCreate](cftimezonecreate%28______%29.md): Creates a time zone with a given name and data.

### System and Default Time Zones and Information

- [CFTimeZoneCopyAbbreviationDictionary](cftimezonecopyabbreviationdictionary%28%29.md): Returns a dictionary holding the mappings of time zone abbreviations to time zone names.
- [CFTimeZoneCopyAbbreviation](cftimezonecopyabbreviation%28____%29.md): Returns the abbreviation of a time zone at a specified date.
- [CFTimeZoneCopyDefault](cftimezonecopydefault%28%29.md): Returns the default time zone set for your application.
- [CFTimeZoneCopySystem](cftimezonecopysystem%28%29.md): Returns the time zone currently used by the system.
- [CFTimeZoneSetDefault](cftimezonesetdefault%28__%29.md): Sets the default time zone for your application the given time zone.
- [CFTimeZoneCopyKnownNames](cftimezonecopyknownnames%28%29.md): Returns an array of strings containing the names of all the time zones known to the system.
- [CFTimeZoneResetSystem](cftimezoneresetsystem%28%29.md): Clears the previously determined system time zone, if any.
- [CFTimeZoneSetAbbreviationDictionary](cftimezonesetabbreviationdictionary%28__%29.md): Sets the abbreviation dictionary to a given dictionary.

### Getting Information About Time Zones

- [CFTimeZoneGetName](cftimezonegetname%28__%29.md): Returns the geopolitical region name that identifies a given time zone.
- [CFTimeZoneCopyLocalizedName](cftimezonecopylocalizedname%28______%29.md): Returns the localized name of a given time zone.
- [CFTimeZoneGetSecondsFromGMT](cftimezonegetsecondsfromgmt%28____%29.md): Returns the difference in seconds between the receiver and Greenwich Mean Time (GMT) at the specified date.
- [CFTimeZoneGetData](cftimezonegetdata%28__%29.md): Returns the data that stores the information used by a time zone.

### Getting Daylight Savings Time Information

- [CFTimeZoneIsDaylightSavingTime](cftimezoneisdaylightsavingtime%28____%29.md): Returns whether or not a time zone is in daylight savings time at a specified date.
- [CFTimeZoneGetDaylightSavingTimeOffset](cftimezonegetdaylightsavingtimeoffset%28____%29.md): Returns the daylight saving time offset for a time zone at a given time.
- [CFTimeZoneGetNextDaylightSavingTimeTransition](cftimezonegetnextdaylightsavingtimetransition%28____%29.md): Returns the time in a given time zone of the next daylight saving time transition after a given time.

### Getting the CFTimeZone Type ID

- [CFTimeZoneGetTypeID](cftimezonegettypeid%28%29.md): Returns the type identifier for the CFTimeZone opaque type.

### Data Types

- [CFTimeZoneNameStyle](cftimezonenamestyle.md): Index type for constants used to specify styles of time zone names.

### Constants

- [Notification Name](notification-name.md): Name of the notification posted when the time zone changes.
- [Time Zone Name Styles](time_zone_name_styles.md): Constants to specify styles for time zone names.

## See Also

### Related Documentation

- [Date and Time Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDatesAndTimes/CFDatesAndTimes.html#//apple_ref/doc/uid/10000125i)

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
