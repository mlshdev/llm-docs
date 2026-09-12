> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationsourceinformation/isproducedbyaccessory](https://developer.apple.com/documentation/corelocation/cllocationsourceinformation/isproducedbyaccessory)

# isProducedByAccessory (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the system receives the location from an external accessory.

## Declaration

```swift
var isProducedByAccessory: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Core Location sets [isProducedByAccessory](isproducedbyaccessory.md) to `true` if the system retrieved the location from an external accessory attached to the device, such as a Made for iPhone GPS dongle or CarPlay. Otherwise, the default value is `false`.

## See Also

### Identifying the source of location data

- [isSimulatedBySoftware](issimulatedbysoftware.md): A Boolean value that indicates whether the system generates the location using on-device software simulation.

# isProducedByAccessory (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the system receives the location from an external accessory.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isProducedByAccessory;
```

<a id="Discussion"></a>

## Discussion

Core Location sets [isProducedByAccessory](isproducedbyaccessory.md) to `true` if the system retrieved the location from an external accessory attached to the device, such as a Made for iPhone GPS dongle or CarPlay. Otherwise, the default value is `false`.

## See Also

### Identifying the source of location data

- [isSimulatedBySoftware](issimulatedbysoftware.md): A Boolean value that indicates whether the system generates the location using on-device software simulation.
