> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkplacemark/init(coordinate:)](https://developer.apple.com/documentation/mapkit/mkplacemark/init(coordinate:))

# init(coordinate:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.12+ (deprecated in 26.0) · tvOS 10.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates and returns a placemark object using the specified coordinate.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D)
```

## Parameters

- `coordinate`: The geographic coordinate to associate with the placemark.

<a id="return-value"></a>

## Return Value

An initialized [MKPlacemark](../mkplacemark.md) object.

<a id="Discussion"></a>

## Discussion

This method doesn’t fill in any of the other inherited properties describing the location.

## See Also

### Creating a placemark object

- [init(coordinate:postalAddress:)](init%28coordinate_postaladdress_%29.md): Deprecated. Creates and returns a placemark object with the specified coordinate and postal address from the user’s Contacts database.
- [init(coordinate:addressDictionary:)](init%28coordinate_addressdictionary_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate and Address Book dictionary.

# initWithCoordinate: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 26.0) · iPadOS 10.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.12+ (deprecated in 26.0) · tvOS 10.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates and returns a placemark object using the specified coordinate.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: The geographic coordinate to associate with the placemark.

<a id="return-value"></a>

## Return Value

An initialized [MKPlacemark](../mkplacemark.md) object.

<a id="Discussion"></a>

## Discussion

This method doesn’t fill in any of the other inherited properties describing the location.

## See Also

### Creating a placemark object

- [initWithCoordinate:postalAddress:](init%28coordinate_postaladdress_%29.md): Deprecated. Creates and returns a placemark object with the specified coordinate and postal address from the user’s Contacts database.
- [initWithCoordinate:addressDictionary:](init%28coordinate_addressdictionary_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate and Address Book dictionary.
