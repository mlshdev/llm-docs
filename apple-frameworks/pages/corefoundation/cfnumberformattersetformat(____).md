> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattersetformat(_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattersetformat(_:_:))

# CFNumberFormatterSetFormat(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the format string of a number formatter.

## Declaration

```swift
func CFNumberFormatterSetFormat(_ formatter: CFNumberFormatter!, _ formatString: CFString!)
```

## Parameters

- `formatter`: The number formatter to modify.
- `formatString`: The format string to be used by `formatter`. See [Creating and Using CFNumberFormatter Objects](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/dfCreatingCFNumberFormatters.html#//apple_ref/doc/uid/TP40002342) for more information.

<a id="Discussion"></a>

## Discussion

The format string may override other properties previously set using other functions. If this function is not called, the default value of the format string is derived from the number formatter’s style.

## See Also

### Configuring a Number Formatter

- [CFNumberFormatterSetProperty(\_:\_:\_:)](cfnumberformattersetproperty%28______%29.md): Sets a number formatter property using a key-value pair.

# CFNumberFormatterSetFormat (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the format string of a number formatter.

## Declaration

```objectivec
extern void CFNumberFormatterSetFormat(CFNumberFormatterRef formatter, CFStringRef formatString);
```

## Parameters

- `formatter`: The number formatter to modify.
- `formatString`: The format string to be used by `formatter`. See [Creating and Using CFNumberFormatter Objects](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/dfCreatingCFNumberFormatters.html#//apple_ref/doc/uid/TP40002342) for more information.

<a id="Discussion"></a>

## Discussion

The format string may override other properties previously set using other functions. If this function is not called, the default value of the format string is derived from the number formatter’s style.

## See Also

### Configuring a Number Formatter

- [CFNumberFormatterSetProperty](cfnumberformattersetproperty%28______%29.md): Sets a number formatter property using a key-value pair.
