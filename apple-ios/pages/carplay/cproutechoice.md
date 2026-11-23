> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cproutechoice

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

### Creating a route choice

- [init(summaryVariants:additionalInformationVariants:selectionSummaryVariants:)](cproutechoice/init%28summaryvariants_additionalinformationvariants_selectionsummaryvariants_%29.md): Creates a route choice.

### Getting the variant details

- [summaryVariants](cproutechoice/summaryvariants.md): An array of summary variants.
- [additionalInformationVariants](cproutechoice/additionalinformationvariants.md): An array of variants providing additional information about the route choice.
- [selectionSummaryVariants](cproutechoice/selectionsummaryvariants.md): An array of selection summary variants.

### Providing app-specific data

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

### Route details

- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPRouteDetail](cproutedetail.md)
- [CPRouteSegment](cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPRerouteReason](cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [CPRouteSource](cproutesource.md)
- [NSStringFromCPRerouteReason(\_:)](nsstringfromcpreroutereason%28__%29.md)

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

### Creating a route choice

- [initWithSummaryVariants:additionalInformationVariants:selectionSummaryVariants:](cproutechoice/init%28summaryvariants_additionalinformationvariants_selectionsummaryvariants_%29.md): Creates a route choice.

### Getting the variant details

- [summaryVariants](cproutechoice/summaryvariants.md): An array of summary variants.
- [additionalInformationVariants](cproutechoice/additionalinformationvariants.md): An array of variants providing additional information about the route choice.
- [selectionSummaryVariants](cproutechoice/selectionsummaryvariants.md): An array of selection summary variants.

### Providing app-specific data

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

### Route details

- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPRouteDetail](cproutedetail.md)
- [CPRouteSegment](cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPRerouteReason](cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [CPRouteSource](cproutesource.md)
- [NSStringFromCPRerouteReason](nsstringfromcpreroutereason%28__%29.md)
