> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutechoice/summaryvariants](https://developer.apple.com/documentation/carplay/cproutechoice/summaryvariants)

# summaryVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of summary variants.

## Declaration

```swift
var summaryVariants: [String] { get }
```

<a id="Discussion"></a>

## Discussion

When creating the [CPRouteChoice](../cproutechoice.md) object, localize each variant for display to the user. The system displays the first variant that fits into the available screen space, so arrange the variants from most to least preferred display order. The array contains at least one variant.

An example variant summary is *Via I-280 South.*

## See Also

### Getting Variants

- [additionalInformationVariants](additionalinformationvariants.md): An array of variants providing additional information about the route choice.
- [selectionSummaryVariants](selectionsummaryvariants.md): An array of selection summary variants.

# summaryVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of summary variants.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * summaryVariants;
```

<a id="Discussion"></a>

## Discussion

When creating the [CPRouteChoice](../cproutechoice.md) object, localize each variant for display to the user. The system displays the first variant that fits into the available screen space, so arrange the variants from most to least preferred display order. The array contains at least one variant.

An example variant summary is *Via I-280 South.*

## See Also

### Getting Variants

- [additionalInformationVariants](additionalinformationvariants.md): An array of variants providing additional information about the route choice.
- [selectionSummaryVariants](selectionsummaryvariants.md): An array of selection summary variants.
