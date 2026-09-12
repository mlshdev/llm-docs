> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputrequestid](https://developer.apple.com/documentation/photos/phcontenteditinginputrequestid)

# PHContentEditingInputRequestID (Swift)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An identifier for an asset content editing session.

## Declaration

```swift
typealias PHContentEditingInputRequestID = Int
```

<a id="Discussion"></a>

## Discussion

To begin editing the content of an asset, call the [requestContentEditingInput(with:completionHandler:)](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method to retrieve a [PHContentEditingInput](phcontenteditinginput.md) object that provides data for editing. This method asynchronously prepares an editing input and calls your completion handler block when the editing input is ready. To abandon editing before Photos calls the completion handler, call the [cancelContentEditingInputRequest(\_:)](phasset/cancelcontenteditinginputrequest%28__%29.md) method, passing the [PHContentEditingInputRequestID](phcontenteditinginputrequestid.md) you received when requesting an edit.

## See Also

### Editing an Asset

- [Editing Asset Content](../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerform(\_:)](phasset/canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerform(\_:)](phasset/canperform%28__%29.md) method.
- [requestContentEditingInput(with:completionHandler:)](phasset/requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest(\_:)](phasset/cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHAsset.OriginalResourceChoice](phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInput(with:completionHandler:)](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

# PHContentEditingInputRequestID (Objective-C)

**Framework:** Photos  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An identifier for an asset content editing session.

## Declaration

```objectivec
typedef NSUInteger PHContentEditingInputRequestID;
```

<a id="Discussion"></a>

## Discussion

To begin editing the content of an asset, call the [requestContentEditingInputWithOptions:completionHandler:](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method to retrieve a [PHContentEditingInput](phcontenteditinginput.md) object that provides data for editing. This method asynchronously prepares an editing input and calls your completion handler block when the editing input is ready. To abandon editing before Photos calls the completion handler, call the [cancelContentEditingInputRequest:](phasset/cancelcontenteditinginputrequest%28__%29.md) method, passing the [PHContentEditingInputRequestID](phcontenteditinginputrequestid.md) you received when requesting an edit.

## See Also

### Editing an Asset

- [Editing Asset Content](../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [canPerformEditOperation:](phasset/canperform%28__%29.md): Returns whether the asset supports the specified editing operation.
- [PHAssetEditOperation](phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerformEditOperation:](phasset/canperform%28__%29.md) method.
- [requestContentEditingInputWithOptions:completionHandler:](phasset/requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest:](phasset/cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHOriginalResourceChoice](phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInputWithOptions:completionHandler:](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.
