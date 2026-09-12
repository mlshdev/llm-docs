> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/view-coordination](https://developer.apple.com/documentation/browserenginekit/view-coordination)

# View and input coordination (Swift)

**Framework:** BrowserEngineKit  
**Kind:** API Collection

Display content in the browser’s UI that an extension renders.

<a id="Overview"></a>

## Overview

Manage the appearance of visual content across your browser app’s main process and its extensions. Your app controls the visibility of views and layers, ensures responsive page rendering, and dynamically adjusts to changes in input device capabilities, which can affect how web content displays.

<a id="Adjust-user-interface-based-on-hover-state"></a>

## Adjust user interface based on hover state

Add support for multiple input methods that a person might use with your browser app. For example, someone might connect or disconnect a mouse or trackpad: web pages use CSS media queries like `@media (hover: hover)` to adapt their interface based on hover support of the primary input device.

To support hover state changes, use the [GCMouse](https://developer.apple.com/documentation/gamecontroller/gcmouse) class of the [Game Controller](https://developer.apple.com/documentation/gamecontroller) framework. Listen for [GCMouseDidConnectNotification](https://developer.apple.com/documentation/gamecontroller/gcmousedidconnectnotification) and [GCMouseDidDisconnectNotification](https://developer.apple.com/documentation/gamecontroller/gcmousediddisconnectnotification) to detect when a mouse or trackpad connects or disconnects. Then, implement an internal hover state in your browser app that updates when these notifications occur, and re-evaluate CSS `@media (hover)` queries in the rendered content.

## Topics

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [LayerHierarchy](layerhierarchy.md): An object that holds a reference to layers rendered in another process’s view.
- [LayerHierarchyHostingView](layerhierarchyhostingview.md): A view that hosts a layer hierarchy you manage in another process.
- [LayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.
- [LayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.

### Visibility propagation

- [Propagating view visibility information to extension processes](propagating-view-visibility-information-to-browser-extensions.md): Register the extensions that contribute to preparing your browser app’s UI.
- [createVisibilityPropagationInteraction()](renderingprocess/createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the rendering process.
- [createVisibilityPropagationInteraction()](webcontentprocess/createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the web content process.

## See Also

### Web content

- [Text interaction](text-interaction.md): Integrate your web browser engine asynchronously with the text system.
- [BEWebAppManifest](bewebappmanifest.md): An object that represents a web app manifest.

# View and input coordination (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** API Collection

Display content in the browser’s UI that an extension renders.

<a id="Overview"></a>

## Overview

Manage the appearance of visual content across your browser app’s main process and its extensions. Your app controls the visibility of views and layers, ensures responsive page rendering, and dynamically adjusts to changes in input device capabilities, which can affect how web content displays.

<a id="Adjust-user-interface-based-on-hover-state"></a>

## Adjust user interface based on hover state

Add support for multiple input methods that a person might use with your browser app. For example, someone might connect or disconnect a mouse or trackpad: web pages use CSS media queries like `@media (hover: hover)` to adapt their interface based on hover support of the primary input device.

To support hover state changes, use the [GCMouse](https://developer.apple.com/documentation/gamecontroller/gcmouse) class of the [Game Controller](https://developer.apple.com/documentation/gamecontroller) framework. Listen for [GCMouseDidConnectNotification](https://developer.apple.com/documentation/gamecontroller/gcmousedidconnectnotification) and [GCMouseDidDisconnectNotification](https://developer.apple.com/documentation/gamecontroller/gcmousediddisconnectnotification) to detect when a mouse or trackpad connects or disconnects. Then, implement an internal hover state in your browser app that updates when these notifications occur, and re-evaluate CSS `@media (hover)` queries in the rendered content.

## Topics

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [BELayerHierarchy](layerhierarchy.md): An object that holds a reference to layers rendered in another process’s view.
- [BELayerHierarchyHostingView](layerhierarchyhostingview.md): A view that hosts a layer hierarchy you manage in another process.
- [BELayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.
- [BELayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.

### Visibility propagation

- [Propagating view visibility information to extension processes](propagating-view-visibility-information-to-browser-extensions.md): Register the extensions that contribute to preparing your browser app’s UI.

## See Also

### Web content

- [Text interaction](text-interaction.md): Integrate your web browser engine asynchronously with the text system.
- [BEWebAppManifest](bewebappmanifest.md): An object that represents a web app manifest.
