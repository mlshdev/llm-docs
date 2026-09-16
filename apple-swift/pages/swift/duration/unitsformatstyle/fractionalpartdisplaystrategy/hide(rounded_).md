> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/duration/unitsformatstyle/fractionalpartdisplaystrategy/hide(rounded:)

# hide(rounded:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a display strategy that hides any fractional part rounding the unit value.

## Declaration

```swift
static func hide(rounded: FloatingPointRoundingRule = .toNearestOrEven) -> Duration.UnitsFormatStyle.FractionalPartDisplayStrategy
```

## See Also

### Using common strategies

- [hide](hide.md): A display strategy that hides any fractional part by truncating it.
- [show(length:rounded:increment:)](show%28length_rounded_increment_%29.md): Creates a display strategy that shows a fractional part.
