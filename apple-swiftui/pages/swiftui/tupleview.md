> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tupleview](https://developer.apple.com/documentation/swiftui/tupleview)

# TupleView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A View created from a swift tuple of View values.

## Declaration

```swift
@frozen nonisolated struct TupleView<T>
```

## Topics

### Creating a tuple view

- [init(\_:)](tupleview/init%28__%29.md)
- [value](tupleview/value.md)

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Supporting view types

- [AnyView](anyview.md): A type-erased view.
- [EmptyView](emptyview.md): A view that doesn’t contain any content.
- [EquatableView](equatableview.md): A view type that compares itself against its previous value and prevents its child updating if its new value is the same as its old value.
- [SubscriptionView](subscriptionview.md): A view that subscribes to a publisher with an action.
