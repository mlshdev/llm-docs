> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/canperform(_:)](https://developer.apple.com/documentation/photos/phasset/canperform(_:))

# canPerform(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns whether the asset supports the specified editing operation.

## Declaration

```swift
func canPerform(_ editOperation: PHAssetEditOperation) -> Bool
```

## Parameters

- `editOperation`: The operation to be tested.

<a id="return-value"></a>

## Return Value

`true` if the asset supports the specified editing operation; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If an asset supports editing, you can create a [PHAssetChangeRequest](../phassetchangerequest.md) object inside a [PHPhotoLibrary](../phphotolibrary.md) change block to submit a change.

## See Also

### Editing an Asset

- [Editing Asset Content](../../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](../phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](../phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](../phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](../phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](../phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](../phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [PHAssetEditOperation](../phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerform(\_:)](canperform%28__%29.md) method.
- [requestContentEditingInput(with:completionHandler:)](requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest(\_:)](cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](../phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHAsset.OriginalResourceChoice](originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInput(with:completionHandler:)](requestcontenteditinginput%28with_completionhandler_%29.md) method.

# canPerformEditOperation: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns whether the asset supports the specified editing operation.

## Declaration

```objectivec
- (BOOL) canPerformEditOperation:(PHAssetEditOperation) editOperation;
```

## Parameters

- `editOperation`: The operation to be tested.

<a id="return-value"></a>

## Return Value

`true` if the asset supports the specified editing operation; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

If an asset supports editing, you can create a [PHAssetChangeRequest](../phassetchangerequest.md) object inside a [PHPhotoLibrary](../phphotolibrary.md) change block to submit a change.

## See Also

### Editing an Asset

- [Editing Asset Content](../../photokit/editing-asset-content.md): Make a request to modify and save a photo or video asset.
- [PHContentEditingInput](../phcontenteditinginput.md): A container that provides information about and access to the image, video, or Live Photo content of an asset to be edited.
- [PHContentEditingOutput](../phcontenteditingoutput.md): A container to which you provide the results of editing the photo, video, or Live Photo content of a Photos asset.
- [PHAdjustmentData](../phadjustmentdata.md): A description of the edits made to an asset’s photo, video, or Live Photo content, which allows your app to reconstruct or revert the effects of prior editing sessions.
- [PHContentEditingInputRequestOptions](../phcontenteditinginputrequestoptions.md): A set of options affecting the delivery of image or video data when you request to edit the content of a Photos asset.
- [PHLivePhotoEditingContext](../phlivephotoeditingcontext.md): An editing session for modifying the photo, video, and audio content of a Live Photo.
- [PHLivePhotoFrame](../phlivephotoframe.md): A container that provides image content for a single frame of a Live Photo in an editing context.
- [PHAssetEditOperation](../phasseteditoperation.md): Values identifying possible actions an asset can support, used by the [canPerformEditOperation:](canperform%28__%29.md) method.
- [requestContentEditingInputWithOptions:completionHandler:](requestcontenteditinginput%28with_completionhandler_%29.md): Requests asset information for beginning a content editing session.
- [cancelContentEditingInputRequest:](cancelcontenteditinginputrequest%28__%29.md): Cancels a request for editing the asset’s content.
- [PHContentEditingInputRequestID](../phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHOriginalResourceChoice](originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInputWithOptions:completionHandler:](requestcontenteditinginput%28with_completionhandler_%29.md) method.
