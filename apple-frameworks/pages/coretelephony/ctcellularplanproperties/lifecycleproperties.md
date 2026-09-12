> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanproperties/lifecycleproperties](https://developer.apple.com/documentation/coretelephony/ctcellularplanproperties/lifecycleproperties)

# lifecycleProperties (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The lifecycle details for a time-limited cellular plan.

## Declaration

```swift
var lifecycleProperties: CTCellularPlanProperties.lifecycle? { get set }
```

<a id="Overview"></a>

## Overview

Use this property to specify lifecycle details for a time-limited cellular plan. When this property is present, the system treats the cellular plan as a temporary eSIM. Set this property to `nil` if the cellular plan doesn’t have an associated expiration date.

## See Also

### Getting the eSIM properties

- [associatedIccid](associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [simCapability](simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](supportedregioncodes-yhu5.md): The available regions that your eSIM supports.
- [CTCellularPlanProperties.lifecycle](lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.

# lifecycleProperties (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The lifecycle details for a time-limited cellular plan.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) CTCellularPlanLifecycleProperties * lifecycleProperties;
```

<a id="Overview"></a>

## Overview

Use this property to specify lifecycle details for a time-limited cellular plan. When this property is present, the system treats the cellular plan as a temporary eSIM. Set this property to `nil` if the cellular plan doesn’t have an associated expiration date.

## See Also

### Getting the eSIM properties

- [associatedIccid](associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [simCapability](simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](supportedregioncodes-5elox.md): The available regions that your eSIM supports.
- [CTCellularPlanLifecycleProperties](lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
