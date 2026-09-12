> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetcache/mediaselectionoptions(in:)](https://developer.apple.com/documentation/avfoundation/avassetcache/mediaselectionoptions(in:))

# mediaSelectionOptions(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 10.0+

Returns an array of locally cached media selection options that are available for offline use.

## Declaration

```swift
func mediaSelectionOptions(in mediaSelectionGroup: AVMediaSelectionGroup) -> [AVMediaSelectionOption]
```

## Parameters

- `mediaSelectionGroup`: The containing media selection group.

<a id="return-value"></a>

## Return Value

The array of media selection options, or an empty array if none are available.

## See Also

### Inspecting the cached media

- [isPlayableOffline](isplayableoffline.md): A Boolean value that indicates whether the asset is playable without an internet connection.
- [mediaPresentationLanguages(for:)](mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.
- [mediaPresentationSettings(for:)](mediapresentationsettings%28for_%29.md): For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.

# mediaSelectionOptionsInMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 10.0+

Returns an array of locally cached media selection options that are available for offline use.

## Declaration

```objectivec
- (NSArray<AVMediaSelectionOption *> *) mediaSelectionOptionsInMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: The containing media selection group.

<a id="return-value"></a>

## Return Value

The array of media selection options, or an empty array if none are available.

## See Also

### Inspecting the cached media

- [playableOffline](isplayableoffline.md): A Boolean value that indicates whether the asset is playable without an internet connection.
- [mediaPresentationLanguagesForMediaSelectionGroup:](mediapresentationlanguages%28for_%29.md): Returns an array of extended language tags for languages that can be selected for offline operations via use of the AVMediaSelectionGroup’s AVCustomMediaSelectionScheme.
- [mediaPresentationSettingsForMediaSelectionGroup:](mediapresentationsettings%28for_%29.md): For each AVMediaPresentationSelector defined by the AVCustomMediaSelectionScheme of an AVMediaSelectionGroup, returns the AVMediaPresentationSettings that can be satisfied for offline operations, e.g. playback.
