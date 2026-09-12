> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auheadtrackingbinauralrenderer/deviceuid](https://developer.apple.com/documentation/audiotoolbox/auheadtrackingbinauralrenderer/deviceuid)

# deviceUID (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The Unique Identifier (UID) of the Bluetooth headphone device providing IMU sensor data for head tracking.

## Declaration

```swift
var deviceUID: String? { get }
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](../rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="discussion"></a>

## Discussion

The UID identifies which Bluetooth headphone device corresponds to this instance of the Audio Unit. The host sets this property when it matches a device with this instance of the Audio Unit.

The Audio Unit should monitor this property to detect when the host matches the Audio Unit with Bluetooth headphones.

This property supports Key-Value Observing (KVO).

# deviceUID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The Unique Identifier (UID) of the Bluetooth headphone device providing IMU sensor data for head tracking.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * deviceUID;
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](../rendering-spatial-audio-from-bluetooth-headphones.md)

<a id="discussion"></a>

## Discussion

The UID identifies which Bluetooth headphone device corresponds to this instance of the Audio Unit. The host sets this property when it matches a device with this instance of the Audio Unit.

The Audio Unit should monitor this property to detect when the host matches the Audio Unit with Bluetooth headphones.

This property supports Key-Value Observing (KVO).
