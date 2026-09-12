> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidiscoverytoken/devicecapabilities](https://developer.apple.com/documentation/nearbyinteraction/nidiscoverytoken/devicecapabilities)

# deviceCapabilities (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · watchOS 10.0+

A protocol object that describes the nearby interaction capabilities of a person’s device.

## Declaration

```swift
@NSCopying var deviceCapabilities: any NIDeviceCapability { get }
```

## Mentioned In

- [Extending advanced direction finding and ranging](../extending-advanced-direction-finding-and-ranging.md)

<a id="Discussion"></a>

## Discussion

Use the [NIDeviceCapability](../nidevicecapability.md) instance this property returns to detect the available capabilities on a person’s device.

# deviceCapabilities (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · watchOS 10.0+

A protocol object that describes the nearby interaction capabilities of a person’s device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) id<NIDeviceCapability> deviceCapabilities;
```

## Mentioned In

- [Extending advanced direction finding and ranging](../extending-advanced-direction-finding-and-ranging.md)

<a id="Discussion"></a>

## Discussion

Use the [NIDeviceCapability](../nidevicecapability.md) instance this property returns to detect the available capabilities on a person’s device.
