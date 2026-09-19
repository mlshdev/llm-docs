> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/path/commonprefix(with:)

# commonPrefix(with:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the longest common ancestor path of this path and `other`.

## Declaration

```swift
func commonPrefix(with other: USDLayer.Path) -> USDLayer.Path
```

## Parameters

- `other`: The path to compare against.

<a id="return-value"></a>

## Return Value

The longest path that is a prefix of both.
