> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentfindnext(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentfindnext(_:_:))

# AudioComponentFindNext(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.

## Declaration

```swift
func AudioComponentFindNext(_ inComponent: AudioComponent?, _ inDesc: UnsafePointer<AudioComponentDescription>) -> AudioComponent?
```

## Parameters

- `inComponent`: The audio component that you want to start searching after.
- `inDesc`: The description of the audio component you want to find.

<a id="return-value"></a>

## Return Value

An audio component, or [nil](../objectivec/nil-227m0.md) if not found.

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister(\_:\_:\_:\_:)](audiocomponentregister%28________%29.md)
- [AudioComponentCount(\_:)](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentInstanceGetComponent(\_:)](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

# AudioComponentFindNext (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.

## Declaration

```objectivec
extern AudioComponentAudioComponentFindNext(AudioComponent inComponent, const AudioComponentDescription *inDesc);
```

## Parameters

- `inComponent`: The audio component that you want to start searching after.
- `inDesc`: The description of the audio component you want to find.

<a id="return-value"></a>

## Return Value

An audio component, or [nil](../objectivec/nil-227m0.md) if not found.

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister](audiocomponentregister%28________%29.md)
- [AudioComponentCount](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentInstanceGetComponent](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)
