> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentinstance](https://developer.apple.com/documentation/audiotoolbox/audiocomponentinstance)

# AudioComponentInstance (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A component instance, or object, is an audio unit or audio codec.

## Declaration

```swift
typealias AudioComponentInstance = OpaquePointer
```

```swift
typealias AudioComponentInstance = UnsafeMutablePointer<ComponentInstanceRecord>
```

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister(\_:\_:\_:\_:)](audiocomponentregister%28________%29.md)
- [AudioComponentCount(\_:)](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext(\_:\_:)](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent(\_:)](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

# AudioComponentInstance (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A component instance, or object, is an audio unit or audio codec.

## Declaration

```objectivec
typedef struct OpaqueAudioComponentInstance * AudioComponentInstance;
```

```objectivec
typedef struct ComponentInstanceRecord * AudioComponentInstance;
```

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister](audiocomponentregister%28________%29.md)
- [AudioComponentCount](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)
