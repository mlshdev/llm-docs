> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedirectioncoordinator/devicedirections

# deviceDirections (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The current direction of each camera the coordinator monitors, in relation to its view.

## Declaration

```swift
var deviceDirections: AVCaptureDeviceDirectionMap { get }
```

## Mentioned In

- [Choosing a camera by the direction it faces](../choosing-a-camera-by-the-direction-it-faces.md)

<a id="Discussion"></a>

## Discussion

The map groups the device types you passed at initialization by the direction they face. One array holds the devices that face the same direction as the view, and the other holds the devices that face away from it. Reading this property gives you the state at that moment. The change handler reports later changes.

> **Note**

> This property is an empty [AVCaptureDeviceDirectionMap](../avcapturedevicedirectionmap.md) until the coordinator calls its change handler for the first time. Treat that first callback, rather than initialization, as the point at which you know the directions.

# deviceDirections (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The current direction of each camera the coordinator monitors, in relation to its view.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDeviceDirectionMap * deviceDirections;
```

## Mentioned In

- [Choosing a camera by the direction it faces](../choosing-a-camera-by-the-direction-it-faces.md)

<a id="Discussion"></a>

## Discussion

The map groups the device types you passed at initialization by the direction they face. One array holds the devices that face the same direction as the view, and the other holds the devices that face away from it. Reading this property gives you the state at that moment. The change handler reports later changes.

> **Note**

> This property is an empty [AVCaptureDeviceDirectionMap](../avcapturedevicedirectionmap.md) until the coordinator calls its change handler for the first time. Treat that first callback, rather than initialization, as the point at which you know the directions.
