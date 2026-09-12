> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutechoice](https://developer.apple.com/documentation/carplay/cproutechoice)

# CPRouteChoice (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A possible route for a trip.

## Declaration

```swift
class CPRouteChoice
```

## Topics

### Creating a Route Choice

- [init(summaryVariants:additionalInformationVariants:selectionSummaryVariants:)](cproutechoice/init%28summaryvariants_additionalinformationvariants_selectionsummaryvariants_%29.md): Creates a route choice.

### Getting Variants

- [summaryVariants](cproutechoice/summaryvariants.md): An array of summary variants.
- [additionalInformationVariants](cproutechoice/additionalinformationvariants.md): An array of variants providing additional information about the route choice.
- [selectionSummaryVariants](cproutechoice/selectionsummaryvariants.md): An array of selection summary variants.

### Providing Additional Information

- [userInfo](cproutechoice/userinfo.md): An object containing custom information associated with the route choice.

### Initializers

- [init(coder:)](cproutechoice/init%28coder_%29.md)
- [init(summaryVariants:additionalInformationVariants:selectionSummaryVariants:travelEstimates:)](cproutechoice/init%28summaryvariants_additionalinformationvariants_selectionsummaryvariants_travelestimates_%29.md): Initialize a @c CPRouteChoice with summary variants, additional information variants, selection summary variants, and travel estimates.

### Instance Properties

- [travelEstimates](cproutechoice/travelestimates.md): Trip preview information such as battery, fuel, or toll information to display for this route choice.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating a Trip

- [init(origin:destination:routeChoices:)](cptrip/init%28origin_destination_routechoices_%29.md): Deprecated. Creates a trip with an origin, destination, and route choices.

# CPRouteChoice (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A possible route for a trip.

## Declaration

```objectivec
@interface CPRouteChoice : NSObject
```

## Topics

### Creating a Route Choice

- [initWithSummaryVariants:additionalInformationVariants:selectionSummaryVariants:](cproutechoice/init%28summaryvariants_additionalinformationvariants_selectionsummaryvariants_%29.md): Creates a route choice.

### Getting Variants

- [summaryVariants](cproutechoice/summaryvariants.md): An array of summary variants.
- [additionalInformationVariants](cproutechoice/additionalinformationvariants.md): An array of variants providing additional information about the route choice.
- [selectionSummaryVariants](cproutechoice/selectionsummaryvariants.md): An array of selection summary variants.

### Providing Additional Information

- [userInfo](cproutechoice/userinfo.md): An object containing custom information associated with the route choice.

### Instance Properties

- [travelEstimates](cproutechoice/travelestimates.md): Trip preview information such as battery, fuel, or toll information to display for this route choice.

### Instance Methods

- [initWithSummaryVariants:additionalInformationVariants:selectionSummaryVariants:travelEstimates:](cproutechoice/init%28summaryvariants_additionalinformationvariants_selectionsummaryvariants_travelestimates_%29.md): Initialize a @c CPRouteChoice with summary variants, additional information variants, selection summary variants, and travel estimates.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating a Trip

- [initWithOrigin:destination:routeChoices:](cptrip/init%28origin_destination_routechoices_%29.md): Deprecated. Creates a trip with an origin, destination, and route choices.
