> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/issourcetypeavailable(_:)](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/issourcetypeavailable(_:))

# isSourceTypeAvailable(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Queries whether the device supports picking media using the specified source type.

## Declaration

```swift
class func isSourceTypeAvailable(_ sourceType: UIImagePickerController.SourceType) -> Bool
```

## Parameters

- `sourceType`: The source to use to pick an image or movie.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the specified source type; [false](https://developer.apple.com/documentation/swift/false) if the specified source type is not available.

<a id="Discussion"></a>

## Discussion

Because a media source may not be present or may be unavailable, devices may not always support all source types. For example, if you attempt to pick an image from the user’s library and the library is empty, this method returns [false](https://developer.apple.com/documentation/swift/false). Similarly, if the camera is already in use, this method returns [false](https://developer.apple.com/documentation/swift/false).

Before attempting to use an `UIImagePickerController` object to pick an image, you must call this method to ensure that the desired source type is available.

## See Also

### Setting the picker source

- [availableMediaTypes(for:)](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [sourceType](sourcetype-swift.property.md): The type of picker interface to be displayed by the controller.
- [UIImagePickerController.SourceType](sourcetype-swift.enum.md): Constants that describe the source to use when picking an image or when determining available media types.

# isSourceTypeAvailable: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Queries whether the device supports picking media using the specified source type.

## Declaration

```objectivec
+ (BOOL) isSourceTypeAvailable:(UIImagePickerControllerSourceType) sourceType;
```

## Parameters

- `sourceType`: The source to use to pick an image or movie.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the specified source type; [false](https://developer.apple.com/documentation/swift/false) if the specified source type is not available.

<a id="Discussion"></a>

## Discussion

Because a media source may not be present or may be unavailable, devices may not always support all source types. For example, if you attempt to pick an image from the user’s library and the library is empty, this method returns [false](https://developer.apple.com/documentation/swift/false). Similarly, if the camera is already in use, this method returns [false](https://developer.apple.com/documentation/swift/false).

Before attempting to use an `UIImagePickerController` object to pick an image, you must call this method to ensure that the desired source type is available.

## See Also

### Setting the picker source

- [availableMediaTypesForSourceType:](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [sourceType](sourcetype-swift.property.md): The type of picker interface to be displayed by the controller.
- [UIImagePickerControllerSourceType](sourcetype-swift.enum.md): Constants that describe the source to use when picking an image or when determining available media types.
