> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/spec/variantselection(for:)

# variantSelection(for:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the authored variant selection for the given variant set.

## Declaration

```swift
func variantSelection(for setName: USDToken) -> USDToken?
```

## Parameters

- `setName`: The variant set to query.

<a id="return-value"></a>

## Return Value

The authored variant name, or `nil` if not authored.
