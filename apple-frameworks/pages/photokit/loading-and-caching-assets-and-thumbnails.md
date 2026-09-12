> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photokit/loading-and-caching-assets-and-thumbnails](https://developer.apple.com/documentation/photokit/loading-and-caching-assets-and-thumbnails)

# Loading and Caching Assets and Thumbnails

**Interface languages:** Swift, Objective-C

**Framework:** Photos  
**Kind:** Article

Request image, video, or Live Photos content, and cache for quick reuse.

<a id="overview"></a>

## Overview

Photos automatically downloads or generates images to your specification, caching them for quick reuse. Use the [PHImageManager](../photos/phimagemanager.md) class to request images of assets at a specified size, or AVFoundation objects to work with video assets. When working with large numbers of assets—for example, when populating a collection view with thumbnails—preload images in batches using the [PHCachingImageManager](../photos/phcachingimagemanager.md) subclass.

## See Also

### Articles

- [Delivering an Enhanced Privacy Experience in Your Photos App](delivering-an-enhanced-privacy-experience-in-your-photos-app.md): Adopt the latest privacy enhancements to deliver advanced user-privacy controls.
- [Fetching Objects and Requesting Changes](fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [Displaying Live Photos](displaying-live-photos.md): Provide the same interactive playback of Live Photos as in the iOS Photos app.
- [Creating Photo Editing Extensions](creating-photo-editing-extensions.md): Provide custom functionality in the Photos app by bundling an app extension.
