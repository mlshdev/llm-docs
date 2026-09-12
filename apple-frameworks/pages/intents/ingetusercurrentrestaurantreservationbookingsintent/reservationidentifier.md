> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/reservationidentifier](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintent/reservationidentifier)

# reservationIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An identifier to use when searching for the user’s reservations.

## Declaration

```swift
var reservationIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When the system wants to display a specific reservation, this property contains the identifier for that reservation. Use this identifier to fetch only the specified reservation. When this property is `nil`, return all of the user’s current reservations, or those specific to the restaurant listed in the [restaurant](restaurant.md) property.

## See Also

### Getting the Search Parameters

- [restaurant](restaurant.md): A restaurant to use as a filter when searching for reservations.

# reservationIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An identifier to use when searching for the user’s reservations.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * reservationIdentifier;
```

```objectivec
@property (atomic, copy, nullable) NSString * reservationIdentifier;
```

<a id="Discussion"></a>

## Discussion

When the system wants to display a specific reservation, this property contains the identifier for that reservation. Use this identifier to fetch only the specified reservation. When this property is `nil`, return all of the user’s current reservations, or those specific to the restaurant listed in the [restaurant](restaurant.md) property.

## See Also

### Getting the Search Parameters

- [restaurant](restaurant.md): A restaurant to use as a filter when searching for reservations.
