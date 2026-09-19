> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationguide/anyof(_:)

# anyOf(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Enforces that the string be one of the provided values.

## Declaration

```swift
static func anyOf(_ values: [String]) -> GenerationGuide<String>
```

## See Also

### Getting the constant

- [constant(\_:)](constant%28__%29.md): Conforms when `Value` is `String`. Enforces that the string be precisely the given value.
