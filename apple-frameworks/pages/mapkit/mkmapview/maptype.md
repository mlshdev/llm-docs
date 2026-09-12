> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/maptype](https://developer.apple.com/documentation/mapkit/mkmapview/maptype)

# mapType (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The type of data the map view displays.

> Use the map view’s [preferredConfiguration](preferredconfiguration.md) property with an [MKMapConfiguration](../mkmapconfiguration.md) subclass to specify how the framework presents the map instead.

## Declaration

```swift
var mapType: MKMapType { get set }
```

<a id="Discussion"></a>

## Discussion

Changing the value in this property may cause the receiver to begin loading new map content. For example, changing from [MKMapType.standard](../mkmaptype/standard.md) to [MKMapType.satellite](../mkmaptype/satellite.md) might cause it to begin loading the satellite imagery for the map. If the map needs new data, however, it loads asynchronously and MapKit sends appropriate messages to the receiver’s delegate indicating the status of the operation.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [isZoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [isScrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [isPitchEnabled](ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [isRotateEnabled](isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.

# mapType (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The type of data the map view displays.

> Use the map view’s [preferredConfiguration](preferredconfiguration.md) property with an [MKMapConfiguration](../mkmapconfiguration.md) subclass to specify how the framework presents the map instead.

## Declaration

```objectivec
@property (nonatomic) MKMapType mapType;
```

<a id="Discussion"></a>

## Discussion

Changing the value in this property may cause the receiver to begin loading new map content. For example, changing from [MKMapTypeStandard](../mkmaptype/standard.md) to [MKMapTypeSatellite](../mkmaptype/satellite.md) might cause it to begin loading the satellite imagery for the map. If the map needs new data, however, it loads asynchronously and MapKit sends appropriate messages to the receiver’s delegate indicating the status of the operation.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Accessing map properties

- [MKMapType](../mkmaptype.md): Deprecated. The type of map to display.
- [zoomEnabled](iszoomenabled.md): A Boolean value that determines whether the user may use pinch gestures to zoom in and out of the map.
- [scrollEnabled](isscrollenabled.md): A Boolean value that determines whether the user may scroll around the map.
- [pitchEnabled](ispitchenabled.md): A Boolean value that indicates whether the map uses the camera’s pitch information.
- [rotateEnabled](isrotateenabled.md): A Boolean value that indicates whether the map uses the camera’s heading information.
