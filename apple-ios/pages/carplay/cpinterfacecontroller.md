> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller

# CPInterfaceController (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.

## Declaration

```swift
@MainActor class CPInterfaceController
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

When someone launches your app, CarPlay instantiates your app’s main scene so you can display your interface. Instead of creating your interface from views, you create it from system-provided templates, which specify how to lay out and present your content on the vehicle’s display. To display the templates you create, call the methods of the `CPInterfaceController` object your scene provides. The interface controller handles the presentation of your templates on the vehicle display, adjusting your content as needed to fit on different display sizes.

You don’t create a `CPInterfaceController` object directly. After creating your app’s main scene, the system delivers the interface controller to the scene’s delegate object. You can also retrieve the interface controller from the scene’s [interfaceController](cptemplateapplicationscene/interfacecontroller.md) property at other times. Use only the provided interface controller to display the content for your app’s main scene.

CarPlay apps use a navigation-style interface, which uses a stack-based approach to manage your content. At startup, call the [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) method to install the template with your app’s main content. This template sits at the bottom of the stack and is the starting point for navigating your content. To navigate one level deeper into your content, call the interface controller’s [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push a new template onto the stack and display its content. To return to the previous template, call the [popTemplate(animated:completion:)](cpinterfacecontroller/poptemplate%28animated_completion_%29.md) method to remove the top-most template from the stack. You can pop any template off the stack except the root template.

In addition to displaying content in your app’s navigation interface, you can present specific templates modally or as an overlay. You can present action sheet, alert, and voice-control templates modally. You can also present the voice-control template using an overlay.

> **Note**

> In navigation apps, dashboard and instrument cluster scenes present their content using [CPDashboardController](cpdashboardcontroller.md) or [CPInstrumentClusterController](cpinstrumentclustercontroller.md) types instead of `CPInterfaceControllerDelegate`.

## Topics

### Installing and removing templates

- [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md): Installs the root template of your app’s navigation hierarchy.
- [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplate(animated:completion:)](cpinterfacecontroller/poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplate(animated:completion:)](cpinterfacecontroller/poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.
- [pop(to:animated:completion:)](cpinterfacecontroller/pop%28to_animated_completion_%29.md): Removes templates from your app’s navigation hierarchy until the specified template becomes visible.

### Responding to interface changes

- [delegate](cpinterfacecontroller/delegate.md): A custom object you use to respond when templates appear and disappear.
- [CPInterfaceControllerDelegate](cpinterfacecontrollerdelegate.md): The methods you implement to observe the addition and removal of templates in your app’s interface.

### Configuring interface-related details

- [prefersDarkUserInterfaceStyle](cpinterfacecontroller/prefersdarkuserinterfacestyle.md): A Boolean value that indicates whether you prefer Dark Mode for your interface.
- [carTraitCollection](cpinterfacecontroller/cartraitcollection.md): The trait collection of the vehicle’s primary screen.

### Getting the current templates

- [rootTemplate](cpinterfacecontroller/roottemplate.md): The root template in the navigation hierarchy.
- [topTemplate](cpinterfacecontroller/toptemplate.md): The top-most template in your app’s navigation hierarchy.
- [templates](cpinterfacecontroller/templates.md): The templates currently in your app’s navigation hierarchy.

### Presenting a template modally

- [presentTemplate(\_:animated:completion:)](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md): Presents the template modally over your app’s navigation interface.
- [dismissTemplate(animated:completion:)](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md): Dismisses the template you previously presented modally.
- [presentedTemplate](cpinterfacecontroller/presentedtemplate.md): The current modally-presented template.

### Showing a template as an overlay

- [showOverlayTemplate(\_:animated:completion:)](cpinterfacecontroller/showoverlaytemplate%28__animated_completion_%29.md): Displays a voice-control template as an overlay on top of your app’s current content.
- [hideOverlayTemplate(animated:completion:)](cpinterfacecontroller/hideoverlaytemplate%28animated_completion_%29.md): Dismisses the template previously displayed as an overlay.

### Deprecated

- [dismissTemplate(animated:)](cpinterfacecontroller/dismisstemplate%28animated_%29.md): Deprecated. Dismiss the current modally-presented template, optionally animating the dismissal.
- [pop(to:animated:)](cpinterfacecontroller/pop%28to_animated_%29.md): Deprecated. Pop back to a specified template.
- [popTemplate(animated:)](cpinterfacecontroller/poptemplate%28animated_%29.md): Deprecated. Pop back a single level in the template navigation hierarchy.
- [popToRootTemplate(animated:)](cpinterfacecontroller/poptoroottemplate%28animated_%29.md): Deprecated. Pop back to the first template in the template navigation hierarchy.
- [presentTemplate(\_:animated:)](cpinterfacecontroller/presenttemplate%28__animated_%29.md): Deprecated. Present a template modally over the navigation hierarchy. Only one template may be presented at a time.
- [pushTemplate(\_:animated:)](cpinterfacecontroller/pushtemplate%28__animated_%29.md): Deprecated. Push a new template onto the template navigation hierarchy, showing it immediately.
- [setRootTemplate(\_:animated:)](cpinterfacecontroller/setroottemplate%28__animated_%29.md): Deprecated. Set the root template. If no existing templates exist in the template navigation hierarchy, the animated flag will be ignored. If there is an existing template navigation hierarchy, the existing stack will be replaced by the new root template.

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

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.

# CPInterfaceController (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.

## Declaration

```objectivec
@interface CPInterfaceController : NSObject
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

When someone launches your app, CarPlay instantiates your app’s main scene so you can display your interface. Instead of creating your interface from views, you create it from system-provided templates, which specify how to lay out and present your content on the vehicle’s display. To display the templates you create, call the methods of the `CPInterfaceController` object your scene provides. The interface controller handles the presentation of your templates on the vehicle display, adjusting your content as needed to fit on different display sizes.

You don’t create a `CPInterfaceController` object directly. After creating your app’s main scene, the system delivers the interface controller to the scene’s delegate object. You can also retrieve the interface controller from the scene’s [interfaceController](cptemplateapplicationscene/interfacecontroller.md) property at other times. Use only the provided interface controller to display the content for your app’s main scene.

CarPlay apps use a navigation-style interface, which uses a stack-based approach to manage your content. At startup, call the [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) method to install the template with your app’s main content. This template sits at the bottom of the stack and is the starting point for navigating your content. To navigate one level deeper into your content, call the interface controller’s [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md) method to push a new template onto the stack and display its content. To return to the previous template, call the [popTemplateAnimated:completion:](cpinterfacecontroller/poptemplate%28animated_completion_%29.md) method to remove the top-most template from the stack. You can pop any template off the stack except the root template.

In addition to displaying content in your app’s navigation interface, you can present specific templates modally or as an overlay. You can present action sheet, alert, and voice-control templates modally. You can also present the voice-control template using an overlay.

> **Note**

> In navigation apps, dashboard and instrument cluster scenes present their content using [CPDashboardController](cpdashboardcontroller.md) or [CPInstrumentClusterController](cpinstrumentclustercontroller.md) types instead of `CPInterfaceControllerDelegate`.

## Topics

### Installing and removing templates

- [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md): Installs the root template of your app’s navigation hierarchy.
- [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplateAnimated:completion:](cpinterfacecontroller/poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplateAnimated:completion:](cpinterfacecontroller/poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.
- [popToTemplate:animated:completion:](cpinterfacecontroller/pop%28to_animated_completion_%29.md): Removes templates from your app’s navigation hierarchy until the specified template becomes visible.

### Responding to interface changes

- [delegate](cpinterfacecontroller/delegate.md): A custom object you use to respond when templates appear and disappear.
- [CPInterfaceControllerDelegate](cpinterfacecontrollerdelegate.md): The methods you implement to observe the addition and removal of templates in your app’s interface.

### Configuring interface-related details

- [prefersDarkUserInterfaceStyle](cpinterfacecontroller/prefersdarkuserinterfacestyle.md): A Boolean value that indicates whether you prefer Dark Mode for your interface.
- [carTraitCollection](cpinterfacecontroller/cartraitcollection.md): The trait collection of the vehicle’s primary screen.

### Getting the current templates

- [rootTemplate](cpinterfacecontroller/roottemplate.md): The root template in the navigation hierarchy.
- [topTemplate](cpinterfacecontroller/toptemplate.md): The top-most template in your app’s navigation hierarchy.
- [templates](cpinterfacecontroller/templates.md): The templates currently in your app’s navigation hierarchy.

### Presenting a template modally

- [presentTemplate:animated:completion:](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md): Presents the template modally over your app’s navigation interface.
- [dismissTemplateAnimated:completion:](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md): Dismisses the template you previously presented modally.
- [presentedTemplate](cpinterfacecontroller/presentedtemplate.md): The current modally-presented template.

### Showing a template as an overlay

- [showOverlayTemplate:animated:completion:](cpinterfacecontroller/showoverlaytemplate%28__animated_completion_%29.md): Displays a voice-control template as an overlay on top of your app’s current content.
- [hideOverlayTemplateAnimated:completion:](cpinterfacecontroller/hideoverlaytemplate%28animated_completion_%29.md): Dismisses the template previously displayed as an overlay.

### Deprecated

- [dismissTemplateAnimated:](cpinterfacecontroller/dismisstemplate%28animated_%29.md): Deprecated. Dismiss the current modally-presented template, optionally animating the dismissal.
- [popToTemplate:animated:](cpinterfacecontroller/pop%28to_animated_%29.md): Deprecated. Pop back to a specified template.
- [popTemplateAnimated:](cpinterfacecontroller/poptemplate%28animated_%29.md): Deprecated. Pop back a single level in the template navigation hierarchy.
- [popToRootTemplateAnimated:](cpinterfacecontroller/poptoroottemplate%28animated_%29.md): Deprecated. Pop back to the first template in the template navigation hierarchy.
- [presentTemplate:animated:](cpinterfacecontroller/presenttemplate%28__animated_%29.md): Deprecated. Present a template modally over the navigation hierarchy. Only one template may be presented at a time.
- [pushTemplate:animated:](cpinterfacecontroller/pushtemplate%28__animated_%29.md): Deprecated. Push a new template onto the template navigation hierarchy, showing it immediately.
- [setRootTemplate:animated:](cpinterfacecontroller/setroottemplate%28__animated_%29.md): Deprecated. Set the root template. If no existing templates exist in the template navigation hierarchy, the animated flag will be ignored. If there is an existing template navigation hierarchy, the existing stack will be replaced by the new root template.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.
