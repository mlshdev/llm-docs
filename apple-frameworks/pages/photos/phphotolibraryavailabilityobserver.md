> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibraryavailabilityobserver](https://developer.apple.com/documentation/photos/phphotolibraryavailabilityobserver)

# PHPhotoLibraryAvailabilityObserver (Swift)

**Framework:** Photos  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A protocol to adopt to have the system notify your app when the availability of a photo library changes.

## Declaration

```swift
protocol PHPhotoLibraryAvailabilityObserver : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Observing changes to the photo library’s availability is primarily of concern with Mac apps created using macOS and Mac Catalyst, where the library may reside on an external drive or in cloud storage.

## Topics

### Observing Availability Changes

- [photoLibraryDidBecomeUnavailable(\_:)](phphotolibraryavailabilityobserver/photolibrarydidbecomeunavailable%28__%29.md): Tells the observer that the photo library’s availability changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Observing Library Availability

- [register(\_:)](phphotolibrary/register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [unregisterAvailabilityObserver(\_:)](phphotolibrary/unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [unavailabilityReason](phphotolibrary/unavailabilityreason.md): An error that describes the reason the photo library isn’t available.

# PHPhotoLibraryAvailabilityObserver (Objective-C)

**Framework:** Photos  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A protocol to adopt to have the system notify your app when the availability of a photo library changes.

## Declaration

```objectivec
@protocol PHPhotoLibraryAvailabilityObserver <NSObject>
```

<a id="overview"></a>

## Overview

Observing changes to the photo library’s availability is primarily of concern with Mac apps created using macOS and Mac Catalyst, where the library may reside on an external drive or in cloud storage.

## Topics

### Observing Availability Changes

- [photoLibraryDidBecomeUnavailable:](phphotolibraryavailabilityobserver/photolibrarydidbecomeunavailable%28__%29.md): Tells the observer that the photo library’s availability changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Observing Library Availability

- [registerAvailabilityObserver:](phphotolibrary/register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [unregisterAvailabilityObserver:](phphotolibrary/unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [unavailabilityReason](phphotolibrary/unavailabilityreason.md): An error that describes the reason the photo library isn’t available.
