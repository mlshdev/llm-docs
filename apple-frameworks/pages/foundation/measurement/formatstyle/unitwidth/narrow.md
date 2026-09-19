> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/measurement/formatstyle/unitwidth/narrow

# narrow

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The shortest unit width.

## Declaration

```swift
static var narrow: Measurement<UnitType>.FormatStyle.UnitWidth { get }
```

<a id="Discussion"></a>

## Discussion

This width may condense the spacing between the value and the unit; for example, `37.20Cal` or `37,2L`.

## See Also

### Unit widths

- [wide](wide.md): A unit width that shows the full unit name.
- [abbreviated](abbreviated.md): An abbreviated unit width.
