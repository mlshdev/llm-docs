> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiovaluetranslation/minputdata](https://developer.apple.com/documentation/coreaudiotypes/audiovaluetranslation/minputdata)

# mInputData (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The buffer containing the data to be translated.

## Declaration

```swift
var mInputData: UnsafeMutableRawPointer
```

## See Also

### Instance Properties

- [mInputDataSize](minputdatasize.md): The number of bytes in the buffer pointed at by `mInputData`.
- [mOutputData](moutputdata.md): The buffer to hold the result of the translation.
- [mOutputDataSize](moutputdatasize.md): The number of bytes in the buffer pointed at by `mOutputData`.

# mInputData (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The buffer containing the data to be translated.

## Declaration

```objectivec
void * mInputData;
```

## See Also

### Instance Properties

- [mInputDataSize](minputdatasize.md): The number of bytes in the buffer pointed at by `mInputData`.
- [mOutputData](moutputdata.md): The buffer to hold the result of the translation.
- [mOutputDataSize](moutputdatasize.md): The number of bytes in the buffer pointed at by `mOutputData`.
