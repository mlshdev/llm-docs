> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidelement/value/timestamp](https://developer.apple.com/documentation/corehid/hidelement/value/timestamp)

# timestamp

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The time that this data was received by the system.

## Declaration

```swift
var timestamp: SuspendingClock.Instant
```

<a id="discussion"></a>

## Discussion

The data should only be considered valid at this time, it’s possible for the [HIDElement](../../hidelement.md) to have been updated after this.

## See Also

### Get element data and values

- [bytes](bytes.md): The data as an array of bytes.
- [integerValue(asTypeTruncatingIfNeeded:)](integervalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type, with no transformations applied.
- [logicalValue(asTypeTruncatingIfNeeded:)](logicalvalue%28astypetruncatingifneeded_%29.md): The raw value of the data cast as an integer type and bound by the [HIDElement](../../hidelement.md)’s logical minimum and logical maximum values.
- [physicalValue(fromTypeTruncatingIfNeeded:as:)](physicalvalue%28fromtypetruncatingifneeded_as_%29.md): The logical value of the data, shifted and scaled by the [HIDElement](../../hidelement.md)’s physical minimum, physical maximum and exponent.
