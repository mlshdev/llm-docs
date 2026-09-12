> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/editmenu(for:suggestedactions:)](https://developer.apple.com/documentation/uikit/uitextinput/editmenu(for:suggestedactions:))

# editMenu(for:suggestedActions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Asks for the menu to display for the given text range and actions the system provides.

## Declaration

```swift
optional func editMenu(for textRange: UITextRange, suggestedActions: [UIMenuElement]) -> UIMenu?
```

## Parameters

- `textRange`: The text range the menu is presenting for.
- `suggestedActions`: The actions and commands the system suggests.

<a id="return-value"></a>

## Return Value

Returns a menu describing the desired menu hierarchy. Return `nil` to present the default system menu.

<a id="Discussion"></a>

## Discussion

The following example returns a menu with additional actions in a submenu.

```swift
func editMenu(for textRange: UITextRange, suggestedActions: [UIMenuElement]) -> UIMenu? {
    let indentationMenu = UIMenu(title: "Indentation", image: UIImage(systemName: "list.bullet.indent"), children: [
        UIAction(title: "Increase", image: UIImage(systemName: "increase.indent")) { (action) in
            // Increase indentation action.
        },
        UIAction(title: "Decrease", image: UIImage(systemName: "decrease.indent")) { (action) in
            // Decrease indentation action.
        }
    ])

    var actions = suggestedActions
    actions.append(indentationMenu)
    return UIMenu(children: actions)
}
```

## See Also

### Managing the edit menu

- [willPresentEditMenu(animator:)](willpresenteditmenu%28animator_%29.md): Tells the object when the system is about to present an edit menu with an animator.
- [willDismissEditMenu(animator:)](willdismisseditmenu%28animator_%29.md): Tells the object when the system is about to dismiss an edit menu with an animator.

# editMenuForTextRange:suggestedActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Asks for the menu to display for the given text range and actions the system provides.

## Declaration

```objectivec
- (UIMenu *) editMenuForTextRange:(UITextRange *) textRange suggestedActions:(NSArray<UIMenuElement *> *) suggestedActions;
```

## Parameters

- `textRange`: The text range the menu is presenting for.
- `suggestedActions`: The actions and commands the system suggests.

<a id="return-value"></a>

## Return Value

Returns a menu describing the desired menu hierarchy. Return `nil` to present the default system menu.

<a id="Discussion"></a>

## Discussion

The following example returns a menu with additional actions in a submenu.

```swift
func editMenu(for textRange: UITextRange, suggestedActions: [UIMenuElement]) -> UIMenu? {
    let indentationMenu = UIMenu(title: "Indentation", image: UIImage(systemName: "list.bullet.indent"), children: [
        UIAction(title: "Increase", image: UIImage(systemName: "increase.indent")) { (action) in
            // Increase indentation action.
        },
        UIAction(title: "Decrease", image: UIImage(systemName: "decrease.indent")) { (action) in
            // Decrease indentation action.
        }
    ])

    var actions = suggestedActions
    actions.append(indentationMenu)
    return UIMenu(children: actions)
}
```

## See Also

### Managing the edit menu

- [willPresentEditMenuWithAnimator:](willpresenteditmenu%28animator_%29.md): Tells the object when the system is about to present an edit menu with an animator.
- [willDismissEditMenuWithAnimator:](willdismisseditmenu%28animator_%29.md): Tells the object when the system is about to dismiss an edit menu with an animator.
