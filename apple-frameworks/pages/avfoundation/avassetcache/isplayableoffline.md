> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetcache/isplayableoffline](https://developer.apple.com/documentation/avfoundation/avassetcache/isplayableoffline)

# isPlayableOffline (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the asset is playable without an internet connection.

## Declaration

```swift
var isPlayableOffline: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Check the value of this property to determine the asset’s suitability for playback before presenting or attempting to play it.

> **Note**

>  A property value of [true](https://developer.apple.com/documentation/swift/true) doesn’t indicate that all of the asset’s associated media selection options are available for offline playback. Instead, call [mediaSelectionOptions(in:)](mediaselectionoptions%28in_%29.md) to determine which media selections are available.

## See Also

### Inspecting the cached media

- [mediaSelectionOptions(in:)](mediaselectionoptions%28in_%29.md): Returns an array of locally cached media selection options that are available for offline use.
- [mediaPresentationLanguages(for:)](mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.
- [mediaPresentationSettings(for:)](mediapresentationsettings%28for_%29.md): For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.

# playableOffline (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the asset is playable without an internet connection.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPlayableOffline) BOOL playableOffline;
```

<a id="Discussion"></a>

## Discussion

Check the value of this property to determine the asset’s suitability for playback before presenting or attempting to play it.

> **Note**

>  A property value of [true](https://developer.apple.com/documentation/swift/true) doesn’t indicate that all of the asset’s associated media selection options are available for offline playback. Instead, call [mediaSelectionOptionsInMediaSelectionGroup:](mediaselectionoptions%28in_%29.md) to determine which media selections are available.

## See Also

### Inspecting the cached media

- [mediaSelectionOptionsInMediaSelectionGroup:](mediaselectionoptions%28in_%29.md): Returns an array of locally cached media selection options that are available for offline use.
- [mediaPresentationLanguagesForMediaSelectionGroup:](mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.
- [mediaPresentationSettingsForMediaSelectionGroup:](mediapresentationsettings%28for_%29.md): For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.
