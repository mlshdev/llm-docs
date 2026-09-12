> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/dashboardinstructionvariants](https://developer.apple.com/documentation/carplay/cpmaneuver/dashboardinstructionvariants)

# dashboardInstructionVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of instruction variants for the CarPlay dashboard.

## Declaration

```swift
var dashboardInstructionVariants: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the user, and make sure the array contains at least one variant. The system displays the first variant that fits into the available screen space, so arrange the variants in order from most- to least-preferred.

> **Note**

>  If you provide both [dashboardInstructionVariants](dashboardinstructionvariants.md) and [dashboardAttributedInstructionVariants](dashboardattributedinstructionvariants.md), the system displays instructions from the attributed instruction variants array. If you don’t provide dashboard variants, the system checks for [attributedInstructionVariants](attributedinstructionvariants.md), and then [instructionVariants](instructionvariants.md).

## See Also

### Providing instructions

- [notificationInstructionVariants](notificationinstructionvariants.md): An array of instruction variants for notification banners.

# dashboardInstructionVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of instruction variants for the CarPlay dashboard.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * dashboardInstructionVariants;
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the user, and make sure the array contains at least one variant. The system displays the first variant that fits into the available screen space, so arrange the variants in order from most- to least-preferred.

> **Note**

>  If you provide both [dashboardInstructionVariants](dashboardinstructionvariants.md) and [dashboardAttributedInstructionVariants](dashboardattributedinstructionvariants.md), the system displays instructions from the attributed instruction variants array. If you don’t provide dashboard variants, the system checks for [attributedInstructionVariants](attributedinstructionvariants.md), and then [instructionVariants](instructionvariants.md).

## See Also

### Providing instructions

- [notificationInstructionVariants](notificationinstructionvariants.md): An array of instruction variants for notification banners.
