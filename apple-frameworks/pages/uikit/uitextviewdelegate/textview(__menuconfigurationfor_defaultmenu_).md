> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:menuconfigurationfor:defaultmenu:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:menuconfigurationfor:defaultmenu:))

# textView(\_:menuConfigurationFor:defaultMenu:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Asks the delegate for the menu configuration to be performed when interacting with a text item.

## Declaration

```swift
optional func textView(_ textView: UITextView, menuConfigurationFor textItem: UITextItem, defaultMenu: UIMenu) -> UITextItem.MenuConfiguration?
```

## Parameters

- `textView`: The text view requesting the menu.
- `textItem`: The text item for performing said action.
- `defaultMenu`: The default menu for the specified text item.

<a id="return-value"></a>

## Return Value

Return a menu configuration to be presented when the text item is interacted with. Return @c nil to prevent the menu from being presented.

## See Also

### Interacting with text data

- [textView(\_:primaryActionFor:defaultAction:)](textview%28__primaryactionfor_defaultaction_%29.md): Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.
- [textView(\_:textItemMenuWillDisplayFor:animator:)](textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.
- [textView(\_:textItemMenuWillEndFor:animator:)](textview%28__textitemmenuwillendfor_animator_%29.md): Informs the delegate that a text item menu is about to be dismissed with the specified animator.

# textView:menuConfigurationForTextItem:defaultMenu: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Asks the delegate for the menu configuration to be performed when interacting with a text item.

## Declaration

```objectivec
- (UITextItemMenuConfiguration *) textView:(UITextView *) textView menuConfigurationForTextItem:(UITextItem *) textItem defaultMenu:(UIMenu *) defaultMenu;
```

## Parameters

- `textView`: The text view requesting the menu.
- `textItem`: The text item for performing said action.
- `defaultMenu`: The default menu for the specified text item.

<a id="return-value"></a>

## Return Value

Return a menu configuration to be presented when the text item is interacted with. Return @c nil to prevent the menu from being presented.

## See Also

### Interacting with text data

- [textView:primaryActionForTextItem:defaultAction:](textview%28__primaryactionfor_defaultaction_%29.md): Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.
- [textView:textItemMenuWillDisplayForTextItem:animator:](textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.
- [textView:textItemMenuWillEndForTextItem:animator:](textview%28__textitemmenuwillendfor_animator_%29.md): Informs the delegate that a text item menu is about to be dismissed with the specified animator.
