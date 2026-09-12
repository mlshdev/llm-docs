> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/init(placemark:)](https://developer.apple.com/documentation/mapkit/mkmapitem/init(placemark:))

# init(placemark:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Creates and returns a map item object using the specified placemark object.

> Use init(location:address:)

## Declaration

```swift
init(placemark: MKPlacemark)
```

## Parameters

- `placemark`: The placemark object corresponding to the desired map location. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized map item object.

<a id="Discussion"></a>

## Discussion

Use this method to create a map item for an existing placemark. Don’t use it to create a map item representing the user’s location. To do that, use the [forCurrentLocation()](forcurrentlocation%28%29.md) method instead.

## See Also

### Creating map items

- [forCurrentLocation()](forcurrentlocation%28%29.md): Creates and returns a singleton map item object representing the user’s location.

# initWithPlacemark: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Creates and returns a map item object using the specified placemark object.

> Use init(location:address:)

## Declaration

```objectivec
- (instancetype) initWithPlacemark:(MKPlacemark *) placemark;
```

## Parameters

- `placemark`: The placemark object corresponding to the desired map location. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized map item object.

<a id="Discussion"></a>

## Discussion

Use this method to create a map item for an existing placemark. Don’t use it to create a map item representing the user’s location. To do that, use the [mapItemForCurrentLocation](forcurrentlocation%28%29.md) method instead.

## See Also

### Creating map items

- [mapItemForCurrentLocation](forcurrentlocation%28%29.md): Creates and returns a singleton map item object representing the user’s location.
