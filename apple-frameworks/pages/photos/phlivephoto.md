> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephoto](https://developer.apple.com/documentation/photos/phlivephoto)

# PHLivePhoto (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A displayable representation of a Live Photo.

## Declaration

```swift
class PHLivePhoto
```

## Mentioned In

- [Displaying Live Photos](../photokit/displaying-live-photos.md)

<a id="overview"></a>

## Overview

In iOS and tvOS, you can use this class to reference Live Photos from the user’s library (fetched with the [PHAsset](phasset.md) and [PHImageManager](phimagemanager.md) classes), to load displayable Live Photo objects from data obtained elsewhere (such as pictures shared through a social network), and to assign Live Photos to [PHLivePhotoView](../photosui/phlivephotoview.md) objects for display.

In iOS, tvOS, and macOS, you can use this class to display edits in progress for Live Photo content in a photo editing extension.

> **Note**

>  For design guidance, see Human Interface Guidelines \> [Live Photos](https://developer.apple.com/design/human-interface-guidelines/live-photos).

The [PHLivePhoto](phlivephoto.md) class serves in much the same role for Live Photos as the [UIImage](../uikit/uiimage.md) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) class serves for static images. A [UIImage](../uikit/uiimage.md) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) object represents not the data file an image is loaded from, but instead a ready-to-use image that can be displayed in a view—similarly, a [PHLivePhoto](phlivephoto.md) object represents a Live Photo ready to display with motion and sound using a [PHLivePhotoView](../photosui/phlivephotoview.md) object, not an entry in the Photos library or the data resources that constitute a Live Photo. (To work with Live Photos as elements of the Photos library, use the [PHAsset](phasset.md) class. To work with the data files that constitute a Live Photo, use the [PHAssetResource](phassetresource.md) class.)

> **Tip**

>  To display Live Photo content on the web, use the [LivePhotosKit JS](https://developer.apple.com/documentation/livephotoskitjs) framework.

## Topics

### Inspecting a Live Photo

- [size](phlivephoto/size.md): The size, in pixels, of the Live Photo.

### Loading a Live Photo from Data Files

- [request(withResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:)](phlivephoto/request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md): Asynchronously loads a Live Photo from the specified resource files.
- [cancelRequest(withRequestID:)](phlivephoto/cancelrequest%28withrequestid_%29.md): Cancels an asynchronous request

### Constants

- [PHLivePhotoRequestID](phlivephotorequestid.md): A numeric identifier for an asynchronous Live Photo loading request.
- [Image Request Identifiers](../photokit/image-request-identifiers.md): Special values for the Live Photo request ID that are returned by asynchronous requests.
- [Result Handler Info Dictionary Keys](../photokit/result-handler-info-dictionary-keys.md): Info describing an attempt to load a Live Photo.

### Initializers

- [init(coder:)](phlivephoto/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../coretransferable/transferable.md)

# PHLivePhoto (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A displayable representation of a Live Photo.

## Declaration

```objectivec
@interface PHLivePhoto : NSObject
```

## Mentioned In

- [Displaying Live Photos](../photokit/displaying-live-photos.md)

<a id="overview"></a>

## Overview

In iOS and tvOS, you can use this class to reference Live Photos from the user’s library (fetched with the [PHAsset](phasset.md) and [PHImageManager](phimagemanager.md) classes), to load displayable Live Photo objects from data obtained elsewhere (such as pictures shared through a social network), and to assign Live Photos to [PHLivePhotoView](../photosui/phlivephotoview.md) objects for display.

In iOS, tvOS, and macOS, you can use this class to display edits in progress for Live Photo content in a photo editing extension.

> **Note**

>  For design guidance, see Human Interface Guidelines \> [Live Photos](https://developer.apple.com/design/human-interface-guidelines/live-photos).

The [PHLivePhoto](phlivephoto.md) class serves in much the same role for Live Photos as the [UIImage](../uikit/uiimage.md) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) class serves for static images. A [UIImage](../uikit/uiimage.md) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) object represents not the data file an image is loaded from, but instead a ready-to-use image that can be displayed in a view—similarly, a [PHLivePhoto](phlivephoto.md) object represents a Live Photo ready to display with motion and sound using a [PHLivePhotoView](../photosui/phlivephotoview.md) object, not an entry in the Photos library or the data resources that constitute a Live Photo. (To work with Live Photos as elements of the Photos library, use the [PHAsset](phasset.md) class. To work with the data files that constitute a Live Photo, use the [PHAssetResource](phassetresource.md) class.)

> **Tip**

>  To display Live Photo content on the web, use the [LivePhotosKit JS](https://developer.apple.com/documentation/livephotoskitjs) framework.

## Topics

### Inspecting a Live Photo

- [size](phlivephoto/size.md): The size, in pixels, of the Live Photo.

### Loading a Live Photo from Data Files

- [requestLivePhotoWithResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:](phlivephoto/request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md): Asynchronously loads a Live Photo from the specified resource files.
- [cancelLivePhotoRequestWithRequestID:](phlivephoto/cancelrequest%28withrequestid_%29.md): Cancels an asynchronous request

### Constants

- [PHLivePhotoRequestID](phlivephotorequestid.md): A numeric identifier for an asynchronous Live Photo loading request.
- [Image Request Identifiers](../photokit/image-request-identifiers.md): Special values for the Live Photo request ID that are returned by asynchronous requests.
- [Result Handler Info Dictionary Keys](../photokit/result-handler-info-dictionary-keys.md): Info describing an attempt to load a Live Photo.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../coretransferable/transferable.md)
