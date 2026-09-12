> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattergetlocale(_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattergetlocale(_:))

# CFNumberFormatterGetLocale(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the locale object used to create the given number formatter object.

## Declaration

```swift
func CFNumberFormatterGetLocale(_ formatter: CFNumberFormatter!) -> CFLocale!
```

## Parameters

- `formatter`: The number formatter to examine.

<a id="return-value"></a>

## Return Value

The locale used to create `formatter`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty(\_:\_:)](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetFormat(\_:)](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetStyle(\_:)](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.

# CFNumberFormatterGetLocale (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the locale object used to create the given number formatter object.

## Declaration

```objectivec
extern CFLocaleRefCFNumberFormatterGetLocale(CFNumberFormatterRef formatter);
```

## Parameters

- `formatter`: The number formatter to examine.

<a id="return-value"></a>

## Return Value

The locale used to create `formatter`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a Number Formatter

- [CFNumberFormatterCopyProperty](cfnumberformattercopyproperty%28____%29.md): Returns a copy of a number formatter’s value for a given key.
- [CFNumberFormatterGetFormat](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetStyle](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.
