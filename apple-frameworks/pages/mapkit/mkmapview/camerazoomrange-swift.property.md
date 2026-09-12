> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/camerazoomrange-swift.property](https://developer.apple.com/documentation/mapkit/mkmapview/camerazoomrange-swift.property)

# cameraZoomRange (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The zoom range to apply to the map view.

## Declaration

```swift
@NSCopying var cameraZoomRange: MKMapView.CameraZoomRange! { get set }
```

## See Also

### Constraining the map view

- [setCameraBoundary(\_:animated:)](setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange(\_:animated:)](setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [MKMapView.CameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapView.CameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.

# cameraZoomRange (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The zoom range to apply to the map view.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) MKMapCameraZoomRange * cameraZoomRange;
```

## See Also

### Constraining the map view

- [setCameraBoundary:animated:](setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange:animated:](setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [MKMapCameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapCameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.
