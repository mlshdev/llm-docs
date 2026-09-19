> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/locale/subdivision-swift.struct/subdivision(for:)

# subdivision(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the subdivision representing the given region as a whole.

## Declaration

```swift
static func subdivision(for region: Locale.Region) -> Locale.Subdivision
```

## Parameters

- `region`: A region to represent as a subdivision.

<a id="return-value"></a>

## Return Value

A subdivision that represents the entire region.

<a id="Discussion"></a>

## Discussion

For example, this method returns a subdivision with the `uszzzz` identifier for the entire US region.

## See Also

### Creating a subdivision

- [init(\_:)](init%28__%29.md): Creates a sudivision from a Unicode identifier.
- [init(stringLiteral:)](init%28stringliteral_%29.md): Creates a sudivision from a Unicode identifier as a string literal.
