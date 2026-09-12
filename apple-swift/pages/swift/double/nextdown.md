> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/nextdown](https://developer.apple.com/documentation/swift/double/nextdown)

# nextDown

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The greatest representable value that compares less than this value.

## Declaration

```swift
var nextDown: Self { get }
```

<a id="discussion"></a>

## Discussion

For any finite value `x`, `x.nextDown` is less than `x`. For `nan` or `-infinity`, `x.nextDown` is `x` itself. The following special cases also apply:

- If `x` is `infinity`, then `x.nextDown` is `greatestFiniteMagnitude`.
- If `x` is `leastNonzeroMagnitude`, then `x.nextDown` is `0.0`.
- If `x` is zero, then `x.nextDown` is `-leastNonzeroMagnitude`.
- If `x` is `-greatestFiniteMagnitude`, then `x.nextDown` is `-infinity`.

## See Also

### Querying a Double

- [ulp](ulp.md): The unit in the last place of this value.
- [significand](significand.md): The significand of the floating-point value.
- [exponent](exponent-swift.property.md): The exponent of the floating-point value.
- [nextUp](nextup.md): The least representable value that compares greater than this value.
- [binade](binade.md): The floating-point value with the same sign and exponent as this value, but with a significand of 1.0.
