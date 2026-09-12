> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/attributed-swift.struct/format(_:)](https://developer.apple.com/documentation/foundation/decimal/formatstyle/attributed-swift.struct/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats a decimal value, using this style.

## Declaration

```swift
func format(_ value: Decimal) -> AttributedString
```

## Parameters

- `value`: The decimal value to format.

<a id="return-value"></a>

## Return Value

An attributed string representation of `value`, formatted according to the style’s configuration. The returned string contains attributes from the [AttributeScopes.FoundationAttributes.NumberFormatAttributes](../../../attributescopes/foundationattributes/numberformatattributes.md) attribute scope to indicate runs formatted by this format style.
