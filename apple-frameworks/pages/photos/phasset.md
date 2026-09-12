> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset](https://developer.apple.com/documentation/photos/phasset)

# PHAsset (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A representation of an image, video, or Live Photo in the Photos library.

## Declaration

```swift
class PHAsset
```

## Mentioned In

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)
- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)
- [Displaying Live Photos](../photokit/displaying-live-photos.md)
- [Fetching Assets](../photokit/fetching-assets.md)

<a id="overview"></a>

## Overview

You fetch assets to begin working with them. Use the class methods listed in Fetching Assets to retrieve one or more [PHAsset](phasset.md) instances representing the assets you want to display or edit.

Assets contain only metadata. The underlying image or video data for any given asset might not be stored on the local device. However, depending on how you plan to use this data, you may not need to download all of it. If you need to populate a collection view with thumbnail images, the Photos framework can manage downloading, generating, and caching thumbnails for each asset. For details, see [PHImageManager](phimagemanager.md).

Asset objects are immutable. To edit an asset’s metadata (such as marking it as a favorite photo), create a [PHAssetChangeRequest](phassetchangerequest.md) object within a photo library change block. For more details on using change requests and change blocks to update the photo library, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Fetching Assets

- [Fetching Assets](../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssets(in:options:)](phasset/fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssets(with:options:)](phasset/fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssets(withLocalIdentifiers:options:)](phasset/fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssets(in:options:)](phasset/fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssets(with:)](phasset/fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssets(withBurstIdentifier:options:)](phasset/fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssets(withALAssetURLs:options:)](phasset/fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.

### Reading Asset Metadata

- [contentType](phasset/contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](phasset/mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](phasset/mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [PHAssetMediaSubtype](phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [sourceType](phasset/sourcetype.md): The means by which the asset enters the user’s Photos library.
- [PHAssetSourceType](phassetsourcetype.md): The means by which an asset enters the Photos library.
- [pixelWidth](phasset/pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](phasset/pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](phasset/addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](phasset/creationdate.md): The date and time of the asset’s creation.
- [modificationDate](phasset/modificationdate.md): The date and time of the asset’s last modification.
- [location](phasset/location.md): The location information for the asset.
- [duration](phasset/duration.md): The duration, in seconds, of the video asset.
- [isFavorite](phasset/isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [isHidden](phasset/ishidden.md): A Boolean value that indicates whether the user hides the asset.
- [hasAdjustments](phasset/hasadjustments.md): A Boolean value that indicates whether the asset contains adjustment data.
- [adjustmentFormatIdentifier](phasset/adjustmentformatidentifier.md): The identifier that describes the adjustment format.
- [isSyncFailureHidden](phasset/issyncfailurehidden.md): Deprecated. A Boolean value that indicates whether the user hides the sync failure message.
- [extendedMetadata](phasset/extendedmetadata.md): An accessor to other asset properties.
- [PHAssetExtendedMetadata](phassetextendedmetadata.md): Represents other asset attributes that are not included when fetching `PHAsset` directly.
- [rating](phasset/rating-swift.property.md): The rating of this PHAsset.
- [PHAsset.Rating](phasset/rating-swift.enum.md): A rating for an asset, from unset (no rating chosen) up to five stars.

### Displaying an Asset

- [playbackStyle](phasset/playbackstyle-swift.property.md): An enumerated value that describes how to present an asset to the user.
- [PHAsset.PlaybackStyle](phasset/playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.

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
- [PHContentEditingInputRequestID](phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHAsset.OriginalResourceChoice](phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInput(with:completionHandler:)](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

### Working with Burst Photo Assets

- [burstIdentifier](phasset/burstidentifier.md): The unique identifier shared by photo assets from the same burst sequence.
- [burstSelectionTypes](phasset/burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [PHAssetBurstSelectionType](phassetburstselectiontype.md): Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](phasset/burstselectiontypes.md) property.
- [representsBurst](phasset/representsburst.md): A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.

### Instance Properties

- [adjustmentTimestamp](phasset/adjustmenttimestamp.md): The date when the asset was last edited.
- [adjustmentsState](phasset/adjustmentsstate-swift.property.md)
- [originalResourceChoice](phasset/originalresourcechoice-swift.property.md): The original resource used as the basis for rendering this asset’s derivatives.
- [playbackVariation](phasset/playbackvariation-swift.property.md): The Live Photo playback variation for the asset.

### Type Aliases

- [PHAsset.Specification](phasset/specification.md)
- [PHAsset.UnwrappedType](phasset/unwrappedtype.md)
- [PHAsset.ValueType](phasset/valuetype.md)

### Type Properties

- [defaultResolverSpecification](phasset/defaultresolverspecification.md)

### Enumerations

- [PHAsset.AdjustmentsState](phasset/adjustmentsstate-swift.enum.md)
- [PHAsset.PlaybackVariation](phasset/playbackvariation-swift.enum.md)

### Default Implementations

- [PersistentlyIdentifiable Implementations](phasset/persistentlyidentifiable-implementations.md)

## Relationships

### Inherits From

- [PHObject](phobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [PersistentlyIdentifiable](../appintents/persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

# PHAsset (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A representation of an image, video, or Live Photo in the Photos library.

## Declaration

```objectivec
@interface PHAsset : PHObject
```

## Mentioned In

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)
- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)
- [Displaying Live Photos](../photokit/displaying-live-photos.md)
- [Fetching Assets](../photokit/fetching-assets.md)

<a id="overview"></a>

## Overview

You fetch assets to begin working with them. Use the class methods listed in Fetching Assets to retrieve one or more [PHAsset](phasset.md) instances representing the assets you want to display or edit.

Assets contain only metadata. The underlying image or video data for any given asset might not be stored on the local device. However, depending on how you plan to use this data, you may not need to download all of it. If you need to populate a collection view with thumbnail images, the Photos framework can manage downloading, generating, and caching thumbnails for each asset. For details, see [PHImageManager](phimagemanager.md).

Asset objects are immutable. To edit an asset’s metadata (such as marking it as a favorite photo), create a [PHAssetChangeRequest](phassetchangerequest.md) object within a photo library change block. For more details on using change requests and change blocks to update the photo library, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Fetching Assets

- [Fetching Assets](../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssetsInAssetCollection:options:](phasset/fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssetsWithMediaType:options:](phasset/fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssetsWithLocalIdentifiers:options:](phasset/fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssetsInAssetCollection:options:](phasset/fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssetsWithOptions:](phasset/fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssetsWithBurstIdentifier:options:](phasset/fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssetsWithALAssetURLs:options:](phasset/fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.

### Reading Asset Metadata

- [contentType](phasset/contenttype.md): The type of image or video data that is presented for the asset
- [mediaType](phasset/mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](phasset/mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets, such as panoramic photo or high-frame-rate video.
- [PHAssetMediaSubtype](phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [sourceType](phasset/sourcetype.md): The means by which the asset enters the user’s Photos library.
- [PHAssetSourceType](phassetsourcetype.md): The means by which an asset enters the Photos library.
- [pixelWidth](phasset/pixelwidth.md): The width, in pixels, of the asset’s image or video data.
- [pixelHeight](phasset/pixelheight.md): The height, in pixels, of the asset’s image or video data.
- [addedDate](phasset/addeddate.md): The date and time this asset was added to the photo library (from the device that was used to add this asset)
- [creationDate](phasset/creationdate.md): The date and time of the asset’s creation.
- [modificationDate](phasset/modificationdate.md): The date and time of the asset’s last modification.
- [location](phasset/location.md): The location information for the asset.
- [duration](phasset/duration.md): The duration, in seconds, of the video asset.
- [favorite](phasset/isfavorite.md): A Boolean value that indicates whether the user marks the asset as a favorite.
- [hidden](phasset/ishidden.md): A Boolean value that indicates whether the user hides the asset.
- [hasAdjustments](phasset/hasadjustments.md): A Boolean value that indicates whether the asset contains adjustment data.
- [adjustmentFormatIdentifier](phasset/adjustmentformatidentifier.md): The identifier that describes the adjustment format.
- [syncFailureHidden](phasset/issyncfailurehidden.md): Deprecated. A Boolean value that indicates whether the user hides the sync failure message.
- [extendedMetadata](phasset/extendedmetadata.md): An accessor to other asset properties.
- [PHAssetExtendedMetadata](phassetextendedmetadata.md): Represents other asset attributes that are not included when fetching `PHAsset` directly.
- [rating](phasset/rating-swift.property.md): The rating of this PHAsset.
- [PHAssetRating](phasset/rating-swift.enum.md): A rating for an asset, from unset (no rating chosen) up to five stars.

### Displaying an Asset

- [playbackStyle](phasset/playbackstyle-swift.property.md): An enumerated value that describes how to present an asset to the user.
- [PHAssetPlaybackStyle](phasset/playbackstyle-swift.enum.md): An enumeration of asset playback styles that dictate how to present an asset to the user.

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
- [PHContentEditingInputRequestID](phcontenteditinginputrequestid.md): An identifier for an asset content editing session.
- [PHOriginalResourceChoice](phasset/originalresourcechoice-swift.enum.md): A choice of which original resource to use as the unadjusted base when reverting an asset’s content.
- [Editing Request Info Keys](../photokit/editing-request-info-keys.md): Keys indicating the status of an asset content editing request, used in the completion handler of the [requestContentEditingInputWithOptions:completionHandler:](phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method.

### Working with Burst Photo Assets

- [burstIdentifier](phasset/burstidentifier.md): The unique identifier shared by photo assets from the same burst sequence.
- [burstSelectionTypes](phasset/burstselectiontypes.md): The selection type of the asset in a burst photo sequence.
- [PHAssetBurstSelectionType](phassetburstselectiontype.md): Bit mask values indicating whether and how an asset is marked as a favorite member of a burst photo sequence. Used by the [burstSelectionTypes](phasset/burstselectiontypes.md) property.
- [representsBurst](phasset/representsburst.md): A Boolean value that indicates whether the asset is the representative photo from a burst photo sequence.

### Instance Properties

- [adjustmentTimestamp](phasset/adjustmenttimestamp.md): The date when the asset was last edited.
- [adjustmentsState](phasset/adjustmentsstate-swift.property.md)
- [originalResourceChoice](phasset/originalresourcechoice-swift.property.md): The original resource used as the basis for rendering this asset’s derivatives.
- [playbackVariation](phasset/playbackvariation-swift.property.md): The Live Photo playback variation for the asset.

## Relationships

### Inherits From

- [PHObject](phobject.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [PersistentlyIdentifiable](../appintents/persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.
