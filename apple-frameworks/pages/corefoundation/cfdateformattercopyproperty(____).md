> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattercopyproperty(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattercopyproperty(_:_:))

# CFDateFormatterCopyProperty(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of a date formatter’s value for a given key.

## Declaration

```swift
func CFDateFormatterCopyProperty(_ formatter: CFDateFormatter!, _ key: CFDateFormatterKey!) -> CFTypeRef!
```

## Parameters

- `formatter`: The date formatter to examine.
- `key`: The property key for the value to obtain. See [Date Formatter Property Keys](date-formatter-property-keys.md) for a description of possible values for this parameter.

<a id="return-value"></a>

## Return Value

A CFType object that is a copy of the property value for `key`, or `NULL` if there is no value specified for `key`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterGetDateStyle(\_:)](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat(\_:)](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale(\_:)](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle(\_:)](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.

# CFDateFormatterCopyProperty (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of a date formatter’s value for a given key.

## Declaration

```objectivec
extern CFTypeRefCFDateFormatterCopyProperty(CFDateFormatterRef formatter, CFDateFormatterKey key);
```

## Parameters

- `formatter`: The date formatter to examine.
- `key`: The property key for the value to obtain. See [Date Formatter Property Keys](date-formatter-property-keys.md) for a description of possible values for this parameter.

<a id="return-value"></a>

## Return Value

A CFType object that is a copy of the property value for `key`, or `NULL` if there is no value specified for `key`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Information About a Date Formatter

- [CFDateFormatterGetDateStyle](cfdateformattergetdatestyle%28__%29.md): Returns the date style used to create the given date formatter object.
- [CFDateFormatterGetFormat](cfdateformattergetformat%28__%29.md): Returns a format string for the given date formatter object.
- [CFDateFormatterGetLocale](cfdateformattergetlocale%28__%29.md): Returns the locale object used to create the given date formatter object.
- [CFDateFormatterGetTimeStyle](cfdateformattergettimestyle%28__%29.md): Returns the time style used to create the given date formatter object.
