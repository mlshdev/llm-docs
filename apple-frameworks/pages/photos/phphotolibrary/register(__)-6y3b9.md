> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/register(_:)-6y3b9](https://developer.apple.com/documentation/photos/phphotolibrary/register(_:)-6y3b9)

# register(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Registers an object to receive messages when objects in the photo library change.

## Declaration

```swift
func register(_ observer: any PHPhotoLibraryChangeObserver)
```

## Parameters

- `observer`: An object for receiving change messages.

## Mentioned In

- [Observing Changes in the Photo Library](../../photokit/observing-changes-in-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

You implicitly declare interest in change messages whenever you use a fetch method (such as [fetchAssets(with:)](../phasset/fetchassets%28with_%29.md)) to retrieve assets or collections. After you perform a fetch, Photos automatically sends change messages whenever the objects in the resulting fetch request change—including when changes happen that add to, remove from, or reorder the list of objects in the fetch result.

## See Also

### Observing Library Changes

- [Observing Changes in the Photo Library](../../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [unregisterChangeObserver(\_:)](unregisterchangeobserver%28__%29.md): Unregisters an object so that it no longer receives change messages.
- [PHPhotoLibraryChangeObserver](../phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](../phchange.md): A description of a change that occurred in the photo library.
- [PHObjectChangeDetails](../phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](../phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.

# registerChangeObserver: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Registers an object to receive messages when objects in the photo library change.

## Declaration

```objectivec
- (void) registerChangeObserver:(id<PHPhotoLibraryChangeObserver>) observer;
```

## Parameters

- `observer`: An object for receiving change messages.

## Mentioned In

- [Observing Changes in the Photo Library](../../photokit/observing-changes-in-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

You implicitly declare interest in change messages whenever you use a fetch method (such as [fetchAssetsWithOptions:](../phasset/fetchassets%28with_%29.md)) to retrieve assets or collections. After you perform a fetch, Photos automatically sends change messages whenever the objects in the resulting fetch request change—including when changes happen that add to, remove from, or reorder the list of objects in the fetch result.

## See Also

### Observing Library Changes

- [Observing Changes in the Photo Library](../../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [unregisterChangeObserver:](unregisterchangeobserver%28__%29.md): Unregisters an object so that it no longer receives change messages.
- [PHPhotoLibraryChangeObserver](../phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](../phchange.md): A description of a change that occurred in the photo library.
- [PHObjectChangeDetails](../phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](../phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.
