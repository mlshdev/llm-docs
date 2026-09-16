> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/layout/spacing(subviews:cache:)-1z0gt

# spacing(subviews:cache:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the union of all subview spacing.

## Declaration

```swift
func spacing(subviews: Self.Subviews, cache: inout Self.Cache) -> ViewSpacing
```

<a id="discussion"></a>

## Discussion

If you don’t implement the [spacing(subviews:cache:)](spacing%28subviews_cache_%29-1z0gt.md) method in your custom layout, the protocol uses this default implementation instead, which returns the union of the spacing preferences of all the layout’s subviews.
