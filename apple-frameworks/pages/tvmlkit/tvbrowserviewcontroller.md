> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontroller](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontroller)

# TVBrowserViewController (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

A view controller that presents content in a browsable, full-screen format.

## Declaration

```swift
class TVBrowserViewController
```

<a id="overview"></a>

## Overview

Use this class to create a full-screen layout that supports full-screen browsing. This layout includes a built-in parallax effect that is triggered during the transition between cells.

![Screenshot of the full screen browser. Hidden cells lie on the left and right side of the currently displayed cell, with edges peeking out.](https://developer.apple.com/images/com.apple.tvmlkit/media-3332104@2x.png)

## Topics

### Initializing the Browser View Controller

- [init(viewElement:)](tvbrowserviewcontroller/init%28viewelement_%29.md): Create a full-screen browser from a specified view element.

### Providing the Browser’s Data

- [dataSource](tvbrowserviewcontroller/datasource.md): The object that provides data to the full-screen browser.
- [TVBrowserViewControllerDataSource](tvbrowserviewcontrollerdatasource.md): Methods adopted by the object you use to represent the browser view.

### Managing Interactions with the Browser

- [delegate](tvbrowserviewcontroller/delegate.md): The object that acts as the delegate and handles callbacks for the browser view.
- [TVBrowserViewControllerDelegate](tvbrowserviewcontrollerdelegate.md): Methods for detecting events and performing actions on the browser view.

### Modifying the Browser Appearance

- [cornerRadius](tvbrowserviewcontroller/cornerradius.md): The corner radius, in points, of each full-screen browser item.
- [interitemSpacing](tvbrowserviewcontroller/interitemspacing.md): The spacing between full-screen browser items.
- [maskInset](tvbrowserviewcontroller/maskinset.md): The amount by which the content of the cell is inset.

### Accessing Browser Elements

- [centeredViewElement](tvbrowserviewcontroller/centeredviewelement.md): The full screen browser item that is currently centered on the screen.
- [viewElement](tvbrowserviewcontroller/viewelement.md): The view element that the full screen browser is constructed from.

### Managing Browser Transitions

- [TVBrowserTransitionAnimator](tvbrowsertransitionanimator.md): An object that provides animations to and from the full screen browser.

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
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.

# TVBrowserViewController (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

A view controller that presents content in a browsable, full-screen format.

## Declaration

```objectivec
@interface TVBrowserViewController : UIViewController
```

<a id="overview"></a>

## Overview

Use this class to create a full-screen layout that supports full-screen browsing. This layout includes a built-in parallax effect that is triggered during the transition between cells.

![Screenshot of the full screen browser. Hidden cells lie on the left and right side of the currently displayed cell, with edges peeking out.](https://developer.apple.com/images/com.apple.tvmlkit/media-3332104@2x.png)

## Topics

### Initializing the Browser View Controller

- [viewControllerForElement:](tvbrowserviewcontroller/init%28viewelement_%29.md): Create a full-screen browser from a specified view element.

### Providing the Browser’s Data

- [dataSource](tvbrowserviewcontroller/datasource.md): The object that provides data to the full-screen browser.
- [TVBrowserViewControllerDataSource](tvbrowserviewcontrollerdatasource.md): Methods adopted by the object you use to represent the browser view.

### Managing Interactions with the Browser

- [delegate](tvbrowserviewcontroller/delegate.md): The object that acts as the delegate and handles callbacks for the browser view.
- [TVBrowserViewControllerDelegate](tvbrowserviewcontrollerdelegate.md): Methods for detecting events and performing actions on the browser view.

### Modifying the Browser Appearance

- [cornerRadius](tvbrowserviewcontroller/cornerradius.md): The corner radius, in points, of each full-screen browser item.
- [interitemSpacing](tvbrowserviewcontroller/interitemspacing.md): The spacing between full-screen browser items.
- [maskInset](tvbrowserviewcontroller/maskinset.md): The amount by which the content of the cell is inset.

### Accessing Browser Elements

- [centeredViewElement](tvbrowserviewcontroller/centeredviewelement.md): The full screen browser item that is currently centered on the screen.
- [viewElement](tvbrowserviewcontroller/viewelement.md): The view element that the full screen browser is constructed from.

### Managing Browser Transitions

- [TVBrowserTransitionAnimator](tvbrowsertransitionanimator.md): An object that provides animations to and from the full screen browser.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Views and View Controllers

- [TVViewElement](tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceCreating](tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVInterfaceFactory](tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.
