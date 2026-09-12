> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattergetformat(_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattergetformat(_:))

# CFDateFormatterGetFormat(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a format string for the given date formatter object.

## Declaration

```swift
func CFDateFormatterGetFormat(_ formatter: CFDateFormatter!) -> CFString!
```

## Parameters

- `formatter`: The date formatter to examine.

<a id="return-value"></a>

## Return Value

The format string for `formatter` as was specified by calling the [CFDateFormatterSetFormat(\_:\_:)](cfdateformattersetformat%28____%29.md) function, or derived from the date formatter’s date or time styles. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty(\_:\_:)](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle(\_:)](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetLocale(\_:)](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle(\_:)](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.

# CFDateFormatterGetFormat (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a format string for the given date formatter object.

## Declaration

```objectivec
extern CFStringRefCFDateFormatterGetFormat(CFDateFormatterRef formatter);
```

## Parameters

- `formatter`: The date formatter to examine.

<a id="return-value"></a>

## Return Value

The format string for `formatter` as was specified by calling the [CFDateFormatterSetFormat](cfdateformattersetformat%28____%29.md) function, or derived from the date formatter’s date or time styles. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetLocale](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.
