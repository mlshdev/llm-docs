> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutechoice/selectionsummaryvariants](https://developer.apple.com/documentation/carplay/cproutechoice/selectionsummaryvariants)

# selectionSummaryVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of selection summary variants.

## Declaration

```swift
var selectionSummaryVariants: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When creating a [CPRouteChoice](../cproutechoice.md) object, localize each variant for display to the user. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. The array contains at least one variant.

## See Also

### Getting Variants

- [summaryVariants](summaryvariants.md): An array of summary variants.
- [additionalInformationVariants](additionalinformationvariants.md): An array of variants providing additional information about the route choice.

# selectionSummaryVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of selection summary variants.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * selectionSummaryVariants;
```

<a id="Discussion"></a>

## Discussion

When creating a [CPRouteChoice](../cproutechoice.md) object, localize each variant for display to the user. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. The array contains at least one variant.

## See Also

### Getting Variants

- [summaryVariants](summaryvariants.md): An array of summary variants.
- [additionalInformationVariants](additionalinformationvariants.md): An array of variants providing additional information about the route choice.
