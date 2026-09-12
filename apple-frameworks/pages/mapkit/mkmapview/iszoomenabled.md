> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/iszoomenabled](https://developer.apple.com/documentation/mapkit/mkmapview/iszoomenabled)

# isZoomEnabled (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.

## Declaration

```swift
var isZoomEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls only user interactions with the map. If you set the value of this property to [false](https://developer.apple.com/documentation/swift/false), you may still change the zoom level programmatically by changing the value in the [region](region.md) property.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [isPitchEnabled](ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [isRotateEnabled](isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.
- [mapType](maptype.md): Deprecated. The type of data the map view displays.

# zoomEnabled (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.

## Declaration

```objectivec
@property (nonatomic, getter=isZoomEnabled) BOOL zoomEnabled;
```

<a id="Discussion"></a>

## Discussion

This property controls only user interactions with the map. If you set the value of this property to [false](https://developer.apple.com/documentation/swift/false), you may still change the zoom level programmatically by changing the value in the [region](region.md) property.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [scrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [pitchEnabled](ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [rotateEnabled](isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.
- [mapType](maptype.md): Deprecated. The type of data the map view displays.
