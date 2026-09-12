> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller](https://developer.apple.com/documentation/carplay/cpinterfacecontroller)

# CPInterfaceController (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A controller that manages the templates for constructing a scene’s user interface.

## Declaration

```swift
@MainActor class CPInterfaceController
```

<a id="overview"></a>

## Overview

An interface controller manages one or more templates in the navigation hierarchy. You don’t create the interface controller. Instead, CarPlay creates one for you and passes it to the delegate of [CPTemplateApplicationScene](cptemplateapplicationscene.md) when the scene connects.

After receiving the controller, store a reference to it in your app. Then set the root template by calling the [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) method. To display another template in the navigation hierarchy, call [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md), and use [popTemplate(animated:completion:)](cpinterfacecontroller/poptemplate%28animated_completion_%29.md) to remove the top-most template.

You also use the interface controller to display a single template modally. Call [presentTemplate(\_:animated:completion:)](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) to display the modal template, and call [dismissTemplate(animated:completion:)](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md) to dismiss it.

## Topics

### Configuring the Interface Controller

- [delegate](cpinterfacecontroller/delegate.md): An object that serves as the delegate to the interface controller.
- [CPInterfaceControllerDelegate](cpinterfacecontrollerdelegate.md): The interface that an object implements to serve as a delegate to an interface controller.
- [prefersDarkUserInterfaceStyle](cpinterfacecontroller/prefersdarkuserinterfacestyle.md): A Boolean value that determines whether the system draws the user interface in Dark Mode.
- [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.

### Accessing the Trait Collection

- [carTraitCollection](cpinterfacecontroller/cartraitcollection.md): The trait collection of the vehicle’s primary screen.

### Accessing Templates

- [rootTemplate](cpinterfacecontroller/roottemplate.md): The root template in the navigation hierarchy.
- [topTemplate](cpinterfacecontroller/toptemplate.md): The top-most template in the navigation hierarchy.
- [templates](cpinterfacecontroller/templates.md): The contents of the navigation hierarchy.

### Adding and Removing Templates

- [pushTemplate(\_:animated:completion:)](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplate(animated:completion:)](cpinterfacecontroller/poptemplate%28animated_completion_%29.md): Removes the top-most template from the navigation hierarchy.
- [popToRootTemplate(animated:completion:)](cpinterfacecontroller/poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from the navigation hierarchy except the root template.
- [pop(to:animated:completion:)](cpinterfacecontroller/pop%28to_animated_completion_%29.md): Removes each template from the navigation hierarchy until the specified template becomes visible.

### Displaying Templates Modally

- [presentTemplate(\_:animated:completion:)](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md): Presents a template modally.
- [dismissTemplate(animated:completion:)](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md): Dismisses a modal template.
- [presentedTemplate](cpinterfacecontroller/presentedtemplate.md): The interface controller’s current modal template.

### Deprecated

- [Deprecated Symbols](cpinterfacecontroller-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [hideOverlayTemplate(animated:completion:)](cpinterfacecontroller/hideoverlaytemplate%28animated_completion_%29.md): Dismiss the current overlay template, optionally animating the dismissal.
- [showOverlayTemplate(\_:animated:completion:)](cpinterfacecontroller/showoverlaytemplate%28__animated_completion_%29.md): Show a template as an overlay over the current template hierarchy. Only one overlay template may be shown at a time.

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

### Accessing the Interface Controller

- [interfaceController](cptemplateapplicationscene/interfacecontroller.md): The controller that manages the scene’s user interface.

# CPInterfaceController (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A controller that manages the templates for constructing a scene’s user interface.

## Declaration

```objectivec
@interface CPInterfaceController : NSObject
```

<a id="overview"></a>

## Overview

An interface controller manages one or more templates in the navigation hierarchy. You don’t create the interface controller. Instead, CarPlay creates one for you and passes it to the delegate of [CPTemplateApplicationScene](cptemplateapplicationscene.md) when the scene connects.

After receiving the controller, store a reference to it in your app. Then set the root template by calling the [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) method. To display another template in the navigation hierarchy, call [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md), and use [popTemplateAnimated:completion:](cpinterfacecontroller/poptemplate%28animated_completion_%29.md) to remove the top-most template.

You also use the interface controller to display a single template modally. Call [presentTemplate:animated:completion:](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md) to display the modal template, and call [dismissTemplateAnimated:completion:](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md) to dismiss it.

## Topics

### Configuring the Interface Controller

- [delegate](cpinterfacecontroller/delegate.md): An object that serves as the delegate to the interface controller.
- [CPInterfaceControllerDelegate](cpinterfacecontrollerdelegate.md): The interface that an object implements to serve as a delegate to an interface controller.
- [prefersDarkUserInterfaceStyle](cpinterfacecontroller/prefersdarkuserinterfacestyle.md): A Boolean value that determines whether the system draws the user interface in Dark Mode.
- [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md): Sets the root template of the navigation hierarchy.

### Accessing the Trait Collection

- [carTraitCollection](cpinterfacecontroller/cartraitcollection.md): The trait collection of the vehicle’s primary screen.

### Accessing Templates

- [rootTemplate](cpinterfacecontroller/roottemplate.md): The root template in the navigation hierarchy.
- [topTemplate](cpinterfacecontroller/toptemplate.md): The top-most template in the navigation hierarchy.
- [templates](cpinterfacecontroller/templates.md): The contents of the navigation hierarchy.

### Adding and Removing Templates

- [pushTemplate:animated:completion:](cpinterfacecontroller/pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplateAnimated:completion:](cpinterfacecontroller/poptemplate%28animated_completion_%29.md): Removes the top-most template from the navigation hierarchy.
- [popToRootTemplateAnimated:completion:](cpinterfacecontroller/poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from the navigation hierarchy except the root template.
- [popToTemplate:animated:completion:](cpinterfacecontroller/pop%28to_animated_completion_%29.md): Removes each template from the navigation hierarchy until the specified template becomes visible.

### Displaying Templates Modally

- [presentTemplate:animated:completion:](cpinterfacecontroller/presenttemplate%28__animated_completion_%29.md): Presents a template modally.
- [dismissTemplateAnimated:completion:](cpinterfacecontroller/dismisstemplate%28animated_completion_%29.md): Dismisses a modal template.
- [presentedTemplate](cpinterfacecontroller/presentedtemplate.md): The interface controller’s current modal template.

### Deprecated

- [Deprecated Symbols](cpinterfacecontroller-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [hideOverlayTemplateAnimated:completion:](cpinterfacecontroller/hideoverlaytemplate%28animated_completion_%29.md): Dismiss the current overlay template, optionally animating the dismissal.
- [showOverlayTemplate:animated:completion:](cpinterfacecontroller/showoverlaytemplate%28__animated_completion_%29.md): Show a template as an overlay over the current template hierarchy. Only one overlay template may be shown at a time.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Accessing the Interface Controller

- [interfaceController](cptemplateapplicationscene/interfacecontroller.md): The controller that manages the scene’s user interface.
