> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/objctype](https://developer.apple.com/documentation/foundation/nsdecimalnumber/objctype)

# objCType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A C string containing the Objective-C type for the data contained in the decimal number object.

## Declaration

```swift
var objCType: UnsafePointer<CChar> { get }
```

<a id="Discussion"></a>

## Discussion

For a decimal number object, this property always contains “d” (for double).

## See Also

### Accessing the Value

- [decimalValue](decimalvalue.md): The decimal number’s value, expressed as an [Decimal](../decimal.md) structure.
- [doubleValue](doublevalue.md): The decimal number’s closest approximate `double` value.
- [description(withLocale:)](description%28withlocale_%29.md): Returns a string representation of the decimal number appropriate for the specified locale.

# objCType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A C string containing the Objective-C type for the data contained in the decimal number object.

## Declaration

```objectivec
@property (readonly) const char * objCType;
```

<a id="Discussion"></a>

## Discussion

For a decimal number object, this property always contains “d” (for double).

## See Also

### Accessing the Value

- [decimalValue](decimalvalue.md): The decimal number’s value, expressed as an [NSDecimal](../decimal.md) structure.
- [doubleValue](doublevalue.md): The decimal number’s closest approximate `double` value.
- [descriptionWithLocale:](description%28withlocale_%29.md): Returns a string representation of the decimal number appropriate for the specified locale.
