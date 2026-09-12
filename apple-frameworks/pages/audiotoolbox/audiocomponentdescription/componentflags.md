> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentdescription/componentflags](https://developer.apple.com/documentation/audiotoolbox/audiocomponentdescription/componentflags)

# componentFlags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Set this value to zero.

## Declaration

```swift
var componentFlags: UInt32
```

## See Also

### Properties

- [componentType](componenttype.md): A unique 4-byte code identifying the interface for the component.
- [componentSubType](componentsubtype.md): A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.
- [componentManufacturer](componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlagsMask](componentflagsmask.md): Set this value to zero.

# componentFlags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Set this value to zero.

## Declaration

```objectivec
UInt32 componentFlags;
```

## See Also

### Properties

- [componentType](componenttype.md): A unique 4-byte code identifying the interface for the component.
- [componentSubType](componentsubtype.md): A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.
- [componentManufacturer](componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlagsMask](componentflagsmask.md): Set this value to zero.
