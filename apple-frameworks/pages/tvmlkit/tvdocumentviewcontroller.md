> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvdocumentviewcontroller](https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontroller)

# TVDocumentViewController (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

A view controller that represents a TVMLKit document.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVDocumentViewController
```

<a id="overview"></a>

## Overview

Instances of this class serve as bridges into `TVMLKit JS`’s document life cycle, and allow for native event handling with `TVMLKit`. This class also provides a way for native clients to communicate with `TVMLKit JS`.

## Topics

### Initializing the Document View Controller

- [init(context:for:)](tvdocumentviewcontroller/init%28context_for_%29.md): Deprecated. Creates a new document view controller with a specific context and app controller.

### Managing Interactions with the Document

- [delegate](tvdocumentviewcontroller/delegate.md): Deprecated. The delegate for handling events in the document view controller.
- [TVDocumentViewControllerDelegate](tvdocumentviewcontrollerdelegate.md): Deprecated. Methods to manage updates, events, and errors from the document view controller.

### Handling Document Events

- [TVDocumentViewController.Event](tvdocumentviewcontroller/event.md): Deprecated. Events that can be triggered on the document view controller.

### Updating the Document View Controller

- [update(using:)](tvdocumentviewcontroller/update%28using_%29.md): Deprecated. Updates the document view controller with the provided context.

### Accessing the Document’s Components

- [appController](tvdocumentviewcontroller/appcontroller.md): Deprecated. The document’s app controller that bridges UI, navigation stack, storage, and event handling from JavaScript.
- [documentContext](tvdocumentviewcontroller/documentcontext.md): Deprecated. The current document context.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Views and View Controllers

- [TVViewElement](tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceCreating](tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVInterfaceFactory](tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.

# TVDocumentViewController (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

A view controller that represents a TVMLKit document.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVDocumentViewController : UIViewController
```

<a id="overview"></a>

## Overview

Instances of this class serve as bridges into `TVMLKit JS`’s document life cycle, and allow for native event handling with `TVMLKit`. This class also provides a way for native clients to communicate with `TVMLKit JS`.

## Topics

### Initializing the Document View Controller

- [viewControllerWithContext:forAppController:](tvdocumentviewcontroller/init%28context_for_%29.md): Deprecated. Creates a new document view controller with a specific context and app controller.

### Managing Interactions with the Document

- [delegate](tvdocumentviewcontroller/delegate.md): Deprecated. The delegate for handling events in the document view controller.
- [TVDocumentViewControllerDelegate](tvdocumentviewcontrollerdelegate.md): Deprecated. Methods to manage updates, events, and errors from the document view controller.

### Handling Document Events

- [TVDocumentEvent](tvdocumentviewcontroller/event.md): Deprecated. Events that can be triggered on the document view controller.

### Updating the Document View Controller

- [updateUsingContext:](tvdocumentviewcontroller/update%28using_%29.md): Deprecated. Updates the document view controller with the provided context.

### Accessing the Document’s Components

- [appController](tvdocumentviewcontroller/appcontroller.md): Deprecated. The document’s app controller that bridges UI, navigation stack, storage, and event handling from JavaScript.
- [documentContext](tvdocumentviewcontroller/documentcontext.md): Deprecated. The current document context.

### Instance Methods

- [init](tvdocumentviewcontroller/init.md)
- [initWithCoder:](tvdocumentviewcontroller/initwithcoder_.md)
- [initWithNibName:bundle:](tvdocumentviewcontroller/initwithnibname_bundle_.md)

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Views and View Controllers

- [TVViewElement](tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceCreating](tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVInterfaceFactory](tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
