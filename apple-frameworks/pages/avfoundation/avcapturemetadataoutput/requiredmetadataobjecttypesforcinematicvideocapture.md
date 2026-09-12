> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutput/requiredmetadataobjecttypesforcinematicvideocapture](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/requiredmetadataobjecttypesforcinematicvideocapture)

# requiredMetadataObjectTypesForCinematicVideoCapture (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The required metadata object types when Cinematic Video capture is enabled.

## Declaration

```swift
var requiredMetadataObjectTypesForCinematicVideoCapture: [AVMetadataObject.ObjectType] { get }
```

<a id="discussion"></a>

## Discussion

Since the Cinematic Video algorithm requires a particular set of metadata objects to function optimally, you must set your [metadataObjectTypes](metadataobjecttypes.md) property to this property’s returned value if you’ve set [isCinematicVideoCaptureEnabled](../avcapturedeviceinput/iscinematicvideocaptureenabled.md) to `true` on the connected device input, otherwise an `NSInvalidArgumentException` is thrown.

## See Also

### Configuring metadata capture

- [availableMetadataObjectTypes](availablemetadataobjecttypes.md): An array of strings identifying the types of metadata objects that can be captured.
- [metadataObjectTypes](metadataobjecttypes.md): An array of strings identifying the types of metadata objects to process.
- [rectOfInterest](rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.

# requiredMetadataObjectTypesForCinematicVideoCapture (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The required metadata object types when Cinematic Video capture is enabled.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * requiredMetadataObjectTypesForCinematicVideoCapture;
```

<a id="discussion"></a>

## Discussion

Since the Cinematic Video algorithm requires a particular set of metadata objects to function optimally, you must set your [metadataObjectTypes](metadataobjecttypes.md) property to this property’s returned value if you’ve set [cinematicVideoCaptureEnabled](../avcapturedeviceinput/iscinematicvideocaptureenabled.md) to `true` on the connected device input, otherwise an `NSInvalidArgumentException` is thrown.

## See Also

### Configuring metadata capture

- [availableMetadataObjectTypes](availablemetadataobjecttypes.md): An array of strings identifying the types of metadata objects that can be captured.
- [metadataObjectTypes](metadataobjecttypes.md): An array of strings identifying the types of metadata objects to process.
- [rectOfInterest](rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.
