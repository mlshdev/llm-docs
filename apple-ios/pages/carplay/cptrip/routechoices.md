> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptrip/routechoices

# routeChoices (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The list of route choices for the trip.

## Declaration

```swift
var routeChoices: [CPRouteChoice] { get }
```

## See Also

### Getting Route Choices

- [destinationNameVariants](destinationnamevariants.md): Deprecated. An array of strings that represents the names of the destination for this trip, arranged from most to least preferred.

# routeChoices (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The list of route choices for the trip.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPRouteChoice *> * routeChoices;
```

## See Also

### Getting Route Choices

- [destinationNameVariants](destinationnamevariants.md): Deprecated. An array of strings that represents the names of the destination for this trip, arranged from most to least preferred.
