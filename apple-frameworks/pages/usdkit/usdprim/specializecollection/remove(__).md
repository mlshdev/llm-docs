> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/specializecollection/remove(_:)

# remove(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes a specific specializes arc from the prim.

## Declaration

```swift
func remove(_ primPath: USDLayer.Path) throws
```

## Parameters

- `primPath`: The path of the specializes to remove.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the specializes cannot be removed.
