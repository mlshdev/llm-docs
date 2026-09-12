> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkscaleview/mapview](https://developer.apple.com/documentation/mapkit/mkscaleview/mapview)

# mapView (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The map view that provides the scale information to the scale view.

## Declaration

```swift
weak var mapView: MKMapView? { get set }
```

## See Also

### Getting the scale view attributes

- [scaleVisibility](scalevisibility.md): The visibility of the scale view.
- [legendAlignment](legendalignment.md): The alignment of the distance information in the scale view.
- [MKScaleView.Alignment](alignment.md): Constants that indicate how the framework should align measurements.

# mapView (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The map view that provides the scale information to the scale view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) MKMapView * mapView;
```

## See Also

### Getting the scale view attributes

- [scaleVisibility](scalevisibility.md): The visibility of the scale view.
- [legendAlignment](legendalignment.md): The alignment of the distance information in the scale view.
- [MKScaleViewAlignment](alignment.md): Constants that indicate how the framework should align measurements.
