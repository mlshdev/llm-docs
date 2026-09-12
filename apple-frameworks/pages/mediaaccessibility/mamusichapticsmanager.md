> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/mamusichapticsmanager](https://developer.apple.com/documentation/mediaaccessibility/mamusichapticsmanager)

# MAMusicHapticsManager (Swift)

**Framework:** Media Accessibility  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A class that reports information about the Music Haptics feature.

## Declaration

```swift
class MAMusicHapticsManager
```

<a id="overview"></a>

## Overview

Use the [shared](mamusichapticsmanager/shared.md) instance of `MAMusicHapticsManager` to check information about the Music Haptics feature so you can respond accordingly in your app. For example, you can check whether Music Haptics is on, get a notification when it turns on or off, or check whether a haptic track is currently playing along with the Now Playing item.

## Topics

### Getting the shared haptics manager

- [shared](mamusichapticsmanager/shared.md): The shared Music Haptics manager object.

### Checking if Music Haptics is on

- [isActive](mamusichapticsmanager/isactive.md): A Boolean value that indicates whether the system setting for Music Haptics is on.
- [activeStatusDidChangeNotification](mamusichapticsmanager/activestatusdidchangenotification.md): A notification that posts when the value of the Music Haptics system setting changes.

### Checking haptic track availability

- [checkHapticTrackAvailabilityForMedia(matchingCode:completionHandler:)](mamusichapticsmanager/checkhaptictrackavailabilityformedia%28matchingcode_completionhandler_%29.md): Checks whether a haptic track is available for the song with the specified International Standard Recording Code (ISRC).

### Observing haptic playback

- [addStatusObserver(\_:)](mamusichapticsmanager/addstatusobserver%28__%29.md): Adds an observer to monitor the status of haptic playback for the Now Playing song.
- [removeStatusObserver(\_:)](mamusichapticsmanager/removestatusobserver%28__%29.md): Removes the observer monitoring the status of haptic playback for the Now Playing song.

### Supporting types

- [MAMusicHaptics](mamusichaptics.md): A namespace for Music Haptics symbols.

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

# MAMusicHapticsManager (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A class that reports information about the Music Haptics feature.

## Declaration

```objectivec
@interface MAMusicHapticsManager : NSObject
```

<a id="overview"></a>

## Overview

Use the [sharedManager](mamusichapticsmanager/shared.md) instance of `MAMusicHapticsManager` to check information about the Music Haptics feature so you can respond accordingly in your app. For example, you can check whether Music Haptics is on, get a notification when it turns on or off, or check whether a haptic track is currently playing along with the Now Playing item.

## Topics

### Getting the shared haptics manager

- [sharedManager](mamusichapticsmanager/shared.md): The shared Music Haptics manager object.

### Checking if Music Haptics is on

- [isActive](mamusichapticsmanager/isactive.md): A Boolean value that indicates whether the system setting for Music Haptics is on.
- [MAMusicHapticsManagerActiveStatusDidChangeNotification](mamusichapticsmanager/activestatusdidchangenotification.md): A notification that posts when the value of the Music Haptics system setting changes.

### Checking haptic track availability

- [checkHapticTrackAvailabilityForMediaMatchingCode:completionHandler:](mamusichapticsmanager/checkhaptictrackavailabilityformedia%28matchingcode_completionhandler_%29.md): Checks whether a haptic track is available for the song with the specified International Standard Recording Code (ISRC).

### Observing haptic playback

- [addStatusObserver:](mamusichapticsmanager/addstatusobserver%28__%29.md): Adds an observer to monitor the status of haptic playback for the Now Playing song.
- [removeStatusObserver:](mamusichapticsmanager/removestatusobserver%28__%29.md): Removes the observer monitoring the status of haptic playback for the Now Playing song.

### Macros

- [MediaAccessibility_MAMusicHapticsManager_h](mediaaccessibility_mamusichapticsmanager_h.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
