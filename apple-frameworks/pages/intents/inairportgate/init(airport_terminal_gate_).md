> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inairportgate/init(airport:terminal:gate:)

# init(airport:terminal:gate:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new gate object for a flight.

## Declaration

```swift
init(airport: INAirport, terminal: String?, gate: String?)
```

## Parameters

- `airport`: The airport from which a flight departs or arrives.
- `terminal`: The terminal from which a flight departs or arrives.
- `gate`: The gate identifier.

<a id="return-value"></a>

## Return Value

A new [INAirportGate](../inairportgate.md) object or `nil` if one can’t be created.

<a id="Discussion"></a>

## Discussion

You must create a new [INAirportGate](../inairportgate.md) object for both the arrival and departure gates associated with a flight.

# initWithAirport:terminal:gate: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new gate object for a flight.

## Declaration

```objectivec
- (instancetype) initWithAirport:(INAirport *) airport terminal:(NSString *) terminal gate:(NSString *) gate;
```

## Parameters

- `airport`: The airport from which a flight departs or arrives.
- `terminal`: The terminal from which a flight departs or arrives.
- `gate`: The gate identifier.

<a id="return-value"></a>

## Return Value

A new [INAirportGate](../inairportgate.md) object or `nil` if one can’t be created.

<a id="Discussion"></a>

## Discussion

You must create a new [INAirportGate](../inairportgate.md) object for both the arrival and departure gates associated with a flight.
