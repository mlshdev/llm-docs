> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanproperties/associatediccid](https://developer.apple.com/documentation/coretelephony/ctcellularplanproperties/associatediccid)

# associatedIccid (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The integrated circuit card identifier (ICCID) that identifies a SIM.

## Declaration

```swift
var associatedIccid: String? { get set }
```

## See Also

### Getting the eSIM properties

- [simCapability](simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](supportedregioncodes-yhu5.md): The available regions that your eSIM supports.
- [CTCellularPlanProperties.lifecycle](lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
- [lifecycleProperties](lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.

# associatedIccid (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The integrated circuit card identifier (ICCID) that identifies a SIM.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) NSString * associatedIccid;
```

## See Also

### Getting the eSIM properties

- [simCapability](simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](supportedregioncodes-5elox.md): The available regions that your eSIM supports.
- [CTCellularPlanLifecycleProperties](lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
- [lifecycleProperties](lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.
