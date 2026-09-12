> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/description(withlocale:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/description(withlocale:))

# description(withLocale:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of the decimal number appropriate for the specified locale.

## Declaration

```swift
func description(withLocale locale: Any?) -> String
```

## Parameters

- `locale`: Either an instance of [NSLocale](../nslocale.md) or a dictionary with a string value corresponding to the [decimalSeparator](../nslocale/key/decimalseparator.md) key.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling the [NSDecimalString(\_:\_:)](../nsdecimalstring%28____%29.md) function.

## See Also

### Accessing the Value

- [decimalValue](decimalvalue.md): The decimal number’s value, expressed as an [Decimal](../decimal.md) structure.
- [doubleValue](doublevalue.md): The decimal number’s closest approximate `double` value.
- [objCType](objctype.md): A C string containing the Objective-C type for the data contained in the decimal number object.

# descriptionWithLocale: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of the decimal number appropriate for the specified locale.

## Declaration

```objectivec
- (NSString *) descriptionWithLocale:(id) locale;
```

## Parameters

- `locale`: Either an instance of [NSLocale](../nslocale.md) or a dictionary with a string value corresponding to the [NSLocaleDecimalSeparator](../nslocale/key/decimalseparator.md) key.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling the [NSDecimalString](../nsdecimalstring%28____%29.md) function.

## See Also

### Accessing the Value

- [decimalValue](decimalvalue.md): The decimal number’s value, expressed as an [NSDecimal](../decimal.md) structure.
- [doubleValue](doublevalue.md): The decimal number’s closest approximate `double` value.
- [objCType](objctype.md): A C string containing the Objective-C type for the data contained in the decimal number object.
