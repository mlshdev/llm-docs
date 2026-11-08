> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessory-features

# Accessory features

**Framework:** Accessory Transport Extension  
**Kind:** API Collection

Declare and handle the features that carry data between your accessory and your app.

<a id="Overview"></a>

## Overview

With the exception of Wi-Fi network sharing, every scenario Accessory Transport Extension supports for moving data between a connected accessory and an iPhone relies on the *feature* model. You implement an [AccessoryDataProvider](accessorydataprovider.md) extension that declares the features you support, and the system routes each feature’s data to the handler you write. Each session is scoped to one feature. The framework defines the complete set of features, and you can’t add your own, though a worker feature lets you carry data in a format your app defines.

Other frameworks extend the feature model to add their own features. The exception is the accessory worker and accessory GPU worker, which the Accessory Transport Extension framework defines directly:

- **Notification forwarding**: Delivers iOS system notifications to your accessory. See [NotificationsForwarding](../accessorynotifications/notificationsforwarding.md) and [Receiving iOS notifications on an accessory](receiving-ios-notifications-on-an-accessory.md).
- **Live Activity forwarding**: Delivers Live Activity status updates and alerts to your accessory. See [LiveActivityForwarding](../accessoryliveactivities/liveactivityforwarding.md).
- **Audio accessory head tracking**: Forwards head-position sensor data from an audio accessory you develop to the system’s spatial audio renderer. See [AudioAccessoryHeadTracking](../audioaccessorykit/audioaccessoryheadtracking.md).
- **Accessory worker**: Carries data in a format your app defines between your data provider and transport extensions. See [AccessoryWorker](accessoryworker.md) and [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md).
- **Accessory GPU worker**: Carries data, like an accessory worker, under a sandbox profile that permits GPU access. See [AccessoryGPUWorker](accessorygpuworker.md).

For a framework-defined feature, such as notification forwarding, the system starts the session. For example, an incoming iOS system notification starts a notification-forwarding session without a call from your app.

Worker features differ from framework-defined features in two ways. Your app defines the format for both sending and receiving, and your transport extension starts every session in response to an event from your accessory. Enroll a worker feature for each accessory by calling `AccessoryWorker/requestAuthorization(for:)`. When your app enrolls a feature, the enrollment takes effect immediately without prompting the person. An enrolled features stays enrolled for the life of the accessory’s pairing. Other features use the authorization flow of their owning framework.

<a id="Declare-a-feature"></a>

## Declare a feature

To use a feature:

1. Add the feature’s identifier to your data provider extension’s `EXCapabilities` key.
2. Declare the feature in your extension’s `extensionPoint` body with a closure that creates your handler.
3. Implement the handler to respond to the feature’s events.
4. For a worker feature, enroll the feature for the accessory from your app during initial pairing with [AccessorySetupKit](../accessorysetupkit.md), or from your transport extension, and then open the session from your transport extension.

> **Note**

> The `EXCapabilities` key is the feature’s [featureID](accessoryfeature/featureid.md); it differs from [sessionID](transportmessage/sessionid.md), a UUID that your transport extension reads to discern which feature an incoming message belongs to for a paired accessory. The data provider’s [sessionID](accessoryfeaturesession/sessionid.md) shares that value.

<a id="Open-a-worker-feature-session"></a>

## Open a worker feature session

A feature session carries data for a single feature. It’s distinct from the [AccessoryTransportSession](accessorytransportsession.md) that connects your transport extension to the system for one accessory. Every feature defines a capability that conforms to [AccessoryFeatureSession](accessoryfeaturesession.md), and is launched in the data provider. Worker features also utilize a transport extension, which conforms to [AccessoryFeatureRuntimeSession](accessoryfeatureruntimesession.md). For the other features, the system delivers data to your transport extension through [messageReceived(\_:completion:)](accessorytransportsession/eventhandler/messagereceived%28__completion_%29.md).

To open the data provider’s feature session, call [makeFeatureSession(\_:)](accessorytransportsession/makefeaturesession%28__%29.md) from your transport extension when your accessory reports a change, then call [activate()](accessoryfeatureruntimesession/activate%28%29.md). The system permits one live session per feature for each accessory. For more information on worker features, see [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md).

<a id="Confirm-the-start-of-a-session"></a>

## Confirm the start of a session

The system calls [sessionStarted(\_:)](accessoryfeatureruntimesessionhandler/sessionstarted%28__%29.md) once your feature session is ready to run.

Returning from [activate()](accessoryfeatureruntimesession/activate%28%29.md) doesn’t mean the session started. If your app hasn’t enrolled the feature for the accessory, `activate()` returns without an error and the session stays registered, with no timeout. Check the feature’s enrollment status (for example, with `AccessoryWorker/authorizationStatus(for:)`) before opening a session, rather than relying on an error.

## Topics

### Declaring features

- [AccessoryFeature](accessoryfeature.md): A protocol that identifies a kind of work that the framework carries between your accessory and your app.
- [AccessoryDataProvider](accessorydataprovider.md): A protocol for an extension that provides your accessory’s data for one or more of the framework’s features.

### Managing feature sessions

- [AccessoryFeatureSession](accessoryfeaturesession.md): A protocol that represents the session’s data provider.
- [AccessoryFeatureSessionHandler](accessoryfeaturesessionhandler.md): Beta. A protocol that receives events from a data provider extension’s feature session.
- [AccessoryFeatureRuntimeSession](accessoryfeatureruntimesession.md): Beta. A protocol that represents a feature session’s transport extension.
- [AccessoryFeatureRuntimeSessionHandler](accessoryfeatureruntimesessionhandler.md): Beta. A protocol that receives events from a transport extension’s feature session.

### Checking feature authorization

- [AccessoryFeatureAuthorizationStatus](accessoryfeatureauthorizationstatus.md): Beta. A status that describes whether the system authorizes a feature for an accessory.

### Supporting background work

- [AccessoryWorker](accessoryworker.md): Beta. A feature that carries data between your data provider and transport extensions.
- [AccessoryGPUWorker](accessorygpuworker.md): Beta. A feature for GPU work that carries data between your data provider and transport extensions.
