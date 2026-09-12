> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/paylaterview](https://developer.apple.com/documentation/passkit/paylaterview)

# PayLaterView

**Framework:** PassKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS

A view that displays the Apple Pay Later visual merchandising widget.

> Apple Pay Later is deprecated.

## Declaration

```swift
@MainActor @preconcurrency struct PayLaterView<FallbackView> where FallbackView : View
```

<a id="overview"></a>

## Overview

Use this view to display a widget that allows people to learn more about the Apple Pay Later feature.

## Topics

### Setting the view’s action

- [PayLaterViewAction](paylaterviewaction.md): Deprecated. Values you use to set the Apple Pay Later action.

### Styling the view

- [PayLaterViewDisplayStyle](paylaterviewdisplaystyle.md): Deprecated. Values you use to style an Apple Pay Later visual merchandising widget.

### Initializers

- [init(amount:currency:)](paylaterview/init%28amount_currency_%29.md): Conforms when `FallbackView` is `EmptyView`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Deprecated

- [PKPayLaterView](pkpaylaterview.md): Deprecated. A view that displays the Apple Pay Later visual merchandising widget.
