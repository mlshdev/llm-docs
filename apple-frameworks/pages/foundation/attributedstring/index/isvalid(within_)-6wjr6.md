> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedstring/index/isvalid(within:)-6wjr6

# isValid(within:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates whether the index is valid for use with the provided discontiguous attributed string.

## Declaration

```swift
func isValid(within text: DiscontiguousAttributedSubstring) -> Bool
```

## Parameters

- `text`: A discontiguous attributed string used to validate the index.

<a id="return-value"></a>

## Return Value

`true` when the index is valid for use with the provided discontiguous attributed string; otherwise, false. An index is valid if it is both within the bounds of the discontiguous attributed string and was produced from the provided string without any intermediate mutations.
