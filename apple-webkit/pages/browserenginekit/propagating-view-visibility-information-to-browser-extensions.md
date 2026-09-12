> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/propagating-view-visibility-information-to-browser-extensions](https://developer.apple.com/documentation/browserenginekit/propagating-view-visibility-information-to-browser-extensions)

# Propagating view visibility information to extension processes (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Article

Register the extensions that contribute to preparing your browser app’s UI.

<a id="Overview"></a>

## Overview

The system contains security checks to ensure that only the apps with which the person is interacting may draw to the screen. In a browser with extension processes, you need to indicate whether extensions participate in preparing and rendering content for a given view. Otherwise, the system might restrict your extensions’ access to various system resources, which might result in your browser rendering incorrectly, experiencing poor performance, or crashing.

If your browser’s extension renders content in a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) or hierarchy of layers, the system automatically propagates visibility information. Wrap the root `CALayer` in a [LayerHierarchy](layerhierarchy.md), and send a handle to the browser app to host in a [LayerHierarchyHostingView](layerhierarchyhostingview.md). For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

<a id="Add-a-visibility-propagation-interaction-to-the-view"></a>

## Add a visibility propagation interaction to the view

To indicate that a web content extension or the rendering extension participates in displaying a particular view that doesn’t use a `CALayer`, your browser app requests a visibility propagation interaction from that extension’s process and attaches it to the view. For example, to use a visibility propagation interaction from the rendering extension:

```swift

var view: UIView

// Create and configure your view.

let visibility = renderingProcess.createVisibilityPropagationInteraction()
view.addInteraction(visibility)
```

When the rendering extension is no longer participating in the view, call the view’s [removeInteraction(\_:)](https://developer.apple.com/documentation/uikit/uiview/removeinteraction%28_:%29) method to remove the visibility propagation interaction.

If your extensions participate in displaying multiple views, create a separate visibility propagation interaction for each view. Don’t reuse the same interaction across multiple views.

<a id="Display-content-picture-in-picture"></a>

### Display content picture-in-picture

When someone displays content from your browser app picture-in-picture, create a separate view to present the picture-in-picture content, distinct from the view that displays the content in your browser app. Create additional visibility propagation interactions for the rendering extension and web content extension, if they prepare the picture-in-picture content, and add those interactions to the view.

## See Also

### Visibility propagation

- [createVisibilityPropagationInteraction()](renderingprocess/createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the rendering process.
- [createVisibilityPropagationInteraction()](webcontentprocess/createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the web content process.

# Propagating view visibility information to extension processes (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Article

Register the extensions that contribute to preparing your browser app’s UI.

<a id="Overview"></a>

## Overview

The system contains security checks to ensure that only the apps with which the person is interacting may draw to the screen. In a browser with extension processes, you need to indicate whether extensions participate in preparing and rendering content for a given view. Otherwise, the system might restrict your extensions’ access to various system resources, which might result in your browser rendering incorrectly, experiencing poor performance, or crashing.

If your browser’s extension renders content in a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) or hierarchy of layers, the system automatically propagates visibility information. Wrap the root `CALayer` in a [BELayerHierarchy](layerhierarchy.md), and send a handle to the browser app to host in a [BELayerHierarchyHostingView](layerhierarchyhostingview.md). For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

<a id="Add-a-visibility-propagation-interaction-to-the-view"></a>

## Add a visibility propagation interaction to the view

To indicate that a web content extension or the rendering extension participates in displaying a particular view that doesn’t use a `CALayer`, your browser app requests a visibility propagation interaction from that extension’s process and attaches it to the view. For example, to use a visibility propagation interaction from the rendering extension:

```swift

var view: UIView

// Create and configure your view.

let visibility = renderingProcess.createVisibilityPropagationInteraction()
view.addInteraction(visibility)
```

When the rendering extension is no longer participating in the view, call the view’s [removeInteraction:](https://developer.apple.com/documentation/uikit/uiview/removeinteraction%28_:%29) method to remove the visibility propagation interaction.

If your extensions participate in displaying multiple views, create a separate visibility propagation interaction for each view. Don’t reuse the same interaction across multiple views.

<a id="Display-content-picture-in-picture"></a>

### Display content picture-in-picture

When someone displays content from your browser app picture-in-picture, create a separate view to present the picture-in-picture content, distinct from the view that displays the content in your browser app. Create additional visibility propagation interactions for the rendering extension and web content extension, if they prepare the picture-in-picture content, and add those interactions to the view.
