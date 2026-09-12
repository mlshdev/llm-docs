> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller](https://developer.apple.com/documentation/social/slcomposeviewcontroller)

# SLComposeViewController (Swift)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

A view controller that allows the user to compose social media posts.

## Declaration

```swift
class SLComposeViewController
```

<a id="overview"></a>

## Overview

Use the [isAvailable(forServiceType:)](slcomposeviewcontroller/isavailable%28forservicetype_%29.md) class method to check if a service account, such as Twitter, is set up and reachable before presenting this view to the user.

Set the initial content before presenting the view controller to the user. All the methods that set the content of a post return a Boolean value. They return [false](https://developer.apple.com/documentation/swift/false) if the content doesn’t fit in the post or if the view controller has already been presented to the user. You must set all of the content in the post before presenting the view controller to the user. After presenting the view controller, only the user can edit the post.

You can set a handler—using the [completionHandler](slcomposeviewcontroller/completionhandler.md) property—to be notified when the user is done composing a post. Note that completion handlers are not called on any particular thread.

## Topics

### Creating a Social Compose View Controller

- [init(forServiceType:)](slcomposeviewcontroller/init%28forservicetype_%29.md): Creates a new social compose view controller.

### Checking the Social Service Type

- [isAvailable(forServiceType:)](slcomposeviewcontroller/isavailable%28forservicetype_%29.md): Returns A Boolean value that indicates whether you can send a request for a particular service type.
- [serviceType](slcomposeviewcontroller/servicetype.md): Specifies the social-networking service.

### Specifying the Contents of the Post

- [setInitialText(\_:)](slcomposeviewcontroller/setinitialtext%28__%29.md): Sets the initial text to be posted.
- [add(\_:)](slcomposeviewcontroller/add%28__%29-1z68a.md): Adds an image to the post.
- [add(\_:)](slcomposeviewcontroller/add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages()](slcomposeviewcontroller/removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs()](slcomposeviewcontroller/removeallurls%28%29.md): Removes all URLs from the post.

### Processing the Results

- [completionHandler](slcomposeviewcontroller/completionhandler.md): The handler to call when the user is done composing a post.
- [SLComposeViewControllerCompletionHandler](slcomposeviewcontrollercompletionhandler.md): Defines a handler to call when the user finishes composing a post.
- [SLComposeViewControllerResult](slcomposeviewcontrollerresult.md): Possible values for the `result` parameter of the [completionHandler](slcomposeviewcontroller/completionhandler.md) property.

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
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Composition Interfaces

- [SLComposeServiceViewController](slcomposeserviceviewcontroller.md): A view controller that you present from your share app extension, allowing the user to compose social media posts.

# SLComposeViewController (Objective-C)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

A view controller that allows the user to compose social media posts.

## Declaration

```objectivec
@interface SLComposeViewController : UIViewController
```

<a id="overview"></a>

## Overview

Use the [isAvailableForServiceType:](slcomposeviewcontroller/isavailable%28forservicetype_%29.md) class method to check if a service account, such as Twitter, is set up and reachable before presenting this view to the user.

Set the initial content before presenting the view controller to the user. All the methods that set the content of a post return a Boolean value. They return [false](https://developer.apple.com/documentation/swift/false) if the content doesn’t fit in the post or if the view controller has already been presented to the user. You must set all of the content in the post before presenting the view controller to the user. After presenting the view controller, only the user can edit the post.

You can set a handler—using the [completionHandler](slcomposeviewcontroller/completionhandler.md) property—to be notified when the user is done composing a post. Note that completion handlers are not called on any particular thread.

## Topics

### Creating a Social Compose View Controller

- [composeViewControllerForServiceType:](slcomposeviewcontroller/init%28forservicetype_%29.md): Creates a new social compose view controller.

### Checking the Social Service Type

- [isAvailableForServiceType:](slcomposeviewcontroller/isavailable%28forservicetype_%29.md): Returns A Boolean value that indicates whether you can send a request for a particular service type.
- [serviceType](slcomposeviewcontroller/servicetype.md): Specifies the social-networking service.

### Specifying the Contents of the Post

- [setInitialText:](slcomposeviewcontroller/setinitialtext%28__%29.md): Sets the initial text to be posted.
- [addImage:](slcomposeviewcontroller/add%28__%29-1z68a.md): Adds an image to the post.
- [addURL:](slcomposeviewcontroller/add%28__%29-3mn1w.md): Adds a URL to the post.
- [removeAllImages](slcomposeviewcontroller/removeallimages%28%29.md): Removes all images from the post.
- [removeAllURLs](slcomposeviewcontroller/removeallurls%28%29.md): Removes all URLs from the post.

### Processing the Results

- [completionHandler](slcomposeviewcontroller/completionhandler.md): The handler to call when the user is done composing a post.
- [SLComposeViewControllerCompletionHandler](slcomposeviewcontrollercompletionhandler.md): Defines a handler to call when the user finishes composing a post.
- [SLComposeViewControllerResult](slcomposeviewcontrollerresult.md): Possible values for the `result` parameter of the [completionHandler](slcomposeviewcontroller/completionhandler.md) property.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Composition Interfaces

- [SLComposeServiceViewController](slcomposeserviceviewcontroller.md): A view controller that you present from your share app extension, allowing the user to compose social media posts.
