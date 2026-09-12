> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingview](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingview)

# LayerHierarchyHostingView (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A view that hosts a layer hierarchy you manage in another process.

## Declaration

```swift
@MainActor class LayerHierarchyHostingView
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)
- [Propagating view visibility information to extension processes](propagating-view-visibility-information-to-browser-extensions.md)

<a id="overview"></a>

## Overview

To connect a view hierarchy in another process, create an instance of this class and set its [handle](layerhierarchyhostingview/handle.md) to a [LayerHierarchyHandle](layerhierarchyhandle.md) from the other process.

> **Important**

> If you invalidate the associated layer hierarchy, stop displaying the view.

## Topics

### Identifying remote layer hierarchy

- [handle](layerhierarchyhostingview/handle.md): A reference to a layer hierarchy in another process.

## Relationships

### Inherits From

- [UIView](https://developer.apple.com/documentation/uikit/uiview)

### Conforms To

- [CALayerDelegate](https://developer.apple.com/documentation/quartzcore/calayerdelegate)
- [CLBodyIdentifiable](https://developer.apple.com/documentation/corelocation/clbodyidentifiable)
- [CMBodyIdentifiable](https://developer.apple.com/documentation/coremotion/cmbodyidentifiable)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearance](https://developer.apple.com/documentation/uikit/uiappearance)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UICoordinateSpace](https://developer.apple.com/documentation/uikit/uicoordinatespace)
- [UIDynamicItem](https://developer.apple.com/documentation/uikit/uidynamicitem)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIFocusItem](https://developer.apple.com/documentation/uikit/uifocusitem)
- [UIFocusItemContainer](https://developer.apple.com/documentation/uikit/uifocusitemcontainer)
- [UILargeContentViewerItem](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [LayerHierarchy](layerhierarchy.md): An object that holds a reference to layers rendered in another process’s view.
- [LayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.
- [LayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.

# BELayerHierarchyHostingView (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A view that hosts a layer hierarchy you manage in another process.

## Declaration

```objectivec
@interface BELayerHierarchyHostingView : UIView
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md)
- [Propagating view visibility information to extension processes](propagating-view-visibility-information-to-browser-extensions.md)

<a id="overview"></a>

## Overview

To connect a view hierarchy in another process, create an instance of this class and set its [handle](layerhierarchyhostingview/handle.md) to a [BELayerHierarchyHandle](layerhierarchyhandle.md) from the other process.

> **Important**

> If you invalidate the associated layer hierarchy, stop displaying the view.

## Topics

### Identifying remote layer hierarchy

- [handle](layerhierarchyhostingview/handle.md): A reference to a layer hierarchy in another process.

## Relationships

### Inherits From

- [UIView](https://developer.apple.com/documentation/uikit/uiview)

## See Also

### Layer hosting

- [Hosting browser view layers in the rendering extension](hosting-browser-view-layers-in-the-rendering-extension.md): Coordinate view-hierarchy and layer-hierarchy changes between processes.
- [BELayerHierarchy](layerhierarchy.md): An object that holds a reference to layers rendered in another process’s view.
- [BELayerHierarchyHostingTransactionCoordinator](layerhierarchyhostingtransactioncoordinator.md): A class that synchronizes updates to views and layers in different processes.
- [BELayerHierarchyHandle](layerhierarchyhandle.md): A reference to a layer hierarchy that your app shares between processes.
