> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/oslogstringalignment/left(columns:)

# left(columns:)

**Framework:** os  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Aligns the value on the left side of a column with the specified width.

## Declaration

```swift
static func left(columns: @autoclosure @escaping () -> Int) -> OSLogStringAlignment
```

## Parameters

- `columns`: The width of the item in characters.

<a id="return-value"></a>

## Return Value

A string-alignment structure with the specified value.

## See Also

### Getting a Custom String Alignment

- [right(columns:)](right%28columns_%29.md): Aligns the value on the right side of a column with the specified width.
