> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryworker

# AccessoryWorker

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta

A feature that carries data between your data provider and transport extensions.

## Declaration

```swift
struct AccessoryWorker
```

## Mentioned In

- [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md)

<a id="overview"></a>

## Overview

An *accessory worker* exchanges information with your accessory in the background, without waiting for a person to open your app. Create an instance of this structure in the `extensionPoint` of your [AccessoryDataProvider](accessorydataprovider.md) extension, and open sessions from your transport extension with [makeFeatureSession(\_:)](accessorytransportsession/makefeaturesession%28__%29.md) in response to events from your accessory. Your app defines the data format, and the Accessory Transport Extension framework treats the data as opaque, with no additional encryption. Enroll the feature for each accessory with `requestAuthorization(for:)`. For more information, see [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md).

## Topics

### Handling data-provider sessions

- [AccessoryWorker.Handler](accessoryworker/handler.md): Beta. A handler type for the session’s data provider.
- [AccessoryWorker.Session](accessoryworker/session.md): Beta. A class that represents the data provider within a session.

### Handling transport-extension sessions

- [AccessoryWorker.FeatureSession](accessoryworker/featuresession.md): Beta. A class that represents the session’s transport extension.

### Checking authorization

- [AccessoryFeatureAuthorizationStatus](accessoryfeatureauthorizationstatus.md): Beta. A status that describes whether the system authorizes a feature for an accessory.

### Creating the feature

- [init(\_:)](accessoryworker/init%28__%29.md): Beta. Initializes a worker feature with a handler factory.

## Relationships

### Conforms To

- [AccessoryFeature](accessoryfeature.md)
- [AccessoryFeatureAuthorizing](accessoryfeatureauthorizing.md)
- [AppExtensionPoint.Capability](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/capability)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Background work

- [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md): Move data between your accessory and your app when a person’s device is asleep or your app is in the background.
- [AccessoryGPUWorker](accessorygpuworker.md): Beta. A feature for GPU work that carries data between your data provider and transport extensions.
