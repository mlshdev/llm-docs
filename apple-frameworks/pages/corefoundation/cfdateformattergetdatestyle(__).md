> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattergetdatestyle(_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattergetdatestyle(_:))

# CFDateFormatterGetDateStyle(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the date style used to create the given date formatter object.

## Declaration

```swift
func CFDateFormatterGetDateStyle(_ formatter: CFDateFormatter!) -> CFDateFormatterStyle
```

## Parameters

- `formatter`: The date formatter to examine.

<a id="return-value"></a>

## Return Value

The date style used to create `formatter`.

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty(\_:\_:)](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetFormat(\_:)](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale(\_:)](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle(\_:)](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.

# CFDateFormatterGetDateStyle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the date style used to create the given date formatter object.

## Declaration

```objectivec
extern CFDateFormatterStyle CFDateFormatterGetDateStyle(CFDateFormatterRef formatter);
```

## Parameters

- `formatter`: The date formatter to examine.

<a id="return-value"></a>

## Return Value

The date style used to create `formatter`.

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetFormat](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.
