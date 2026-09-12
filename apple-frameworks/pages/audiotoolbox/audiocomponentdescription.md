> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentdescription](https://developer.apple.com/documentation/audiotoolbox/audiocomponentdescription)

# AudioComponentDescription (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifying information for an audio component.

## Declaration

```swift
struct AudioComponentDescription
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

## Topics

### Properties

- [componentType](audiocomponentdescription/componenttype.md): A unique 4-byte code identifying the interface for the component.
- [componentSubType](audiocomponentdescription/componentsubtype.md): A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.
- [componentManufacturer](audiocomponentdescription/componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlags](audiocomponentdescription/componentflags.md): Set this value to zero.
- [componentFlagsMask](audiocomponentdescription/componentflagsmask.md): Set this value to zero.

### Initializers

- [init()](audiocomponentdescription/init%28%29.md)
- [init(componentType:componentSubType:componentManufacturer:componentFlags:componentFlagsMask:)](audiocomponentdescription/init%28componenttype_componentsubtype_componentmanufacturer_componentflags_componentflagsmask_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister(\_:\_:\_:\_:)](audiocomponentregister%28________%29.md)
- [AudioComponentCount(\_:)](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext(\_:\_:)](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent(\_:)](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

# AudioComponentDescription (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifying information for an audio component.

## Declaration

```objectivec
typedef struct AudioComponentDescription { ... } AudioComponentDescription;
```

## Mentioned In

- [Rendering Spatial Audio from Bluetooth headphones](rendering-spatial-audio-from-bluetooth-headphones.md)

## Topics

### Properties

- [componentType](audiocomponentdescription/componenttype.md): A unique 4-byte code identifying the interface for the component.
- [componentSubType](audiocomponentdescription/componentsubtype.md): A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.
- [componentManufacturer](audiocomponentdescription/componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlags](audiocomponentdescription/componentflags.md): Set this value to zero.
- [componentFlagsMask](audiocomponentdescription/componentflagsmask.md): Set this value to zero.

## See Also

### Creating an Audio Component Dynamically

- [AudioComponentRegister](audiocomponentregister%28________%29.md)
- [AudioComponentCount](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)
