> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattercreatedateformatfromtemplate(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattercreatedateformatfromtemplate(_:_:_:_:))

# CFDateFormatterCreateDateFormatFromTemplate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.

## Declaration

```swift
func CFDateFormatterCreateDateFormatFromTemplate(_ allocator: CFAllocator!, _ tmplate: CFString!, _ options: CFOptionFlags, _ locale: CFLocale!) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `tmplate`: A string containing date format patterns (such as “MM” or “h”). For full details, see [Unicode Technical Standard #35](http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns).
- `options`: No options are currently defined—pass `0`.
- `locale`: The locale for which the template is required.

<a id="return-value"></a>

## Return Value

A localized date format string representing the date format components given in `template`, arranged appropriately for the locale specified by `locale`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="discussion"></a>

## Discussion

The returned string may not contain exactly those components given in `template`, but may—for example—have locale-specific adjustments applied.

<a id="Discussion"></a>

## Discussion

Different locales have different conventions for the ordering of date components. You use this method to get an appropriate format string for a given set of components for a specified locale (typically you use the current locale—see [CFLocaleCopyCurrent()](cflocalecopycurrent%28%29.md)).

The following example shows the difference between the date formats for British and American English:

```objc
CFStringRef dateComponents = CFSTR("yMMMMd");
 
CFLocaleRef usLocale = CFLocaleCreate(NULL, CFSTR("en_US"));
CFStringRef usDateFormatString =
    CFDateFormatterCreateDateFormatFromTemplate(NULL, dateComponents, 0, usLocale);
// Date format for English (United States): MMMM d, y
 
CFLocaleRef gbLocale = CFLocaleCreate(NULL, CFSTR("en_GB"));
CFStringRef gbDateFormatString =
    CFDateFormatterCreateDateFormatFromTemplate(NULL, dateComponents, 0, gbLocale);
// Date format for English (United Kingdom): d MMMM y
```

## See Also

### Creating Strings From Data

- [CFDateFormatterCreateStringWithAbsoluteTime(\_:\_:\_:)](cfdateformattercreatestringwithabsolutetime%28______%29.md): Returns a string representation of the given absolute time using the specified date formatter.
- [CFDateFormatterCreateStringWithDate(\_:\_:\_:)](cfdateformattercreatestringwithdate%28______%29.md): Returns a string representation of the given date using the specified date formatter.

# CFDateFormatterCreateDateFormatFromTemplate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.

## Declaration

```objectivec
extern CFStringRefCFDateFormatterCreateDateFormatFromTemplate(CFAllocatorRef allocator, CFStringRef tmplate, CFOptionFlags options, CFLocaleRef locale);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `tmplate`: A string containing date format patterns (such as “MM” or “h”). For full details, see [Unicode Technical Standard #35](http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns).
- `options`: No options are currently defined—pass `0`.
- `locale`: The locale for which the template is required.

<a id="return-value"></a>

## Return Value

A localized date format string representing the date format components given in `template`, arranged appropriately for the locale specified by `locale`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="discussion"></a>

## Discussion

The returned string may not contain exactly those components given in `template`, but may—for example—have locale-specific adjustments applied.

<a id="Discussion"></a>

## Discussion

Different locales have different conventions for the ordering of date components. You use this method to get an appropriate format string for a given set of components for a specified locale (typically you use the current locale—see [CFLocaleCopyCurrent](cflocalecopycurrent%28%29.md)).

The following example shows the difference between the date formats for British and American English:

```objc
CFStringRef dateComponents = CFSTR("yMMMMd");
 
CFLocaleRef usLocale = CFLocaleCreate(NULL, CFSTR("en_US"));
CFStringRef usDateFormatString =
    CFDateFormatterCreateDateFormatFromTemplate(NULL, dateComponents, 0, usLocale);
// Date format for English (United States): MMMM d, y
 
CFLocaleRef gbLocale = CFLocaleCreate(NULL, CFSTR("en_GB"));
CFStringRef gbDateFormatString =
    CFDateFormatterCreateDateFormatFromTemplate(NULL, dateComponents, 0, gbLocale);
// Date format for English (United Kingdom): d MMMM y
```

## See Also

### Creating Strings From Data

- [CFDateFormatterCreateStringWithAbsoluteTime](cfdateformattercreatestringwithabsolutetime%28______%29.md): Returns a string representation of the given absolute time using the specified date formatter.
- [CFDateFormatterCreateStringWithDate](cfdateformattercreatestringwithdate%28______%29.md): Returns a string representation of the given date using the specified date formatter.
