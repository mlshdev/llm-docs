> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setcamerazoomrange(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setcamerazoomrange(_:animated:))

# setCameraZoomRange(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the camera zoom range for the map view, specifying whether to use animation.

## Declaration

```swift
func setCameraZoomRange(_ cameraZoomRange: MKMapView.CameraZoomRange?, animated: Bool)
```

## Parameters

- `cameraZoomRange`: The [MKMapView.CameraZoomRange](camerazoomrange-swift.class.md).
- `animated`: A Boolean value that indicates whether the framework animates the transition of the map view to the new zoom range.

## See Also

### Constraining the map view

- [setCameraBoundary(\_:animated:)](setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [cameraZoomRange](camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapView.CameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapView.CameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.

# setCameraZoomRange:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the camera zoom range for the map view, specifying whether to use animation.

## Declaration

```objectivec
- (void) setCameraZoomRange:(MKMapCameraZoomRange *) cameraZoomRange animated:(BOOL) animated;
```

## Parameters

- `cameraZoomRange`: The [MKMapCameraZoomRange](camerazoomrange-swift.class.md).
- `animated`: A Boolean value that indicates whether the framework animates the transition of the map view to the new zoom range.

## See Also

### Constraining the map view

- [setCameraBoundary:animated:](setcameraboundary%28__animated_%29.md): Sets the camera boundary for the map view, specifying whether to use animation.
- [cameraBoundary](cameraboundary-swift.property.md): The boundary of the area within which the map view’s center needs to remain.
- [cameraZoomRange](camerazoomrange-swift.property.md): The zoom range to apply to the map view.
- [MKMapCameraBoundary](cameraboundary-swift.class.md): A boundary of an area within which the map’s center needs to remain.
- [MKMapCameraZoomRange](camerazoomrange-swift.class.md): A camera zoom range that limits the distances to which the user can zoom.
