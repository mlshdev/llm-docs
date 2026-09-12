> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inairport/init(name:iatacode:icaocode:)](https://developer.apple.com/documentation/intents/inairport/init(name:iatacode:icaocode:))

# init(name:iataCode:icaoCode:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new airport object with the specified contents and attributes.

## Declaration

```swift
init(name: String?, iataCode: String?, icaoCode: String?)
```

## Parameters

- `name`: The name of the airport.
- `iataCode`: The three-letter International Air Transport Association (IATA) code for the airport.
- `icaoCode`: The four-letter International Civil Aviation Organization (ICAO) code for the airport.

<a id="return-value"></a>

## Return Value

A new airport object or `nil` if the initializer is unable to create the object.

# initWithName:iataCode:icaoCode: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new airport object with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name iataCode:(NSString *) iataCode icaoCode:(NSString *) icaoCode;
```

## Parameters

- `name`: The name of the airport.
- `iataCode`: The three-letter International Air Transport Association (IATA) code for the airport.
- `icaoCode`: The four-letter International Civil Aviation Organization (ICAO) code for the airport.

<a id="return-value"></a>

## Return Value

A new airport object or `nil` if the initializer is unable to create the object.
