> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkplacemark/init(coordinate:postaladdress:)](https://developer.apple.com/documentation/mapkit/mkplacemark/init(coordinate:postaladdress:))

# init(coordinate:postalAddress:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.12+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates and returns a placemark object with the specified coordinate and postal address from the user’s Contacts database.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, postalAddress: CNPostalAddress)
```

## Parameters

- `coordinate`: The geographic coordinate to associate with the placemark.
- `postalAddress`: An object containing the address information from the Contacts framework.

<a id="return-value"></a>

## Return Value

An initialized [MKPlacemark](../mkplacemark.md) object.

## See Also

### Creating a placemark object

- [init(coordinate:)](init%28coordinate_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate.
- [init(coordinate:addressDictionary:)](init%28coordinate_addressdictionary_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate and Address Book dictionary.

# initWithCoordinate:postalAddress: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.12+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates and returns a placemark object with the specified coordinate and postal address from the user’s Contacts database.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate postalAddress:(CNPostalAddress *) postalAddress;
```

## Parameters

- `coordinate`: The geographic coordinate to associate with the placemark.
- `postalAddress`: An object containing the address information from the Contacts framework.

<a id="return-value"></a>

## Return Value

An initialized [MKPlacemark](../mkplacemark.md) object.

## See Also

### Creating a placemark object

- [initWithCoordinate:](init%28coordinate_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate.
- [initWithCoordinate:addressDictionary:](init%28coordinate_addressdictionary_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate and Address Book dictionary.
