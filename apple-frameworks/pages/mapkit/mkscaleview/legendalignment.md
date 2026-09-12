> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkscaleview/legendalignment](https://developer.apple.com/documentation/mapkit/mkscaleview/legendalignment)

# legendAlignment (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The alignment of the distance information in the scale view.

## Declaration

```swift
var legendAlignment: MKScaleView.Alignment { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines whether measurements start at the leading or trailing edge of the view. The default value of this property is [MKScaleView.Alignment.leading](alignment/leading.md).

## See Also

### Getting the scale view attributes

- [mapView](mapview.md): The map view that provides the scale information to the scale view.
- [scaleVisibility](scalevisibility.md): The visibility of the scale view.
- [MKScaleView.Alignment](alignment.md): Constants that indicate how the framework should align measurements.

# legendAlignment (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The alignment of the distance information in the scale view.

## Declaration

```objectivec
@property (nonatomic, assign) MKScaleViewAlignment legendAlignment;
```

<a id="Discussion"></a>

## Discussion

This property determines whether measurements start at the leading or trailing edge of the view. The default value of this property is [MKScaleViewAlignmentLeading](alignment/leading.md).

## See Also

### Getting the scale view attributes

- [mapView](mapview.md): The map view that provides the scale information to the scale view.
- [scaleVisibility](scalevisibility.md): The visibility of the scale view.
- [MKScaleViewAlignment](alignment.md): Constants that indicate how the framework should align measurements.
