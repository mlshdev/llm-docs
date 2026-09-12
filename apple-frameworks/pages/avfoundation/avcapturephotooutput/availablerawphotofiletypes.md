> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/availablerawphotofiletypes](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/availablerawphotofiletypes)

# availableRawPhotoFileTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of file types currently supported for RAW format capture and output.

## Declaration

```swift
var availableRawPhotoFileTypes: [AVFileType] { get }
```

<a id="Discussion"></a>

## Discussion

When you issue a photo capture request, you can separately specify the format for capturing or encoding image data and the container format for producing output files containing that data. However, each file type supports only a specific set of image data types.

After choosing an output file type, use the [supportedRawPhotoPixelFormatTypesForFileType:](supportedrawphotopixelformattypesforfiletype_.md) method to choose an appropriate data format before creating a photo settings object.

## See Also

### Determining supported file types

- [availablePhotoFileTypes](availablephotofiletypes.md): The list of file types currently supported for photo capture and output.

# availableRawPhotoFileTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of file types currently supported for RAW format capture and output.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableRawPhotoFileTypes;
```

<a id="Discussion"></a>

## Discussion

When you issue a photo capture request, you can separately specify the format for capturing or encoding image data and the container format for producing output files containing that data. However, each file type supports only a specific set of image data types.

After choosing an output file type, use the [supportedRawPhotoPixelFormatTypesForFileType:](supportedrawphotopixelformattypesforfiletype_.md) method to choose an appropriate data format before creating a photo settings object.

## See Also

### Determining supported file types

- [availablePhotoFileTypes](availablephotofiletypes.md): The list of file types currently supported for photo capture and output.
