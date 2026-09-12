> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phadjustmentdata](https://developer.apple.com/documentation/photos/phadjustmentdata)

# PHAdjustmentData (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.

## Declaration

```swift
class PHAdjustmentData
```

## Mentioned In

- [Editing Asset Content](../photokit/editing-asset-content.md)
- [Creating Photo Editing Extensions](../photokit/creating-photo-editing-extensions.md)

<a id="overview"></a>

## Overview

When a user edits an asset, Photos saves a [PHAdjustmentData](phadjustmentdata.md) object along with the modified image or video data. This object provides an application-defined “recipe” you can use to reconstruct the edit. For example, if your app applies filters to a photo, you might create adjustment data that identifies which filters the user picked, the parameters for each, and the order to apply the filters in. Later, the user can resume working with those filters and parameters by using your app or another app that understands your adjustment data format. When iCloud Photos is enabled, a user can revert or resume edits made on a different device.

You work with adjustment data when editing an asset, using either the [requestContentEditingInput(with:completionHandler:)](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method or a photo extension view controller that implements the [PHContentEditingController](../photosui/phcontenteditingcontroller.md) protocol.

- When you begin an edit (through a [PHContentEditingInput](phcontenteditinginput.md) object), examine the editing input’s [adjustmentData](phcontenteditinginput/adjustmentdata.md) property to decide whether the last edit made to the asset is compatible with your app. If so, you can allow the user to resume working with that edit. If not, you can make further edits to the last saved version of the photo.
- When you commit an edit (through a [PHContentEditingOutput](phcontenteditingoutput.md) object), provide a new adjustment whose data represents the changes your app made.

For each asset, Photos stores only one [PHAdjustmentData](phadjustmentdata.md) object, representing the **most recent** edit made to the asset’s content.

## Topics

### Creating an Adjustment

- [init(formatIdentifier:formatVersion:data:)](phadjustmentdata/init%28formatidentifier_formatversion_data_%29.md): Initializes an adjustment object with the specified format and data.

### Identifying the Format of an Adjustment’s Data

- [formatIdentifier](phadjustmentdata/formatidentifier.md): A string uniquely identifying the format of the adjustment data.
- [formatVersion](phadjustmentdata/formatversion.md): A version number for the adjustment data format.

### Reading an Adjustment’s Data

- [data](phadjustmentdata/data.md): Data that contains the information necessary to reconstruct the adjustment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Editing an Asset

- [Editing Asset Content](../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHContentEditingInputRequestOptions](phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerform(\_:)](phasset/canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerform(\_:)](phasset/canperform%28__%29.md) method.
- [requestContentEditingInput(with:completionHandler:)](phasset/requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest(\_:)](phasset/cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHAsset.OriginalResourceChoice](phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInput(with:completionHandler:)](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

# PHAdjustmentData (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.

## Declaration

```objectivec
@interface PHAdjustmentData : NSObject
```

## Mentioned In

- [Editing Asset Content](../photokit/editing-asset-content.md)
- [Creating Photo Editing Extensions](../photokit/creating-photo-editing-extensions.md)

<a id="overview"></a>

## Overview

When a user edits an asset, Photos saves a [PHAdjustmentData](phadjustmentdata.md) object along with the modified image or video data. This object provides an application-defined “recipe” you can use to reconstruct the edit. For example, if your app applies filters to a photo, you might create adjustment data that identifies which filters the user picked, the parameters for each, and the order to apply the filters in. Later, the user can resume working with those filters and parameters by using your app or another app that understands your adjustment data format. When iCloud Photos is enabled, a user can revert or resume edits made on a different device.

You work with adjustment data when editing an asset, using either the [requestContentEditingInputWithOptions:completionHandler:](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method or a photo extension view controller that implements the [PHContentEditingController](../photosui/phcontenteditingcontroller.md) protocol.

- When you begin an edit (through a [PHContentEditingInput](phcontenteditinginput.md) object), examine the editing input’s [adjustmentData](phcontenteditinginput/adjustmentdata.md) property to decide whether the last edit made to the asset is compatible with your app. If so, you can allow the user to resume working with that edit. If not, you can make further edits to the last saved version of the photo.
- When you commit an edit (through a [PHContentEditingOutput](phcontenteditingoutput.md) object), provide a new adjustment whose data represents the changes your app made.

For each asset, Photos stores only one [PHAdjustmentData](phadjustmentdata.md) object, representing the **most recent** edit made to the asset’s content.

## Topics

### Creating an Adjustment

- [initWithFormatIdentifier:formatVersion:data:](phadjustmentdata/init%28formatidentifier_formatversion_data_%29.md): Initializes an adjustment object with the specified format and data.

### Identifying the Format of an Adjustment’s Data

- [formatIdentifier](phadjustmentdata/formatidentifier.md): A string uniquely identifying the format of the adjustment data.
- [formatVersion](phadjustmentdata/formatversion.md): A version number for the adjustment data format.

### Reading an Adjustment’s Data

- [data](phadjustmentdata/data.md): Data that contains the information necessary to reconstruct the adjustment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Editing an Asset

- [Editing Asset Content](../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHContentEditingInputRequestOptions](phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerformEditOperation:](phasset/canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerformEditOperation:](phasset/canperform%28__%29.md) method.
- [requestContentEditingInputWithOptions:completionHandler:](phasset/requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest:](phasset/cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHOriginalResourceChoice](phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInputWithOptions:completionHandler:](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.
