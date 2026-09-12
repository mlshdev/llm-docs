> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/mkcoordinatevalue](https://developer.apple.com/documentation/foundation/nsvalue/mkcoordinatevalue)

# mkCoordinateValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The CoreLocation geographic coordinate structure representation of the value.

## Declaration

```swift
var mkCoordinateValue: CLLocationCoordinate2D { get }
```

## See Also

### Related Documentation

- [CLLocationCoordinate2D](../../corelocation/cllocationcoordinate2d.md): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.

### Working with Geographic Coordinate Values

- [init(MKCoordinate:)](init%28mkcoordinate_%29.md): Creates a new value object containing the specified CoreLocation geographic coordinate structure.
- [init(MKCoordinateSpan:)](init%28mkcoordinatespan_%29.md): Creates a new value object containing the specified MapKit coordinate span structure.
- [mkCoordinateSpanValue](mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.

# MKCoordinateValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

The CoreLocation geographic coordinate structure representation of the value.

## Declaration

```objectivec
@property (atomic, readonly) CLLocationCoordinate2D MKCoordinateValue;
```

## See Also

### Related Documentation

- [CLLocationCoordinate2D](../../corelocation/cllocationcoordinate2d.md): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.

### Working with Geographic Coordinate Values

- [valueWithMKCoordinate:](init%28mkcoordinate_%29.md): Creates a new value object containing the specified CoreLocation geographic coordinate structure.
- [valueWithMKCoordinateSpan:](init%28mkcoordinatespan_%29.md): Creates a new value object containing the specified MapKit coordinate span structure.
- [MKCoordinateSpanValue](mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.
