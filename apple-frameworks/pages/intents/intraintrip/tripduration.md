> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intraintrip/tripduration](https://developer.apple.com/documentation/intents/intraintrip/tripduration)

# tripDuration (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range for the departure and arrival of the train.

## Declaration

```swift
@NSCopying var tripDuration: INDateComponentsRange { get }
```

## See Also

### Getting the Train Trip Information

- [provider](provider.md): The name for the train company.
- [trainName](trainname.md): The name of the train.
- [trainNumber](trainnumber.md): The unique identifier for the train.
- [departureStationLocation](departurestationlocation.md): The station from which the train departs.
- [departurePlatform](departureplatform.md): The platform from which the train departs.
- [arrivalStationLocation](arrivalstationlocation.md): The station at which the train arrives.
- [arrivalPlatform](arrivalplatform.md): The platform at which the train arrives.

# tripDuration (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range for the departure and arrival of the train.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * tripDuration;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * tripDuration;
```

## See Also

### Getting the Train Trip Information

- [provider](provider.md): The name for the train company.
- [trainName](trainname.md): The name of the train.
- [trainNumber](trainnumber.md): The unique identifier for the train.
- [departureStationLocation](departurestationlocation.md): The station from which the train departs.
- [departurePlatform](departureplatform.md): The platform from which the train departs.
- [arrivalStationLocation](arrivalstationlocation.md): The station at which the train arrives.
- [arrivalPlatform](arrivalplatform.md): The platform at which the train arrives.
