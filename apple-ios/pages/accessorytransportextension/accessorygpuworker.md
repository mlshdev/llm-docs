> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker

# AccessoryGPUWorker

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta

A feature for GPU work that carries data between your data provider and transport extensions.

## Declaration

```swift
struct AccessoryGPUWorker
```

## Mentioned In

- [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md)

<a id="overview"></a>

## Overview

An *accessory GPU worker* exchanges information in the background like [AccessoryWorker](accessoryworker.md) does, but runs under a more permissive sandbox profile that permits GPU access. Create an instance of this structure in the `extensionPoint` of your [AccessoryDataProvider](accessorydataprovider.md) extension, and open sessions from your transport extension with [makeFeatureSession(\_:)](accessorytransportsession/makefeaturesession%28__%29.md) in response to events from your accessory. Your app defines the data format, and the Accessory Transport Extension framework treats the data as opaque, with no additional encryption. Enroll the feature for each accessory with `requestAuthorization(for:)`. For more information, see [Sending data to an accessory in the background](sending-data-to-an-accessory-in-the-background.md).

<a id="Perform-GPU-work-in-the-background"></a>

## Perform GPU work in the background

To perform work that requires the GPU in the background, you can use [Metal](https://developer.apple.com/documentation/metal), [Metal Performance Shaders](https://developer.apple.com/documentation/metalperformanceshaders), [Core ML](https://developer.apple.com/documentation/coreml) inference on the GPU or Neural Engine, and direct GPU memory access through Metal buffers ([MTLBuffer](https://developer.apple.com/documentation/metal/mtlbuffer)).

<a id="Run-a-worker-with-scheduling-and-thermal-limits"></a>

## Run a worker with scheduling and thermal limits

Use the GPU worker only when your accessory genuinely needs it. The system launches your GPU worker extension and keeps it running for as long as your accessory requires background GPU work for the accessory’s functionality. Because background work takes a lower priority than what’s running in the foreground, the system runs it at a background quality-of-service (QoS) level rather than real-time priority.

Build your extension to tolerate system pauses or session stops under thermal pressure so you can react to the unpredictable nature of background work.

## Topics

### Handling data-provider sessions

- [AccessoryGPUWorker.Handler](accessorygpuworker/handler.md): Beta. A handler type for the session’s data provider.
- [AccessoryGPUWorker.Session](accessorygpuworker/session.md): Beta. A class that represents the data provider within a session.

### Handling transport-extension sessions

- [AccessoryGPUWorker.FeatureSession](accessorygpuworker/featuresession.md): Beta. A class that represents the session’s transport extension.

### Checking authorization

- [AccessoryFeatureAuthorizationStatus](accessoryfeatureauthorizationstatus.md): Beta. A status that describes whether the system authorizes a feature for an accessory.

### Creating the feature

- [init(\_:)](accessorygpuworker/init%28__%29.md): Beta. Initializes a GPU worker feature with a handler factory.

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
- [AccessoryWorker](accessoryworker.md): Beta. A feature that carries data between your data provider and transport extensions.
