> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pinnedscrollableviews](https://developer.apple.com/documentation/swiftui/pinnedscrollableviews)

# PinnedScrollableViews

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A set of view types that may be pinned to the bounds of a scroll view.

## Declaration

```swift
struct PinnedScrollableViews
```

## Mentioned In

- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md)

## Topics

### Getting scrollable view types

- [sectionHeaders](pinnedscrollableviews/sectionheaders.md): The header view of each `Section` will be pinned.
- [sectionFooters](pinnedscrollableviews/sectionfooters.md): The footer view of each `Section` will be pinned.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Dynamically arranging views in one dimension

- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md): Split content into logical sections inside lazy stack views.
- [Creating performant scrollable stacks](creating-performant-scrollable-stacks.md): Display large numbers of repeated views efficiently with scroll views, stack views, and lazy stacks.
- [LazyHStack](lazyhstack.md): A view that arranges its children in a line that grows horizontally, creating items only as needed.
- [LazyVStack](lazyvstack.md): A view that arranges its children in a line that grows vertically, creating items only as needed.
