> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutechoice/init(summaryvariants:additionalinformationvariants:selectionsummaryvariants:)](https://developer.apple.com/documentation/carplay/cproutechoice/init(summaryvariants:additionalinformationvariants:selectionsummaryvariants:))

# init(summaryVariants:additionalInformationVariants:selectionSummaryVariants:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a route choice.

## Declaration

```swift
init(summaryVariants: [String], additionalInformationVariants: [String], selectionSummaryVariants: [String])
```

## Parameters

- `summaryVariants`: An array of summary variants. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. You should localize each variant for display to the user. You must provide at least one variant; for example, *Via I-280 South*.
- `additionalInformationVariants`: An array of variants providing additional information about the route choice. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. You should localize each variant for display to the user. You must provide at least one variant; for example, *Fastest Route* or *Avoids Tolls*.
- `selectionSummaryVariants`: An array of selection summary variants. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. You should localize each variant for display to the user. You must provide at least one variant.

<a id="return-value"></a>

## Return Value

A newly initialized route choice.

# initWithSummaryVariants:additionalInformationVariants:selectionSummaryVariants: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a route choice.

## Declaration

```objectivec
- (instancetype) initWithSummaryVariants:(NSArray<NSString *> *) summaryVariants additionalInformationVariants:(NSArray<NSString *> *) additionalInformationVariants selectionSummaryVariants:(NSArray<NSString *> *) selectionSummaryVariants;
```

## Parameters

- `summaryVariants`: An array of summary variants. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. You should localize each variant for display to the user. You must provide at least one variant; for example, *Via I-280 South*.
- `additionalInformationVariants`: An array of variants providing additional information about the route choice. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. You should localize each variant for display to the user. You must provide at least one variant; for example, *Fastest Route* or *Avoids Tolls*.
- `selectionSummaryVariants`: An array of selection summary variants. The system displays the first variant that fits in the available screen space, so arrange the variants from most to least preferred display order. You should localize each variant for display to the user. You must provide at least one variant.

<a id="return-value"></a>

## Return Value

A newly initialized route choice.
