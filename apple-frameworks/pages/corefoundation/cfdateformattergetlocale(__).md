> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattergetlocale(_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattergetlocale(_:))

# CFDateFormatterGetLocale(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the locale object used to create the given date formatter object.

## Declaration

```swift
func CFDateFormatterGetLocale(_ formatter: CFDateFormatter!) -> CFLocale!
```

## Parameters

- `formatter`: The date formatter object to examine.

<a id="return-value"></a>

## Return Value

The locale object used to create `formatter`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty(\_:\_:)](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle(\_:)](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat(\_:)](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetTimeStyle(\_:)](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.

# CFDateFormatterGetLocale (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the locale object used to create the given date formatter object.

## Declaration

```objectivec
extern CFLocaleRefCFDateFormatterGetLocale(CFDateFormatterRef formatter);
```

## Parameters

- `formatter`: The date formatter object to examine.

<a id="return-value"></a>

## Return Value

The locale object used to create `formatter`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetTimeStyle](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.
