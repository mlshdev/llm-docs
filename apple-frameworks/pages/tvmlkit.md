> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit](https://developer.apple.com/documentation/tvmlkit)

# TVMLKit (Swift)

**Framework:** TVMLKit  
**Kind:** Framework  
**Availability:** tvOS 9.0+

Create client-server apps by incorporating JavaScript and TVML files in your binary app.

> TVMLKit is deprecated in tvOS 18 and later. Instead, develop apps for tvOS with [SwiftUI](https://developer.apple.com/documentation/swiftui) or [UIKit](https://developer.apple.com/documentation/uikit). For more information, see [Creating a tvOS media catalog app in SwiftUI](https://developer.apple.com/documentation/swiftui/creating-a-tvos-media-catalog-app-in-swiftui).

<a id="overview"></a>

## Overview

The TVMLKit framework enables you to evaluate TVMLKit JS and TVML files from within your tvOS app. You can create TVML elements, styles, views, and view controllers through the JavaScript environment.

## Topics

### JavaScript Environment

- [Implementing a Hybrid TV App with TVMLKit](tvmlkit/implementing-a-hybrid-tv-app-with-tvmlkit.md): Display content options with document view controllers and fetch and populate content with TVMLKit JS.
- [TVApplicationController](tvmlkit/tvapplicationcontroller.md): Deprecated. An object that bridges the UI, navigation stack, storage, and event handling from JavaScript.
- [TVApplicationControllerContext](tvmlkit/tvapplicationcontrollercontext.md): Deprecated. Launch information provided to the TV application controller.

### Views and View Controllers

- [TVViewElement](tvmlkit/tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceCreating](tvmlkit/tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVInterfaceFactory](tvmlkit/tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvmlkit/tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvmlkit/tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.

### Custom Elements

- [TVElementFactory](tvmlkit/tvelementfactory.md): Deprecated. An object used to register new elements to extend the Apple TV Markup Language (TVML).
- [TVImageElement](tvmlkit/tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [TVTextElement](tvmlkit/tvtextelement.md): Deprecated. The textual content for the DOM element.
- [Creating TVML Elements](tvmlkit/creating-tvml-elements.md): Avoid rewriting complex and often used elements by creating a simplified custom element.

### Custom Styles

- [TVViewElementStyle](tvmlkit/tvviewelementstyle.md): Deprecated. A style applied to a view element.
- [TVStyleFactory](tvmlkit/tvstylefactory.md): Deprecated. An object used to register custom style properties.
- [TVColor](tvmlkit/tvcolor.md): Deprecated. The color data used by styles.

### Custom Player

- [TVMediaItem](tvmlkit/tvmediaitem.md): Deprecated. A single audio or video item associated with the Apple TV JavaScript player.
- [TVPlaylist](tvmlkit/tvplaylist.md): Deprecated. A collection of media items associated with the Apple TV JavaScript player.
- [TVPlayer](tvmlkit/tvplayer.md): Deprecated. A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.

### Errors

- [TVMLKitErrorDomain](tvmlkit/tvmlkiterrordomain.md): Deprecated. An error occurred in TVMLKit.
- [TVMLKitError](tvmlkit/tvmlkiterror.md): Deprecated. Error codes for the TVMLKit error domain.
- [TVDocumentError](tvmlkit/tvdocumenterror-swift.struct.md): Deprecated.

### Reference

- [TVMLKit Enumerations](tvmlkit/tvmlkit-enumerations.md)
- [TVMLKit Constants](tvmlkit/tvmlkit-constants.md): This document defines constants in the TVMLKit framework that are not associated with a particular class.

# TVMLKit (Objective-C)

**Framework:** TVMLKit  
**Kind:** Framework  
**Availability:** tvOS 9.0+

Create client-server apps by incorporating JavaScript and TVML files in your binary app.

> TVMLKit is deprecated in tvOS 18 and later. Instead, develop apps for tvOS with [SwiftUI](https://developer.apple.com/documentation/swiftui) or [UIKit](https://developer.apple.com/documentation/uikit). For more information, see [Creating a tvOS media catalog app in SwiftUI](https://developer.apple.com/documentation/swiftui/creating-a-tvos-media-catalog-app-in-swiftui).

<a id="overview"></a>

## Overview

The TVMLKit framework enables you to evaluate TVMLKit JS and TVML files from within your tvOS app. You can create TVML elements, styles, views, and view controllers through the JavaScript environment.

## Topics

### JavaScript Environment

- [TVApplicationController](tvmlkit/tvapplicationcontroller.md): Deprecated. An object that bridges the UI, navigation stack, storage, and event handling from JavaScript.
- [TVApplicationControllerContext](tvmlkit/tvapplicationcontrollercontext.md): Deprecated. Launch information provided to the TV application controller.

### Views and View Controllers

- [TVViewElement](tvmlkit/tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceCreating](tvmlkit/tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVInterfaceFactory](tvmlkit/tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvmlkit/tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvmlkit/tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.

### Custom Elements

- [TVElementFactory](tvmlkit/tvelementfactory.md): Deprecated. An object used to register new elements to extend the Apple TV Markup Language (TVML).
- [TVImageElement](tvmlkit/tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [TVTextElement](tvmlkit/tvtextelement.md): Deprecated. The textual content for the DOM element.
- [Creating TVML Elements](tvmlkit/creating-tvml-elements.md): Avoid rewriting complex and often used elements by creating a simplified custom element.

### Custom Styles

- [TVViewElementStyle](tvmlkit/tvviewelementstyle.md): Deprecated. A style applied to a view element.
- [TVStyleFactory](tvmlkit/tvstylefactory.md): Deprecated. An object used to register custom style properties.
- [TVColor](tvmlkit/tvcolor.md): Deprecated. The color data used by styles.

### Custom Player

- [TVMediaItem](tvmlkit/tvmediaitem.md): Deprecated. A single audio or video item associated with the Apple TV JavaScript player.
- [TVPlaylist](tvmlkit/tvplaylist.md): Deprecated. A collection of media items associated with the Apple TV JavaScript player.
- [TVPlayer](tvmlkit/tvplayer.md): Deprecated. A customizable native media player used to control playback from the JavaScript player used in an Apple TV client-server app.

### Errors

- [TVMLKitErrorDomain](tvmlkit/tvmlkiterrordomain.md): Deprecated. An error occurred in TVMLKit.
- [TVMLKitError](tvmlkit/tvmlkiterror.md): Deprecated. Error codes for the TVMLKit error domain.

### Reference

- [TVMLKit Enumerations](tvmlkit/tvmlkit-enumerations.md)
- [TVMLKit Constants](tvmlkit/tvmlkit-constants.md): This document defines constants in the TVMLKit framework that are not associated with a particular class.

### Macros

- [TVML_DEPRECATED](tvmlkit/tvml_deprecated.md)
- [TVML_DEPRECATED_BEGIN](tvmlkit/tvml_deprecated_begin.md)
- [TVML_DEPRECATED_END](tvmlkit/tvml_deprecated_end.md)
- [TVML_DEPRECATED_IOS](tvmlkit/tvml_deprecated_ios.md)
- [TV_EXTERN](tvmlkit/tv_extern.md)
- [TV_EXTERN_CLASS](tvmlkit/tv_extern_class.md)
- [TV_EXTERN_CLASS_AVAILABLE](tvmlkit/tv_extern_class_available.md)
