> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/explicitalignment(of:in:proposal:subviews:cache:)-755bz](https://developer.apple.com/documentation/swiftui/layout/explicitalignment(of:in:proposal:subviews:cache:)-755bz)

# explicitAlignment(of:in:proposal:subviews:cache:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the result of merging the vertical alignment guides of all subviews.

## Declaration

```swift
func explicitAlignment(of guide: VerticalAlignment, in bounds: CGRect, proposal: ProposedViewSize, subviews: Self.Subviews, cache: inout Self.Cache) -> CGFloat?
```

<a id="discussion"></a>

## Discussion

If you don’t implement the [explicitAlignment(of:in:proposal:subviews:cache:)](explicitalignment%28of_in_proposal_subviews_cache_%29-755bz.md) method in your custom layout, the protocol uses this default implementation instead, which merges the guides of all the subviews.
