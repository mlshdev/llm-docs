> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpwindow](https://developer.apple.com/documentation/carplay/cpwindow)

# CPWindow (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A window that displays its content on the CarPlay screen.

## Declaration

```swift
class CPWindow
```

<a id="overview"></a>

## Overview

Navigation apps use a window to render their maps, and CarPlay provides one via the scene delegate’s [templateApplicationScene(\_:didConnect:to:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method. For all other categories of apps, you use templates exclusively to draw your user interface, and your scene delegate must implement [templateApplicationScene(\_:didConnect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) instead.

When CarPlay launches your navigation app, instantiate your map-drawing view controller and assign it to the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property. This becomes the base CarPlay view and is for drawing maps exclusively. You use templates for all other user interface elements.

The base view of a navigation app does not receive tap or drag events.

## Topics

### Accessing the Scene

- [templateApplicationScene](cpwindow/templateapplicationscene.md): The application scene that contains the window.

### Layout

- [mapButtonSafeAreaLayoutGuide](cpwindow/mapbuttonsafearealayoutguide.md): The layout guide that represents the portion of the map template that map buttons don’t obscure.

## Relationships

### Inherits From

- [UIWindow](https://developer.apple.com/documentation/uikit/uiwindow)

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
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

### Accessing the Window

- [carWindow](cptemplateapplicationscene/carwindow.md): The window that belongs to the scene.

# CPWindow (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A window that displays its content on the CarPlay screen.

## Declaration

```objectivec
@interface CPWindow : UIWindow
```

<a id="overview"></a>

## Overview

Navigation apps use a window to render their maps, and CarPlay provides one via the scene delegate’s [templateApplicationScene:didConnectInterfaceController:toWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method. For all other categories of apps, you use templates exclusively to draw your user interface, and your scene delegate must implement [templateApplicationScene:didConnectInterfaceController:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) instead.

When CarPlay launches your navigation app, instantiate your map-drawing view controller and assign it to the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property. This becomes the base CarPlay view and is for drawing maps exclusively. You use templates for all other user interface elements.

The base view of a navigation app does not receive tap or drag events.

## Topics

### Accessing the Scene

- [templateApplicationScene](cpwindow/templateapplicationscene.md): The application scene that contains the window.

### Layout

- [mapButtonSafeAreaLayoutGuide](cpwindow/mapbuttonsafearealayoutguide.md): The layout guide that represents the portion of the map template that map buttons don’t obscure.

## Relationships

### Inherits From

- [UIWindow](https://developer.apple.com/documentation/uikit/uiwindow)

## See Also

### Accessing the Window

- [carWindow](cptemplateapplicationscene/carwindow.md): The window that belongs to the scene.
