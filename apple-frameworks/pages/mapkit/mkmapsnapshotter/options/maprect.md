> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/maprect](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/maprect)

# mapRect (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The map rectangle that you want to capture.

## Declaration

```swift
var mapRect: MKMapRect { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the map using map view points. If you assign a value for this property, the snapshotter updates the value in the [region](region.md) property to match the corresponding map rectangle as closely as possible.

The snapshotter sets the default value of this property to a map rectangle that encompasses the user’s country or region, based on the current locale information.

## See Also

### Configuring the snapshot region

- [region](region.md): The area of the map that you want to capture.
- [camera](camera.md): The camera to use when taking the map snapshot.

# mapRect (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The map rectangle that you want to capture.

## Declaration

```objectivec
@property (nonatomic, assign) MKMapRect mapRect;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the map using map view points. If you assign a value for this property, the snapshotter updates the value in the [region](region.md) property to match the corresponding map rectangle as closely as possible.

The snapshotter sets the default value of this property to a map rectangle that encompasses the user’s country or region, based on the current locale information.

## See Also

### Configuring the snapshot region

- [region](region.md): The area of the map that you want to capture.
- [camera](camera.md): The camera to use when taking the map snapshot.
