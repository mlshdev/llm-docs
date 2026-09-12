> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentinstantiate(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentinstantiate(_:_:_:))

# AudioComponentInstantiate(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioComponentInstantiate(_ inComponent: AudioComponent, _ inOptions: AudioComponentInstantiationOptions, _ inCompletionHandler: @escaping (AudioComponentInstance?, OSStatus) -> Void)
```

## Mentioned In

- [Hosting Audio Unit Extensions Using the AUv2 API](hosting-audio-unit-extensions-using-the-auv2-api.md)

## See Also

### Creating an Audio Component Instance

- [AudioComponentInstanceNew(\_:\_:)](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstanceDispose(\_:)](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)

# AudioComponentInstantiate (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern void AudioComponentInstantiate(AudioComponent inComponent, AudioComponentInstantiationOptions inOptions, void (^inCompletionHandler)(AudioComponentInstance , OSStatus ));
```

## Mentioned In

- [Hosting Audio Unit Extensions Using the AUv2 API](hosting-audio-unit-extensions-using-the-auv2-api.md)

## See Also

### Creating an Audio Component Instance

- [AudioComponentInstanceNew](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstanceDispose](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)
