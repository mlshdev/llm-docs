> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/sourcetype-swift.property](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/sourcetype-swift.property)

# sourceType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of picker interface to be displayed by the controller.

## Declaration

```swift
var sourceType: UIImagePickerController.SourceType { get set }
```

<a id="Discussion"></a>

## Discussion

Prior to running the picker interface, set this value to the desired source type. The source type you set must be available and an exception is thrown if it is not. If you change this property while the picker is visible, the picker interface changes to match the new value in this property.

The various source types are listed in the [UIImagePickerController.SourceType](sourcetype-swift.enum.md) enumeration. The default value is [UIImagePickerController.SourceType.photoLibrary](sourcetype-swift.enum/photolibrary.md).

## See Also

### Setting the picker source

- [availableMediaTypes(for:)](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable(\_:)](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.
- [UIImagePickerController.SourceType](sourcetype-swift.enum.md): Constants that describe the source to use when picking an image or when determining available media types.

# sourceType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of picker interface to be displayed by the controller.

## Declaration

```objectivec
@property (nonatomic) UIImagePickerControllerSourceType sourceType;
```

<a id="Discussion"></a>

## Discussion

Prior to running the picker interface, set this value to the desired source type. The source type you set must be available and an exception is thrown if it is not. If you change this property while the picker is visible, the picker interface changes to match the new value in this property.

The various source types are listed in the [UIImagePickerControllerSourceType](sourcetype-swift.enum.md) enumeration. The default value is [UIImagePickerControllerSourceTypePhotoLibrary](sourcetype-swift.enum/photolibrary.md).

## See Also

### Setting the picker source

- [availableMediaTypesForSourceType:](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable:](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.
- [UIImagePickerControllerSourceType](sourcetype-swift.enum.md): Constants that describe the source to use when picking an image or when determining available media types.
