> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkscaleview/scalevisibility](https://developer.apple.com/documentation/mapkit/mkscaleview/scalevisibility)

# scaleVisibility (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The visibility of the scale view.

## Declaration

```swift
var scaleVisibility: MKFeatureVisibility { get set }
```

<a id="Discussion"></a>

## Discussion

You can configure a scale view to be visible all the time or only when the scale of the map changes.

## See Also

### Getting the scale view attributes

- [mapView](mapview.md): The map view that provides the scale information to the scale view.
- [legendAlignment](legendalignment.md): The alignment of the distance information in the scale view.
- [MKScaleView.Alignment](alignment.md): Constants that indicate how the framework should align measurements.

# scaleVisibility (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The visibility of the scale view.

## Declaration

```objectivec
@property (nonatomic, assign) MKFeatureVisibility scaleVisibility;
```

<a id="Discussion"></a>

## Discussion

You can configure a scale view to be visible all the time or only when the scale of the map changes.

## See Also

### Getting the scale view attributes

- [mapView](mapview.md): The map view that provides the scale information to the scale view.
- [legendAlignment](legendalignment.md): The alignment of the distance information in the scale view.
- [MKScaleViewAlignment](alignment.md): Constants that indicate how the framework should align measurements.
