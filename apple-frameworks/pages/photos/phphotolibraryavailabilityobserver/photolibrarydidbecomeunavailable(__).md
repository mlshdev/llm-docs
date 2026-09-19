> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phphotolibraryavailabilityobserver/photolibrarydidbecomeunavailable(_:)

# photoLibraryDidBecomeUnavailable(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Tells the observer that the photo library’s availability changed.

## Declaration

```swift
func photoLibraryDidBecomeUnavailable(_ photoLibrary: PHPhotoLibrary)
```

## Parameters

- `photoLibrary`: The photo library whose availability changed.

# photoLibraryDidBecomeUnavailable: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Tells the observer that the photo library’s availability changed.

## Declaration

```objectivec
- (void) photoLibraryDidBecomeUnavailable:(PHPhotoLibrary *) photoLibrary;
```

## Parameters

- `photoLibrary`: The photo library whose availability changed.
