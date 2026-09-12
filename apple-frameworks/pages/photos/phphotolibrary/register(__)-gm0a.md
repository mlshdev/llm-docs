> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/register(_:)-gm0a](https://developer.apple.com/documentation/photos/phphotolibrary/register(_:)-gm0a)

# register(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Registers an object to observe changes to the photo library’s availability.

## Declaration

```swift
func register(_ observer: any PHPhotoLibraryAvailabilityObserver)
```

## Parameters

- `observer`: The observer object to register.

## See Also

### Observing Library Availability

- [unregisterAvailabilityObserver(\_:)](unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](../phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.
- [unavailabilityReason](unavailabilityreason.md): An error that describes the reason the photo library isn’t available.

# registerAvailabilityObserver: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Registers an object to observe changes to the photo library’s availability.

## Declaration

```objectivec
- (void) registerAvailabilityObserver:(id<PHPhotoLibraryAvailabilityObserver>) observer;
```

## Parameters

- `observer`: The observer object to register.

## See Also

### Observing Library Availability

- [unregisterAvailabilityObserver:](unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](../phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.
- [unavailabilityReason](unavailabilityreason.md): An error that describes the reason the photo library isn’t available.
