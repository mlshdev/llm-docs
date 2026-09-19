> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/path/replacing(name:)

# replacing(name:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a new path with the leaf name replaced.

## Declaration

```swift
func replacing(name newName: USDToken) -> USDLayer.Path
```

## Parameters

- `newName`: The new leaf name.

<a id="return-value"></a>

## Return Value

A new path with `newName` as its leaf.
