> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/integervalue(astypetruncatingifneeded:)](https://developer.apple.com/documentation/corehid/hidelement/value/integervalue(astypetruncatingifneeded:))

# integerValue(asTypeTruncatingIfNeeded:)

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

The raw value of the data cast as an integer type, with no transformations applied.

## Declaration

```swift
func integerValue<IntegerType>(asTypeTruncatingIfNeeded: IntegerType.Type) -> IntegerType where IntegerType : FixedWidthInteger
```

## Parameters

- `asTypeTruncatingIfNeeded`: The type to which to cast the underlying bytes, truncating or extending the bytes as necessary.

<a id="return-value"></a>

## Return Value

The data cast as the requested type.

## Mentioned In

- [Communicating with human interface devices](../../communicatingwithhiddevices.md)

## See Also

### Get element data and values

- [bytes](bytes.md): The data as an array of bytes.
- [logicalValue(asTypeTruncatingIfNeeded:)](logicalvalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type and bound by the [HIDElement](../../hidelement.md)’s logical minimum and logical maximum values.
- [physicalValue(fromTypeTruncatingIfNeeded:as:)](physicalvalue%28fromtypetruncatingifneeded_as_%29.md): The logical value of the data, shifted and scaled by the [HIDElement](../../hidelement.md)’s physical minimum, physical maximum and exponent.
- [timestamp](timestamp.md): The time that this data was received by the system.
