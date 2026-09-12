> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentflags](https://developer.apple.com/documentation/audiotoolbox/audiocomponentflags)

# AudioComponentFlags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct AudioComponentFlags
```

## Topics

### Flags

- [unsearchable](audiocomponentflags/unsearchable.md)
- [sandboxSafe](audiocomponentflags/sandboxsafe.md)
- [isV3AudioUnit](audiocomponentflags/isv3audiounit.md)
- [requiresAsyncInstantiation](audiocomponentflags/requiresasyncinstantiation.md)
- [canLoadInProcess](audiocomponentflags/canloadinprocess.md)

### Initializers

- [init(rawValue:)](audiocomponentflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister(\_:\_:\_:\_:)](audiocomponentregister%28________%29.md)
- [AudioComponentCount(\_:)](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext(\_:\_:)](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent(\_:)](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

# AudioComponentFlags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
enum AudioComponentFlags : UInt32;
```

## Topics

### Flags

- [kAudioComponentFlag_Unsearchable](audiocomponentflags/unsearchable.md)
- [kAudioComponentFlag_SandboxSafe](audiocomponentflags/sandboxsafe.md)
- [kAudioComponentFlag_IsV3AudioUnit](audiocomponentflags/isv3audiounit.md)
- [kAudioComponentFlag_RequiresAsyncInstantiation](audiocomponentflags/requiresasyncinstantiation.md)
- [kAudioComponentFlag_CanLoadInProcess](audiocomponentflags/canloadinprocess.md)

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister](audiocomponentregister%28________%29.md)
- [AudioComponentCount](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)
