> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrolledgeelementcontainerinteraction](https://developer.apple.com/documentation/uikit/uiscrolledgeelementcontainerinteraction)

# UIScrollEdgeElementContainerInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Add this interaction to a container view of views that overlay the edge of a scroll view. Any descendants of this view that should affect the shape of the edge effect, such as labels, images, glass views, and controls, will automatically do so.

## Declaration

```swift
@MainActor class UIScrollEdgeElementContainerInteraction
```

<a id="overview"></a>

## Overview

In the following example, an interaction is added to a container view of buttons that overlay the bottom edge of a scroll view.

```
let interaction = UIScrollEdgeElementContainerInteraction()
interaction.scrollView = scrollView
interaction.edge = .bottom
buttonContainer.addInteraction(interaction)
```

## Topics

### Instance Properties

- [edge](uiscrolledgeelementcontainerinteraction/edge.md): The edge of the scroll view to affect
- [scrollView](uiscrolledgeelementcontainerinteraction/scrollview.md): The scroll view to affect

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Interacting with adjacent views

- [UIBackgroundExtensionView](uibackgroundextensionview.md): A view that extends content to fill its own bounds.

# UIScrollEdgeElementContainerInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Add this interaction to a container view of views that overlay the edge of a scroll view. Any descendants of this view that should affect the shape of the edge effect, such as labels, images, glass views, and controls, will automatically do so.

## Declaration

```objectivec
@interface UIScrollEdgeElementContainerInteraction : NSObject
```

<a id="overview"></a>

## Overview

In the following example, an interaction is added to a container view of buttons that overlay the bottom edge of a scroll view.

```
let interaction = UIScrollEdgeElementContainerInteraction()
interaction.scrollView = scrollView
interaction.edge = .bottom
buttonContainer.addInteraction(interaction)
```

## Topics

### Instance Properties

- [edge](uiscrolledgeelementcontainerinteraction/edge.md): The edge of the scroll view to affect
- [scrollView](uiscrolledgeelementcontainerinteraction/scrollview.md): The scroll view to affect

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Interacting with adjacent views

- [UIBackgroundExtensionView](uibackgroundextensionview.md): A view that extends content to fill its own bounds.
