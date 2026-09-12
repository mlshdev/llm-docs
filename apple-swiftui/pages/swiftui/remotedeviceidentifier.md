> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/remotedeviceidentifier](https://developer.apple.com/documentation/swiftui/remotedeviceidentifier)

# RemoteDeviceIdentifier

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

An opaque type that identifies a remote device displaying scene content in a [RemoteImmersiveSpace](remoteimmersivespace.md).

## Declaration

```swift
struct RemoteDeviceIdentifier
```

<a id="overview"></a>

## Overview

Access this from the [remoteDeviceIdentifier](environmentvalues/remotedeviceidentifier.md) environment property in a remote scene to get the identifier for that scene’s device.

When accessed in a context that is being presented on the local device, this value will be `nil`.

This identifier can also be used to initialize an `ARKitSession` associated with the remote device.

```swift
struct SolarSystem: CompositorContent {
    @Environment(\.remoteDeviceIdentifier) private var deviceID

    var body: some CompositorContent {
        RemoteImmersiveSpace {
            CompositorLayer { layerRenderer in
                // Create an ARSession for the device
                let arSession = ARKitSession(deviceID)

                // Set up and run the Metal render loop.
                let renderThread = Thread {
                    let engine = solar_engine_create(
                        layerRenderer, arSession)
                    solar_engine_render_loop(engine)
                }
                renderThread.name = "Render Thread"
                renderThread.start()
            }
        }
    }
}
```

> **Note**

> This identifier is not stable across app launches.

## Topics

### Instance Properties

- [cDevice](remotedeviceidentifier/cdevice.md): Returns the `ar_device` associated with this device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling remote immersive spaces

- [RemoteImmersiveSpace](remoteimmersivespace.md): A scene that presents its content in an unbounded space on a remote device.
