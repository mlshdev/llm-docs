> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/spec/rename(to:)

# rename(to:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the prim’s name.

## Declaration

```swift
func rename(to name: USDToken) throws
```

## Parameters

- `name`: The new name to assign.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the new name is invalid or already used by a sibling.
