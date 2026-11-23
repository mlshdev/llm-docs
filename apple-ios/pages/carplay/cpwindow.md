> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpwindow

# CPWindow (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A type that navigation apps use to present their map content.

## Declaration

```swift
class CPWindow
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

The `CPWindow` type provides navigation apps with the environment for displaying their map imagery. When implementing a navigation app, fetch this type and assign a view controller with your map content to the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property. For the rest of your navigation app’s content, present templates using the [CPInterfaceController](cpinterfacecontroller.md) object of your app’s main scene. If you’re not implementing a navigation app, don’t use this type at all.

You don’t create `CPWindow` objects directly. When CarPlay creates the scene for your navigation app, it creates a window object and delivers it to the [templateApplicationScene(\_:didConnect:to:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method of your scene delegate. In that method, configure a view controller with your map content and assign it as the window’s root view controller. The window provides a layout guide for its *safe area*, which you use to ensure important content remains visible. If you need to change your content, you can access the window from the scene’s [carWindow](cptemplateapplicationscene/carwindow.md) property.

CarPlay doesn’t deliver tap or drag events to the view controller you associate with a `CPWindow` object. All interactions with your map content occur through the [CPMapTemplate](cpmaptemplate.md) type you add as the root template of your app’s interface. When interactions occur, the map template reports them to its delegate object. Implement a custom type that adopts the [CPMapTemplateDelegate](cpmaptemplatedelegate.md) protocol to receive the data you need to update your view controller’s content.

## Topics

### Getting the CarPlay scene

- [templateApplicationScene](cpwindow/templateapplicationscene.md): The scene associated with the window.

### Getting the layout guide

- [mapButtonSafeAreaLayoutGuide](cpwindow/mapbuttonsafearealayoutguide.md): A layout guide that represents the portion of the window unobscured by other content.

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

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.

# CPWindow (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A type that navigation apps use to present their map content.

## Declaration

```objectivec
@interface CPWindow : UIWindow
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

The `CPWindow` type provides navigation apps with the environment for displaying their map imagery. When implementing a navigation app, fetch this type and assign a view controller with your map content to the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property. For the rest of your navigation app’s content, present templates using the [CPInterfaceController](cpinterfacecontroller.md) object of your app’s main scene. If you’re not implementing a navigation app, don’t use this type at all.

You don’t create `CPWindow` objects directly. When CarPlay creates the scene for your navigation app, it creates a window object and delivers it to the [templateApplicationScene:didConnectInterfaceController:toWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method of your scene delegate. In that method, configure a view controller with your map content and assign it as the window’s root view controller. The window provides a layout guide for its *safe area*, which you use to ensure important content remains visible. If you need to change your content, you can access the window from the scene’s [carWindow](cptemplateapplicationscene/carwindow.md) property.

CarPlay doesn’t deliver tap or drag events to the view controller you associate with a `CPWindow` object. All interactions with your map content occur through the [CPMapTemplate](cpmaptemplate.md) type you add as the root template of your app’s interface. When interactions occur, the map template reports them to its delegate object. Implement a custom type that adopts the [CPMapTemplateDelegate](cpmaptemplatedelegate.md) protocol to receive the data you need to update your view controller’s content.

## Topics

### Getting the CarPlay scene

- [templateApplicationScene](cpwindow/templateapplicationscene.md): The scene associated with the window.

### Getting the layout guide

- [mapButtonSafeAreaLayoutGuide](cpwindow/mapbuttonsafearealayoutguide.md): A layout guide that represents the portion of the window unobscured by other content.

## Relationships

### Inherits From

- [UIWindow](https://developer.apple.com/documentation/uikit/uiwindow)

## See Also

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.
