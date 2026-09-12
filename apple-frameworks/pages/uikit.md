> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit](https://developer.apple.com/documentation/uikit)

# UIKit (Swift)

**Framework:** UIKit  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.

## Mentioned In

- [About focus interactions for Apple TV](uikit/about-focus-interactions-for-apple-tv.md)
- [Supporting VoiceOver in your app](uikit/supporting-voiceover-in-your-app.md)

<a id="overview"></a>

## Overview

UIKit provides a variety of features for building apps, including components you can use to construct the core infrastructure of your iOS, iPadOS, or tvOS apps. The framework provides the window and view architecture for implementing your UI, the event-handling infrastructure for delivering Multi-Touch and other types of input to your app, and the main run loop for managing interactions between the user, the system, and your app.

![An image of the Landmarks sample app on iPad and iPhone showing the Mount Fuji landmark.](https://developer.apple.com/images/com.apple.uikit/Landmarks-Building-an-app-with-Liquid-Glass-1@2x.png)

UIKit also includes support for animations, documents, drawing and printing, text management and display, search, app extensions, resource management, and getting information about the current device. You can also customize accessibility support, and localize your app’s interface for different languages, countries, or cultural regions.

UIKit works seamlessly with the [SwiftUI](https://developer.apple.com/documentation/swiftui) framework, so you can implement parts of your UIKit app in SwiftUI or mix interface elements between the two frameworks. For example, you can place UIKit views and view controllers inside SwiftUI views, and vice versa.

To build a macOS app, you can use [SwiftUI](https://developer.apple.com/documentation/swiftui) to create an app that works across all of Apple’s platforms, or use [AppKit](https://developer.apple.com/documentation/appkit) to create an app for Mac only. Alternatively, you can bring your UIKit iPad app to the Mac with [Mac Catalyst](uikit/mac-catalyst.md).

> **Important**

>  Use UIKit classes only from your app’s main thread or main dispatch queue, unless otherwise indicated in the documentation for those classes. This restriction particularly applies to classes that derive from [UIResponder](uikit/uiresponder.md) or that involve manipulating your app’s user interface in any way.

## Topics

### Essentials

- [Adopting Liquid Glass](technologyoverviews/adopting-liquid-glass.md): Find out how to bring the new material to your app.
- [UIKit updates](https://developer.apple.com/documentation/updates/uikit): Learn about important changes to UIKit.
- [About app development with UIKit](uikit/about-app-development-with-uikit.md): Learn about the basic support that UIKit and Xcode provide for your iOS and tvOS apps.
- [Protecting the User’s Privacy](uikit/protecting-the-user-s-privacy.md): Secure personal data, and respect user preferences for how data is used.

### App structure

UIKit manages your app’s interactions with the system and provides classes for you to manage your app’s data and resources.

- [App and environment](uikit/app-and-environment.md): Manage life-cycle events and your app’s UI scenes, and get information about traits and the environment in which your app runs.
- [Documents, data, and pasteboard](uikit/documents-data-and-pasteboard.md): Organize your app’s data and share that data on the pasteboard.
- [Resource management](uikit/resource-management.md): Manage the images, strings, storyboards, and nib files that you use to implement your app’s interface.
- [App extensions](uikit/app-extensions.md): Extend your app’s basic functionality to other parts of the system.
- [Interprocess communication](uikit/interprocess-communication.md): Display activity-based services to people.
- [Mac Catalyst](uikit/mac-catalyst.md): Create a version of your iPad app that users can run on a Mac device.

### User interface

Views help you display content onscreen and facilitate user interactions; view controllers help you manage views and the structure of your interface.

- [Views and controls](uikit/views-and-controls.md): Present your content onscreen and define the interactions allowed with that content.
- [View controllers](uikit/view-controllers.md): Manage your interface using view controllers and facilitate navigation around your app’s content.
- [View layout](uikit/view-layout.md): Use stack views to lay out the views of your interface automatically. Use Auto Layout when you require precise placement of your views.
- [Appearance customization](uikit/appearance-customization.md): Apply Liquid Glass to views, support Dark Mode in your app, customize the appearance of bars, and use appearance proxies to modify your UI.
- [Animation and haptics](uikit/animation-and-haptics.md): Provide feedback to users using view-based animations and haptics.
- [Windows and screens](uikit/windows-and-screens.md): Provide a container for your view hierarchies and other content.

### User interactions

Responders and gesture recognizers help you handle touches and other events. Drag and drop, focus, peek and pop, and accessibility handle other user interactions.

- [Touches, presses, and gestures](uikit/touches-presses-and-gestures.md): Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.
- [Menus and shortcuts](uikit/menus-and-shortcuts.md): Simplify interactions with your app using menu systems, contextual menus, Home Screen quick actions, and keyboard shortcuts.
- [Drag and drop](uikit/drag-and-drop.md): Bring drag and drop to your app by using interaction APIs with your views.
- [Pointer interactions](uikit/pointer-interactions.md): Support pointer interactions in your custom controls and views.
- [Apple Pencil interactions](uikit/apple-pencil-interactions.md): Handle user interactions like double tap and squeeze on Apple Pencil.
- [Focus-based navigation](uikit/focus-based-navigation.md): Navigate the interface of your UIKit app using a remote, game controller, or keyboard.
- [Accessibility for UIKit](uikit/accessibility-for-uikit.md): Make your UIKit apps accessible to everyone who uses iOS and tvOS.

### Graphics, drawing, and printing

UIKit provides classes and protocols that help you configure your drawing environment and render your content.

- [Images and PDF](uikit/images-and-pdf.md): Create and manage images, including those that use bitmap and PDF formats.
- [Drawing](uikit/drawing.md): Configure your app’s drawing environment using colors, renderers, draw paths, strings, and shadows.
- [Printing](uikit/printing.md): Display the system print panels and manage the printing process.

### Text

In addition to text views that simplify displaying text in your app, UIKit provides custom text management and rendering that supports the system keyboards.

- [Text display and fonts](uikit/text-display-and-fonts.md): Display text, manage fonts, and check spelling.
- [TextKit](uikit/textkit.md): Manage text storage and perform custom layout of text-based content in your app’s views.
- [Keyboards and input](uikit/keyboards-and-input.md): Configure the system keyboard, create your own keyboards to handle input, or detect key presses on a physical keyboard.
- [Writing Tools](uikit/writing-tools.md): Add support for Writing Tools to your app’s text views.
- [Handwriting recognition](uikit/handwriting-recognition.md): Configure text fields and custom views that accept text to handle input from Apple Pencil.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated symbols](uikit/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Reference

- [UIKit Enumerations](uikit/uikit-enumerations.md)
- [UIKit Constants](uikit/uikit-constants.md): This document describes constants that are used throughout the UIKit framework.
- [UIKit Data Types](uikit/uikit-data-types.md): The UIKit framework defines data types that are used in multiple places throughout the framework.
- [UIKit Functions](uikit/uikit-functions.md): The UIKit framework defines a number of functions, many of them used in graphics and drawing operations.

### Protocols

- [UITraitBridgedEnvironmentKey](uikit/uitraitbridgedenvironmentkey.md)

### Structures

- [UIConfigurationTextAttributesTransformer](uikit/uiconfigurationtextattributestransformer-swift.struct.md): Defines a text transformation that can affect the visual appearance of a string.
- [UITraitSystemPrefersReducedResourceUsage](uikit/uitraitsystemprefersreducedresourceusage-swift.struct.md)

### Macros

- [Preview(\_:traits:arguments:body:)](uikit/preview%28__traits_arguments_body_%29-6gm4c.md)
- [Preview(\_:traits:arguments:body:)](uikit/preview%28__traits_arguments_body_%29-7cbjv.md)

### Enumerations

- [UITextGrammarCheckingType](uikit/uitextgrammarcheckingtype.md)

# UIKit (Objective-C)

**Framework:** UIKit  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.

## Mentioned In

- [About focus interactions for Apple TV](uikit/about-focus-interactions-for-apple-tv.md)
- [Supporting VoiceOver in your app](uikit/supporting-voiceover-in-your-app.md)

<a id="overview"></a>

## Overview

UIKit provides a variety of features for building apps, including components you can use to construct the core infrastructure of your iOS, iPadOS, or tvOS apps. The framework provides the window and view architecture for implementing your UI, the event-handling infrastructure for delivering Multi-Touch and other types of input to your app, and the main run loop for managing interactions between the user, the system, and your app.

![An image of the Landmarks sample app on iPad and iPhone showing the Mount Fuji landmark.](https://developer.apple.com/images/com.apple.uikit/Landmarks-Building-an-app-with-Liquid-Glass-1@2x.png)

UIKit also includes support for animations, documents, drawing and printing, text management and display, search, app extensions, resource management, and getting information about the current device. You can also customize accessibility support, and localize your app’s interface for different languages, countries, or cultural regions.

UIKit works seamlessly with the [SwiftUI](https://developer.apple.com/documentation/swiftui) framework, so you can implement parts of your UIKit app in SwiftUI or mix interface elements between the two frameworks. For example, you can place UIKit views and view controllers inside SwiftUI views, and vice versa.

To build a macOS app, you can use [SwiftUI](https://developer.apple.com/documentation/swiftui) to create an app that works across all of Apple’s platforms, or use [AppKit](https://developer.apple.com/documentation/appkit) to create an app for Mac only. Alternatively, you can bring your UIKit iPad app to the Mac with [Mac Catalyst](uikit/mac-catalyst.md).

> **Important**

>  Use UIKit classes only from your app’s main thread or main dispatch queue, unless otherwise indicated in the documentation for those classes. This restriction particularly applies to classes that derive from [UIResponder](uikit/uiresponder.md) or that involve manipulating your app’s user interface in any way.

## Topics

### Essentials

- [Adopting Liquid Glass](technologyoverviews/adopting-liquid-glass.md): Find out how to bring the new material to your app.
- [UIKit updates](https://developer.apple.com/documentation/updates/uikit): Learn about important changes to UIKit.
- [About app development with UIKit](uikit/about-app-development-with-uikit.md): Learn about the basic support that UIKit and Xcode provide for your iOS and tvOS apps.
- [Protecting the User’s Privacy](uikit/protecting-the-user-s-privacy.md): Secure personal data, and respect user preferences for how data is used.

### App structure

UIKit manages your app’s interactions with the system and provides classes for you to manage your app’s data and resources.

- [App and environment](uikit/app-and-environment.md): Manage life-cycle events and your app’s UI scenes, and get information about traits and the environment in which your app runs.
- [Documents, data, and pasteboard](uikit/documents-data-and-pasteboard.md): Organize your app’s data and share that data on the pasteboard.
- [Resource management](uikit/resource-management.md): Manage the images, strings, storyboards, and nib files that you use to implement your app’s interface.
- [App extensions](uikit/app-extensions.md): Extend your app’s basic functionality to other parts of the system.
- [Interprocess communication](uikit/interprocess-communication.md): Display activity-based services to people.
- [Mac Catalyst](uikit/mac-catalyst.md): Create a version of your iPad app that users can run on a Mac device.

### User interface

Views help you display content onscreen and facilitate user interactions; view controllers help you manage views and the structure of your interface.

- [Views and controls](uikit/views-and-controls.md): Present your content onscreen and define the interactions allowed with that content.
- [View controllers](uikit/view-controllers.md): Manage your interface using view controllers and facilitate navigation around your app’s content.
- [View layout](uikit/view-layout.md): Use stack views to lay out the views of your interface automatically. Use Auto Layout when you require precise placement of your views.
- [Appearance customization](uikit/appearance-customization.md): Apply Liquid Glass to views, support Dark Mode in your app, customize the appearance of bars, and use appearance proxies to modify your UI.
- [Animation and haptics](uikit/animation-and-haptics.md): Provide feedback to users using view-based animations and haptics.
- [Windows and screens](uikit/windows-and-screens.md): Provide a container for your view hierarchies and other content.

### User interactions

Responders and gesture recognizers help you handle touches and other events. Drag and drop, focus, peek and pop, and accessibility handle other user interactions.

- [Touches, presses, and gestures](uikit/touches-presses-and-gestures.md): Encapsulate your app’s event-handling logic in gesture recognizers so that you can reuse that code throughout your app.
- [Menus and shortcuts](uikit/menus-and-shortcuts.md): Simplify interactions with your app using menu systems, contextual menus, Home Screen quick actions, and keyboard shortcuts.
- [Drag and drop](uikit/drag-and-drop.md): Bring drag and drop to your app by using interaction APIs with your views.
- [Pointer interactions](uikit/pointer-interactions.md): Support pointer interactions in your custom controls and views.
- [Apple Pencil interactions](uikit/apple-pencil-interactions.md): Handle user interactions like double tap and squeeze on Apple Pencil.
- [Focus-based navigation](uikit/focus-based-navigation.md): Navigate the interface of your UIKit app using a remote, game controller, or keyboard.
- [Accessibility for UIKit](uikit/accessibility-for-uikit.md): Make your UIKit apps accessible to everyone who uses iOS and tvOS.

### Graphics, drawing, and printing

UIKit provides classes and protocols that help you configure your drawing environment and render your content.

- [Images and PDF](uikit/images-and-pdf.md): Create and manage images, including those that use bitmap and PDF formats.
- [Drawing](uikit/drawing.md): Configure your app’s drawing environment using colors, renderers, draw paths, strings, and shadows.
- [Printing](uikit/printing.md): Display the system print panels and manage the printing process.

### Text

In addition to text views that simplify displaying text in your app, UIKit provides custom text management and rendering that supports the system keyboards.

- [Text display and fonts](uikit/text-display-and-fonts.md): Display text, manage fonts, and check spelling.
- [TextKit](uikit/textkit.md): Manage text storage and perform custom layout of text-based content in your app’s views.
- [Keyboards and input](uikit/keyboards-and-input.md): Configure the system keyboard, create your own keyboards to handle input, or detect key presses on a physical keyboard.
- [Writing Tools](uikit/writing-tools.md): Add support for Writing Tools to your app’s text views.
- [Handwriting recognition](uikit/handwriting-recognition.md): Configure text fields and custom views that accept text to handle input from Apple Pencil.

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated symbols](uikit/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Reference

- [UIKit Enumerations](uikit/uikit-enumerations.md)
- [UIKit Constants](uikit/uikit-constants.md): This document describes constants that are used throughout the UIKit framework.
- [UIKit Data Types](uikit/uikit-data-types.md): The UIKit framework defines data types that are used in multiple places throughout the framework.
- [UIKit Functions](uikit/uikit-functions.md): The UIKit framework defines a number of functions, many of them used in graphics and drawing operations.

### Classes

- [UIBarMinimization](uikit/uibarminimization-c.class.md): A configuration that controls how a navigation bar minimizes in response to scrolling.
- [UITraitSystemPrefersReducedResourceUsage](uikit/uitraitsystemprefersreducedresourceusage-c.class.md)

### Variables

- [UIApplicationSystemPrefersReducedResourceUsageDidChangeNotification](uikit/uiapplication/systemprefersreducedresourceusagedidchangenotification.md): A notification that posts when [systemPrefersReducedResourceUsage](uikit/uiapplication/systemprefersreducedresourceusage.md) changes.
- [UIDocumentDidMoveToWritableLocationNotification](uikit/uidocument/didmovetowritablelocationnotification.md): A notification that the document posts when copying the file from a readonly location in order to write changes. This notification will be posted on the file presenter queue.
- [UIDocumentDidMoveToWritableLocationOldURLKey](uikit/uidocument/didmovetowritablelocationoldurlkey.md): The key in a `UIDocumentDidMoveToWritableLocationNotification`’s `userInfo` dictionary that contains the previous readonly file URL.

### Macros

- [UIFOCUS_SUPPORTS_UIKIT](uikit/uifocus_supports_uikit.md)

### Enumerations

- [UIGlassEffectStyle](uikit/uiglasseffect/style.md)
- [UIMenuElementImageVisibility](uikit/uimenuelement/imagevisibility.md): Visibility options for a menu element’s image.
- [UISheetPresentationControllerPlacement](uikit/uisheetpresentationcontroller/placement.md)
- [UITabBarControllerSidebarPlacement](uikit/uitabbarcontroller/sidebar-swift.class/placement.md)
- [UITextGrammarCheckingType](uikit/uitextgrammarcheckingtype.md)
- [UIWritingToolsCoordinatorTextDecoration](uikit/uiwritingtoolscoordinator/textdecoration.md): Use the `UIWritingToolsCoordinator.TextDecoration` constants to determine the type of decoration to be applied to a preview for grammar animation. The grammar animation needs previews of the text of the issue in two forms, without and with the grammar indication underline applied. If you use grammar animation, you must implement the delegate method [writingToolsCoordinator:requestsPreviewForTextAnimation:ofRange:inContext:textDecoration:completion:](uikit/uiwritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_of_in_textdecoration_completion_%29.md) to provide both forms of previews, based on the specified decoration.
