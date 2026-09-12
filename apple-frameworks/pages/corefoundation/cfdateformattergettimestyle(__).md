> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattergettimestyle(_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattergettimestyle(_:))

# CFDateFormatterGetTimeStyle(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the time style used to create the given date formatter object.

## Declaration

```swift
func CFDateFormatterGetTimeStyle(_ formatter: CFDateFormatter!) -> CFDateFormatterStyle
```

## Parameters

- `formatter`: The date formatter to examine.

<a id="return-value"></a>

## Return Value

The time style used to create `formatter`.

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty(\_:\_:)](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle(\_:)](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat(\_:)](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale(\_:)](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.

# CFDateFormatterGetTimeStyle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the time style used to create the given date formatter object.

## Declaration

```objectivec
extern CFDateFormatterStyle CFDateFormatterGetTimeStyle(CFDateFormatterRef formatter);
```

## Parameters

- `formatter`: The date formatter to examine.

<a id="return-value"></a>

## Return Value

The time style used to create `formatter`.

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterCopyProperty](cfdateformattercopyproperty%28____%29.md): Returns a copy of a date formatter’s value for a given key.
- [CFDateFormatterGetDateStyle](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
