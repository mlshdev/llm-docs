> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedstring/index/isvalid(within:)-8fw50

# isValid(within:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the index is valid for use with the provided attributed string.

## Declaration

```swift
func isValid(within text: some AttributedStringProtocol) -> Bool
```

## Parameters

- `text`: An attributed string used to validate the index.

<a id="return-value"></a>

## Return Value

`true` when the index is valid for use with the provided attributed string; otherwise, false. An index is valid if it is both within the bounds of the attributed string and was produced from the provided string without any intermediate mutations.
