> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflight/init(airline:flightnumber:boardingtime:flightduration:departureairportgate:arrivalairportgate:)](https://developer.apple.com/documentation/intents/inflight/init(airline:flightnumber:boardingtime:flightduration:departureairportgate:arrivalairportgate:))

# init(airline:flightNumber:boardingTime:flightDuration:departureAirportGate:arrivalAirportGate:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new object containing information about a flight.

## Declaration

```swift
init(airline: INAirline, flightNumber: String, boardingTime: INDateComponentsRange?, flightDuration: INDateComponentsRange, departureAirportGate: INAirportGate, arrivalAirportGate: INAirportGate)
```

## Parameters

- `airline`: The airline on which the user is flying.
- `flightNumber`: The number of the flight. Flight numbers are specific to each airline.
- `boardingTime`: The date and time during which the flight boards.
- `flightDuration`: The date and time range for the departure and arrival times for the flight.
- `departureAirportGate`: The gate from which the flight departs.
- `arrivalAirportGate`: The gate at which the flight arrives.

<a id="return-value"></a>

## Return Value

A new [INFlight](../inflight.md) object or `nil` if one can’t be created.

# initWithAirline:flightNumber:boardingTime:flightDuration:departureAirportGate:arrivalAirportGate: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new object containing information about a flight.

## Declaration

```objectivec
- (instancetype) initWithAirline:(INAirline *) airline flightNumber:(NSString *) flightNumber boardingTime:(INDateComponentsRange *) boardingTime flightDuration:(INDateComponentsRange *) flightDuration departureAirportGate:(INAirportGate *) departureAirportGate arrivalAirportGate:(INAirportGate *) arrivalAirportGate;
```

## Parameters

- `airline`: The airline on which the user is flying.
- `flightNumber`: The number of the flight. Flight numbers are specific to each airline.
- `boardingTime`: The date and time during which the flight boards.
- `flightDuration`: The date and time range for the departure and arrival times for the flight.
- `departureAirportGate`: The gate from which the flight departs.
- `arrivalAirportGate`: The gate at which the flight arrives.

<a id="return-value"></a>

## Return Value

A new [INFlight](../inflight.md) object or `nil` if one can’t be created.
