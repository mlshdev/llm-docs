> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuactionprovider](https://developer.apple.com/documentation/uikit/uicontextmenuactionprovider)

# UIContextMenuActionProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns an action-based contextual menu, optionally incorporating the system-suggested actions.

## Declaration

```swift
typealias UIContextMenuActionProvider = ([UIMenuElement]) -> UIMenu?
```

## Parameters

- `suggestedActions`: Suggested actions for you to include in your menu. UIKit collects these actions from responders in the current responder chain. You are not required to include the actions in your menu.

<a id="return-value"></a>

## Return Value

The menu object containing the actions for the user to select.

<a id="Discussion"></a>

## Discussion

Use this handler to create [UIAction](uiaction.md) objects representing the actions the user may choose from your menu. To organize groups of actions hierarchically, create a [UIMenu](uimenu.md) object to represent a submenu and add nested actions to it. Finally, build your top-level [UIMenu](uimenu.md) object from the actions and submenus you created, and return that menu object from your handler.

## See Also

### Creating the menu configuration object

- [init(identifier:previewProvider:actionProvider:)](uicontextmenuconfiguration/init%28identifier_previewprovider_actionprovider_%29.md): Creates a menu configuration object with the specified action and preview providers.
- [UIContextMenuContentPreviewProvider](uicontextmenucontentpreviewprovider.md): Returns the custom view controller to use when previewing your content.

# UIContextMenuActionProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns an action-based contextual menu, optionally incorporating the system-suggested actions.

## Declaration

```objectivec
typedef UIMenu *(^)(NSArray<UIMenuElement *> *) UIContextMenuActionProvider;
```

## Parameters

- `suggestedActions`: Suggested actions for you to include in your menu. UIKit collects these actions from responders in the current responder chain. You are not required to include the actions in your menu.

<a id="return-value"></a>

## Return Value

The menu object containing the actions for the user to select.

<a id="Discussion"></a>

## Discussion

Use this handler to create [UIAction](uiaction.md) objects representing the actions the user may choose from your menu. To organize groups of actions hierarchically, create a [UIMenu](uimenu.md) object to represent a submenu and add nested actions to it. Finally, build your top-level [UIMenu](uimenu.md) object from the actions and submenus you created, and return that menu object from your handler.

## See Also

### Creating the menu configuration object

- [configurationWithIdentifier:previewProvider:actionProvider:](uicontextmenuconfiguration/configurationwithidentifier_previewprovider_actionprovider_.md): Creates a menu configuration object with the specified action and preview providers.
- [UIContextMenuContentPreviewProvider](uicontextmenucontentpreviewprovider.md): Returns the custom view controller to use when previewing your content.
