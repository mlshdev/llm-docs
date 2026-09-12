> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedraginteraction](https://developer.apple.com/documentation/browserenginekit/bedraginteraction)

# BEDragInteraction (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An interaction that enables your app to asynchronously provide drag items.

## Declaration

```swift
@MainActor class BEDragInteraction
```

<a id="overview"></a>

## Overview

This class is a subclass of [UIDragInteraction](https://developer.apple.com/documentation/uikit/uidraginteraction) that adds asynchronous support for drag interaction. If you don’t need to interact with drag operations asynchronously, use [UIDragInteraction](https://developer.apple.com/documentation/uikit/uidraginteraction) instead.

To support UI element drag interaction in your browser app asynchronously, create an instance of this class and attach it to the source view.

Set the isntance’s [delegate](bedraginteraction/delegate.md) to an object that conforms to [BEDragInteractionDelegate](bedraginteractiondelegate.md), and implement prepartions in the delegate for the [UIDragSession](https://developer.apple.com/documentation/uikit/uidragsession). The system requests drag items from your delegate by calling the delegate’s [dragInteraction(\_:itemsForBeginning:)](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction%28_:itemsforbeginning:%29) method.

## Topics

### Creating a drag interaction

- [init(delegate:)](bedraginteraction/init%28delegate_%29.md): Creates a drag interaction and assigns its delegate.

### Handling drag gestures

- [delegate](bedraginteraction/delegate.md): A delegate for a drag interaction.
- [BEDragInteractionDelegate](bedraginteractiondelegate.md): A protocol for a drag interaction delegate.

## Relationships

### Inherits From

- [UIDragInteraction](https://developer.apple.com/documentation/uikit/uidraginteraction)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIInteraction](https://developer.apple.com/documentation/uikit/uiinteraction)

## See Also

### Drag interaction

- [BEDragInteractionDelegate](bedraginteractiondelegate.md): A protocol for a drag interaction delegate.

# BEDragInteraction (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An interaction that enables your app to asynchronously provide drag items.

## Declaration

```objectivec
@interface BEDragInteraction : UIDragInteraction
```

<a id="overview"></a>

## Overview

This class is a subclass of [UIDragInteraction](https://developer.apple.com/documentation/uikit/uidraginteraction) that adds asynchronous support for drag interaction. If you don’t need to interact with drag operations asynchronously, use [UIDragInteraction](https://developer.apple.com/documentation/uikit/uidraginteraction) instead.

To support UI element drag interaction in your browser app asynchronously, create an instance of this class and attach it to the source view.

Set the isntance’s [delegate](bedraginteraction/delegate.md) to an object that conforms to [BEDragInteractionDelegate](bedraginteractiondelegate.md), and implement prepartions in the delegate for the [UIDragSession](https://developer.apple.com/documentation/uikit/uidragsession). The system requests drag items from your delegate by calling the delegate’s [dragInteraction:itemsForBeginningSession:](https://developer.apple.com/documentation/uikit/uidraginteractiondelegate/draginteraction%28_:itemsforbeginning:%29) method.

## Topics

### Creating a drag interaction

- [initWithDelegate:](bedraginteraction/init%28delegate_%29.md): Creates a drag interaction and assigns its delegate.

### Handling drag gestures

- [delegate](bedraginteraction/delegate.md): A delegate for a drag interaction.
- [BEDragInteractionDelegate](bedraginteractiondelegate.md): A protocol for a drag interaction delegate.

## Relationships

### Inherits From

- [UIDragInteraction](https://developer.apple.com/documentation/uikit/uidraginteraction)

## See Also

### Drag interaction

- [BEDragInteractionDelegate](bedraginteractiondelegate.md): A protocol for a drag interaction delegate.
