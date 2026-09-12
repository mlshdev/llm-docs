> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractioncommitanimating](https://developer.apple.com/documentation/uikit/uicontextmenuinteractioncommitanimating)

# UIContextMenuInteractionCommitAnimating (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods adopted by system-supplied animator objects when committing preview-related animations.

## Declaration

```swift
@MainActor protocol UIContextMenuInteractionCommitAnimating : UIContextMenuInteractionAnimating
```

<a id="overview"></a>

## Overview

When the user taps in a preview interface to dismiss it, UIKit creates an object that adopts this protocol and passes it to your [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) method. Use the object to add any custom animations that you want to run alongside the dismissal animations.

## Topics

### Specifying the Commit Style

- [preferredCommitStyle](uicontextmenuinteractioncommitanimating/preferredcommitstyle.md): The preferred animation style triggered when the user taps the preview.
- [UIContextMenuInteractionCommitStyle](uicontextmenuinteractioncommitstyle.md): Constants that control the interaction commit style.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIContextMenuInteractionAnimating](uicontextmenuinteractionanimating.md)

## See Also

### Responding to the menu’s appearance

- [contextMenuInteraction(\_:willPerformPreviewActionForMenuWith:animator:)](uicontextmenuinteractiondelegate/contextmenuinteraction%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a preview action begins.

# UIContextMenuInteractionCommitAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods adopted by system-supplied animator objects when committing preview-related animations.

## Declaration

```objectivec
@protocol UIContextMenuInteractionCommitAnimating <UIContextMenuInteractionAnimating>
```

<a id="overview"></a>

## Overview

When the user taps in a preview interface to dismiss it, UIKit creates an object that adopts this protocol and passes it to your [UIContextMenuInteractionDelegate](uicontextmenuinteractiondelegate.md) method. Use the object to add any custom animations that you want to run alongside the dismissal animations.

## Topics

### Specifying the Commit Style

- [preferredCommitStyle](uicontextmenuinteractioncommitanimating/preferredcommitstyle.md): The preferred animation style triggered when the user taps the preview.
- [UIContextMenuInteractionCommitStyle](uicontextmenuinteractioncommitstyle.md): Constants that control the interaction commit style.

## Relationships

### Inherits From

- [UIContextMenuInteractionAnimating](uicontextmenuinteractionanimating.md)

## See Also

### Responding to the menu’s appearance

- [contextMenuInteraction:willPerformPreviewActionForMenuWithConfiguration:animator:](uicontextmenuinteractiondelegate/contextmenuinteraction%28__willperformpreviewactionformenuwith_animator_%29.md): Informs the delegate when a preview action begins.
