> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentinstancegetcomponent(_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentinstancegetcomponent(_:))

# AudioComponentInstanceGetComponent(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Retrieves a reference to an audio component from an instance of that audio component.

## Declaration

```swift
func AudioComponentInstanceGetComponent(_ inInstance: AudioComponentInstance) -> AudioComponent
```

## Parameters

- `inInstance`: The component instance whose corresponding factory object you want to get. Must not be `NULL`, and you must own the instance (specifically, you must not have previously called [AudioComponentInstanceDispose(\_:)](audiocomponentinstancedispose%28__%29.md) on the instance).

<a id="return-value"></a>

## Return Value

A reference to the desired audio component. If the value provided in the `inInstance` parameter is invalid, returns `NULL`.

<a id="Discussion"></a>

## Discussion

Use this function to retrieve a reference to the audio component that was used to instantiate a given audio component instance. You can then query the component for its attributes by calling the [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md) function.

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister(\_:\_:\_:\_:)](audiocomponentregister%28________%29.md)
- [AudioComponentCount(\_:)](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext(\_:\_:)](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

# AudioComponentInstanceGetComponent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Retrieves a reference to an audio component from an instance of that audio component.

## Declaration

```objectivec
extern AudioComponentAudioComponentInstanceGetComponent(AudioComponentInstance inInstance);
```

## Parameters

- `inInstance`: The component instance whose corresponding factory object you want to get. Must not be `NULL`, and you must own the instance (specifically, you must not have previously called [AudioComponentInstanceDispose](audiocomponentinstancedispose%28__%29.md) on the instance).

<a id="return-value"></a>

## Return Value

A reference to the desired audio component. If the value provided in the `inInstance` parameter is invalid, returns `NULL`.

<a id="Discussion"></a>

## Discussion

Use this function to retrieve a reference to the audio component that was used to instantiate a given audio component instance. You can then query the component for its attributes by calling the [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md) function.

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister](audiocomponentregister%28________%29.md)
- [AudioComponentCount](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)
