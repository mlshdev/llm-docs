> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axnumericdataaxisdescriptor/init(attributedtitle:range:gridlinepositions:valuedescriptionprovider:)](https://developer.apple.com/documentation/accessibility/axnumericdataaxisdescriptor/init(attributedtitle:range:gridlinepositions:valuedescriptionprovider:))

# init(attributedTitle:range:gridlinePositions:valueDescriptionProvider:)

**Framework:** Accessibility  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a numeric data axis with the specified attributed title, range, gridline positions, and value description provider closure.

## Declaration

```swift
convenience init(attributedTitle: NSAttributedString, range: ClosedRange<Double>, gridlinePositions: [Double], valueDescriptionProvider: @escaping (Double) -> String)
```

## See Also

### Creating a numeric data axis

- [init(title:range:gridlinePositions:valueDescriptionProvider:)](init%28title_range_gridlinepositions_valuedescriptionprovider_%29.md): Creates a numeric data axis with the specified title, range, gridline positions, and value description provider closure.
