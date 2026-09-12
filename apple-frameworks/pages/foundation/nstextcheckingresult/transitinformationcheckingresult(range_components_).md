> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/transitinformationcheckingresult(range:components:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/transitinformationcheckingresult(range:components:))

# transitInformationCheckingResult(range:components:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified transit information.

## Declaration

```swift
class func transitInformationCheckingResult(range: NSRange, components: [NSTextCheckingKey : String]) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `components`: A dictionary containing the transit components. The currently supported keys are [airline](../nstextcheckingkey/airline.md) and [flight](../nstextcheckingkey/flight.md).

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [transitInformation](checkingtype/transitinformation.md).

# transitInformationCheckingResultWithRange:components: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified transit information.

## Declaration

```objectivec
+ (NSTextCheckingResult *) transitInformationCheckingResultWithRange:(NSRange) range components:(NSDictionary<NSString *,NSString *> *) components;
```

## Parameters

- `range`: The range of the detected result.
- `components`: A dictionary containing the transit components. The currently supported keys are [NSTextCheckingAirlineKey](../nstextcheckingkey/airline.md) and [NSTextCheckingFlightKey](../nstextcheckingkey/flight.md).

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeTransitInformation](checkingtype/transitinformation.md).
