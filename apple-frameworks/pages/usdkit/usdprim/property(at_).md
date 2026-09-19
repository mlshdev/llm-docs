> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/property(at:)

# property(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the property at a given path, relative to this prim.

## Declaration

```swift
func property(at path: USDLayer.Path) -> USDPrim.Property
```

<a id="discussion"></a>

## Discussion

If `path` is relative, it is anchored to this prim’s path. If no property exists at the resolved path, returns an invalid property handle.
