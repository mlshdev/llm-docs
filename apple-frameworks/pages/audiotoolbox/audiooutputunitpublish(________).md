> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiooutputunitpublish(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiooutputunitpublish(_:_:_:_:))

# AudioOutputUnitPublish(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Registers an audio output unit for use by other applications.

> Inter-App Audio API is deprecated in favor of Audio Units

## Declaration

```swift
func AudioOutputUnitPublish(_ inDesc: UnsafePointer<AudioComponentDescription>, _ inName: CFString, _ inVersion: UInt32, _ inOutputUnit: AudioUnit) -> OSStatus
```

## See Also

### Inter-App Audio

- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.

# AudioOutputUnitPublish (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Registers an audio output unit for use by other applications.

> Inter-App Audio API is deprecated in favor of Audio Units

## Declaration

```objectivec
extern OSStatus AudioOutputUnitPublish(const AudioComponentDescription *inDesc, CFStringRef inName, UInt32 inVersion, AudioUnit inOutputUnit);
```

## See Also

### Inter-App Audio

- [AudioOutputUnitGetHostIcon](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetIcon](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
