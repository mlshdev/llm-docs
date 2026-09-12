> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/emptyview](https://developer.apple.com/documentation/swiftui/emptyview)

# EmptyView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A view that doesn’t contain any content.

## Declaration

```swift
@frozen nonisolated struct EmptyView
```

<a id="overview"></a>

## Overview

You will rarely, if ever, need to create an `EmptyView` directly. Instead, `EmptyView` represents the absence of a view.

SwiftUI uses `EmptyView` in situations where a SwiftUI view type defines one or more child views with generic parameters, and allows the child views to be absent. When absent, the child view’s type in the generic type parameter is `EmptyView`.

The following example creates an indeterminate [ProgressView](progressview.md) without a label. The [ProgressView](progressview.md) type declares two generic parameters, `Label` and `CurrentValueLabel`, for the types used by its subviews. When both subviews are absent, like they are here, the resulting type is `ProgressView<EmptyView, EmptyView>`, as indicated by the example’s output:

```swift
let progressView = ProgressView()
print("\(type(of:progressView))")
// Prints: ProgressView<EmptyView, EmptyView>
```

## Topics

### Creating an empty view

- [init()](emptyview/init%28%29.md): Creates an empty view.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [ChartContent](https://developer.apple.com/documentation/charts/chartcontent)
- [Commands](commands.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomizableToolbarContent](customizabletoolbarcontent.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [SceneAccessoryContent](sceneaccessorycontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ToolbarContent](toolbarcontent.md)
- [View](view.md)

## See Also

### Supporting view types

- [AnyView](anyview.md): A type-erased view.
- [EquatableView](equatableview.md): A view type that compares itself against its previous value and prevents its child updating if its new value is the same as its old value.
- [SubscriptionView](subscriptionview.md): A view that subscribes to a publisher with an action.
- [TupleView](tupleview.md): A View created from a swift tuple of View values.
