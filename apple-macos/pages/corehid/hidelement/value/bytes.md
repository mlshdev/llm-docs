> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/bytes](https://developer.apple.com/documentation/corehid/hidelement/value/bytes)

# bytes

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The data as an array of bytes.

## Declaration

```swift
var bytes: Data
```

## Mentioned In

- [Communicating with human interface devices](../../communicatingwithhiddevices.md)

<a id="discussion"></a>

## Discussion

The size of the data must be the [element](element.md)s [reportSize](../reportsize.md), rounded up to the next byte.

## See Also

### Get element data and values

- [integerValue(asTypeTruncatingIfNeeded:)](integervalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type, with no transformations applied.
- [logicalValue(asTypeTruncatingIfNeeded:)](logicalvalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type and bound by the [HIDElement](../../hidelement.md)’s logical minimum and logical maximum values.
- [physicalValue(fromTypeTruncatingIfNeeded:as:)](physicalvalue%28fromtypetruncatingifneeded_as_%29.md): The logical value of the data, shifted and scaled by the [HIDElement](../../hidelement.md)’s physical minimum, physical maximum and exponent.
- [timestamp](timestamp.md): The time that this data was received by the system.
