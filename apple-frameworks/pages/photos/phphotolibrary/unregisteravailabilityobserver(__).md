> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phphotolibrary/unregisteravailabilityobserver(_:)

# unregisterAvailabilityObserver(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Unregisters an object from observing changes to the photo library’s availability.

## Declaration

```swift
func unregisterAvailabilityObserver(_ observer: any PHPhotoLibraryAvailabilityObserver)
```

## Parameters

- `observer`: The observer object to unregister.

## See Also

### Observing Library Availability

- [register(\_:)](register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](../phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.
- [unavailabilityReason](unavailabilityreason.md): An error that describes the reason the photo library isn’t available.

# unregisterAvailabilityObserver: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Unregisters an object from observing changes to the photo library’s availability.

## Declaration

```objectivec
- (void) unregisterAvailabilityObserver:(id<PHPhotoLibraryAvailabilityObserver>) observer;
```

## Parameters

- `observer`: The observer object to unregister.

## See Also

### Observing Library Availability

- [registerAvailabilityObserver:](register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](../phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.
- [unavailabilityReason](unavailabilityreason.md): An error that describes the reason the photo library isn’t available.
