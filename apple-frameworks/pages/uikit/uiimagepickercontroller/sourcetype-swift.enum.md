> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/sourcetype-swift.enum](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/sourcetype-swift.enum)

# UIImagePickerController.SourceType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the source to use when picking an image or when determining available media types.

## Declaration

```swift
enum SourceType
```

<a id="overview"></a>

## Overview

A given source may not be available on a given device because the source is not physically present or because it cannot currently be accessed.

## Topics

### Constants

- [UIImagePickerController.SourceType.camera](sourcetype-swift.enum/camera.md): Specifies the device’s built-in camera as the source for the image picker controller.
- [UIImagePickerController.SourceType.photoLibrary](sourcetype-swift.enum/photolibrary.md): Deprecated. Specifies the device’s photo library as the source for the image picker controller.
- [UIImagePickerController.SourceType.savedPhotosAlbum](sourcetype-swift.enum/savedphotosalbum.md): Deprecated. Specifies the device’s Camera Roll album as the source for the image picker controller.

### Initializers

- [init(rawValue:)](sourcetype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the picker source

- [availableMediaTypes(for:)](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable(\_:)](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.
- [sourceType](sourcetype-swift.property.md): The type of picker interface to be displayed by the controller.

# UIImagePickerControllerSourceType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the source to use when picking an image or when determining available media types.

## Declaration

```objectivec
enum UIImagePickerControllerSourceType : NSInteger;
```

<a id="overview"></a>

## Overview

A given source may not be available on a given device because the source is not physically present or because it cannot currently be accessed.

## Topics

### Constants

- [UIImagePickerControllerSourceTypeCamera](sourcetype-swift.enum/camera.md): Specifies the device’s built-in camera as the source for the image picker controller.
- [UIImagePickerControllerSourceTypePhotoLibrary](sourcetype-swift.enum/photolibrary.md): Deprecated. Specifies the device’s photo library as the source for the image picker controller.
- [UIImagePickerControllerSourceTypeSavedPhotosAlbum](sourcetype-swift.enum/savedphotosalbum.md): Deprecated. Specifies the device’s Camera Roll album as the source for the image picker controller.

## See Also

### Setting the picker source

- [availableMediaTypesForSourceType:](availablemediatypes%28for_%29.md): Retrieves the available media types for the specified source type.
- [isSourceTypeAvailable:](issourcetypeavailable%28__%29.md): Queries whether the device supports picking media using the specified source type.
- [sourceType](sourcetype-swift.property.md): The type of picker interface to be displayed by the controller.
