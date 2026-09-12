> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/unavailabilityreason](https://developer.apple.com/documentation/photos/phphotolibrary/unavailabilityreason)

# unavailabilityReason (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An error that describes the reason the photo library isn’t available.

## Declaration

```swift
var unavailabilityReason: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a valid error only when the library is unavailable.

## See Also

### Observing Library Availability

- [register(\_:)](register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [unregisterAvailabilityObserver(\_:)](unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](../phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.

# unavailabilityReason (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An error that describes the reason the photo library isn’t available.

## Declaration

```objectivec
@property (atomic, strong, readonly, nullable) NSError * unavailabilityReason;
```

<a id="Discussion"></a>

## Discussion

This property contains a valid error only when the library is unavailable.

## See Also

### Observing Library Availability

- [registerAvailabilityObserver:](register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [unregisterAvailabilityObserver:](unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](../phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.
