> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/remotedeviceidentifier](https://developer.apple.com/documentation/swiftui/environmentvalues/remotedeviceidentifier)

# remoteDeviceIdentifier

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

An opaque object that identifies the device on which the scene (from which this value is accessed from) is being presented on.

## Declaration

```swift
var remoteDeviceIdentifier: RemoteDeviceIdentifier? { get }
```

<a id="discussion"></a>

## Discussion

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
