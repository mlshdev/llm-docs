> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurant/init(location:name:vendoridentifier:restaurantidentifier:)](https://developer.apple.com/documentation/intents/inrestaurant/init(location:name:vendoridentifier:restaurantidentifier:))

# init(location:name:vendorIdentifier:restaurantIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a restaurant object with some identifying information.

## Declaration

```swift
init(location: CLLocation, name: String, vendorIdentifier: String, restaurantIdentifier: String)
```

## Parameters

- `location`: The location of the restaurant, specified as a geographic map coordinate. This value represents where the restaurant’s marker shows up on the map.
- `name`: The name of the restaurant.
- `vendorIdentifier`: A unique string that identifies the provider of the restaurant data. Typically, this string is your company’s domain name formatted as a reverse-DNS string such as `com.example`.
- `restaurantIdentifier`: The unique identifier that you provided Apple for the specified restaurant.

<a id="return-value"></a>

## Return Value

An initialized restaurant object or `nil` if the object could not be created.

# initWithLocation:name:vendorIdentifier:restaurantIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a restaurant object with some identifying information.

## Declaration

```objectivec
- (instancetype) initWithLocation:(CLLocation *) location name:(NSString *) name vendorIdentifier:(NSString *) vendorIdentifier restaurantIdentifier:(NSString *) restaurantIdentifier;
```

## Parameters

- `location`: The location of the restaurant, specified as a geographic map coordinate. This value represents where the restaurant’s marker shows up on the map.
- `name`: The name of the restaurant.
- `vendorIdentifier`: A unique string that identifies the provider of the restaurant data. Typically, this string is your company’s domain name formatted as a reverse-DNS string such as `com.example`.
- `restaurantIdentifier`: The unique identifier that you provided Apple for the specified restaurant.

<a id="return-value"></a>

## Return Value

An initialized restaurant object or `nil` if the object could not be created.
