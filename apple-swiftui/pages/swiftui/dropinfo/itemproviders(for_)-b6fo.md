> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropinfo/itemproviders(for:)-b6fo](https://developer.apple.com/documentation/swiftui/dropinfo/itemproviders(for:)-b6fo)

# itemProviders(for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 27.0) · iPadOS 13.4+ (deprecated in 27.0) · Mac Catalyst 13.4+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns an array of items that each conform to at least one of the specified uniform type identifiers.

> Use [itemProviders(for:)](itemproviders%28for_%29-93409.md) instead.

## Declaration

```swift
func itemProviders(for types: [String]) -> [NSItemProvider]
```

<a id="discussion"></a>

## Discussion

This function is only valid during the `performDrop()` action.

## See Also

### Deprecated symbols

- [hasItemsConforming(to:)](hasitemsconforming%28to_%29-4qeez.md): Deprecated. Returns whether at least one item conforms to at least one of the specified uniform type identifiers.
