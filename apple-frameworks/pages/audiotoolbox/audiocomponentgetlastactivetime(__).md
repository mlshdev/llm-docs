> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentgetlastactivetime(_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentgetlastactivetime(_:))

# AudioComponentGetLastActiveTime(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The time at which the application publishing the component was last active.

> Inter-App Audio API is deprecated in favor of Audio Units

## Declaration

```swift
func AudioComponentGetLastActiveTime(_ comp: AudioComponent) -> CFAbsoluteTime
```

## See Also

### Inter-App Audio

- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.

# AudioComponentGetLastActiveTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The time at which the application publishing the component was last active.

> Inter-App Audio API is deprecated in favor of Audio Units

## Declaration

```objectivec
extern CFAbsoluteTime AudioComponentGetLastActiveTime(AudioComponent comp);
```

## See Also

### Inter-App Audio

- [AudioOutputUnitPublish](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioOutputUnitGetHostIcon](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetIcon](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
