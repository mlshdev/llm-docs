> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/appliesmediaselectioncriteriaautomatically](https://developer.apple.com/documentation/avfoundation/avplayer/appliesmediaselectioncriteriaautomatically)

# appliesMediaSelectionCriteriaAutomatically (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the receiver should apply the current selection criteria automatically to player items.

## Declaration

```swift
nonisolated var appliesMediaSelectionCriteriaAutomatically: Bool { get set }
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

<a id="Discussion"></a>

## Discussion

By default, the `AVPlayer` instance applies selection criteria based on system accessibility preferences. To override the default criteria for any media selection group, use [setMediaSelectionCriteria(\_:forMediaCharacteristic:)](setmediaselectioncriteria%28__formediacharacteristic_%29.md).

> **Note**

>  For clients linked against the iOS 7.0 and later or against the macOS 10.9 and later, the default is [true](https://developer.apple.com/documentation/swift/true). For all others, the default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring media selection criteria

- [mediaSelectionCriteria(forMediaCharacteristic:)](mediaselectioncriteria%28formediacharacteristic_%29.md): Returns the automatic selection criteria for media items with the specified media characteristic.
- [setMediaSelectionCriteria(\_:forMediaCharacteristic:)](setmediaselectioncriteria%28__formediacharacteristic_%29.md): Applies automatic selection criteria for media that has the specified media characteristic.

# appliesMediaSelectionCriteriaAutomatically (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the receiver should apply the current selection criteria automatically to player items.

## Declaration

```objectivec
@property BOOL appliesMediaSelectionCriteriaAutomatically;
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

<a id="Discussion"></a>

## Discussion

By default, the `AVPlayer` instance applies selection criteria based on system accessibility preferences. To override the default criteria for any media selection group, use [setMediaSelectionCriteria:forMediaCharacteristic:](setmediaselectioncriteria%28__formediacharacteristic_%29.md).

> **Note**

>  For clients linked against the iOS 7.0 and later or against the macOS 10.9 and later, the default is [true](https://developer.apple.com/documentation/swift/true). For all others, the default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring media selection criteria

- [mediaSelectionCriteriaForMediaCharacteristic:](mediaselectioncriteria%28formediacharacteristic_%29.md): Returns the automatic selection criteria for media items with the specified media characteristic.
- [setMediaSelectionCriteria:forMediaCharacteristic:](setmediaselectioncriteria%28__formediacharacteristic_%29.md): Applies automatic selection criteria for media that has the specified media characteristic.
