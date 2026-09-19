> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptrip/destinationnamevariants

# destinationNameVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 27.0) · iPadOS 17.4+ (deprecated in 27.0) · Mac Catalyst 17.4+ (deprecated in 27.0)

An array of strings that represents the names of the destination for this trip, arranged from most to least preferred.

## Declaration

```swift
var destinationNameVariants: [String]? { get set }
```

<a id="discussion"></a>

## Discussion

You need to provide at least one variant. Present the variant strings as localized, displayable content.

## See Also

### Getting Route Choices

- [routeChoices](routechoices.md): The list of route choices for the trip.

# destinationNameVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 27.0) · iPadOS 17.4+ (deprecated in 27.0) · Mac Catalyst 17.4+ (deprecated in 27.0)

An array of strings that represents the names of the destination for this trip, arranged from most to least preferred.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * destinationNameVariants;
```

<a id="discussion"></a>

## Discussion

You need to provide at least one variant. Present the variant strings as localized, displayable content.

## See Also

### Getting Route Choices

- [routeChoices](routechoices.md): The list of route choices for the trip.
