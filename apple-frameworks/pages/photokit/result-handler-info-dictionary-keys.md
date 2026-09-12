> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photokit/result-handler-info-dictionary-keys](https://developer.apple.com/documentation/photokit/result-handler-info-dictionary-keys)

# Result Handler Info Dictionary Keys (Swift)

**Framework:** Photos  
**Kind:** API Collection

Info describing an attempt to load a Live Photo.

<a id="overview"></a>

## Overview

These keys are in the `info` dictionary of the result handler you provide for the [request(withResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:)](../photos/phlivephoto/request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md) method.

## Topics

### Constants

- [PHLivePhotoInfoErrorKey](../photos/phlivephotoinfoerrorkey.md): An error that occurred while attempting to load the requested Live Photo.
- [PHLivePhotoInfoIsDegradedKey](../photos/phlivephotoinfoisdegradedkey.md): A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.
- [PHLivePhotoInfoCancelledKey](../photos/phlivephotoinfocancelledkey.md): A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

## See Also

### Constants

- [PHLivePhotoRequestID](../photos/phlivephotorequestid.md): A numeric identifier for an asynchronous Live Photo loading request.
- [Image Request Identifiers](image-request-identifiers.md): Special values for the Live Photo request ID that are returned by asynchronous requests.

# Result Handler Info Dictionary Keys (Objective-C)

**Framework:** Photos  
**Kind:** API Collection

Info describing an attempt to load a Live Photo.

<a id="overview"></a>

## Overview

These keys are in the `info` dictionary of the result handler you provide for the [requestLivePhotoWithResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:](../photos/phlivephoto/request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md) method.

## Topics

### Constants

- [PHLivePhotoInfoErrorKey](../photos/phlivephotoinfoerrorkey.md): An error that occurred while attempting to load the requested Live Photo.
- [PHLivePhotoInfoIsDegradedKey](../photos/phlivephotoinfoisdegradedkey.md): A Boolean (`NSNumber`) value indicating whether the result Live Photo is a low-quality substitute for the requested Live Photo.
- [PHLivePhotoInfoCancelledKey](../photos/phlivephotoinfocancelledkey.md): A Boolean (`NSNumber`) value indicating whether the Live Photo loading request was canceled.

## See Also

### Constants

- [PHLivePhotoRequestID](../photos/phlivephotorequestid.md): A numeric identifier for an asynchronous Live Photo loading request.
- [Image Request Identifiers](image-request-identifiers.md): Special values for the Live Photo request ID that are returned by asynchronous requests.
