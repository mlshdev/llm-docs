> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattergetformat(_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattergetformat(_:))

# CFNumberFormatterGetFormat(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a format string for the given number formatter object.

## Declaration

```swift
func CFNumberFormatterGetFormat(_ formatter: CFNumberFormatter!) -> CFString!
```

## Parameters

- `formatter`: The number formatter to examine.

<a id="return-value"></a>

## Return Value

The format string for `formatter` as was specified by calling the [CFNumberFormatterSetFormat(\_:\_:)](cfnumberformattersetformat%28____%29.md) function, or derived from the number formatter’s style. See [Creating and Using CFNumberFormatter Objects](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/dfCreatingCFNumberFormatters.html#//apple_ref/doc/uid/TP40002342) for more information. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty(\_:\_:)](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetLocale(\_:)](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.
- [CFNumberFormatterGetStyle(\_:)](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.

# CFNumberFormatterGetFormat (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a format string for the given number formatter object.

## Declaration

```objectivec
extern CFStringRefCFNumberFormatterGetFormat(CFNumberFormatterRef formatter);
```

## Parameters

- `formatter`: The number formatter to examine.

<a id="return-value"></a>

## Return Value

The format string for `formatter` as was specified by calling the [CFNumberFormatterSetFormat](cfnumberformattersetformat%28____%29.md) function, or derived from the number formatter’s style. See [Creating and Using CFNumberFormatter Objects](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/dfCreatingCFNumberFormatters.html#//apple_ref/doc/uid/TP40002342) for more information. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetLocale](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.
- [CFNumberFormatterGetStyle](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.
