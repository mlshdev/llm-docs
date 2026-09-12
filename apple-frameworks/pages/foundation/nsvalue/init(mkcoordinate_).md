> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(mkcoordinate:)](https://developer.apple.com/documentation/foundation/nsvalue/init(mkcoordinate:))

# init(MKCoordinate:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified CoreLocation geographic coordinate structure.

## Declaration

```swift
init(MKCoordinate coordinate: CLLocationCoordinate2D)
```

```swift
init(mkCoordinate coordinate: CLLocationCoordinate2D)
```

## Parameters

- `coordinate`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the geographic coordinate information.

## See Also

### Related Documentation

- [CLLocationCoordinate2D](../../corelocation/cllocationcoordinate2d.md): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.

### Working with Geographic Coordinate Values

- [init(MKCoordinateSpan:)](init%28mkcoordinatespan_%29.md): Creates a new value object containing the specified MapKit coordinate span structure.
- [mkCoordinateValue](mkcoordinatevalue.md): The CoreLocation geographic coordinate structure representation of the value.
- [mkCoordinateSpanValue](mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.

# valueWithMKCoordinate: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified CoreLocation geographic coordinate structure.

## Declaration

```objectivec
+ (NSValue *) valueWithMKCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the geographic coordinate information.

## See Also

### Related Documentation

- [CLLocationCoordinate2D](../../corelocation/cllocationcoordinate2d.md): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.

### Working with Geographic Coordinate Values

- [valueWithMKCoordinateSpan:](init%28mkcoordinatespan_%29.md): Creates a new value object containing the specified MapKit coordinate span structure.
- [MKCoordinateValue](mkcoordinatevalue.md): The CoreLocation geographic coordinate structure representation of the value.
- [MKCoordinateSpanValue](mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.
