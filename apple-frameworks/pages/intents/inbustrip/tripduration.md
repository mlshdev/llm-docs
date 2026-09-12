> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbustrip/tripduration](https://developer.apple.com/documentation/intents/inbustrip/tripduration)

# tripDuration (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The timespan of the bus trip from departure to arrival.

## Declaration

```swift
@NSCopying var tripDuration: INDateComponentsRange { get }
```

## See Also

### Getting the Bus Trip Information

- [arrivalBusStopLocation](arrivalbusstoplocation.md): The bus stop where the trip ends.
- [arrivalPlatform](arrivalplatform.md): The platform at which the bus arrives.
- [busName](busname.md): The name of the bus.
- [busNumber](busnumber.md): The number of the bus or route.
- [departureBusStopLocation](departurebusstoplocation.md): The bus stop where the bus trip starts.
- [departurePlatform](departureplatform.md): The platform from which the bus departs.
- [provider](provider.md): The business or other entity operating the bus.

# tripDuration (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The timespan of the bus trip from departure to arrival.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * tripDuration;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * tripDuration;
```

## See Also

### Getting the Bus Trip Information

- [arrivalBusStopLocation](arrivalbusstoplocation.md): The bus stop where the trip ends.
- [arrivalPlatform](arrivalplatform.md): The platform at which the bus arrives.
- [busName](busname.md): The name of the bus.
- [busNumber](busnumber.md): The number of the bus or route.
- [departureBusStopLocation](departurebusstoplocation.md): The bus stop where the bus trip starts.
- [departurePlatform](departureplatform.md): The platform from which the bus departs.
- [provider](provider.md): The business or other entity operating the bus.
