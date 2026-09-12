> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentregister(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentregister(_:_:_:_:))

# AudioComponentRegister(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioComponentRegister(_ inDesc: UnsafePointer<AudioComponentDescription>, _ inName: CFString, _ inVersion: UInt32, _ inFactory: AudioComponentFactoryFunction) -> AudioComponent
```

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentCount(\_:)](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext(\_:\_:)](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent(\_:)](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

# AudioComponentRegister (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern AudioComponentAudioComponentRegister(const AudioComponentDescription *inDesc, CFStringRef inName, UInt32 inVersion, AudioComponentFactoryFunction inFactory);
```

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentCount](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)
