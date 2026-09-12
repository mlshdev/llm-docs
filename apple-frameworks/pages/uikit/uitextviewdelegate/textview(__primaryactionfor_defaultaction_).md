> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:primaryactionfor:defaultaction:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:primaryactionfor:defaultaction:))

# textView(\_:primaryActionFor:defaultAction:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.

## Declaration

```swift
optional func textView(_ textView: UITextView, primaryActionFor textItem: UITextItem, defaultAction: UIAction) -> UIAction?
```

## Parameters

- `textView`: The text view requesting the primary action.
- `textItem`: The text item for performing said action.
- `defaultAction`: The default action for the text item. Return this to perform the default action.

<a id="return-value"></a>

## Return Value

Return a UIAction to be performed when the text item is interacted with. Return @c nil to prevent the action from being performed.

## See Also

### Interacting with text data

- [textView(\_:menuConfigurationFor:defaultMenu:)](textview%28__menuconfigurationfor_defaultmenu_%29.md): Asks the delegate for the menu configuration to be performed when interacting with a text item.
- [textView(\_:textItemMenuWillDisplayFor:animator:)](textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.
- [textView(\_:textItemMenuWillEndFor:animator:)](textview%28__textitemmenuwillendfor_animator_%29.md): Informs the delegate that a text item menu is about to be dismissed with the specified animator.

# textView:primaryActionForTextItem:defaultAction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Asks the delegate for the action to be performed when interacting with a text item. If a nil action is provided, the text view will request a menu to be presented on primary action if possible.

## Declaration

```objectivec
- (UIAction *) textView:(UITextView *) textView primaryActionForTextItem:(UITextItem *) textItem defaultAction:(UIAction *) defaultAction;
```

## Parameters

- `textView`: The text view requesting the primary action.
- `textItem`: The text item for performing said action.
- `defaultAction`: The default action for the text item. Return this to perform the default action.

<a id="return-value"></a>

## Return Value

Return a UIAction to be performed when the text item is interacted with. Return @c nil to prevent the action from being performed.

## See Also

### Interacting with text data

- [textView:menuConfigurationForTextItem:defaultMenu:](textview%28__menuconfigurationfor_defaultmenu_%29.md): Asks the delegate for the menu configuration to be performed when interacting with a text item.
- [textView:textItemMenuWillDisplayForTextItem:animator:](textview%28__textitemmenuwilldisplayfor_animator_%29.md): Informs the delegate that a text item menu is about to be presented with the specified animator.
- [textView:textItemMenuWillEndForTextItem:animator:](textview%28__textitemmenuwillendfor_animator_%29.md): Informs the delegate that a text item menu is about to be dismissed with the specified animator.
