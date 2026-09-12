> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anyview](https://developer.apple.com/documentation/swiftui/anyview)

# AnyView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type-erased view.

## Declaration

```swift
@frozen nonisolated struct AnyView
```

<a id="overview"></a>

## Overview

An `AnyView` allows changing the type of view used in a given view hierarchy. Whenever the type of view used with an `AnyView` changes, the old hierarchy is destroyed and a new hierarchy is created for the new type.

## Topics

### Creating a view

- [init(\_:)](anyview/init%28__%29.md): Create an instance that type-erases `view`.
- [init(erasing:)](anyview/init%28erasing_%29.md)

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Supporting view types

- [EmptyView](emptyview.md): A view that doesn’t contain any content.
- [EquatableView](equatableview.md): A view type that compares itself against its previous value and prevents its child updating if its new value is the same as its old value.
- [SubscriptionView](subscriptionview.md): A view that subscribes to a publisher with an action.
- [TupleView](tupleview.md): A View created from a swift tuple of View values.
