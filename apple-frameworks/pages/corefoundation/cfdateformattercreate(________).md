> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattercreate(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattercreate(_:_:_:_:))

# CFDateFormatterCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFDateFormatter object, localized to the given locale, which will format dates to the given date and time styles.

## Declaration

```swift
func CFDateFormatterCreate(_ allocator: CFAllocator!, _ locale: CFLocale!, _ dateStyle: CFDateFormatterStyle, _ timeStyle: CFDateFormatterStyle) -> CFDateFormatter!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `locale`: The locale to use for localization. If `NULL` uses the default system local. Use [CFLocaleCopyCurrent()](cflocalecopycurrent%28%29.md) to specify the locale of the current user.
- `dateStyle`: The date style to use when formatting dates. See [Date Formatter Styles](date_formatter_styles.md) for possible values.
- `timeStyle`: The time style to use when formatting times. See [Date Formatter Styles](date_formatter_styles.md) for possible values.

<a id="return-value"></a>

## Return Value

A new date formatter, localized to the given locale, which will format dates to the given date and time styles. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You can use `kCFDateFormatterNoStyle` to suppress output for the date or time. The following code fragment illustrates the creation and use of a date formatter that only outputs the date information (memory management is omitted for clarity).

```objc
CFLocaleRef locale = CFLocaleCreate(kCFAllocatorDefault, CFSTR("en_GB"));
 
CFDateFormatterRef formatter = CFDateFormatterCreate(
        kCFAllocatorDefault, locale, kCFDateFormatterMediumStyle, kCFDateFormatterNoStyle);
 
CFDateRef date = CFDateCreate(kCFAllocatorDefault, 123456);
CFStringRef dateAsString = CFDateFormatterCreateStringWithDate (
        kCFAllocatorDefault, formatter, date);
 
CFShow(dateAsString);
// outputs "2 Jan 2001"
```

# CFDateFormatterCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFDateFormatter object, localized to the given locale, which will format dates to the given date and time styles.

## Declaration

```objectivec
extern CFDateFormatterRefCFDateFormatterCreate(CFAllocatorRef allocator, CFLocaleRef locale, CFDateFormatterStyle dateStyle, CFDateFormatterStyle timeStyle);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `locale`: The locale to use for localization. If `NULL` uses the default system local. Use [CFLocaleCopyCurrent](cflocalecopycurrent%28%29.md) to specify the locale of the current user.
- `dateStyle`: The date style to use when formatting dates. See [Date Formatter Styles](date_formatter_styles.md) for possible values.
- `timeStyle`: The time style to use when formatting times. See [Date Formatter Styles](date_formatter_styles.md) for possible values.

<a id="return-value"></a>

## Return Value

A new date formatter, localized to the given locale, which will format dates to the given date and time styles. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You can use `kCFDateFormatterNoStyle` to suppress output for the date or time. The following code fragment illustrates the creation and use of a date formatter that only outputs the date information (memory management is omitted for clarity).

```objc
CFLocaleRef locale = CFLocaleCreate(kCFAllocatorDefault, CFSTR("en_GB"));
 
CFDateFormatterRef formatter = CFDateFormatterCreate(
        kCFAllocatorDefault, locale, kCFDateFormatterMediumStyle, kCFDateFormatterNoStyle);
 
CFDateRef date = CFDateCreate(kCFAllocatorDefault, 123456);
CFStringRef dateAsString = CFDateFormatterCreateStringWithDate (
        kCFAllocatorDefault, formatter, date);
 
CFShow(dateAsString);
// outputs "2 Jan 2001"
```
