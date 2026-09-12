> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkscaleview/alignment](https://developer.apple.com/documentation/mapkit/mkscaleview/alignment)

# MKScaleView.Alignment (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate how the framework should align measurements.

## Declaration

```swift
enum Alignment
```

## Topics

### Alignment options

- [MKScaleView.Alignment.leading](alignment/leading.md): Scale measurements begin at the leading edge of the view.
- [MKScaleView.Alignment.trailing](alignment/trailing.md): Scale measurements begin at the trailing edge of the view.
- [MKScaleView.Alignment.center](alignment/center.md): Scale measurements appear horizontally centered within the view.

### Initializers

- [init(rawValue:)](alignment/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the scale view attributes

- [mapView](mapview.md): The map view that provides the scale information to the scale view.
- [scaleVisibility](scalevisibility.md): The visibility of the scale view.
- [legendAlignment](legendalignment.md): The alignment of the distance information in the scale view.

# MKScaleViewAlignment (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicate how the framework should align measurements.

## Declaration

```objectivec
enum MKScaleViewAlignment : NSInteger;
```

## Topics

### Alignment options

- [MKScaleViewAlignmentLeading](alignment/leading.md): Scale measurements begin at the leading edge of the view.
- [MKScaleViewAlignmentTrailing](alignment/trailing.md): Scale measurements begin at the trailing edge of the view.
- [MKScaleViewAlignmentCenter](alignment/center.md): Scale measurements appear horizontally centered within the view.

## See Also

### Getting the scale view attributes

- [mapView](mapview.md): The map view that provides the scale information to the scale view.
- [scaleVisibility](scalevisibility.md): The visibility of the scale view.
- [legendAlignment](legendalignment.md): The alignment of the distance information in the scale view.
