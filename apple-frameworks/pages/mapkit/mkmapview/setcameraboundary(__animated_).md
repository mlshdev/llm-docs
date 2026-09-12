> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setcameraboundary(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setcameraboundary(_:animated:))

# setCameraBoundary(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the camera boundary for the map view, specifying whether to use animation.

## Declaration

```swift
func setCameraBoundary(_ cameraBoundary: MKMapView.CameraBoundary?, animated: Bool)
```

## Parameters

- `cameraBoundary`: The new [MKMapView.CameraBoundary](cameraboundary-swift.class.md).
- `animated`: A Boolean value that indicates whether the framework animates the transition of the map view to the new boundary.

## See Also

### Constraining the map view

- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange(\_:animated:)](setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [cameraZoomRange](camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapView.CameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapView.CameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.

# setCameraBoundary:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the camera boundary for the map view, specifying whether to use animation.

## Declaration

```objectivec
- (void) setCameraBoundary:(MKMapCameraBoundary *) cameraBoundary animated:(BOOL) animated;
```

## Parameters

- `cameraBoundary`: The new [MKMapCameraBoundary](cameraboundary-swift.class.md).
- `animated`: A Boolean value that indicates whether the framework animates the transition of the map view to the new boundary.

## See Also

### Constraining the map view

- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [setCameraZoomRange:animated:](setcamerazoomrange%28__animated_%29.md): Sets the camera zoom range for the map view, specifying whether to use animation.
- [cameraZoomRange](camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapCameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapCameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.
