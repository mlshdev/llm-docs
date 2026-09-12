> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:textitemmenuwillendfor:animator:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:textitemmenuwillendfor:animator:))

# textView(\_:textItemMenuWillEndFor:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Informs the delegate that a text item menu is about to be dismissed with the specified animator.

## Declaration

```swift
optional func textView(_ textView: UITextView, textItemMenuWillEndFor textItem: UITextItem, animator: any UIContextMenuInteractionAnimating)
```

## Parameters

- `textView`: The text view showing the menu.
- `textItem`: The text item for performing said action.
- `animator`: Dismissal animator. Add animations to this object to run them alongside the dismissal transition.

## See Also

### Interacting with text data

- [textView(\_:menuConfigurationFor:defaultMenu:)](textview%28__menuconfigurationfor_defaultmenu_%29.md): Asks the delegate for the menu configuration to be performed when interacting with a text item.
- [textView(\_:primaryActionFor:defaultAction:)](textview%28__primaryactionfor_defaultaction_%29.md): Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.
- [textView(\_:textItemMenuWillDisplayFor:animator:)](textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.

# textView:textItemMenuWillEndForTextItem:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Informs the delegate that a text item menu is about to be dismissed with the specified animator.

## Declaration

```objectivec
- (void) textView:(UITextView *) textView textItemMenuWillEndForTextItem:(UITextItem *) textItem animator:(id<UIContextMenuInteractionAnimating>) animator;
```

## Parameters

- `textView`: The text view showing the menu.
- `textItem`: The text item for performing said action.
- `animator`: Dismissal animator. Add animations to this object to run them alongside the dismissal transition.

## See Also

### Interacting with text data

- [textView:menuConfigurationForTextItem:defaultMenu:](textview%28__menuconfigurationfor_defaultmenu_%29.md): Asks the delegate for the menu configuration to be performed when interacting with a text item.
- [textView:primaryActionForTextItem:defaultAction:](textview%28__primaryactionfor_defaultaction_%29.md): Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.
- [textView:textItemMenuWillDisplayForTextItem:animator:](textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.
