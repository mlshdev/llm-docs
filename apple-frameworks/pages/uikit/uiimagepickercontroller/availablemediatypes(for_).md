> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/availablemediatypes(for:)](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/availablemediatypes(for:))

# availableMediaTypes(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Retrieves the available media types for the specified source type.

## Declaration

```swift
class func availableMediaTypes(for sourceType: UIImagePickerController.SourceType) -> [String]?
```

## Parameters

- `sourceType`: The source to use to pick an image.

<a id="return-value"></a>

## Return Value

An array whose elements identify the available media types for the specified source type.

<a id="Discussion"></a>

## Discussion

Some iOS devices support video recording. Use this method, along with the [isSourceTypeAvailable(\_:)](issourcetypeavailable%28__%29.md) method, to determine if video recording is available on a device. The availability of video recording is indicated by the presence of the `kUTTypeMovie` media type for the [UIImagePickerController.SourceType.camera](sourcetype-swift.enum/camera.md) source type.

## See Also

### Setting the picker source

- [isSourceTypeAvailable(\_:)](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.
- [sourceType](sourcetype-swift.property.md): The type of picker interface to be displayed by the controller.
- [UIImagePickerController.SourceType](sourcetype-swift.enum.md): Constants that describe the source to use when picking an image or when determining available media types.

# availableMediaTypesForSourceType: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Retrieves the available media types for the specified source type.

## Declaration

```objectivec
+ (NSArray<NSString *> *) availableMediaTypesForSourceType:(UIImagePickerControllerSourceType) sourceType;
```

## Parameters

- `sourceType`: The source to use to pick an image.

<a id="return-value"></a>

## Return Value

An array whose elements identify the available media types for the specified source type.

<a id="Discussion"></a>

## Discussion

Some iOS devices support video recording. Use this method, along with the [isSourceTypeAvailable:](issourcetypeavailable%28__%29.md) method, to determine if video recording is available on a device. The availability of video recording is indicated by the presence of the `kUTTypeMovie` media type for the [UIImagePickerControllerSourceTypeCamera](sourcetype-swift.enum/camera.md) source type.

## See Also

### Setting the picker source

- [isSourceTypeAvailable:](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.
- [sourceType](sourcetype-swift.property.md): The type of picker interface to be displayed by the controller.
- [UIImagePickerControllerSourceType](sourcetype-swift.enum.md): Constants that describe the source to use when picking an image or when determining available media types.
