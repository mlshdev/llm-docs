> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller)

# SLComposeServiceViewController (Swift)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

A view controller that you present from your share app extension, allowing the user to compose social media posts.

## Declaration

```swift
class SLComposeServiceViewController
```

<a id="overview"></a>

## Overview

The [SLComposeServiceViewController](slcomposeserviceviewcontroller.md) class provides a standard compose view, and you can present it for social sharing extensions on iOS and macOS. By default, the compose view includes items such as an editable text view and an indication of remaining characters, in addition to support for previewing attachments and displaying configuration items, such as an account or privacy picker.

The compose view controller gets items for the content and preview areas from the [extensionContext](../uikit/uiviewcontroller/extensioncontext.md) property of the extension’s [NSExtensionContext](../foundation/nsextensioncontext.md) object.

## Topics

### Configuring the Post Details

- [configurationItems()](slcomposeserviceviewcontroller/configurationitems%28%29.md): Returns configuration items to display in the compose view.
- [SLComposeSheetConfigurationItem](slcomposesheetconfigurationitem.md): An object that provides additional configuration details to use when configuring a composition interface.
- [reloadConfigurationItems()](slcomposeserviceviewcontroller/reloadconfigurationitems%28%29.md): Reloads the list of configuration items.

### Managing the Contents of the Post

- [contentText](slcomposeserviceviewcontroller/contenttext.md): A string that represents the text which the user entered into the compose view’s text view.
- [placeholder](slcomposeserviceviewcontroller/placeholder.md): A string that’s displayed in the compose view’s text view when the text view is empty.
- [textView](slcomposeserviceviewcontroller/textview.md): The editable text view in the compose view.

### Presenting the View Controller

- [pushConfigurationViewController(\_:)](slcomposeserviceviewcontroller/pushconfigurationviewcontroller%28__%29.md): Presents a configuration view controller that lets the user configure the post.
- [popConfigurationViewController()](slcomposeserviceviewcontroller/popconfigurationviewcontroller%28%29.md): Dismisses the current configuration view controller.

### Responding to Lifecycle Events

- [presentationAnimationDidFinish()](slcomposeserviceviewcontroller/presentationanimationdidfinish%28%29.md): Tells the compose view controller that the presentation animation is finished.
- [didSelectCancel()](slcomposeserviceviewcontroller/didselectcancel%28%29.md): Sent to the compose view after the cancel animation finishes.
- [didSelectPost()](slcomposeserviceviewcontroller/didselectpost%28%29.md): Sent to the compose view after the post animation finishes.

### Canceling a Post

- [cancel()](slcomposeserviceviewcontroller/cancel%28%29.md): Starts the animated dismissal of the compose view.

### Validating Content

- [charactersRemaining](slcomposeserviceviewcontroller/charactersremaining.md): The number of characters remaining in a custom character limit.
- [isContentValid()](slcomposeserviceviewcontroller/iscontentvalid%28%29.md): A Boolean value that indicates whether the current content and attachments are valid.
- [validateContent()](slcomposeserviceviewcontroller/validatecontent%28%29.md): Performs validation of the current content and updates the state of the Post button, if appropriate.

### Previewing Attachments

- [loadPreviewView()](slcomposeserviceviewcontroller/loadpreviewview%28%29.md): Loads a view that displays a preview of the attachments in the extension context.

### Enabling Text Autocompletion

- [autoCompletionViewController](slcomposeserviceviewcontroller/autocompletionviewcontroller.md): The view controller that manages an autocompletion view for suggesting common text completions while users type.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTextDelegate](https://developer.apple.com/documentation/appkit/nstextdelegate)
- [NSTextViewDelegate](https://developer.apple.com/documentation/appkit/nstextviewdelegate)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIScrollViewDelegate](../uikit/uiscrollviewdelegate.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITextViewDelegate](../uikit/uitextviewdelegate.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Composition Interfaces

- [SLComposeViewController](slcomposeviewcontroller.md): A view controller that allows the user to compose social media posts.

# SLComposeServiceViewController (Objective-C)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

A view controller that you present from your share app extension, allowing the user to compose social media posts.

## Declaration

```objectivec
@interface SLComposeServiceViewController : UIViewController
```

```objectivec
@interface SLComposeServiceViewController : NSViewController
```

<a id="overview"></a>

## Overview

The [SLComposeServiceViewController](slcomposeserviceviewcontroller.md) class provides a standard compose view, and you can present it for social sharing extensions on iOS and macOS. By default, the compose view includes items such as an editable text view and an indication of remaining characters, in addition to support for previewing attachments and displaying configuration items, such as an account or privacy picker.

The compose view controller gets items for the content and preview areas from the [extensionContext](../uikit/uiviewcontroller/extensioncontext.md) property of the extension’s [NSExtensionContext](../foundation/nsextensioncontext.md) object.

## Topics

### Configuring the Post Details

- [configurationItems](slcomposeserviceviewcontroller/configurationitems%28%29.md): Returns configuration items to display in the compose view.
- [SLComposeSheetConfigurationItem](slcomposesheetconfigurationitem.md): An object that provides additional configuration details to use when configuring a composition interface.
- [reloadConfigurationItems](slcomposeserviceviewcontroller/reloadconfigurationitems%28%29.md): Reloads the list of configuration items.

### Managing the Contents of the Post

- [contentText](slcomposeserviceviewcontroller/contenttext.md): A string that represents the text which the user entered into the compose view’s text view.
- [placeholder](slcomposeserviceviewcontroller/placeholder.md): A string that’s displayed in the compose view’s text view when the text view is empty.
- [textView](slcomposeserviceviewcontroller/textview.md): The editable text view in the compose view.

### Presenting the View Controller

- [pushConfigurationViewController:](slcomposeserviceviewcontroller/pushconfigurationviewcontroller%28__%29.md): Presents a configuration view controller that lets the user configure the post.
- [popConfigurationViewController](slcomposeserviceviewcontroller/popconfigurationviewcontroller%28%29.md): Dismisses the current configuration view controller.

### Responding to Lifecycle Events

- [presentationAnimationDidFinish](slcomposeserviceviewcontroller/presentationanimationdidfinish%28%29.md): Tells the compose view controller that the presentation animation is finished.
- [didSelectCancel](slcomposeserviceviewcontroller/didselectcancel%28%29.md): Sent to the compose view after the cancel animation finishes.
- [didSelectPost](slcomposeserviceviewcontroller/didselectpost%28%29.md): Sent to the compose view after the post animation finishes.

### Canceling a Post

- [cancel](slcomposeserviceviewcontroller/cancel%28%29.md): Starts the animated dismissal of the compose view.

### Validating Content

- [charactersRemaining](slcomposeserviceviewcontroller/charactersremaining.md): The number of characters remaining in a custom character limit.
- [isContentValid](slcomposeserviceviewcontroller/iscontentvalid%28%29.md): A Boolean value that indicates whether the current content and attachments are valid.
- [validateContent](slcomposeserviceviewcontroller/validatecontent%28%29.md): Performs validation of the current content and updates the state of the Post button, if appropriate.

### Previewing Attachments

- [loadPreviewView](slcomposeserviceviewcontroller/loadpreviewview%28%29.md): Loads a view that displays a preview of the attachments in the extension context.

### Enabling Text Autocompletion

- [autoCompletionViewController](slcomposeserviceviewcontroller/autocompletionviewcontroller.md): The view controller that manages an autocompletion view for suggesting common text completions while users type.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [NSTextViewDelegate](https://developer.apple.com/documentation/appkit/nstextviewdelegate)
- [UITextViewDelegate](../uikit/uitextviewdelegate.md)

## See Also

### Composition Interfaces

- [SLComposeViewController](slcomposeviewcontroller.md): A view controller that allows the user to compose social media posts.
