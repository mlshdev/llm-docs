> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiooutputunitgethosticon(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiooutputunitgethosticon(_:_:))

# AudioOutputUnitGetHostIcon(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The host app’s icon.

> Inter-App Audio API is deprecated in favor of Audio Units

## Declaration

```swift
func AudioOutputUnitGetHostIcon(_ au: AudioUnit, _ desiredPointSize: Float) -> UIImage?
```

<a id="discussion"></a>

## Discussion

The [UIImage](../uikit/uiimage.md) of the host app’s icon.

## See Also

### Inter-App Audio

- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.

# AudioOutputUnitGetHostIcon (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The host app’s icon.

> Inter-App Audio API is deprecated in favor of Audio Units

## Declaration

```objectivec
extern UIImage *AudioOutputUnitGetHostIcon(AudioUnit au, float desiredPointSize);
```

<a id="discussion"></a>

## Discussion

The [UIImage](../uikit/uiimage.md) of the host app’s icon.

## See Also

### Inter-App Audio

- [AudioOutputUnitPublish](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioComponentGetIcon](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
