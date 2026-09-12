> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedraginteractiondelegate](https://developer.apple.com/documentation/browserenginekit/bedraginteractiondelegate)

# BEDragInteractionDelegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A protocol for a drag interaction delegate.

## Declaration

```swift
@MainActor protocol BEDragInteractionDelegate : UIDragInteractionDelegate
```

<a id="overview"></a>

## Overview

The [BEDragInteraction](bedraginteraction.md) class’s [delegate](bedraginteraction/delegate.md) implements this protocol. Use [BEDragInteraction](bedraginteraction.md) to prepare drag interactions asynchronously and add items to drag sessions, for example, when drag support requires JavaScript.

## Topics

### Participating in drag gestures

- [dragInteraction(\_:prepare:completion:)](bedraginteractiondelegate/draginteraction%28__prepare_completion_%29.md): Prepares the delegate for a drag session.
- [dragInteraction(\_:itemsForAddingTo:forTouchAt:completion:)](bedraginteractiondelegate/draginteraction%28__itemsforaddingto_fortouchat_completion_%29.md): Requests items to add to a drag session.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIDragInteractionDelegate](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate)

## See Also

### Drag interaction

- [BEDragInteraction](bedraginteraction.md): An interaction that enables your app to asynchronously provide drag items.

# BEDragInteractionDelegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A protocol for a drag interaction delegate.

## Declaration

```objectivec
@protocol BEDragInteractionDelegate <UIDragInteractionDelegate>
```

<a id="overview"></a>

## Overview

The [BEDragInteraction](bedraginteraction.md) class’s [delegate](bedraginteraction/delegate.md) implements this protocol. Use [BEDragInteraction](bedraginteraction.md) to prepare drag interactions asynchronously and add items to drag sessions, for example, when drag support requires JavaScript.

## Topics

### Participating in drag gestures

- [dragInteraction:prepareDragSession:completion:](bedraginteractiondelegate/draginteraction%28__prepare_completion_%29.md): Prepares the delegate for a drag session.
- [dragInteraction:itemsForAddingToSession:forTouchAtPoint:completion:](bedraginteractiondelegate/draginteraction%28__itemsforaddingto_fortouchat_completion_%29.md): Requests items to add to a drag session.

## Relationships

### Inherits From

- [UIDragInteractionDelegate](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate)

## See Also

### Drag interaction

- [BEDragInteraction](bedraginteraction.md): An interaction that enables your app to asynchronously provide drag items.
