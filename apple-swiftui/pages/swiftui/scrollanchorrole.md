> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollanchorrole](https://developer.apple.com/documentation/swiftui/scrollanchorrole)

# ScrollAnchorRole

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type defining the role of a scroll anchor.

## Declaration

```swift
struct ScrollAnchorRole
```

<a id="overview"></a>

## Overview

You can associate a [UnitPoint](unitpoint.md) to a [ScrollView](scrollview.md) using the [defaultScrollAnchor(\_:)](view/defaultscrollanchor%28__%29.md) modifier. By default, the system uses this point for different kinds of behaviors including:

- Where the scroll view should initially be scrolled
- How the scroll view should handle content size or container size changes
- How the scroll view should align content smaller than its container size

You can further customize this behavior by assigning different unit points for these different roles.

## Topics

### Type Properties

- [alignment](scrollanchorrole/alignment.md): The role that influences how a scroll view should align its content when the size of its content is smaller than the container size of the scroll view.
- [initialOffset](scrollanchorrole/initialoffset.md): The role that influences where a scroll view should be initially scrolled.
- [sizeChanges](scrollanchorrole/sizechanges.md): The role that influences how a scroll view should adjust its content offset when the scroll view’s content or container size changes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing scroll position

- [scrollPosition(\_:anchor:)](view/scrollposition%28__anchor_%29.md): Associates a binding to a scroll position with a scroll view within this view.
- [scrollPosition(id:anchor:)](view/scrollposition%28id_anchor_%29.md): Associates a binding to be updated when a scroll view within this view scrolls.
- [defaultScrollAnchor(\_:)](view/defaultscrollanchor%28__%29.md): Associates an anchor to control which part of the scroll view’s content should be rendered by default.
- [defaultScrollAnchor(\_:for:)](view/defaultscrollanchor%28__for_%29.md): Associates an anchor to control the position of a scroll view in a particular circumstance.
- [ScrollPosition](scrollposition.md): A type that defines the semantic position of where a scroll view is scrolled within its content.
