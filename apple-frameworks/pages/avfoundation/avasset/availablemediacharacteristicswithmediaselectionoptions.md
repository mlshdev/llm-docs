> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/availablemediacharacteristicswithmediaselectionoptions](https://developer.apple.com/documentation/avfoundation/avasset/availablemediacharacteristicswithmediaselectionoptions)

# availableMediaCharacteristicsWithMediaSelectionOptions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 16.0) · iPadOS 5.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

An array of media characteristics for which a media selection option is available.

> Load the value of [availableMediaCharacteristicsWithMediaSelectionOptions](../avpartialasyncproperty/availablemediacharacteristicswithmediaselectionoptions.md) asynchronously instead.

## Declaration

```swift
var availableMediaCharacteristicsWithMediaSelectionOptions: [AVMediaCharacteristic] { get }
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

# availableMediaCharacteristicsWithMediaSelectionOptions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of media characteristics for which a media selection option is available.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableMediaCharacteristicsWithMediaSelectionOptions;
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

## See Also

### Accessing media selections

- [allMediaSelections](allmediaselections.md): Deprecated. The array of available media selections for this asset.
- [mediaSelectionGroupForMediaCharacteristic:](mediaselectiongroup%28formediacharacteristic_%29.md): Deprecated. Returns a media selection group that contains one or more options with the specified media characteristic.
