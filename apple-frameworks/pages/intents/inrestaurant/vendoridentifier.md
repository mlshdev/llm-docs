> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurant/vendoridentifier](https://developer.apple.com/documentation/intents/inrestaurant/vendoridentifier)

# vendorIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The provider of the restaurant data.

## Declaration

```swift
var vendorIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

Each provider of restaurant data has a unique identifier assigned to it by Apple. Typically, this string is your company’s domain name formatted as a reverse-DNS string such as `com.example`. You can use this string to verify that the restaurant information belongs to your company.

## See Also

### Accessing the Restaurant Information

- [name](name.md): The name of the restaurant.
- [location](location.md): The location of the restaurant.
- [restaurantIdentifier](restaurantidentifier.md): A unique identifier for the restaurant.

# vendorIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The provider of the restaurant data.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * vendorIdentifier;
```

```objectivec
@property (atomic, copy) NSString * vendorIdentifier;
```

<a id="Discussion"></a>

## Discussion

Each provider of restaurant data has a unique identifier assigned to it by Apple. Typically, this string is your company’s domain name formatted as a reverse-DNS string such as `com.example`. You can use this string to verify that the restaurant information belongs to your company.

## See Also

### Accessing the Restaurant Information

- [name](name.md): The name of the restaurant.
- [location](location.md): The location of the restaurant.
- [restaurantIdentifier](restaurantidentifier.md): A unique identifier for the restaurant.
