> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicesetupviewcontroller](https://developer.apple.com/documentation/storekit/skcloudservicesetupviewcontroller)

# SKCloudServiceSetupViewController (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

A view controller that helps people perform setup for a cloud service, like an Apple Music subscription.

> Use [musicSubscriptionOffer(isPresented:options:onLoadCompletion:)](https://developer.apple.com/documentation/swiftui/view/musicsubscriptionoffer%28ispresented:options:onloadcompletion:%29) instead.

## Declaration

```swift
@MainActor class SKCloudServiceSetupViewController
```

## Mentioned In

- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md)
- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md)

<a id="overview"></a>

## Overview

Use the view that this view controller presents to allow customers to set up cloud services that are associated with their iTunes Store account, like an Apple Music subscription.

To enable the Apple Music subscriber setup flow in particular, you first request the current set of capabilities from [SKCloudServiceController](skcloudservicecontroller.md). Then, present the setup view controller only when the [musicCatalogSubscriptionEligible](skcloudservicecapability/musiccatalogsubscriptioneligible.md) capability is enabled and the [musicCatalogPlayback](skcloudservicecapability/musiccatalogplayback.md) capability is disabled.

For information about other capabilities that you can enable by using this view controller, see [SKCloudServiceCapability](skcloudservicecapability.md).

## Topics

### Setting a delegate

- [delegate](skcloudservicesetupviewcontroller/delegate.md): Deprecated. The cloud service view controller’s delegate.
- [SKCloudServiceSetupViewControllerDelegate](skcloudservicesetupviewcontrollerdelegate.md): Deprecated. A protocol that defines the methods a cloud service setup view controller can use to get the status of the view, including when it is dismissed.

### Loading the setup view

- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md): Allow eligible customers to subscribe to Apple Music.
- [SKCloudServiceSetupOptionsKey](skcloudservicesetupoptionskey.md): Keys to specify the types of setup options for a cloud service.
- [load(options:completionHandler:)](skcloudservicesetupviewcontroller/load%28options_completionhandler_%29.md): Deprecated. Loads the cloud service setup view with the specified options.
- [SKArcadeService](skarcadeservice.md)

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

### Deprecated

- [SKCloudServiceController](skcloudservicecontroller.md): Deprecated. An object that determines the current capabilities of a person’s Music library.

# SKCloudServiceSetupViewController (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 10.1+ (deprecated in 18.0) · iPadOS 10.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0)

A view controller that helps people perform setup for a cloud service, like an Apple Music subscription.

> Use [musicSubscriptionOffer(isPresented:options:onLoadCompletion:)](https://developer.apple.com/documentation/swiftui/view/musicsubscriptionoffer%28ispresented:options:onloadcompletion:%29) instead.

## Declaration

```objectivec
@interface SKCloudServiceSetupViewController : UIViewController
```

```objectivec
@interface SKCloudServiceSetupViewController : NSViewController
```

## Mentioned In

- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md)
- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md)

<a id="overview"></a>

## Overview

Use the view that this view controller presents to allow customers to set up cloud services that are associated with their iTunes Store account, like an Apple Music subscription.

To enable the Apple Music subscriber setup flow in particular, you first request the current set of capabilities from [SKCloudServiceController](skcloudservicecontroller.md). Then, present the setup view controller only when the [SKCloudServiceCapabilityMusicCatalogSubscriptionEligible](skcloudservicecapability/musiccatalogsubscriptioneligible.md) capability is enabled and the [SKCloudServiceCapabilityMusicCatalogPlayback](skcloudservicecapability/musiccatalogplayback.md) capability is disabled.

For information about other capabilities that you can enable by using this view controller, see [SKCloudServiceCapability](skcloudservicecapability.md).

## Topics

### Setting a delegate

- [delegate](skcloudservicesetupviewcontroller/delegate.md): Deprecated. The cloud service view controller’s delegate.
- [SKCloudServiceSetupViewControllerDelegate](skcloudservicesetupviewcontrollerdelegate.md): Deprecated. A protocol that defines the methods a cloud service setup view controller can use to get the status of the view, including when it is dismissed.

### Loading the setup view

- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md): Allow eligible customers to subscribe to Apple Music.
- [SKCloudServiceSetupOptionsKey](skcloudservicesetupoptionskey.md): Keys to specify the types of setup options for a cloud service.
- [loadWithOptions:completionHandler:](skcloudservicesetupviewcontroller/load%28options_completionhandler_%29.md): Deprecated. Loads the cloud service setup view with the specified options.
- [SKArcadeService](skarcadeservice.md)

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Deprecated

- [SKCloudServiceController](skcloudservicecontroller.md): Deprecated. An object that determines the current capabilities of a person’s Music library.
