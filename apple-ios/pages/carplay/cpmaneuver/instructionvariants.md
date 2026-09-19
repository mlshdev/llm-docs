> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaneuver/instructionvariants

# instructionVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of instruction variants for the maneuver.

## Declaration

```swift
var instructionVariants: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the user, and make sure the array contains at least one variant. The system displays the first variant that fits into the available screen space, so arrange the variants in order from most- to least-preferred.

> **Note**

>  If you provide both [instructionVariants](instructionvariants.md) and [attributedInstructionVariants](attributedinstructionvariants.md), the system displays instructions from the attributed instruction variants array.

# instructionVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of instruction variants for the maneuver.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * instructionVariants;
```

<a id="Discussion"></a>

## Discussion

Localize each variant for display to the user, and make sure the array contains at least one variant. The system displays the first variant that fits into the available screen space, so arrange the variants in order from most- to least-preferred.

> **Note**

>  If you provide both [instructionVariants](instructionvariants.md) and [attributedInstructionVariants](attributedinstructionvariants.md), the system displays instructions from the attributed instruction variants array.
