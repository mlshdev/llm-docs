> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/path/appending(path:)

# appending(path:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a new path with `newSuffix` appended.

## Declaration

```swift
func appending(path newSuffix: USDLayer.Path) -> USDLayer.Path
```

## Parameters

- `newSuffix`: The path suffix to append.

<a id="return-value"></a>

## Return Value

A new path consisting of `self` followed by `newSuffix`.
