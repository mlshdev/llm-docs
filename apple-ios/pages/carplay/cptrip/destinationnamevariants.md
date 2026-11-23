> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
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

### Deprecated

- [init(origin:destination:routeChoices:)](init%28origin_destination_routechoices_%29.md): Deprecated. Creates a trip with an origin, destination, and route choices.
- [origin](origin.md): Deprecated. The trip’s origin.
- [destination](destination.md): Deprecated. The trip’s destination.

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

### Deprecated

- [initWithOrigin:destination:routeChoices:](init%28origin_destination_routechoices_%29.md): Deprecated. Creates a trip with an origin, destination, and route choices.
- [origin](origin.md): Deprecated. The trip’s origin.
- [destination](destination.md): Deprecated. The trip’s destination.
