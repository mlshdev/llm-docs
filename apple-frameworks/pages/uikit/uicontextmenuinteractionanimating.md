> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractionanimating](https://developer.apple.com/documentation/uikit/uicontextmenuinteractionanimating)

# UIContextMenuInteractionAnimating (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Methods adopted by system-supplied animator objects when interacting with context menus.

## Declaration

```swift
@MainActor protocol UIContextMenuInteractionAnimating : NSObjectProtocol
```

## Topics

### Adding Custom Animations

- [addAnimations(\_:)](uicontextmenuinteractionanimating/addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addCompletion(\_:)](uicontextmenuinteractionanimating/addcompletion%28__%29.md): Adds the specified completion block to the animator.

### Previewing the Content

- [previewViewController](uicontextmenuinteractionanimating/previewviewcontroller.md): The current preview view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIContextMenuInteractionCommitAnimating](uicontextmenuinteractioncommitanimating.md)

## See Also

### Handling animations

- [contextMenuInteraction(\_:willDisplayMenuFor:animator:)](uicontextmenuinteractiondelegate/contextmenuinteraction%28__willdisplaymenufor_animator_%29.md): Informs the delegate when a menu display begins.
- [contextMenuInteraction(\_:willEndFor:animator:)](uicontextmenuinteractiondelegate/contextmenuinteraction%28__willendfor_animator_%29.md): Informs the delegate when a menu display ends.

# UIContextMenuInteractionAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Methods adopted by system-supplied animator objects when interacting with context menus.

## Declaration

```objectivec
@protocol UIContextMenuInteractionAnimating <NSObject>
```

## Topics

### Adding Custom Animations

- [addAnimations:](uicontextmenuinteractionanimating/addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addCompletion:](uicontextmenuinteractionanimating/addcompletion%28__%29.md): Adds the specified completion block to the animator.

### Previewing the Content

- [previewViewController](uicontextmenuinteractionanimating/previewviewcontroller.md): The current preview view controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIContextMenuInteractionCommitAnimating](uicontextmenuinteractioncommitanimating.md)

## See Also

### Handling animations

- [contextMenuInteraction:willDisplayMenuForConfiguration:animator:](uicontextmenuinteractiondelegate/contextmenuinteraction%28__willdisplaymenufor_animator_%29.md): Informs the delegate when a menu display begins.
- [contextMenuInteraction:willEndForConfiguration:animator:](uicontextmenuinteractiondelegate/contextmenuinteraction%28__willendfor_animator_%29.md): Informs the delegate when a menu display ends.
