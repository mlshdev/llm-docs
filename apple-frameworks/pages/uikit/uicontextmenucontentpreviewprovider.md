> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenucontentpreviewprovider](https://developer.apple.com/documentation/uikit/uicontextmenucontentpreviewprovider)

# UIContextMenuContentPreviewProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the custom view controller to use when previewing your content.

## Declaration

```swift
typealias UIContextMenuContentPreviewProvider = () -> UIViewController?
```

<a id="return-value"></a>

## Return Value

The view controller to display in place of the system’s standard view controller. If you want UIKit to present your content using a default view controller, return `nil`.

<a id="Discussion"></a>

## Discussion

Use this handler to load or create your custom view controller, configure it with your content, and return it to UIKit.

## See Also

### Creating the menu configuration object

- [init(identifier:previewProvider:actionProvider:)](uicontextmenuconfiguration/init%28identifier_previewprovider_actionprovider_%29.md): Creates a menu configuration object with the specified action and preview providers.
- [UIContextMenuActionProvider](uicontextmenuactionprovider.md): Returns an action-based contextual menu, optionally incorporating the system-suggested actions.

# UIContextMenuContentPreviewProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the custom view controller to use when previewing your content.

## Declaration

```objectivec
typedef UIViewController *(^)(void) UIContextMenuContentPreviewProvider;
```

<a id="return-value"></a>

## Return Value

The view controller to display in place of the system’s standard view controller. If you want UIKit to present your content using a default view controller, return `nil`.

<a id="Discussion"></a>

## Discussion

Use this handler to load or create your custom view controller, configure it with your content, and return it to UIKit.

## See Also

### Creating the menu configuration object

- [configurationWithIdentifier:previewProvider:actionProvider:](uicontextmenuconfiguration/configurationwithidentifier_previewprovider_actionprovider_.md): Creates a menu configuration object with the specified action and preview providers.
- [UIContextMenuActionProvider](uicontextmenuactionprovider.md): Returns an action-based contextual menu, optionally incorporating the system-suggested actions.
