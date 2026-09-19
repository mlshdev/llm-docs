> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avdisplaymanager

# AVDisplayManager (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A tvOS management object that controls whether a TV switches modes to match the video’s native mode.

## Declaration

```swift
class AVDisplayManager
```

<a id="overview"></a>

## Overview

If you set the display manager’s [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md), when a user enables a Match Content setting, the TV attempts to change modes to match the currently playing video’s native display criteria.

> **Important**

>  Don’t directly instantiate a display manager object. Instead, access the current instance from the key window’s [avDisplayManager](../uikit/uiwindow/avdisplaymanager.md) property.

## Topics

### Matching a video’s native display mode

- [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [isDisplayCriteriaMatchingEnabled](avdisplaymanager/isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.
- [isDisplayModeSwitchInProgress](avdisplaymanager/isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.

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

## See Also

### Display management

- [AVDisplayDynamicRange](avdisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.

# AVDisplayManager (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A tvOS management object that controls whether a TV switches modes to match the video’s native mode.

## Declaration

```objectivec
@interface AVDisplayManager : NSObject
```

<a id="overview"></a>

## Overview

If you set the display manager’s [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md), when a user enables a Match Content setting, the TV attempts to change modes to match the currently playing video’s native display criteria.

> **Important**

>  Don’t directly instantiate a display manager object. Instead, access the current instance from the key window’s [avDisplayManager](../uikit/uiwindow/avdisplaymanager.md) property.

## Topics

### Matching a video’s native display mode

- [preferredDisplayCriteria](avdisplaymanager/preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [displayCriteriaMatchingEnabled](avdisplaymanager/isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.
- [displayModeSwitchInProgress](avdisplaymanager/isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.

### Notifications

- [AVDisplayManagerModeSwitchEndNotification](avdisplaymanagermodeswitchendnotification.md): Posted when a display mode switch has completed.
- [AVDisplayManagerModeSwitchSettingsChangedNotification](avdisplaymanagermodeswitchsettingschangednotification.md): Posted when the user settings for display criteria matching have changed.
- [AVDisplayManagerModeSwitchStartNotification](avdisplaymanagermodeswitchstartnotification.md): Posted when a display begins a display mode switch.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Display management

- [AVDisplayDynamicRange](avdisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.
