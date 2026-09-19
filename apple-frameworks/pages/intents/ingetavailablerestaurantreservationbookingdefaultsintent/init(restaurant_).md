> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintent/init(restaurant:)

# init(restaurant:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified restaurant.

## Declaration

```swift
init(restaurant: INRestaurant?)
```

## Parameters

- `restaurant`: The restaurant associated with the reservation.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when Maps asks for the default information to use when booking the restaurant. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithRestaurant: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified restaurant.

## Declaration

```objectivec
- (instancetype) initWithRestaurant:(INRestaurant *) restaurant;
```

## Parameters

- `restaurant`: The restaurant associated with the reservation.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when Maps asks for the default information to use when booking the restaurant. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
