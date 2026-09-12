> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/isrotateenabled](https://developer.apple.com/documentation/mapkit/mkmapview/isrotateenabled)

# isRotateEnabled (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

A Boolean value that indicates whether the map uses the camera’s heading information.

## Declaration

```swift
var isRotateEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the framework associates a valid camera with the map, the map uses the camera’s heading angle to rotate the plane of the map around its center point. When this property is [false](https://developer.apple.com/documentation/swift/false), the map view ignores the camera’s heading angle and the map orients so that the map view situates true north at the top.

## See Also

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [isZoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [isPitchEnabled](ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [mapType](maptype.md): Deprecated. The type of data the map view displays.

# rotateEnabled (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

A Boolean value that indicates whether the map uses the camera’s heading information.

## Declaration

```objectivec
@property (nonatomic, getter=isRotateEnabled) BOOL rotateEnabled;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) and the framework associates a valid camera with the map, the map uses the camera’s heading angle to rotate the plane of the map around its center point. When this property is [false](https://developer.apple.com/documentation/swift/false), the map view ignores the camera’s heading angle and the map orients so that the map view situates true north at the top.

## See Also

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [zoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [scrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [pitchEnabled](ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [mapType](maptype.md): Deprecated. The type of data the map view displays.
