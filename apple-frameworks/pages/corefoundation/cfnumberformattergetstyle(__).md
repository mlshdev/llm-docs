> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattergetstyle(_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattergetstyle(_:))

# CFNumberFormatterGetStyle(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number style used to create the given number formatter object.

## Declaration

```swift
func CFNumberFormatterGetStyle(_ formatter: CFNumberFormatter!) -> CFNumberFormatterStyle
```

## Parameters

- `formatter`: The number formatter to examine.

<a id="return-value"></a>

## Return Value

The number style used to create `formatter`.

## See Also

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty(\_:\_:)](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetFormat(\_:)](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetLocale(\_:)](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.

# CFNumberFormatterGetStyle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number style used to create the given number formatter object.

## Declaration

```objectivec
extern CFNumberFormatterStyle CFNumberFormatterGetStyle(CFNumberFormatterRef formatter);
```

## Parameters

- `formatter`: The number formatter to examine.

<a id="return-value"></a>

## Return Value

The number style used to create `formatter`.

## See Also

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetFormat](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetLocale](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.
