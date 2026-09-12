> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanproperties/simcapability](https://developer.apple.com/documentation/coretelephony/ctcellularplanproperties/simcapability)

# simCapability (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The available type of cellular plan that your eSIM supports.

## Declaration

```swift
var simCapability: CTCellularPlanCapability { get set }
```

<a id="discussion"></a>

## Discussion

Use to define whether your eSIM is capable of data only or data and voice. Refer to [CTCellularPlanCapability.dataOnly](../ctcellularplancapability/dataonly.md) or [CTCellularPlanCapability.dataAndVoice](../ctcellularplancapability/dataandvoice.md).

## See Also

### Getting the eSIM properties

- [associatedIccid](associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [supportedRegionCodes](supportedregioncodes-yhu5.md): The available regions that your eSIM supports.
- [CTCellularPlanProperties.lifecycle](lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
- [lifecycleProperties](lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.

# simCapability (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The available type of cellular plan that your eSIM supports.

## Declaration

```objectivec
@property (nonatomic, readwrite) CTCellularPlanCapability simCapability;
```

<a id="discussion"></a>

## Discussion

Use to define whether your eSIM is capable of data only or data and voice. Refer to [CTCellularPlanCapabilityDataOnly](../ctcellularplancapability/dataonly.md) or [CTCellularPlanCapabilityDataAndVoice](../ctcellularplancapability/dataandvoice.md).

## See Also

### Getting the eSIM properties

- [associatedIccid](associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [supportedRegionCodes](supportedregioncodes-5elox.md): The available regions that your eSIM supports.
- [CTCellularPlanLifecycleProperties](lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
- [lifecycleProperties](lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.
