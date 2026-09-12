> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplocationcoordinate3d](https://developer.apple.com/documentation/carplay/cplocationcoordinate3d)

# CPLocationCoordinate3D (Swift)

**Framework:** CarPlay  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

CPLocationCoordinate3D represents a three-dimensional coordinate with latitude, longitude, and altitude components.

## Declaration

```swift
struct CPLocationCoordinate3D
```

## Topics

### Initializers

- [init()](cplocationcoordinate3d/init%28%29.md)
- [init(latitude:longitude:altitude:)](cplocationcoordinate3d/init%28latitude_longitude_altitude_%29.md)

### Instance Properties

- [altitude](cplocationcoordinate3d/altitude.md): altitude is the coordinate’s elevation above sea level in meters. If no altitude is available, use CLLocationDistanceMax.
- [latitude](cplocationcoordinate3d/latitude.md): latitude is the coordinate’s latitude value in degrees.
- [longitude](cplocationcoordinate3d/longitude.md): longitude is the coordinate’s longitude value in degrees.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CPLocationCoordinate3D (Objective-C)

**Framework:** CarPlay  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

CPLocationCoordinate3D represents a three-dimensional coordinate with latitude, longitude, and altitude components.

## Declaration

```objectivec
typedef struct { ... } CPLocationCoordinate3D;
```

## Topics

### Instance Properties

- [altitude](cplocationcoordinate3d/altitude.md): altitude is the coordinate’s elevation above sea level in meters. If no altitude is available, use CLLocationDistanceMax.
- [latitude](cplocationcoordinate3d/latitude.md): latitude is the coordinate’s latitude value in degrees.
- [longitude](cplocationcoordinate3d/longitude.md): longitude is the coordinate’s longitude value in degrees.
