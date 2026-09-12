> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/sizethatfits(_:)](https://developer.apple.com/documentation/swiftui/shape/sizethatfits(_:))

# sizeThatFits(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the size of the view that will render the shape, given a proposed size.

## Declaration

```swift
nonisolated func sizeThatFits(_ proposal: ProposedViewSize) -> CGSize
```

## Parameters

- `proposal`: A size proposal for the container.

<a id="return-value"></a>

## Return Value

A size that indicates how much space the shape needs.

<a id="discussion"></a>

## Discussion

Implement this method to tell the container of the shape how much space the shape needs to render itself, given a size proposal.

See [sizeThatFits(proposal:subviews:cache:)](../layout/sizethatfits%28proposal_subviews_cache_%29.md) for more details about how the layout system chooses the size of views.

## Default Implementations

### Shape Implementations

- [sizeThatFits(\_:)](sizethatfits%28__%29-2vtnh.md): Returns the original proposal, with nil components replaced by a small positive value.

## See Also

### Defining a shape’s size and path

- [path(in:)](path%28in_%29.md): Describes this shape as a path within a rectangular frame of reference.
