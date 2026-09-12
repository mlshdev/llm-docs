> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/ispitchenabled](https://developer.apple.com/documentation/mapkit/mkmapview/ispitchenabled)

# isPitchEnabled (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

A Boolean value that indicates whether the map uses the camera’s pitch information.

## Declaration

```swift
var isPitchEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the framework associates a valid camera with the map, the map view uses the camera’s pitch angle to tilt the plane of the map. When this property is [false](https://developer.apple.com/documentation/swift/false), the map ignores the camera’s pitch angle and the map displays as if the user is looking straight down onto it.

In an app, be sure to check the value of this property to determine whether a map can support 3D.

## See Also

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [isZoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [isRotateEnabled](isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.
- [mapType](maptype.md): Deprecated. The type of data the map view displays.

# pitchEnabled (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

A Boolean value that indicates whether the map uses the camera’s pitch information.

## Declaration

```objectivec
@property (nonatomic, getter=isPitchEnabled) BOOL pitchEnabled;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the framework associates a valid camera with the map, the map view uses the camera’s pitch angle to tilt the plane of the map. When this property is [false](https://developer.apple.com/documentation/swift/false), the map ignores the camera’s pitch angle and the map displays as if the user is looking straight down onto it.

In an app, be sure to check the value of this property to determine whether a map can support 3D.

## See Also

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [zoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [scrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [rotateEnabled](isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.
- [mapType](maptype.md): Deprecated. The type of data the map view displays.
