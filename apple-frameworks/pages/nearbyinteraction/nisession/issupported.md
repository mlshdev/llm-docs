> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/issupported](https://developer.apple.com/documentation/nearbyinteraction/nisession/issupported)

# isSupported (Swift)

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · watchOS 7.3+ (deprecated in 9.0)

A Boolean value that indicates whether the device supports basic interaction-session functionality.

## Declaration

```swift
class var isSupported: Bool { get }
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This property is deprecated.

<a id="Check-the-Devices-Supported-Features"></a>

### Check the Device’s Supported Features

In iOS 16 and watchOS 9, check a device’s supported features with [deviceCapabilities](devicecapabilities.md) instead of calling this function.

The value of the [supportsPreciseDistanceMeasurement](../nidevicecapability/supportsprecisedistancemeasurement.md) device capability is equivalent to this property, as demonstrated in the following code.

```swift
var isSupported : Bool
if #available(iOS 16.0, watchOS 9.0, *) {
    isSupported = NISession.deviceCapabilities.supportsPreciseDistanceMeasurement
} else {
    isSupported = NISession.isSupported
}
if isSupported {
    // Initiate a nearby interaction session.
}
```

# supported (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · watchOS 7.3+ (deprecated in 9.0)

A Boolean value that indicates whether the device supports basic interaction-session functionality.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isSupported) BOOL supported;
```

## Mentioned In

- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This property is deprecated.

<a id="Check-the-Devices-Supported-Features"></a>

### Check the Device’s Supported Features

In iOS 16 and watchOS 9, check a device’s supported features with [deviceCapabilities](devicecapabilities.md) instead of calling this function.

The value of the [supportsPreciseDistanceMeasurement](../nidevicecapability/supportsprecisedistancemeasurement.md) device capability is equivalent to this property, as demonstrated in the following code.

```swift
var isSupported : Bool
if #available(iOS 16.0, watchOS 9.0, *) {
    isSupported = NISession.deviceCapabilities.supportsPreciseDistanceMeasurement
} else {
    isSupported = NISession.isSupported
}
if isSupported {
    // Initiate a nearby interaction session.
}
```
