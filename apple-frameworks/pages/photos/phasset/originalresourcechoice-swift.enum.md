> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/originalresourcechoice-swift.enum](https://developer.apple.com/documentation/photos/phasset/originalresourcechoice-swift.enum)

# PHAsset.OriginalResourceChoice (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A choice of which original resource to use as the unadjusted base when reverting an asset’s content.

## Declaration

```swift
enum OriginalResourceChoice
```

<a id="overview"></a>

## Overview

Applies to RAW+JPEG assets.

## Topics

### Choices

- [PHAsset.OriginalResourceChoice.compressed](originalresourcechoice-swift.enum/compressed.md): The compressed original resource, such as a JPEG or HEIC, is used.
- [PHAsset.OriginalResourceChoice.raw](originalresourcechoice-swift.enum/raw.md): The RAW original resource is used.

### Initializers

- [init(rawValue:)](originalresourcechoice-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Editing an Asset

- [Editing Asset Content](../../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](../phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](../phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](../phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](../phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](../phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](../phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerform(\_:)](canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](../phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerform(\_:)](canperform%28__%29.md) method.
- [requestContentEditingInput(with:completionHandler:)](requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest(\_:)](cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](../phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [Editing Request Info Keys](../../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInput(with:completionHandler:)](requestcontenteditinginput%28with_completionhandler_%29.md) method.

# PHOriginalResourceChoice (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A choice of which original resource to use as the unadjusted base when reverting an asset’s content.

## Declaration

```objectivec
enum PHOriginalResourceChoice : NSInteger;
```

<a id="overview"></a>

## Overview

Applies to RAW+JPEG assets.

## Topics

### Choices

- [PHOriginalResourceChoiceCompressed](originalresourcechoice-swift.enum/compressed.md): The compressed original resource, such as a JPEG or HEIC, is used.
- [PHOriginalResourceChoiceRaw](originalresourcechoice-swift.enum/raw.md): The RAW original resource is used.

## See Also

### Editing an Asset

- [Editing Asset Content](../../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](../phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](../phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](../phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](../phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](../phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](../phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerformEditOperation:](canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](../phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerformEditOperation:](canperform%28__%29.md) method.
- [requestContentEditingInputWithOptions:completionHandler:](requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest:](cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](../phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [Editing Request Info Keys](../../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInputWithOptions:completionHandler:](requestcontenteditinginput%28with_completionhandler_%29.md) method.
