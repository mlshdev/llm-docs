> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/unregisterchangeobserver(_:)](https://developer.apple.com/documentation/photos/phphotolibrary/unregisterchangeobserver(_:))

# unregisterChangeObserver(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Unregisters an object so that it no longer receives change messages.

## Declaration

```swift
func unregisterChangeObserver(_ observer: any PHPhotoLibraryChangeObserver)
```

## Parameters

- `observer`: An object currently registered to receive change messages.

## See Also

### Observing Library Changes

- [Observing Changes in the Photo Library](../../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [register(\_:)](register%28__%29-6y3b9.md): Registers an object to receive messages when objects in the photo library change.
- [PHPhotoLibraryChangeObserver](../phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](../phchange.md): A description of a change that occurred in the photo library.
- [PHObjectChangeDetails](../phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](../phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.

# unregisterChangeObserver: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Unregisters an object so that it no longer receives change messages.

## Declaration

```objectivec
- (void) unregisterChangeObserver:(id<PHPhotoLibraryChangeObserver>) observer;
```

## Parameters

- `observer`: An object currently registered to receive change messages.

## See Also

### Observing Library Changes

- [Observing Changes in the Photo Library](../../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [registerChangeObserver:](register%28__%29-6y3b9.md): Registers an object to receive messages when objects in the photo library change.
- [PHPhotoLibraryChangeObserver](../phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](../phchange.md): A description of a change that occurred in the photo library.
- [PHObjectChangeDetails](../phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](../phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.
