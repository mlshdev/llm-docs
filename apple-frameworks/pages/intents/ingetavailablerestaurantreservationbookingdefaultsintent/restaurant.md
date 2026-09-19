> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintent/restaurant

# restaurant (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The restaurant to use when determining any default values.

## Declaration

```swift
@NSCopying var restaurant: INRestaurant? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the specified restaurant to identify any restaurant-related requirements.

# restaurant (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The restaurant to use when determining any default values.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurant * restaurant;
```

```objectivec
@property (atomic, copy, nullable) INRestaurant * restaurant;
```

<a id="Discussion"></a>

## Discussion

Use the specified restaurant to identify any restaurant-related requirements.
