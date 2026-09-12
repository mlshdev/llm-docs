> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplancapability](https://developer.apple.com/documentation/coretelephony/ctcellularplancapability)

# CTCellularPlanCapability (Swift)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 10.10+

The type of cellular plan available for an eSIM.

## Declaration

```swift
enum CTCellularPlanCapability
```

## Topics

### Defining cellular data plans

- [init(rawValue:)](ctcellularplancapability/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [CTCellularPlanCapability.dataAndVoice](ctcellularplancapability/dataandvoice.md): The cellular plan is available for data and voice.
- [CTCellularPlanCapability.dataOnly](ctcellularplancapability/dataonly.md): The cellular plan is available for data only.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### eSIM

- [CTCellularPlanProvisioning](ctcellularplanprovisioning.md): An object you use to download and install a carrier eSIM.
- [CTCellularPlanProvisioningRequest](ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanProperties](ctcellularplanproperties.md): An object you use for an eSIM.

# CTCellularPlanCapability (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 10.10+

The type of cellular plan available for an eSIM.

## Declaration

```objectivec
enum CTCellularPlanCapability : NSInteger;
```

## Topics

### Defining cellular data plans

- [CTCellularPlanCapabilityDataAndVoice](ctcellularplancapability/dataandvoice.md): The cellular plan is available for data and voice.
- [CTCellularPlanCapabilityDataOnly](ctcellularplancapability/dataonly.md): The cellular plan is available for data only.

## See Also

### eSIM

- [CTCellularPlanProvisioning](ctcellularplanprovisioning.md): An object you use to download and install a carrier eSIM.
- [CTCellularPlanProvisioningRequest](ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanProperties](ctcellularplanproperties.md): An object you use for an eSIM.
