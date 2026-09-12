> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/mediaselectiongroup(formediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avasset/mediaselectiongroup(formediacharacteristic:))

# mediaSelectionGroup(forMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 16.0) · iPadOS 5.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns a media selection group that contains one or more options with the specified media characteristic.

> Use [loadMediaSelectionGroup(for:completionHandler:)](loadmediaselectiongroup%28for_completionhandler_%29.md) instead.

## Declaration

```swift
func mediaSelectionGroup(forMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> AVMediaSelectionGroup?
```

## Parameters

- `mediaCharacteristic`: A media characteristic for which to obtain the available media selection options.

  Only [audible](../avmediacharacteristic/audible.md), [visual](../avmediacharacteristic/visual.md), and [legible](../avmediacharacteristic/legible.md) are currently supported.

  - Pass [audible](../avmediacharacteristic/audible.md) to return the group of available options for audio media in various languages and for various purposes, such as descriptive audio.
  - Pass [legible](../avmediacharacteristic/legible.md) to return the group of available options for subtitles in various languages and for various purposes.
  - Pass [visual](../avmediacharacteristic/visual.md) to return the group of available options for video media.

<a id="return-value"></a>

## Return Value

An [AVMediaSelectionGroup](../avmediaselectiongroup.md) that contains one or more options with the specified media characteristic, or `nil` if none could be found.

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

<a id="Discussion"></a>

## Discussion

Use the filtering methods [AVMediaSelectionGroup](../avmediaselectiongroup.md) defines to filter the group’s options according to playability, locale, and additional media characteristics.

You can call this method without blocking the current thread after you’ve asynchronously loaded the [availableMediaCharacteristicsWithMediaSelectionOptions](availablemediacharacteristicswithmediaselectionoptions.md) property.

# mediaSelectionGroupForMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 18.0) · iPadOS 5.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns a media selection group that contains one or more options with the specified media characteristic.

> Use [loadMediaSelectionGroupForMediaCharacteristic:completionHandler:](loadmediaselectiongroup%28for_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (AVMediaSelectionGroup *) mediaSelectionGroupForMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: A media characteristic for which to obtain the available media selection options.

  Only [AVMediaCharacteristicAudible](../avmediacharacteristic/audible.md), [AVMediaCharacteristicVisual](../avmediacharacteristic/visual.md), and [AVMediaCharacteristicLegible](../avmediacharacteristic/legible.md) are currently supported.

  - Pass [AVMediaCharacteristicAudible](../avmediacharacteristic/audible.md) to return the group of available options for audio media in various languages and for various purposes, such as descriptive audio.
  - Pass [AVMediaCharacteristicLegible](../avmediacharacteristic/legible.md) to return the group of available options for subtitles in various languages and for various purposes.
  - Pass [AVMediaCharacteristicVisual](../avmediacharacteristic/visual.md) to return the group of available options for video media.

<a id="return-value"></a>

## Return Value

An [AVMediaSelectionGroup](../avmediaselectiongroup.md) that contains one or more options with the specified media characteristic, or `nil` if none could be found.

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

<a id="Discussion"></a>

## Discussion

Use the filtering methods [AVMediaSelectionGroup](../avmediaselectiongroup.md) defines to filter the group’s options according to playability, locale, and additional media characteristics.

You can call this method without blocking the current thread after you’ve asynchronously loaded the [availableMediaCharacteristicsWithMediaSelectionOptions](availablemediacharacteristicswithmediaselectionoptions.md) property.

## See Also

### Accessing media selections

- [allMediaSelections](allmediaselections.md): Deprecated. The array of available media selections for this asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](availablemediacharacteristicswithmediaselectionoptions.md): Deprecated. An array of media characteristics for which a media selection option is available.
