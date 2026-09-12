> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetcache](https://developer.apple.com/documentation/avfoundation/avassetcache)

# AVAssetCache (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 10.0+

An object that you use to inspect locally cached media data.

## Declaration

```swift
class AVAssetCache
```

<a id="overview"></a>

## Overview

You can download HTTP Live Streaming assets to an iOS device using the [AVAssetDownloadURLSession](avassetdownloadurlsession.md) and [AVAssetDownloadTask](avassetdownloadtask.md) classes.

## Topics

### Inspecting the cached media

- [isPlayableOffline](avassetcache/isplayableoffline.md): A Boolean value that indicates whether the asset is playable without an internet connection.
- [mediaSelectionOptions(in:)](avassetcache/mediaselectionoptions%28in_%29.md): Returns an array of locally cached media selection options that are available for offline use.
- [mediaPresentationLanguages(for:)](avassetcache/mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.
- [mediaPresentationSettings(for:)](avassetcache/mediapresentationsettings%28for_%29.md): For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.

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

# AVAssetCache (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 10.0+

An object that you use to inspect locally cached media data.

## Declaration

```objectivec
@interface AVAssetCache : NSObject
```

<a id="overview"></a>

## Overview

You can download HTTP Live Streaming assets to an iOS device using the [AVAssetDownloadURLSession](avassetdownloadurlsession.md) and [AVAssetDownloadTask](avassetdownloadtask.md) classes.

## Topics

### Inspecting the cached media

- [playableOffline](avassetcache/isplayableoffline.md): A Boolean value that indicates whether the asset is playable without an internet connection.
- [mediaSelectionOptionsInMediaSelectionGroup:](avassetcache/mediaselectionoptions%28in_%29.md): Returns an array of locally cached media selection options that are available for offline use.
- [mediaPresentationLanguagesForMediaSelectionGroup:](avassetcache/mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.
- [mediaPresentationSettingsForMediaSelectionGroup:](avassetcache/mediapresentationsettings%28for_%29.md): For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
