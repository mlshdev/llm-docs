> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintenthandling/resolverestaurant(for:completion:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintenthandling/resolverestaurant(for:completion:))

# resolveRestaurant(for:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the restaurant for which you are providing default values.

## Declaration

```swift
optional func resolveRestaurant(for intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: @escaping @Sendable (INRestaurantResolutionResult) -> Void)
```

```swift
optional func resolveRestaurant(for intent: INGetAvailableRestaurantReservationBookingDefaultsIntent) async -> INRestaurantResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution result object whose value contains the [INRestaurant](../inrestaurant.md) object that you intend to use. If you located more than one restaurant that matches the provided information, create a resolution result that asks the user to choose from among the possible options.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the restaurant you are providing default values for.

# resolveRestaurantForGetAvailableRestaurantReservationBookingDefaults:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the restaurant for which you are providing default values.

## Declaration

```objectivec
- (void) resolveRestaurantForGetAvailableRestaurantReservationBookingDefaults:(INGetAvailableRestaurantReservationBookingDefaultsIntent *) intent withCompletion:(void (^)(INRestaurantResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution result object whose value contains the [INRestaurant](../inrestaurant.md) object that you intend to use. If you located more than one restaurant that matches the provided information, create a resolution result that asks the user to choose from among the possible options.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the restaurant you are providing default values for.
