> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clplacemark/init(placemark:)](https://developer.apple.com/documentation/corelocation/clplacemark/init(placemark:))

# init(placemark:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes and returns a placemark object from another placemark object.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
init(placemark: CLPlacemark)
```

## Parameters

- `placemark`: The placemark object to use as the source of the data for the new object.

<a id="return-value"></a>

## Return Value

An initialized placemark object.

<a id="Discussion"></a>

## Discussion

You can use this method to transfer information from one placemark object to another placemark object.

# initWithPlacemark: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes and returns a placemark object from another placemark object.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
- (instancetype) initWithPlacemark:(CLPlacemark *) placemark;
```

## Parameters

- `placemark`: The placemark object to use as the source of the data for the new object.

<a id="return-value"></a>

## Return Value

An initialized placemark object.

<a id="Discussion"></a>

## Discussion

You can use this method to transfer information from one placemark object to another placemark object.
