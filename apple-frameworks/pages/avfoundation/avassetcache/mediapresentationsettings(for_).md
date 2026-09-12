> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetcache/mediapresentationsettings(for:)](https://developer.apple.com/documentation/avfoundation/avassetcache/mediapresentationsettings(for:))

# mediaPresentationSettings(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.

## Declaration

```swift
func mediaPresentationSettings(for mediaSelectionGroup: AVMediaSelectionGroup) -> [AVMediaPresentationSelector : [AVMediaPresentationSetting]]
```

## See Also

### Inspecting the cached media

- [isPlayableOffline](isplayableoffline.md): A Boolean value that indicates whether the asset is playable without an internet connection.
- [mediaSelectionOptions(in:)](mediaselectionoptions%28in_%29.md): Returns an array of locally cached media selection options that are available for offline use.
- [mediaPresentationLanguages(for:)](mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.

# mediaPresentationSettingsForMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.

## Declaration

```objectivec
- (NSDictionary<AVMediaPresentationSelector *,NSArray<AVMediaPresentationSetting *> *> *) mediaPresentationSettingsForMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## See Also

### Inspecting the cached media

- [playableOffline](isplayableoffline.md): A Boolean value that indicates whether the asset is playable without an internet connection.
- [mediaSelectionOptionsInMediaSelectionGroup:](mediaselectionoptions%28in_%29.md): Returns an array of locally cached media selection options that are available for offline use.
- [mediaPresentationLanguagesForMediaSelectionGroup:](mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.
