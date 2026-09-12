> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phchange](https://developer.apple.com/documentation/photos/phchange)

# PHChange (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of a change that occurred in the photo library.

## Declaration

```swift
class PHChange
```

## Mentioned In

- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md)

<a id="overview"></a>

## Overview

Photos provides [PHChange](phchange.md) objects to notify your app of changes to the assets and collections managed by the Photos app. To receive change information, adopt the [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md) protocol and register your observer with the shared [PHPhotoLibrary](phphotolibrary.md) object.

After Photos provides a change object, you use its methods to get a change details object. Call the [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) or [changeDetails(for:)](phchange/changedetails%28for_%29-33a6n.md) method, passing an asset or collection object you’ve previously fetched or a fetch result containing several such objects. The resulting [PHObjectChangeDetails](phobjectchangedetails.md) or [PHFetchResultChangeDetails](phfetchresultchangedetails.md) object describes any changes that have happened to the object or fetch result since you last fetched it.

## Topics

### Getting Change Details

- [changeDetails(for:)](phchange/changedetails%28for_%29-33a6n.md)
- [changeDetails(for:)](phchange/changedetails%28for_%29-536rd.md): Returns detailed change information for the specified asset or collection.
- [changeDetails(for:)](phchange/changedetails%28for_%29-2fne7.md): Returns detailed change information for a fetch result.

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
- [PHObjectChangeDetails](phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.

# PHChange (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of a change that occurred in the photo library.

## Declaration

```objectivec
@interface PHChange : NSObject
```

## Mentioned In

- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md)

<a id="overview"></a>

## Overview

Photos provides [PHChange](phchange.md) objects to notify your app of changes to the assets and collections managed by the Photos app. To receive change information, adopt the [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md) protocol and register your observer with the shared [PHPhotoLibrary](phphotolibrary.md) object.

After Photos provides a change object, you use its methods to get a change details object. Call the [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) or [changeDetails(for:)](phchange/changedetails%28for_%29-33a6n.md) method, passing an asset or collection object you’ve previously fetched or a fetch result containing several such objects. The resulting [PHObjectChangeDetails](phobjectchangedetails.md) or [PHFetchResultChangeDetails](phfetchresultchangedetails.md) object describes any changes that have happened to the object or fetch result since you last fetched it.

## Topics

### Getting Change Details

- [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:): Returns detailed change information for the specified asset or collection.
- [changeDetailsForFetchResult:](https://developer.apple.com/documentation/photos/phchange/changedetailsforfetchresult:): Returns detailed change information for a fetch result.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Observing Library Changes

- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [registerChangeObserver:](phphotolibrary/register%28__%29-6y3b9.md): Registers an object to receive messages when objects in the photo library change.
- [unregisterChangeObserver:](phphotolibrary/unregisterchangeobserver%28__%29.md): Unregisters an object so that it no longer receives change messages.
- [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHObjectChangeDetails](phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.
