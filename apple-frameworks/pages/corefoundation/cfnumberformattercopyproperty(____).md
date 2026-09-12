> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattercopyproperty(_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattercopyproperty(_:_:))

# CFNumberFormatterCopyProperty(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of a number formatter’s value for a given key.

## Declaration

```swift
func CFNumberFormatterCopyProperty(_ formatter: CFNumberFormatter!, _ key: CFNumberFormatterKey!) -> CFTypeRef!
```

## Parameters

- `formatter`: The number formatter to examine.
- `key`: A property key. See [Number Formatter Property Keys](number-formatter-property-keys.md) for valid values.

<a id="return-value"></a>

## Return Value

A `CFType` object that is a copy of the property value for `key`. Returns `NULL` if there is no value specified for `key`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining a Number Formatter

- [CFNumberFormatterGetFormat(\_:)](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetLocale(\_:)](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.
- [CFNumberFormatterGetStyle(\_:)](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.

# CFNumberFormatterCopyProperty (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a copy of a number formatter’s value for a given key.

## Declaration

```objectivec
extern CFTypeRefCFNumberFormatterCopyProperty(CFNumberFormatterRef formatter, CFNumberFormatterKey key);
```

## Parameters

- `formatter`: The number formatter to examine.
- `key`: A property key. See [Number Formatter Property Keys](number-formatter-property-keys.md) for valid values.

<a id="return-value"></a>

## Return Value

A `CFType` object that is a copy of the property value for `key`. Returns `NULL` if there is no value specified for `key`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Examining a Number Formatter

- [CFNumberFormatterGetFormat](cfnumberformattergetformat%28__%29.md): Returns a format string for the given number formatter object.
- [CFNumberFormatterGetLocale](cfnumberformattergetlocale%28__%29.md): Returns the locale object used to create the given number formatter object.
- [CFNumberFormatterGetStyle](cfnumberformattergetstyle%28__%29.md): Returns the number style used to create the given number formatter object.
