> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/mediaselectioncriteria(formediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avplayer/mediaselectioncriteria(formediacharacteristic:))

# mediaSelectionCriteria(forMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the automatic selection criteria for media items with the specified media characteristic.

## Declaration

```swift
nonisolated func mediaSelectionCriteria(forMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> AVPlayerMediaSelectionCriteria?
```

## Parameters

- `mediaCharacteristic`: The media characteristic for which the selection criteria is to be returned. Supported values include [audible](../avmediacharacteristic/audible.md), [legible](../avmediacharacteristic/legible.md), and [visual](../avmediacharacteristic/visual.md).

<a id="return-value"></a>

## Return Value

The [AVPlayerMediaSelectionCriteria](../avplayermediaselectioncriteria.md) for `mediaCharacteristic`.

## See Also

### Configuring media selection criteria

- [appliesMediaSelectionCriteriaAutomatically](appliesmediaselectioncriteriaautomatically.md): A Boolean value that indicates whether the receiver should apply the current selection criteria automatically to player items.
- [setMediaSelectionCriteria(\_:forMediaCharacteristic:)](setmediaselectioncriteria%28__formediacharacteristic_%29.md): Applies automatic selection criteria for media that has the specified media characteristic.

# mediaSelectionCriteriaForMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the automatic selection criteria for media items with the specified media characteristic.

## Declaration

```objectivec
- (AVPlayerMediaSelectionCriteria *) mediaSelectionCriteriaForMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic for which the selection criteria is to be returned. Supported values include [AVMediaCharacteristicAudible](../avmediacharacteristic/audible.md), [AVMediaCharacteristicLegible](../avmediacharacteristic/legible.md), and [AVMediaCharacteristicVisual](../avmediacharacteristic/visual.md).

<a id="return-value"></a>

## Return Value

The [AVPlayerMediaSelectionCriteria](../avplayermediaselectioncriteria.md) for `mediaCharacteristic`.

## See Also

### Configuring media selection criteria

- [appliesMediaSelectionCriteriaAutomatically](appliesmediaselectioncriteriaautomatically.md): A Boolean value that indicates whether the receiver should apply the current selection criteria automatically to player items.
- [setMediaSelectionCriteria:forMediaCharacteristic:](setmediaselectioncriteria%28__formediacharacteristic_%29.md): Applies automatic selection criteria for media that has the specified media characteristic.
