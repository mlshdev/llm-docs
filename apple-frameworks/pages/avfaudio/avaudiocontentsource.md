> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiocontentsource](https://developer.apple.com/documentation/avfaudio/avaudiocontentsource)

# AVAudioContentSource (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
enum AVAudioContentSource
```

## Topics

### Content sources

- [AVAudioContentSource.appleAV_Spatial_Live](avaudiocontentsource/appleav_spatial_live.md)
- [AVAudioContentSource.appleAV_Spatial_Offline](avaudiocontentsource/appleav_spatial_offline.md)
- [AVAudioContentSource.appleAV_Traditional_Live](avaudiocontentsource/appleav_traditional_live.md)
- [AVAudioContentSource.appleAV_Traditional_Offline](avaudiocontentsource/appleav_traditional_offline.md)
- [AVAudioContentSource.appleCapture_Spatial_Enhanced](avaudiocontentsource/applecapture_spatial_enhanced.md)
- [AVAudioContentSource.appleCapture_Spatial](avaudiocontentsource/applecapture_spatial.md)
- [AVAudioContentSource.appleCapture_Traditional](avaudiocontentsource/applecapture_traditional.md)
- [AVAudioContentSource.appleMusic_Spatial](avaudiocontentsource/applemusic_spatial.md)
- [AVAudioContentSource.appleMusic_Traditional](avaudiocontentsource/applemusic_traditional.md)
- [AVAudioContentSource.applePassthrough](avaudiocontentsource/applepassthrough.md)
- [AVAudioContentSource.av_Spatial_Live](avaudiocontentsource/av_spatial_live.md)
- [AVAudioContentSource.av_Spatial_Offline](avaudiocontentsource/av_spatial_offline.md)
- [AVAudioContentSource.av_Traditional_Live](avaudiocontentsource/av_traditional_live.md)
- [AVAudioContentSource.av_Traditional_Offline](avaudiocontentsource/av_traditional_offline.md)
- [AVAudioContentSource.capture_Spatial_Enhanced](avaudiocontentsource/capture_spatial_enhanced.md)
- [AVAudioContentSource.capture_Spatial](avaudiocontentsource/capture_spatial.md)
- [AVAudioContentSource.capture_Traditional](avaudiocontentsource/capture_traditional.md)
- [AVAudioContentSource.music_Spatial](avaudiocontentsource/music_spatial.md)
- [AVAudioContentSource.music_Traditional](avaudiocontentsource/music_traditional.md)
- [AVAudioContentSource.passthrough](avaudiocontentsource/passthrough.md)
- [AVAudioContentSource.reserved](avaudiocontentsource/reserved.md)
- [AVAudioContentSource.unspecified](avaudiocontentsource/unspecified.md)

### Initializers

- [init(rawValue:)](avaudiocontentsource/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing packet dependencies

- [audioSyncPacketFrequency](avaudioconverter/audiosyncpacketfrequency.md)
- [contentSource](avaudioconverter/contentsource.md)
- [dynamicRangeControlConfiguration](avaudioconverter/dynamicrangecontrolconfiguration.md)
- [AVAudioDynamicRangeControlConfiguration](avaudiodynamicrangecontrolconfiguration.md)

# AVAudioContentSource (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
enum AVAudioContentSource : NSInteger;
```

## Topics

### Content sources

- [AVAudioContentSource_AppleAV_Spatial_Live](avaudiocontentsource/appleav_spatial_live.md)
- [AVAudioContentSource_AppleAV_Spatial_Offline](avaudiocontentsource/appleav_spatial_offline.md)
- [AVAudioContentSource_AppleAV_Traditional_Live](avaudiocontentsource/appleav_traditional_live.md)
- [AVAudioContentSource_AppleAV_Traditional_Offline](avaudiocontentsource/appleav_traditional_offline.md)
- [AVAudioContentSource_AppleCapture_Spatial_Enhanced](avaudiocontentsource/applecapture_spatial_enhanced.md)
- [AVAudioContentSource_AppleCapture_Spatial](avaudiocontentsource/applecapture_spatial.md)
- [AVAudioContentSource_AppleCapture_Traditional](avaudiocontentsource/applecapture_traditional.md)
- [AVAudioContentSource_AppleMusic_Spatial](avaudiocontentsource/applemusic_spatial.md)
- [AVAudioContentSource_AppleMusic_Traditional](avaudiocontentsource/applemusic_traditional.md)
- [AVAudioContentSource_ApplePassthrough](avaudiocontentsource/applepassthrough.md)
- [AVAudioContentSource_AV_Spatial_Live](avaudiocontentsource/av_spatial_live.md)
- [AVAudioContentSource_AV_Spatial_Offline](avaudiocontentsource/av_spatial_offline.md)
- [AVAudioContentSource_AV_Traditional_Live](avaudiocontentsource/av_traditional_live.md)
- [AVAudioContentSource_AV_Traditional_Offline](avaudiocontentsource/av_traditional_offline.md)
- [AVAudioContentSource_Capture_Spatial_Enhanced](avaudiocontentsource/capture_spatial_enhanced.md)
- [AVAudioContentSource_Capture_Spatial](avaudiocontentsource/capture_spatial.md)
- [AVAudioContentSource_Capture_Traditional](avaudiocontentsource/capture_traditional.md)
- [AVAudioContentSource_Music_Spatial](avaudiocontentsource/music_spatial.md)
- [AVAudioContentSource_Music_Traditional](avaudiocontentsource/music_traditional.md)
- [AVAudioContentSource_Passthrough](avaudiocontentsource/passthrough.md)
- [AVAudioContentSource_Reserved](avaudiocontentsource/reserved.md)
- [AVAudioContentSource_Unspecified](avaudiocontentsource/unspecified.md)

## See Also

### Managing packet dependencies

- [audioSyncPacketFrequency](avaudioconverter/audiosyncpacketfrequency.md)
- [contentSource](avaudioconverter/contentsource.md)
- [dynamicRangeControlConfiguration](avaudioconverter/dynamicrangecontrolconfiguration.md)
- [AVAudioDynamicRangeControlConfiguration](avaudiodynamicrangecontrolconfiguration.md)
