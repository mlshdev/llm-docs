> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(mkcoordinatespan:)](https://developer.apple.com/documentation/foundation/nsvalue/init(mkcoordinatespan:))

# init(MKCoordinateSpan:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified MapKit coordinate span structure.

## Declaration

```swift
init(MKCoordinateSpan span: MKCoordinateSpan)
```

```swift
init(mkCoordinateSpan span: MKCoordinateSpan)
```

## Parameters

- `span`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the coordinate span information.

## See Also

### Related Documentation

- [MKCoordinateSpan](../../mapkit/mkcoordinatespan.md): The width and height of a map region.

### Working with Geographic Coordinate Values

- [init(MKCoordinate:)](init%28mkcoordinate_%29.md): Creates a new value object containing the specified CoreLocation geographic coordinate structure.
- [mkCoordinateValue](mkcoordinatevalue.md): The CoreLocation geographic coordinate structure representation of the value.
- [mkCoordinateSpanValue](mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.

# valueWithMKCoordinateSpan: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified MapKit coordinate span structure.

## Declaration

```objectivec
+ (NSValue *) valueWithMKCoordinateSpan:(MKCoordinateSpan) span;
```

## Parameters

- `span`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the coordinate span information.

## See Also

### Related Documentation

- [MKCoordinateSpan](../../mapkit/mkcoordinatespan.md): The width and height of a map region.

### Working with Geographic Coordinate Values

- [valueWithMKCoordinate:](init%28mkcoordinate_%29.md): Creates a new value object containing the specified CoreLocation geographic coordinate structure.
- [MKCoordinateValue](mkcoordinatevalue.md): The CoreLocation geographic coordinate structure representation of the value.
- [MKCoordinateSpanValue](mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.
