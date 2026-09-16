> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/layout/makecache(subviews:)-4fu1k

# makeCache(subviews:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the empty value when your layout doesn’t require a cache.

## Declaration

```swift
func makeCache(subviews: Self.Subviews) -> Self.Cache
```

<a id="discussion"></a>

## Discussion

If you don’t implement the [makeCache(subviews:)](makecache%28subviews_%29-4fu1k.md) method in your custom layout, the protocol uses this default implementation instead, which returns an empty value.
