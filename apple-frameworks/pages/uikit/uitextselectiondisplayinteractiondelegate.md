> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteractiondelegate](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteractiondelegate)

# UITextSelectionDisplayInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An object you use to customize the presentation of text selections in your interface.

## Declaration

```swift
@MainActor protocol UITextSelectionDisplayInteractionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the [UITextSelectionDisplayInteractionDelegate](uitextselectiondisplayinteractiondelegate.md) protocol in a custom type that you use to customize the selection UI implementation. The [UITextSelectionDisplayInteraction](uitextselectiondisplayinteraction.md) object manages separate views to draw the text selection, the handles for the selected text range, and the insertion-point caret. Use this protocol if you use a custom view to manage these views instead of the text input view. For example, provide a container view if you draw the selection UI behind your text view’s content.

## Topics

### Providing a container view

- [selectionContainerViewBelowText(for:)](uitextselectiondisplayinteractiondelegate/selectioncontainerviewbelowtext%28for_%29.md): Returns the container view to hold the selection-related highlight and detail views.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the drawing view

- [delegate](uitextselectiondisplayinteraction/delegate.md): A delegate that provides a container view to manage the system-supplied selection views.

# UITextSelectionDisplayInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An object you use to customize the presentation of text selections in your interface.

## Declaration

```objectivec
@protocol UITextSelectionDisplayInteractionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the [UITextSelectionDisplayInteractionDelegate](uitextselectiondisplayinteractiondelegate.md) protocol in a custom type that you use to customize the selection UI implementation. The [UITextSelectionDisplayInteraction](uitextselectiondisplayinteraction.md) object manages separate views to draw the text selection, the handles for the selected text range, and the insertion-point caret. Use this protocol if you use a custom view to manage these views instead of the text input view. For example, provide a container view if you draw the selection UI behind your text view’s content.

## Topics

### Providing a container view

- [selectionContainerViewBelowTextForSelectionDisplayInteraction:](uitextselectiondisplayinteractiondelegate/selectioncontainerviewbelowtext%28for_%29.md): Returns the container view to hold the selection-related highlight and detail views.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the drawing view

- [delegate](uitextselectiondisplayinteraction/delegate.md): A delegate that provides a container view to manage the system-supplied selection views.
