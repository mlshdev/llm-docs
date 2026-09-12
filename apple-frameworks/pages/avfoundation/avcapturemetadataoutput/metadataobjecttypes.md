> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutput/metadataobjecttypes](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/metadataobjecttypes)

# metadataObjectTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

An array of strings identifying the types of metadata objects  to process.

## Declaration

```swift
var metadataObjectTypes: [AVMetadataObject.ObjectType]! { get set }
```

<a id="Discussion"></a>

## Discussion

This property is used to filter the metadata objects reported by the receiver. Only metadata objects whose type matches one of the strings in this property are forwarded to the delegate’s [metadataOutput(\_:didOutput:from:)](../avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md) method for processing.

When assigning a new array to this property, each of the type strings must be present in the array returned by the [availableMetadataObjectTypes](availablemetadataobjecttypes.md) property; otherwise, the receiver raises an[NSException](../../foundation/nsexception.md).

The default is an empty [NSArray](../../foundation/nsarray.md) object, and as a result, no metadata objects are forwarded to the delegate’s [metadataOutput(\_:didOutput:from:)](../avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md) method. The same result can be achieved by setting the property to `nil`. This default behavior maximizes both performance and battery life.

> **Note**

>  Applications linked prior to iOS 7.0 will pass [AVMetadataFaceObject](../avmetadatafaceobject.md) objects to the delegate by default, if supported by the device.

## See Also

### Configuring metadata capture

- [availableMetadataObjectTypes](availablemetadataobjecttypes.md): An array of strings identifying the types of metadata objects that can be captured.
- [rectOfInterest](rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.
- [requiredMetadataObjectTypesForCinematicVideoCapture](requiredmetadataobjecttypesforcinematicvideocapture.md): The required metadata object types when Cinematic Video capture is enabled.

# metadataObjectTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

An array of strings identifying the types of metadata objects  to process.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<NSString *> * metadataObjectTypes;
```

<a id="Discussion"></a>

## Discussion

This property is used to filter the metadata objects reported by the receiver. Only metadata objects whose type matches one of the strings in this property are forwarded to the delegate’s [captureOutput:didOutputMetadataObjects:fromConnection:](../avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md) method for processing.

When assigning a new array to this property, each of the type strings must be present in the array returned by the [availableMetadataObjectTypes](availablemetadataobjecttypes.md) property; otherwise, the receiver raises an[NSException](../../foundation/nsexception.md).

The default is an empty [NSArray](../../foundation/nsarray.md) object, and as a result, no metadata objects are forwarded to the delegate’s [captureOutput:didOutputMetadataObjects:fromConnection:](../avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md) method. The same result can be achieved by setting the property to `nil`. This default behavior maximizes both performance and battery life.

> **Note**

>  Applications linked prior to iOS 7.0 will pass [AVMetadataFaceObject](../avmetadatafaceobject.md) objects to the delegate by default, if supported by the device.

## See Also

### Configuring metadata capture

- [availableMetadataObjectTypes](availablemetadataobjecttypes.md): An array of strings identifying the types of metadata objects that can be captured.
- [rectOfInterest](rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.
- [requiredMetadataObjectTypesForCinematicVideoCapture](requiredmetadataobjecttypesforcinematicvideocapture.md): The required metadata object types when Cinematic Video capture is enabled.
