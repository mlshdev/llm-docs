> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurant/location](https://developer.apple.com/documentation/intents/inrestaurant/location)

# location (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The location of the restaurant.

## Declaration

```swift
@NSCopying var location: CLLocation { get set }
```

<a id="Discussion"></a>

## Discussion

This value represents the location on the map where the restaurant’s marker appears.

## See Also

### Accessing the Restaurant Information

- [name](name.md): The name of the restaurant.
- [restaurantIdentifier](restaurantidentifier.md): A unique identifier for the restaurant.
- [vendorIdentifier](vendoridentifier.md): The provider of the restaurant data.

# location (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The location of the restaurant.

## Declaration

```objectivec
@property (nonatomic, copy) CLLocation * location;
```

```objectivec
@property (atomic, copy) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

This value represents the location on the map where the restaurant’s marker appears.

## See Also

### Accessing the Restaurant Information

- [name](name.md): The name of the restaurant.
- [restaurantIdentifier](restaurantidentifier.md): A unique identifier for the restaurant.
- [vendorIdentifier](vendoridentifier.md): The provider of the restaurant data.
