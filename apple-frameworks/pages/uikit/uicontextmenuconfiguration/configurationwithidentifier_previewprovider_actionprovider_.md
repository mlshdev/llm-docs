> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuconfiguration/configurationwithidentifier:previewprovider:actionprovider:](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration/configurationwithidentifier:previewprovider:actionprovider:)

# configurationWithIdentifier:previewProvider:actionProvider:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a menu configuration object with the specified action and preview providers.

## Declaration

```objectivec
+ (instancetype) configurationWithIdentifier:(id<NSCopying>) identifier previewProvider:(UIContextMenuContentPreviewProvider) previewProvider actionProvider:(UIContextMenuActionProvider) actionProvider;
```

## Parameters

- `identifier`: A unique identifier for the menu configuration object. If you want this method to generate a unique identifier for you, specify `nil`.
- `previewProvider`: An optional block that returns the custom view controller that you use to preview content. If you specify `nil`, UIKit uses a default preview view controller.
- `actionProvider`: An optional block that provides a contextual menu to display with the preview. If you specify `nil`, UIKit doesn’t display a contextual menu with the previewed content.

<a id="return-value"></a>

## Return Value

A new menu configuration object with the specified provider blocks.

## See Also

### Creating the menu configuration object

- [UIContextMenuContentPreviewProvider](../uicontextmenucontentpreviewprovider.md): Returns the custom view controller to use when previewing your content.
- [UIContextMenuActionProvider](../uicontextmenuactionprovider.md): Returns an action-based contextual menu, optionally incorporating the system-suggested actions.
