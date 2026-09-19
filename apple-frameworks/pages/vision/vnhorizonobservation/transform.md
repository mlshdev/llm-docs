> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnhorizonobservation/transform

# transform (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The transform to apply to the detected horizon.

## Declaration

```swift
var transform: CGAffineTransform { get }
```

<a id="Discussion"></a>

## Discussion

Apply the transform’s inverse to orient the image in an upright position and make the detected horizon level.

## See Also

### Evaluating the Horizon

- [angle](angle.md): The angle of the observed horizon.
- [transform(forImageWidth:height:)](transform%28forimagewidth_height_%29.md): Creates an affine transform for the specified image width and height.

# transform (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The transform to apply to the detected horizon.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGAffineTransform transform;
```

<a id="Discussion"></a>

## Discussion

Apply the transform’s inverse to orient the image in an upright position and make the detected horizon level.

## See Also

### Evaluating the Horizon

- [angle](angle.md): The angle of the observed horizon.
- [transformForImageWidth:height:](transform%28forimagewidth_height_%29.md): Creates an affine transform for the specified image width and height.
