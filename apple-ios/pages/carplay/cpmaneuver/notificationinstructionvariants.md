> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/notificationinstructionvariants](https://developer.apple.com/documentation/carplay/cpmaneuver/notificationinstructionvariants)

# notificationInstructionVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of instruction variants for notification banners.

## Declaration

```swift
var notificationInstructionVariants: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the user, and make sure the array contains at least one variant. The system displays the first variant that fits into the available screen space, so arrange the variants in order from most- to least-preferred.

> **Note**

>  If you provide both [notificationInstructionVariants](notificationinstructionvariants.md) and [notificationAttributedInstructionVariants](notificationattributedinstructionvariants.md), the system displays instructions from the attributed instruction variants array. If you don’t provide notification variants, the system checks for [attributedInstructionVariants](attributedinstructionvariants.md), and then [instructionVariants](instructionvariants.md).

## See Also

### Providing instructions

- [dashboardInstructionVariants](dashboardinstructionvariants.md): An array of instruction variants for the CarPlay dashboard.

# notificationInstructionVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An array of instruction variants for notification banners.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * notificationInstructionVariants;
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the user, and make sure the array contains at least one variant. The system displays the first variant that fits into the available screen space, so arrange the variants in order from most- to least-preferred.

> **Note**

>  If you provide both [notificationInstructionVariants](notificationinstructionvariants.md) and [notificationAttributedInstructionVariants](notificationattributedinstructionvariants.md), the system displays instructions from the attributed instruction variants array. If you don’t provide notification variants, the system checks for [attributedInstructionVariants](attributedinstructionvariants.md), and then [instructionVariants](instructionvariants.md).

## See Also

### Providing instructions

- [dashboardInstructionVariants](dashboardinstructionvariants.md): An array of instruction variants for the CarPlay dashboard.
