> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentinstantiationoptions](https://developer.apple.com/documentation/audiotoolbox/audiocomponentinstantiationoptions)

# AudioComponentInstantiationOptions (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct AudioComponentInstantiationOptions
```

## Topics

### Constants

- [loadInProcess](audiocomponentinstantiationoptions/loadinprocess.md)
- [loadOutOfProcess](audiocomponentinstantiationoptions/loadoutofprocess.md)

### Initializers

- [init(rawValue:)](audiocomponentinstantiationoptions/init%28rawvalue_%29.md)

### Type Properties

- [loadedRemotely](audiocomponentinstantiationoptions/loadedremotely.md)

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

### Creating an Audio Component Instance

- [AudioComponentInstanceNew(\_:\_:)](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstantiate(\_:\_:\_:)](audiocomponentinstantiate%28______%29.md)
- [AudioComponentInstanceDispose(\_:)](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [Audio Component Errors](1619490-audio-component-errors.md)

# AudioComponentInstantiationOptions (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
enum AudioComponentInstantiationOptions : UInt32;
```

## Topics

### Constants

- [kAudioComponentInstantiation_LoadInProcess](audiocomponentinstantiationoptions/loadinprocess.md)
- [kAudioComponentInstantiation_LoadOutOfProcess](audiocomponentinstantiationoptions/loadoutofprocess.md)

### Enumeration Cases

- [kAudioComponentInstantiation_LoadedRemotely](audiocomponentinstantiationoptions/loadedremotely.md)

## See Also

### Creating an Audio Component Instance

- [AudioComponentInstanceNew](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstantiate](audiocomponentinstantiate%28______%29.md)
- [AudioComponentInstanceDispose](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [Audio Component Errors](1619490-audio-component-errors.md)
