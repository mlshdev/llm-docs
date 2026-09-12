> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext](https://developer.apple.com/documentation/foundation/nsextensioncontext)

# NSExtensionContext (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host app context from which an app extension is invoked.

## Declaration

```swift
class NSExtensionContext
```

<a id="overview"></a>

## Overview

When a host app sends a request to an app extension, it provides an extension context. For many app extensions, the most important part of the context is the data the user wants to work with, which is contained in the [inputItems](nsextensioncontext/inputitems.md) property.

## Topics

### Handling requests

- [completeRequest(returningItems:completionHandler:)](nsextensioncontext/completerequest%28returningitems_completionhandler_%29.md): Tells the host app to complete the app extension request with an array of result items.
- [cancelRequest(withError:)](nsextensioncontext/cancelrequest%28witherror_%29.md): Tells the host app to cancel the app extension request, with a supplied error.
- [NSExtensionItemsAndErrorsKey](nsextensionitemsanderrorskey.md): The extension items and errors key.

### Opening URLs

- [open(\_:completionHandler:)](nsextensioncontext/open%28__completionhandler_%29.md): Asks the system to open a URL on behalf of the currently running app extension.

### Storing extension items

- [inputItems](nsextensioncontext/inputitems.md): The list of input [NSExtensionItem](nsextensionitem.md) objects associated with the context.

### Controlling media playback in notification content extensions

- [mediaPlayingStarted()](nsextensioncontext/mediaplayingstarted%28%29.md): Tells the system that the Notification Content app extension began playing a media file.
- [mediaPlayingPaused()](nsextensioncontext/mediaplayingpaused%28%29.md): Tells the system that the Notification Content app extension stopped playing a media file.

### Populating your share extension with metadata

- [intent](nsextensioncontext/intent.md): Metadata for populating your share extensions interface.

### Getting Siri-related information

- [hostedViewMinimumAllowedSize](nsextensioncontext/hostedviewminimumallowedsize.md): The minimum size for a Siri hosted view.
- [hostedViewMaximumAllowedSize](nsextensioncontext/hostedviewmaximumallowedsize.md): The maximum size for a Siri hosted view.
- [interfaceParametersDescription()](nsextensioncontext/interfaceparametersdescription%28%29.md): Returns a human-readable string describing the data that SiriKit displays to the user when you handle an intent.

### Supporting broadcasting

- [loadBroadcastingApplicationInfo(completion:)](nsextensioncontext/loadbroadcastingapplicationinfo%28completion_%29.md): Deprecated.
- [completeRequest(withBroadcast:setupInfo:)](nsextensioncontext/completerequest%28withbroadcast_setupinfo_%29.md): Deprecated.

### Handling notification actions

- [notificationActions](nsextensioncontext/notificationactions.md)
- [performNotificationDefaultAction()](nsextensioncontext/performnotificationdefaultaction%28%29.md)
- [dismissNotificationContentExtension()](nsextensioncontext/dismissnotificationcontentextension%28%29.md)

### Working with notifications

- [NSExtensionHostDidBecomeActive](nsnotification/name-swift.struct/nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostWillResignActive](nsnotification/name-swift.struct/nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSExtensionHostDidEnterBackground](nsnotification/name-swift.struct/nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.
- [NSExtensionHostWillEnterForeground](nsnotification/name-swift.struct/nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.

### Working with notification messages

- [NSExtensionContext.DidBecomeActiveMessage](nsextensioncontext/didbecomeactivemessage.md): A message the system sends when the extension’s host app moves from the inactive to the active state.
- [NSExtensionContext.WillResignActiveMessage](nsextensioncontext/willresignactivemessage.md): A message the system sends when the extension’s host app moves from the active to the inactive state.
- [NSExtensionContext.DidEnterBackgroundMessage](nsextensioncontext/didenterbackgroundmessage.md): A message the system sends when the extension’s host app begins running in the background.
- [NSExtensionContext.WillEnterForegroundMessage](nsextensioncontext/willenterforegroundmessage.md): A message the system sends when the extension’s host app begins running in the foreground.

### Deprecated

- [completeRequest(withBroadcast:broadcastConfiguration:setupInfo:)](nsextensioncontext/completerequest%28withbroadcast_broadcastconfiguration_setupinfo_%29.md): Deprecated. Tells the host app to complete the app extension request with the specified broadcast information.
- [widgetActiveDisplayMode](nsextensioncontext/widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetLargestAvailableDisplayMode](nsextensioncontext/widgetlargestavailabledisplaymode.md): Deprecated. The largest display mode the widget supports.
- [widgetMaximumSize(for:)](nsextensioncontext/widgetmaximumsize%28for_%29.md): Deprecated. Returns the maximum size for the specified widget display mode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Extension Support

- [NSExtensionRequestHandling](nsextensionrequesthandling.md): The interface an app extension uses to respond to a request from a host app.

# NSExtensionContext (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host app context from which an app extension is invoked.

## Declaration

```objectivec
@interface NSExtensionContext : NSObject
```

<a id="overview"></a>

## Overview

When a host app sends a request to an app extension, it provides an extension context. For many app extensions, the most important part of the context is the data the user wants to work with, which is contained in the [inputItems](nsextensioncontext/inputitems.md) property.

## Topics

### Handling requests

- [completeRequestReturningItems:completionHandler:](nsextensioncontext/completerequest%28returningitems_completionhandler_%29.md): Tells the host app to complete the app extension request with an array of result items.
- [cancelRequestWithError:](nsextensioncontext/cancelrequest%28witherror_%29.md): Tells the host app to cancel the app extension request, with a supplied error.
- [NSExtensionItemsAndErrorsKey](nsextensionitemsanderrorskey.md): The extension items and errors key.

### Opening URLs

- [openURL:completionHandler:](nsextensioncontext/open%28__completionhandler_%29.md): Asks the system to open a URL on behalf of the currently running app extension.

### Storing extension items

- [inputItems](nsextensioncontext/inputitems.md): The list of input [NSExtensionItem](nsextensionitem.md) objects associated with the context.

### Controlling media playback in notification content extensions

- [mediaPlayingStarted](nsextensioncontext/mediaplayingstarted%28%29.md): Tells the system that the Notification Content app extension began playing a media file.
- [mediaPlayingPaused](nsextensioncontext/mediaplayingpaused%28%29.md): Tells the system that the Notification Content app extension stopped playing a media file.

### Populating your share extension with metadata

- [intent](nsextensioncontext/intent.md): Metadata for populating your share extensions interface.

### Getting Siri-related information

- [hostedViewMinimumAllowedSize](nsextensioncontext/hostedviewminimumallowedsize.md): The minimum size for a Siri hosted view.
- [hostedViewMaximumAllowedSize](nsextensioncontext/hostedviewmaximumallowedsize.md): The maximum size for a Siri hosted view.
- [interfaceParametersDescription](nsextensioncontext/interfaceparametersdescription%28%29.md): Returns a human-readable string describing the data that SiriKit displays to the user when you handle an intent.

### Supporting broadcasting

- [loadBroadcastingApplicationInfoWithCompletion:](nsextensioncontext/loadbroadcastingapplicationinfo%28completion_%29.md): Deprecated.
- [completeRequestWithBroadcastURL:setupInfo:](nsextensioncontext/completerequest%28withbroadcast_setupinfo_%29.md): Deprecated.

### Handling notification actions

- [notificationActions](nsextensioncontext/notificationactions.md)
- [performNotificationDefaultAction](nsextensioncontext/performnotificationdefaultaction%28%29.md)
- [dismissNotificationContentExtension](nsextensioncontext/dismissnotificationcontentextension%28%29.md)

### Working with notifications

- [NSExtensionHostDidBecomeActiveNotification](nsnotification/name-swift.struct/nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostWillResignActiveNotification](nsnotification/name-swift.struct/nsextensionhostwillresignactive.md): Posted when the extension’s host app moves from the active to the inactive state.
- [NSExtensionHostDidEnterBackgroundNotification](nsnotification/name-swift.struct/nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.
- [NSExtensionHostWillEnterForegroundNotification](nsnotification/name-swift.struct/nsextensionhostwillenterforeground.md): Posted when the extension’s host app begins running in the foreground.

### Deprecated

- [completeRequestWithBroadcastURL:broadcastConfiguration:setupInfo:](nsextensioncontext/completerequest%28withbroadcast_broadcastconfiguration_setupinfo_%29.md): Deprecated. Tells the host app to complete the app extension request with the specified broadcast information.
- [widgetActiveDisplayMode](nsextensioncontext/widgetactivedisplaymode.md): Deprecated. The active display mode of the widget.
- [widgetLargestAvailableDisplayMode](nsextensioncontext/widgetlargestavailabledisplaymode.md): Deprecated. The largest display mode the widget supports.
- [widgetMaximumSizeForDisplayMode:](nsextensioncontext/widgetmaximumsize%28for_%29.md): Deprecated. Returns the maximum size for the specified widget display mode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Extension Support

- [NSExtensionRequestHandling](nsextensionrequesthandling.md): The interface an app extension uses to respond to a request from a host app.
