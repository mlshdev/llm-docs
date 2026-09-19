> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocomponentdescription/componentsubtype

# componentSubType (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.

## Declaration

```swift
var componentSubType: OSType
```

## See Also

### Properties

- [componentType](componenttype.md): A unique 4-byte code identifying the interface for the component.
- [componentManufacturer](componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlags](componentflags.md): Set this value to zero.
- [componentFlagsMask](componentflagsmask.md): Set this value to zero.

# componentSubType (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A 4-byte code that you can use to indicate the purpose of a component. For example, you could use `lpas` or `lowp` as a mnemonic indication that an audio unit is a low-pass filter.

## Declaration

```objectivec
OSType componentSubType;
```

## See Also

### Properties

- [componentType](componenttype.md): A unique 4-byte code identifying the interface for the component.
- [componentManufacturer](componentmanufacturer.md): The unique vendor identifier, registered with Apple, for the audio component.
- [componentFlags](componentflags.md): Set this value to zero.
- [componentFlagsMask](componentflagsmask.md): Set this value to zero.
