> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurant/restaurantidentifier](https://developer.apple.com/documentation/intents/inrestaurant/restaurantidentifier)

# restaurantIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A unique identifier for the restaurant.

## Declaration

```swift
var restaurantIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

You provide Apple with unique identifiers for the restaurants that your app supports. When the user selects a restaurant, Apple fills this property with the unique identifier that you provided.

## See Also

### Accessing the Restaurant Information

- [name](name.md): The name of the restaurant.
- [location](location.md): The location of the restaurant.
- [vendorIdentifier](vendoridentifier.md): The provider of the restaurant data.

# restaurantIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A unique identifier for the restaurant.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * restaurantIdentifier;
```

```objectivec
@property (atomic, copy) NSString * restaurantIdentifier;
```

<a id="Discussion"></a>

## Discussion

You provide Apple with unique identifiers for the restaurants that your app supports. When the user selects a restaurant, Apple fills this property with the unique identifier that you provided.

## See Also

### Accessing the Restaurant Information

- [name](name.md): The name of the restaurant.
- [location](location.md): The location of the restaurant.
- [vendorIdentifier](vendoridentifier.md): The provider of the restaurant data.
