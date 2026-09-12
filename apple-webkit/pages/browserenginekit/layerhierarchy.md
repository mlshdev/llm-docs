> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchy](https://developer.apple.com/documentation/browserenginekit/layerhierarchy)

# LayerHierarchy (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An object that holds a reference to layers rendered in another process’s view.

## Declaration

```swift
@MainActor class LayerHierarchy
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)
- [Propagating view visibility information to extension processes](propagating-view-visibility-information-to-browser-extensions.md)

<a id="overview"></a>

## Overview

This class holds another process’s view to synchronize UI updates across multiple processes in your browser app.

To use this class, create an instance in your browser app’s rendering extension and set its [layer](layerhierarchy/layer.md) to a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) that renders content. You render the content in your rendering extension then access it in the browser app’s process for display.

Access the layer hierarchy’s [handle](layerhierarchy/handle.md), send it to the browser app, and add the handle to a [LayerHierarchyHostingView](layerhierarchyhostingview.md). Then, use the [LayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md) class to synchronize updates in the view and the layer.

For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

## Topics

### Creating and invalidating a layer hierarchy

- [init()](layerhierarchy/init%28%29.md): Initializes a layer hierarchy.
- [invalidate()](layerhierarchy/invalidate%28%29.md): Invalidates a layer hierarchy.

### Setting the layer

- [layer](layerhierarchy/layer.md): The layer represented by this layer hierarchy.

### Getting a handle

- [handle](layerhierarchy/handle.md): A reference to the layer hierarchy that you add to the hosting view.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [LayerHierarchyHostingView](layerhierarchyhostingview.md): A view that hosts a layer hierarchy you manage in another process.
- [LayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.
- [LayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.

# BELayerHierarchy (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An object that holds a reference to layers rendered in another process’s view.

## Declaration

```objectivec
@interface BELayerHierarchy : NSObject
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)
- [Propagating view visibility information to extension processes](propagating-view-visibility-information-to-browser-extensions.md)

<a id="overview"></a>

## Overview

This class holds another process’s view to synchronize UI updates across multiple processes in your browser app.

To use this class, create an instance in your browser app’s rendering extension and set its [layer](layerhierarchy/layer.md) to a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) that renders content. You render the content in your rendering extension then access it in the browser app’s process for display.

Access the layer hierarchy’s [handle](layerhierarchy/handle.md), send it to the browser app, and add the handle to a [BELayerHierarchyHostingView](layerhierarchyhostingview.md). Then, use the [BELayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md) class to synchronize updates in the view and the layer.

For more information, see [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md).

## Topics

### Creating and invalidating a layer hierarchy

- [layerHierarchyWithError:](layerhierarchy/init%28%29.md): Initializes a layer hierarchy.
- [invalidate](layerhierarchy/invalidate%28%29.md): Invalidates a layer hierarchy.

### Setting the layer

- [layer](layerhierarchy/layer.md): The layer represented by this layer hierarchy.

### Getting a handle

- [handle](layerhierarchy/handle.md): A reference to the layer hierarchy that you add to the hosting view.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [BELayerHierarchyHostingView](layerhierarchyhostingview.md): A view that hosts a layer hierarchy you manage in another process.
- [BELayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.
- [BELayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.
