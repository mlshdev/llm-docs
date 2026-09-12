> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuihostedviewsiriproviding](https://developer.apple.com/documentation/intentsui/inuihostedviewsiriproviding)

# INUIHostedViewSiriProviding (Swift)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods for hiding portions of the default interfaces that Siri provides.

## Declaration

```swift
@MainActor protocol INUIHostedViewSiriProviding : NSObjectProtocol
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="overview"></a>

## Overview

The properties of the [INUIHostedViewSiriProviding](inuihostedviewsiriproviding.md) protocol let you notify Siri that you want to replace some parts of the standard interface with your custom content. You can never remove the entire default interface provided by Siri, but you can remove specific types of information if your view controller already provides the same information.

Implement this protocol in the view controller that you use to present custom content in your Intents UI extension. Siri supports the replacement of its map interface when displaying locations or the replacement of its message interface when showing the recipients and content of a message. Implementation of this protocol and its properties is optional.

## Topics

### Overriding the Default Behavior

- [displaysMap](inuihostedviewsiriproviding/displaysmap.md): A Boolean indicating whether your view controller replaces any default map interface.
- [displaysMessage](inuihostedviewsiriproviding/displaysmessage.md): A Boolean indicating whether your view controller replaces the default message interface that Siri provides.
- [displaysPaymentTransaction](inuihostedviewsiriproviding/displayspaymenttransaction.md): A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom UI for Siri and Maps

- [Creating an Intents UI Extension](../sirikit/creating-an-intents-ui-extension.md): Create an Intents UI app extension to customize the interfaces displayed by Siri and Maps.
- [INUIHostedViewControlling](inuihostedviewcontrolling.md): Methods for presenting custom content in the Siri and Maps interfaces.
- [INParameter](../intents/inparameter.md): A parameter of an interaction object.
- [INIntentSetImageKeyPath](../intents/inintentsetimagekeypath.md)

# INUIHostedViewSiriProviding (Objective-C)

**Framework:** IntentsUI  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods for hiding portions of the default interfaces that Siri provides.

## Declaration

```objectivec
@protocol INUIHostedViewSiriProviding <NSObject>
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="overview"></a>

## Overview

The properties of the [INUIHostedViewSiriProviding](inuihostedviewsiriproviding.md) protocol let you notify Siri that you want to replace some parts of the standard interface with your custom content. You can never remove the entire default interface provided by Siri, but you can remove specific types of information if your view controller already provides the same information.

Implement this protocol in the view controller that you use to present custom content in your Intents UI extension. Siri supports the replacement of its map interface when displaying locations or the replacement of its message interface when showing the recipients and content of a message. Implementation of this protocol and its properties is optional.

## Topics

### Overriding the Default Behavior

- [displaysMap](inuihostedviewsiriproviding/displaysmap.md): A Boolean indicating whether your view controller replaces any default map interface.
- [displaysMessage](inuihostedviewsiriproviding/displaysmessage.md): A Boolean indicating whether your view controller replaces the default message interface that Siri provides.
- [displaysPaymentTransaction](inuihostedviewsiriproviding/displayspaymenttransaction.md): A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Custom UI for Siri and Maps

- [Creating an Intents UI Extension](../sirikit/creating-an-intents-ui-extension.md): Create an Intents UI app extension to customize the interfaces displayed by Siri and Maps.
- [INUIHostedViewControlling](inuihostedviewcontrolling.md): Methods for presenting custom content in the Siri and Maps interfaces.
- [INParameter](../intents/inparameter.md): A parameter of an interaction object.
