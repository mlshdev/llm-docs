> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/mamusichapticsmanager/checkhaptictrackavailabilityformedia(matchingcode:completionhandler:)](https://developer.apple.com/documentation/mediaaccessibility/mamusichapticsmanager/checkhaptictrackavailabilityformedia(matchingcode:completionhandler:))

# checkHapticTrackAvailabilityForMedia(matchingCode:completionHandler:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Checks whether a haptic track is available for the song with the specified International Standard Recording Code (ISRC).

## Declaration

```swift
func checkHapticTrackAvailabilityForMedia(matchingCode internationalStandardRecordingCode: String, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func isHapticTrackAvailable(forMediaMatching internationalStandardRecordingCode: String) async -> Bool
```

# checkHapticTrackAvailabilityForMediaMatchingCode:completionHandler: (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Checks whether a haptic track is available for the song with the specified International Standard Recording Code (ISRC).

## Declaration

```objectivec
- (void) checkHapticTrackAvailabilityForMediaMatchingCode:(NSString *) internationalStandardRecordingCode completionHandler:(void (^)(BOOL musicHapticsAvailable)) completionHandler;
```
