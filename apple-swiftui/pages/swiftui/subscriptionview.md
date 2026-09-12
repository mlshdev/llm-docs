> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/subscriptionview](https://developer.apple.com/documentation/swiftui/subscriptionview)

# SubscriptionView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A view that subscribes to a publisher with an action.

## Declaration

```swift
@frozen nonisolated struct SubscriptionView<PublisherType, Content> where PublisherType : Publisher, Content : View, PublisherType.Failure == Never
```

## Topics

### Creating a subscription view

- [init(content:publisher:action:)](subscriptionview/init%28content_publisher_action_%29.md)

### Managing the subscription

- [publisher](subscriptionview/publisher.md): The `Publisher` that is being subscribed.
- [action](subscriptionview/action.md): The `Action` executed when `publisher` emits an event.
- [content](subscriptionview/content.md): The content view.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Supporting view types

- [AnyView](anyview.md): A type-erased view.
- [EmptyView](emptyview.md): A view that doesn’t contain any content.
- [EquatableView](equatableview.md): A view type that compares itself against its previous value and prevents its child updating if its new value is the same as its old value.
- [TupleView](tupleview.md): A View created from a swift tuple of View values.
