> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/snapshot/point(for:)](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/snapshot/point(for:))

# point(for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Converts the specified map coordinate to a point in the coordinate space of the image.

## Declaration

```swift
func point(for coordinate: CLLocationCoordinate2D) -> CGPoint
```

```swift
func point(for coordinate: CLLocationCoordinate2D) -> NSPoint
```

## Parameters

- `coordinate`: A map coordinate that you want to convert.

<a id="return-value"></a>

## Return Value

The point in the image’s coordinate space that corresponds to the map location.

<a id="Discussion"></a>

## Discussion

If you want to display additional views or content on top of the image, you can use this method to find an appropriate point at which to draw those items.

# pointForCoordinate: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Converts the specified map coordinate to a point in the coordinate space of the image.

## Declaration

```objectivec
- (CGPoint) pointForCoordinate:(CLLocationCoordinate2D) coordinate;
```

```objectivec
- (NSPoint) pointForCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: A map coordinate that you want to convert.

<a id="return-value"></a>

## Return Value

The point in the image’s coordinate space that corresponds to the map location.

<a id="Discussion"></a>

## Discussion

If you want to display additional views or content on top of the image, you can use this method to find an appropriate point at which to draw those items.
