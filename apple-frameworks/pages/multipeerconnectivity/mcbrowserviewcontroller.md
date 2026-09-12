> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontroller](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontroller)

# MCBrowserViewController (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepare(for:sender:)](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegue(withIdentifier:sender:)](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [present(\_:animated:completion:)](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismiss(animated:completion:)](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentAsSheet(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismiss(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.

> Use Network Framework instead

## Declaration

```swift
class MCBrowserViewController
```

## Topics

### Initializing a Browser View Controller

- [init(serviceType:session:)](mcbrowserviewcontroller/init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [init(browser:session:)](mcbrowserviewcontroller/init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [delegate](mcbrowserviewcontroller/delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [browser](mcbrowserviewcontroller/browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](mcbrowserviewcontroller/session.md): Deprecated. The multipeer session to which the invited peers are connected.

### Getting and Setting the Maximum and Minimum Number of Peers

- [maximumNumberOfPeers](mcbrowserviewcontroller/maximumnumberofpeers.md): Deprecated. The maximum number of peers allowed in a session, including the local peer.
- [minimumNumberOfPeers](mcbrowserviewcontroller/minimumnumberofpeers.md): Deprecated. The minimum number of peers that need to be in a session, including the local peer.

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
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
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

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.

# MCBrowserViewController (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepareForSegue:sender:](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegueWithIdentifier:sender:](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [presentViewController:animated:completion:](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismissViewControllerAnimated:completion:](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentViewControllerAsSheet:](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismissViewController:](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.

> Use Network Framework instead

## Declaration

```objectivec
@interface MCBrowserViewController : UIViewController
```

```objectivec
@interface MCBrowserViewController : NSViewController
```

## Topics

### Initializing a Browser View Controller

- [initWithServiceType:session:](mcbrowserviewcontroller/init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [initWithBrowser:session:](mcbrowserviewcontroller/init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [delegate](mcbrowserviewcontroller/delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [browser](mcbrowserviewcontroller/browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](mcbrowserviewcontroller/session.md): Deprecated. The multipeer session to which the invited peers are connected.

### Getting and Setting the Maximum and Minimum Number of Peers

- [maximumNumberOfPeers](mcbrowserviewcontroller/maximumnumberofpeers.md): Deprecated. The maximum number of peers allowed in a session, including the local peer.
- [minimumNumberOfPeers](mcbrowserviewcontroller/minimumnumberofpeers.md): Deprecated. The minimum number of peers that need to be in a session, including the local peer.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md)

## See Also

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.
