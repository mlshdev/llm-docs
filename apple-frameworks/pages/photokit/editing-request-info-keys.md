> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photokit/editing-request-info-keys](https://developer.apple.com/documentation/photokit/editing-request-info-keys)

# Editing Request Info Keys (Swift)

**Framework:** Photos  
**Kind:** API Collection

Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInput(with:completionHandler:)](../photos/phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

## Topics

### Constants

- [PHContentEditingInputResultIsInCloudKey](../photos/phcontenteditinginputresultisincloudkey.md): A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)
- [PHContentEditingInputCancelledKey](../photos/phcontenteditinginputcancelledkey.md): A Boolean value indicating whether the image request was canceled. (`NSNumber`)
- [PHContentEditingInputErrorKey](../photos/phcontenteditinginputerrorkey.md): An error that occurred while attempting to load the asset data. (`NSError`)

## See Also

### Editing an Asset

- [Editing Asset Content](editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](../photos/phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](../photos/phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](../photos/phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](../photos/phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](../photos/phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](../photos/phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerform(\_:)](../photos/phasset/canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](../photos/phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerform(\_:)](../photos/phasset/canperform%28__%29.md) method.
- [requestContentEditingInput(with:completionHandler:)](../photos/phasset/requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest(\_:)](../photos/phasset/cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](../photos/phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHAsset.OriginalResourceChoice](../photos/phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.

# Editing Request Info Keys (Objective-C)

**Framework:** Photos  
**Kind:** API Collection

Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInputWithOptions:completionHandler:](../photos/phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

## Topics

### Constants

- [PHContentEditingInputResultIsInCloudKey](../photos/phcontenteditinginputresultisincloudkey.md): A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)
- [PHContentEditingInputCancelledKey](../photos/phcontenteditinginputcancelledkey.md): A Boolean value indicating whether the image request was canceled. (`NSNumber`)
- [PHContentEditingInputErrorKey](../photos/phcontenteditinginputerrorkey.md): An error that occurred while attempting to load the asset data. (`NSError`)

## See Also

### Editing an Asset

- [Editing Asset Content](editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](../photos/phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](../photos/phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](../photos/phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](../photos/phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](../photos/phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](../photos/phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerformEditOperation:](../photos/phasset/canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](../photos/phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerformEditOperation:](../photos/phasset/canperform%28__%29.md) method.
- [requestContentEditingInputWithOptions:completionHandler:](../photos/phasset/requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest:](../photos/phasset/cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](../photos/phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHOriginalResourceChoice](../photos/phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
