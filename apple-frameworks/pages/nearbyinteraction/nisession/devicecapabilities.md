> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nearbyinteraction/nisession/devicecapabilities

# deviceCapabilities (Swift)

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An object that communicates the device’s supported framework features.

## Declaration

```swift
class var deviceCapabilities: any NIDeviceCapability { get }
```

## Mentioned In

- [Extending advanced direction finding and ranging](../extending-advanced-direction-finding-and-ranging.md)
- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

Use the properties of the specified object to determine what features are available.

## See Also

### Ensuring feature support

- [NIDeviceCapability](../nidevicecapability.md): An interface that adds Boolean values that indicate an interaction session feature support.

# deviceCapabilities (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

An object that communicates the device’s supported framework features.

## Declaration

```objectivec
@property (class, nonatomic, readonly) id<NIDeviceCapability> deviceCapabilities;
```

## Mentioned In

- [Extending advanced direction finding and ranging](../extending-advanced-direction-finding-and-ranging.md)
- [Initiating and maintaining a session](../initiating-and-maintaining-a-session.md)

<a id="Discussion"></a>

## Discussion

Use the properties of the specified object to determine what features are available.

## See Also

### Ensuring feature support

- [NIDeviceCapability](../nidevicecapability.md): An interface that adds Boolean values that indicate an interaction session feature support.
