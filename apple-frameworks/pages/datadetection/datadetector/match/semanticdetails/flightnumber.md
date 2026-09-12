> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/flightnumber](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/flightnumber)

# DataDetector.Match.SemanticDetails.FlightNumber

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The values the framework returns that represent an airline code and a flight number.

## Declaration

```swift
struct FlightNumber
```

## Parameters

- `FlightNumber`: A [DataDetector.Match.SemanticDetails.FlightNumber](flightnumber.md) structure.

<a id="Discussion"></a>

## Discussion

The values the data detector returns represent the International Air Transport Association (IATA) code of the airline and the flight number.

## Topics

### Characteristics of a flight number

- [airlineCode](flightnumber/airlinecode.md): A value that represents the International Air Transport Association (IATA) code of an airline.
- [flightNumber](flightnumber/flightnumber.md): A value that represent the flight number, excluding the airline code.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
