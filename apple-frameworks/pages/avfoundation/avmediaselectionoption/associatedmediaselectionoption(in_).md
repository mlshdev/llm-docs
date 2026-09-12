> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/associatedmediaselectionoption(in:)](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/associatedmediaselectionoption(in:))

# associatedMediaSelectionOption(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a media selection option associated with the receiver in a given group.

## Declaration

```swift
func associatedMediaSelectionOption(in mediaSelectionGroup: AVMediaSelectionGroup) -> AVMediaSelectionOption?
```

## Parameters

- `mediaSelectionGroup`: A media selection group in which an associated option is to be sought.

<a id="return-value"></a>

## Return Value

A media selection option associated with the receiver in `mediaSelectionGroup`, or `nil` if none were found.

<a id="Discussion"></a>

## Discussion

Audible media selection options often have associated legible media selection options; in particular, audible options are typically associated with forced-only subtitle options with the same locale. See [containsOnlyForcedSubtitles](../avmediacharacteristic/containsonlyforcedsubtitles.md) for a discussion of forced-only subtitles.

# associatedMediaSelectionOptionInMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a media selection option associated with the receiver in a given group.

## Declaration

```objectivec
- (AVMediaSelectionOption *) associatedMediaSelectionOptionInMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: A media selection group in which an associated option is to be sought.

<a id="return-value"></a>

## Return Value

A media selection option associated with the receiver in `mediaSelectionGroup`, or `nil` if none were found.

<a id="Discussion"></a>

## Discussion

Audible media selection options often have associated legible media selection options; in particular, audible options are typically associated with forced-only subtitle options with the same locale. See [AVMediaCharacteristicContainsOnlyForcedSubtitles](../avmediacharacteristic/containsonlyforcedsubtitles.md) for a discussion of forced-only subtitles.
