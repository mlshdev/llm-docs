> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutput/availablemetadataobjecttypes](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/availablemetadataobjecttypes)

# availableMetadataObjectTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

An array of strings identifying the types of metadata objects that can be captured.

## Declaration

```swift
var availableMetadataObjectTypes: [AVMetadataObject.ObjectType] { get }
```

<a id="Discussion"></a>

## Discussion

Each string in the array corresponds to a possible value in the [type](../avmetadataobject/type.md) property of the [AVMetadataObject](../avmetadataobject.md) objects reported by the receiver. The available types are dependent on the capabilities of the [AVCaptureInput.Port](../avcaptureinput/port.md) to which the receiver’s connection is attached.

## See Also

### Configuring metadata capture

- [metadataObjectTypes](metadataobjecttypes.md): An array of strings identifying the types of metadata objects to process.
- [rectOfInterest](rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.
- [requiredMetadataObjectTypesForCinematicVideoCapture](requiredmetadataobjecttypesforcinematicvideocapture.md): The required metadata object types when Cinematic Video capture is enabled.

# availableMetadataObjectTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

An array of strings identifying the types of metadata objects that can be captured.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableMetadataObjectTypes;
```

<a id="Discussion"></a>

## Discussion

Each string in the array corresponds to a possible value in the [type](../avmetadataobject/type.md) property of the [AVMetadataObject](../avmetadataobject.md) objects reported by the receiver. The available types are dependent on the capabilities of the [AVCaptureInputPort](../avcaptureinput/port.md) to which the receiver’s connection is attached.

## See Also

### Configuring metadata capture

- [metadataObjectTypes](metadataobjecttypes.md): An array of strings identifying the types of metadata objects to process.
- [rectOfInterest](rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.
- [requiredMetadataObjectTypesForCinematicVideoCapture](requiredmetadataobjecttypesforcinematicvideocapture.md): The required metadata object types when Cinematic Video capture is enabled.
