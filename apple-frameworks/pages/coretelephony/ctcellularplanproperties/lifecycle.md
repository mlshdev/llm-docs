> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanproperties/lifecycle](https://developer.apple.com/documentation/coretelephony/ctcellularplanproperties/lifecycle)

# CTCellularPlanProperties.lifecycle (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A type that contains lifecycle details for a time-limited cellular plan.

## Declaration

```swift
class lifecycle
```

<a id="Overview"></a>

## Overview

This type contains lifecycle details for a time-limited cellular plan, including information such as when the plan expires. The expiration date determines the installation experience and when the system deactivates the plan.

## Topics

### Specifying the expiration date

- [expirationDate](lifecycle/expirationdate.md): The date when the time-limited cellular plan expires, specified with day-level granularity.

### Initializers

- [init(coder:)](lifecycle/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Getting the eSIM properties

- [associatedIccid](associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [simCapability](simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](supportedregioncodes-yhu5.md): The available regions that your eSIM supports.
- [lifecycleProperties](lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.

# CTCellularPlanLifecycleProperties (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A type that contains lifecycle details for a time-limited cellular plan.

## Declaration

```objectivec
@interface CTCellularPlanLifecycleProperties : NSObject
```

<a id="Overview"></a>

## Overview

This type contains lifecycle details for a time-limited cellular plan, including information such as when the plan expires. The expiration date determines the installation experience and when the system deactivates the plan.

## Topics

### Specifying the expiration date

- [expirationDate](lifecycle/expirationdate.md): The date when the time-limited cellular plan expires, specified with day-level granularity.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Getting the eSIM properties

- [associatedIccid](associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [simCapability](simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](supportedregioncodes-5elox.md): The available regions that your eSIM supports.
- [lifecycleProperties](lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.
