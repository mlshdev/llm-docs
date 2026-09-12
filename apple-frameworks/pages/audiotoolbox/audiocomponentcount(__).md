> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentcount(_:)](https://developer.apple.com/documentation/audiotoolbox/audiocomponentcount(_:))

# AudioComponentCount(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the number of audio components that match a specified `AudioComponentDescription` structure.

## Declaration

```swift
func AudioComponentCount(_ inDesc: UnsafePointer<AudioComponentDescription>) -> UInt32
```

## Parameters

- `inDesc`: The description of the audio components you want to count.

<a id="return-value"></a>

## Return Value

The number of matching components on the system.

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister(\_:\_:\_:\_:)](audiocomponentregister%28________%29.md)
- [AudioComponentFindNext(\_:\_:)](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent(\_:)](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

# AudioComponentCount (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns the number of audio components that match a specified `AudioComponentDescription` structure.

## Declaration

```objectivec
extern UInt32 AudioComponentCount(const AudioComponentDescription *inDesc);
```

## Parameters

- `inDesc`: The description of the audio components you want to count.

<a id="return-value"></a>

## Return Value

The number of matching components on the system.

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister](audiocomponentregister%28________%29.md)
- [AudioComponentFindNext](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)
