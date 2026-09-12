> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentdescription/componenttype](https://developer.apple.com/documentation/audiotoolbox/audiocomponentdescription/componenttype)

# componentType (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A unique 4-byte code identifying the interface for the component.

## Declaration

```swift
var componentType: OSType
```

## See Also

### Properties

- [componentSubType](componentsubtype.md): A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.
- [componentManufacturer](componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlags](componentflags.md): Set this value to zero.
- [componentFlagsMask](componentflagsmask.md): Set this value to zero.

# componentType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A unique 4-byte code identifying the interface for the component.

## Declaration

```objectivec
OSType componentType;
```

## See Also

### Properties

- [componentSubType](componentsubtype.md): A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.
- [componentManufacturer](componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlags](componentflags.md): Set this value to zero.
- [componentFlagsMask](componentflagsmask.md): Set this value to zero.
