> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/mediaselectiongroup(formediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avmutablemovie/mediaselectiongroup(formediacharacteristic:))

# mediaSelectionGroup(forMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a media selection group that contains one or more options with the specified media characteristic.

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

<a id="Discussion"></a>

## Discussion

Use the filtering methods [AVMediaSelectionGroup](../avmediaselectiongroup.md) defines to filter the group’s options according to playability, locale, and additional media characteristics.

You can call this method without blocking the current thread after you’ve asynchronously loaded the [availableMediaCharacteristicsWithMediaSelectionOptions](../avasset/availablemediacharacteristicswithmediaselectionoptions.md) property.

## See Also

### Accessing media selections

- [allMediaSelections](allmediaselections.md): The array of available media selections for this asset.
- [availableMediaCharacteristicsWithMediaSelectionOptions](availablemediacharacteristicswithmediaselectionoptions.md): An array of media characteristics for which a media selection option is available.

# mediaSelectionGroupForMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a media selection group that contains one or more options with the specified media characteristic.

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

<a id="Discussion"></a>

## Discussion

Use the filtering methods [AVMediaSelectionGroup](../avmediaselectiongroup.md) defines to filter the group’s options according to playability, locale, and additional media characteristics.

You can call this method without blocking the current thread after you’ve asynchronously loaded the [availableMediaCharacteristicsWithMediaSelectionOptions](../avasset/availablemediacharacteristicswithmediaselectionoptions.md) property.
