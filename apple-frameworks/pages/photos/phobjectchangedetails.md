> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobjectchangedetails](https://developer.apple.com/documentation/photos/phobjectchangedetails)

# PHObjectChangeDetails (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of changes that occurred in an asset or collection object.

## Declaration

```swift
class PHObjectChangeDetails<ObjectType> where ObjectType : PHObject
```

<a id="overview"></a>

## Overview

A [PHObjectChangeDetails](phobjectchangedetails.md) object provides detailed information about differences between two states of an asset or collection object—one that you previously obtained and an updated state that would result if you fetched that entity again. You observe changes by adopting the [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md) protocol and registering your observer with the shared [PHPhotoLibrary](phphotolibrary.md) object. When Photos notifies your observer of a change, you get change details by passing the object you’re interested in to the [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) method.

For an asset collection or collection list, a [PHObjectChangeDetails](phobjectchangedetails.md) object describe changes only to the collection’s properties. If you’re instead interested in changes to the collection’s membership, fetch the collection’s contents and use the [changeDetails(for:)](phchange/changedetails%28for_%29-33a6n.md) method to track changes to the fetch result.

> **Warning**

>  Don’t map [changedIndexes](phfetchresultchangedetails/changedindexes.md) directly to [UICollectionView](../uikit/uicollectionview.md) item indices in batch updates. Use these indices to reconfigure the corresponding cells after [performBatchUpdates(\_:completion:)](../uikit/uicollectionview/performbatchupdates%28__completion_%29.md). [UICollectionView](../uikit/uicollectionview.md) and [UITableView](../uikit/uitableview.md) expect the [changedIndexes](phfetchresultchangedetails/changedindexes.md) to be in the *before* state, while PhotoKit provides them in the *after* state, resulting in a crash if your app performs insertions and deletions at the same time as the changes.

## Topics

### Getting the Changed Object

- [objectBeforeChanges](phobjectchangedetails/objectbeforechanges.md): An object that reflects the original state of the asset or collection it represents.
- [objectAfterChanges](phobjectchangedetails/objectafterchanges.md): An object that reflects the current state of the asset or collection it represents.

### Getting Change Information

- [assetContentChanged](phobjectchangedetails/assetcontentchanged.md): A Boolean value that indicates whether the asset’s photo or video content has changed.
- [objectWasDeleted](phobjectchangedetails/objectwasdeleted.md): A Boolean value that indicates whether the object has been deleted from the Photos library.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing Library Changes

- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [register(\_:)](phphotolibrary/register%28__%29-6y3b9.md): Registers an object to receive messages when objects in the photo library change.
- [unregisterChangeObserver(\_:)](phphotolibrary/unregisterchangeobserver%28__%29.md): Unregisters an object so that it no longer receives change messages.
- [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](phchange.md): A description of a change that occurred in the photo library.
- [PHFetchResultChangeDetails](phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.

# PHObjectChangeDetails (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of changes that occurred in an asset or collection object.

## Declaration

```objectivec
@interface PHObjectChangeDetails : NSObject
```

<a id="overview"></a>

## Overview

A [PHObjectChangeDetails](phobjectchangedetails.md) object provides detailed information about differences between two states of an asset or collection object—one that you previously obtained and an updated state that would result if you fetched that entity again. You observe changes by adopting the [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md) protocol and registering your observer with the shared [PHPhotoLibrary](phphotolibrary.md) object. When Photos notifies your observer of a change, you get change details by passing the object you’re interested in to the [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) method.

For an asset collection or collection list, a [PHObjectChangeDetails](phobjectchangedetails.md) object describe changes only to the collection’s properties. If you’re instead interested in changes to the collection’s membership, fetch the collection’s contents and use the [changeDetails(for:)](phchange/changedetails%28for_%29-33a6n.md) method to track changes to the fetch result.

> **Warning**

>  Don’t map [changedIndexes](phfetchresultchangedetails/changedindexes.md) directly to [UICollectionView](../uikit/uicollectionview.md) item indices in batch updates. Use these indices to reconfigure the corresponding cells after [performBatchUpdates:completion:](../uikit/uicollectionview/performbatchupdates%28__completion_%29.md). [UICollectionView](../uikit/uicollectionview.md) and [UITableView](../uikit/uitableview.md) expect the [changedIndexes](phfetchresultchangedetails/changedindexes.md) to be in the *before* state, while PhotoKit provides them in the *after* state, resulting in a crash if your app performs insertions and deletions at the same time as the changes.

## Topics

### Getting the Changed Object

- [objectBeforeChanges](phobjectchangedetails/objectbeforechanges.md): An object that reflects the original state of the asset or collection it represents.
- [objectAfterChanges](phobjectchangedetails/objectafterchanges.md): An object that reflects the current state of the asset or collection it represents.

### Getting Change Information

- [assetContentChanged](phobjectchangedetails/assetcontentchanged.md): A Boolean value that indicates whether the asset’s photo or video content has changed.
- [objectWasDeleted](phobjectchangedetails/objectwasdeleted.md): A Boolean value that indicates whether the object has been deleted from the Photos library.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Observing Library Changes

- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [registerChangeObserver:](phphotolibrary/register%28__%29-6y3b9.md): Registers an object to receive messages when objects in the photo library change.
- [unregisterChangeObserver:](phphotolibrary/unregisterchangeobserver%28__%29.md): Unregisters an object so that it no longer receives change messages.
- [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](phchange.md): A description of a change that occurred in the photo library.
- [PHFetchResultChangeDetails](phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.
