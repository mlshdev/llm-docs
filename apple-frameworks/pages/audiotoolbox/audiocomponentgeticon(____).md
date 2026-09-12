> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentgeticon(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentgeticon(_:_:))

# AudioComponentGetIcon(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.11+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The UIImage of the audio component’s icon.

## Declaration

```swift
func AudioComponentGetIcon(_ comp: AudioComponent, _ desiredPointSize: Float) -> UIImage?
```

```swift
func AudioComponentGetIcon(_ comp: AudioComponent) -> NSImage?
```

## See Also

### Inter-App Audio

- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.

# AudioComponentGetIcon (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 14.0) · iPadOS 7.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 10.11+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The UIImage of the audio component’s icon.

## Declaration

```objectivec
extern UIImage *AudioComponentGetIcon(AudioComponent comp, float desiredPointSize);
```

```objectivec
static UIImage *AudioComponentGetIcon(AudioComponent comp, float desiredPointSize);
```

```objectivec
extern NSImage *AudioComponentGetIcon(AudioComponent comp);
```

## See Also

### Inter-App Audio

- [AudioOutputUnitPublish](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioOutputUnitGetHostIcon](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetLastActiveTime](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
