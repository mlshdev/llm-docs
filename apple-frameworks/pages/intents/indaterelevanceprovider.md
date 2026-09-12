> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indaterelevanceprovider](https://developer.apple.com/documentation/intents/indaterelevanceprovider)

# INDateRelevanceProvider (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The provider class that specifies a relevant day and time.

## Declaration

```swift
class INDateRelevanceProvider
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

## Topics

### Creating a Date Relevance Provider

- [init(start:end:)](indaterelevanceprovider/init%28start_end_%29.md): Creates a relevance provider with the specified start and end dates.

### Getting the Relevant Dates

- [startDate](indaterelevanceprovider/startdate.md): The relevant start date.
- [endDate](indaterelevanceprovider/enddate.md): The relevant end date.

### Initializers

- [init(startDate:endDate:)](indaterelevanceprovider/init%28startdate_enddate_%29.md)

## Relationships

### Inherits From

- [INRelevanceProvider](inrelevanceprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Relevance Providers

- [INRelevanceProvider](inrelevanceprovider.md): An abstract class that represents a relevance provider.
- [INDailyRoutineRelevanceProvider](indailyroutinerelevanceprovider.md): The provider class that specifies a relevant daily routine.
- [INLocationRelevanceProvider](inlocationrelevanceprovider.md): The provider class that specifies a relevant location.

# INDateRelevanceProvider (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The provider class that specifies a relevant day and time.

## Declaration

```objectivec
@interface INDateRelevanceProvider : INRelevanceProvider
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

## Topics

### Creating a Date Relevance Provider

- [initWithStartDate:endDate:](indaterelevanceprovider/init%28start_end_%29.md): Creates a relevance provider with the specified start and end dates.

### Getting the Relevant Dates

- [startDate](indaterelevanceprovider/startdate.md): The relevant start date.
- [endDate](indaterelevanceprovider/enddate.md): The relevant end date.

## Relationships

### Inherits From

- [INRelevanceProvider](inrelevanceprovider.md)

## See Also

### Relevance Providers

- [INRelevanceProvider](inrelevanceprovider.md): An abstract class that represents a relevance provider.
- [INDailyRoutineRelevanceProvider](indailyroutinerelevanceprovider.md): The provider class that specifies a relevant daily routine.
- [INLocationRelevanceProvider](inlocationrelevanceprovider.md): The provider class that specifies a relevant location.
