> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationcoordinate2dmake(_:_:)](https://developer.apple.com/documentation/corelocation/cllocationcoordinate2dmake(_:_:))

# CLLocationCoordinate2DMake(\_:\_:) (Swift)

**Framework:** Core Location  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Formats a latitude and longitude value into a coordinate data structure format.

## Declaration

```swift
func CLLocationCoordinate2DMake(_ latitude: CLLocationDegrees, _ longitude: CLLocationDegrees) -> CLLocationCoordinate2D
```

## Parameters

- `latitude`: The latitude for the new coordinate.
- `longitude`: The longitude for the new coordinate.

<a id="return-value"></a>

## Return Value

A coordinate structure encompassing the latitude and longitude values.

## See Also

### Creating a location coordinate

- [init()](cllocationcoordinate2d/init%28%29.md): Creates a location coordinate object.
- [init(latitude:longitude:)](cllocationcoordinate2d/init%28latitude_longitude_%29.md): Creates a location coordination object with the specified latitude and longitude values.

# CLLocationCoordinate2DMake (Objective-C)

**Framework:** Core Location  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Formats a latitude and longitude value into a coordinate data structure format.

## Declaration

```objectivec
extern CLLocationCoordinate2D CLLocationCoordinate2DMake(CLLocationDegrees latitude, CLLocationDegrees longitude);
```

## Parameters

- `latitude`: The latitude for the new coordinate.
- `longitude`: The longitude for the new coordinate.

<a id="return-value"></a>

## Return Value

A coordinate structure encompassing the latitude and longitude values.
