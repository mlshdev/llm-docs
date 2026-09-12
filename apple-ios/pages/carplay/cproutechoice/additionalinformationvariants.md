> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutechoice/additionalinformationvariants](https://developer.apple.com/documentation/carplay/cproutechoice/additionalinformationvariants)

# additionalInformationVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of variants providing additional information about the route choice.

## Declaration

```swift
var additionalInformationVariants: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When creating a [CPRouteChoice](../cproutechoice.md) object, localize each variant for display to the user. The system displays the first variant that fits into the available screen space, so arrange the variants from most to least preferred display order. The array contains at least one variant.

Examples of additional information variants include *Fastest Route* and *Avoids Tolls*.

## See Also

### Getting Variants

- [summaryVariants](summaryvariants.md): An array of summary variants.
- [selectionSummaryVariants](selectionsummaryvariants.md): An array of selection summary variants.

# additionalInformationVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of variants providing additional information about the route choice.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * additionalInformationVariants;
```

<a id="Discussion"></a>

## Discussion

When creating a [CPRouteChoice](../cproutechoice.md) object, localize each variant for display to the user. The system displays the first variant that fits into the available screen space, so arrange the variants from most to least preferred display order. The array contains at least one variant.

Examples of additional information variants include *Fastest Route* and *Avoids Tolls*.

## See Also

### Getting Variants

- [summaryVariants](summaryvariants.md): An array of summary variants.
- [selectionSummaryVariants](selectionsummaryvariants.md): An array of selection summary variants.
