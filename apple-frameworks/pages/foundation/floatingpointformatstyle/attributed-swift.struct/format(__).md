> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/floatingpointformatstyle/attributed-swift.struct/format(_:)

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats a floating-point value, using this style.

## Declaration

```swift
func format(_ value: Value) -> AttributedString
```

## Parameters

- `value`: The floating-point value to format.

<a id="return-value"></a>

## Return Value

An attributed string representation of `value`, formatted according to the style’s configuration. The returned string contains attributes from the [AttributeScopes.FoundationAttributes.NumberFormatAttributes](../../attributescopes/foundationattributes/numberformatattributes.md) attribute scope to indicate runs formatted by this format style.
