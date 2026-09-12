> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/buildmenu(with:)](https://developer.apple.com/documentation/uikit/uiresponder/buildmenu(with:))

# buildMenu(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the receiving responder to add and remove items from a menu system.

## Declaration

```swift
func buildMenu(with builder: any UIMenuBuilder)
```

## Parameters

- `builder`: An object that you use to modify a menu system for your app.

<a id="Discussion"></a>

## Discussion

Override this method in your app delegate or view controller to receive a [UIMenuBuilder](../uimenubuilder.md) object. Use the builder to add and remove [UIMenuElement](../uimenuelement.md) objects such as [UIMenu](../uimenu.md), [UIAction](../uiaction.md), and [UICommand](../uicommand.md) from your app’s menu bar or context menus.

> **Note**

>  The menu bar is available in Mac apps built with Mac Catalyst.

Where you override this method determines the menu system that the builder updates. To add and remove items from the menu bar using the [main](../uimenusystem/main.md) menu system, override [buildMenu(with:)](buildmenu%28with_%29.md) in your app delegate. To build a [context](../uimenusystem/context.md) menu using the context system, override this method in your view controller.

## See Also

### Building and validating commands

- [validate(\_:)](validate%28__%29.md): Asks the receiving responder to validate the command.
- [canPerformAction(\_:withSender:)](canperformaction%28__withsender_%29.md): Requests the receiving responder to enable or disable the specified command in the user interface.
- [target(forAction:withSender:)](target%28foraction_withsender_%29.md): Returns the target object that responds to an action.

# buildMenuWithBuilder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the receiving responder to add and remove items from a menu system.

## Declaration

```objectivec
- (void) buildMenuWithBuilder:(id<UIMenuBuilder>) builder;
```

## Parameters

- `builder`: An object that you use to modify a menu system for your app.

<a id="Discussion"></a>

## Discussion

Override this method in your app delegate or view controller to receive a [UIMenuBuilder](../uimenubuilder.md) object. Use the builder to add and remove [UIMenuElement](../uimenuelement.md) objects such as [UIMenu](../uimenu.md), [UIAction](../uiaction.md), and [UICommand](../uicommand.md) from your app’s menu bar or context menus.

> **Note**

>  The menu bar is available in Mac apps built with Mac Catalyst.

Where you override this method determines the menu system that the builder updates. To add and remove items from the menu bar using the [mainSystem](../uimenusystem/main.md) menu system, override [buildMenuWithBuilder:](buildmenu%28with_%29.md) in your app delegate. To build a [contextSystem](../uimenusystem/context.md) menu using the context system, override this method in your view controller.

## See Also

### Building and validating commands

- [validateCommand:](validate%28__%29.md): Asks the receiving responder to validate the command.
- [canPerformAction:withSender:](canperformaction%28__withsender_%29.md): Requests the receiving responder to enable or disable the specified command in the user interface.
- [targetForAction:withSender:](target%28foraction_withsender_%29.md): Returns the target object that responds to an action.
