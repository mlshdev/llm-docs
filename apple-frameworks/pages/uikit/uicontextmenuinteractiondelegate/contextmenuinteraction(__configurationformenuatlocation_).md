> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:configurationformenuatlocation:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:configurationformenuatlocation:))

# contextMenuInteraction(\_:configurationForMenuAtLocation:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns the configuration data to use when previewing the content.

## Declaration

```swift
func contextMenuInteraction(_ interaction: UIContextMenuInteraction, configurationForMenuAtLocation location: CGPoint) -> UIContextMenuConfiguration?
```

## Parameters

- `interaction`: The context menu interaction object that triggered the request.
- `location`: The location of the content associated with the interaction. The specified point is in the coordinate space of the interaction’s view. Use the content at this location to configure your custom preview and contextual menu.

<a id="return-value"></a>

## Return Value

The configuration object containing the information to use for the preview. If you want to cancel the interaction, return `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, create a [UIContextMenuConfiguration](../uicontextmenuconfiguration.md) object with details for configuring the contextual menu. If you return a default configuration object, UIKit displays a default preview of your existing view without a contextual menu. However, if you return a configuration object with custom handler blocks, UIKit uses your blocks to create the contextual menu and optional custom preview interface. Use those blocks to configure your interface appropriately for the content at `location`.

## See Also

### Providing the preview configuration data

- [UIContextMenuConfiguration](../uicontextmenuconfiguration.md): An object containing the configuration details for the contextual menu.

# contextMenuInteraction:configurationForMenuAtLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Returns the configuration data to use when previewing the content.

## Declaration

```objectivec
- (UIContextMenuConfiguration *) contextMenuInteraction:(UIContextMenuInteraction *) interaction configurationForMenuAtLocation:(CGPoint) location;
```

## Parameters

- `interaction`: The context menu interaction object that triggered the request.
- `location`: The location of the content associated with the interaction. The specified point is in the coordinate space of the interaction’s view. Use the content at this location to configure your custom preview and contextual menu.

<a id="return-value"></a>

## Return Value

The configuration object containing the information to use for the preview. If you want to cancel the interaction, return `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, create a [UIContextMenuConfiguration](../uicontextmenuconfiguration.md) object with details for configuring the contextual menu. If you return a default configuration object, UIKit displays a default preview of your existing view without a contextual menu. However, if you return a configuration object with custom handler blocks, UIKit uses your blocks to create the contextual menu and optional custom preview interface. Use those blocks to configure your interface appropriately for the content at `location`.

## See Also

### Providing the preview configuration data

- [UIContextMenuConfiguration](../uicontextmenuconfiguration.md): An object containing the configuration details for the contextual menu.
