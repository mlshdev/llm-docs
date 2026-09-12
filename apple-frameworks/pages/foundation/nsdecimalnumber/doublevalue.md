> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/doublevalue](https://developer.apple.com/documentation/foundation/nsdecimalnumber/doublevalue)

# doubleValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The decimal number’s closest approximate `double` value.

## Declaration

```swift
var doubleValue: Double { get }
```

<a id="Discussion"></a>

## Discussion

Not all decimal numbers can be accurately represented using a `double` value.

## See Also

### Accessing the Value

- [decimalValue](decimalvalue.md): The decimal number’s value, expressed as an [Decimal](../decimal.md) structure.
- [description(withLocale:)](description%28withlocale_%29.md): Returns a string representation of the decimal number appropriate for the specified locale.
- [objCType](objctype.md): A C string containing the Objective-C type for the data contained in the decimal number object.

# doubleValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The decimal number’s closest approximate `double` value.

## Declaration

```objectivec
@property (readonly) double doubleValue;
```

<a id="Discussion"></a>

## Discussion

Not all decimal numbers can be accurately represented using a `double` value.

## See Also

### Accessing the Value

- [decimalValue](decimalvalue.md): The decimal number’s value, expressed as an [NSDecimal](../decimal.md) structure.
- [descriptionWithLocale:](description%28withlocale_%29.md): Returns a string representation of the decimal number appropriate for the specified locale.
- [objCType](objctype.md): A C string containing the Objective-C type for the data contained in the decimal number object.
