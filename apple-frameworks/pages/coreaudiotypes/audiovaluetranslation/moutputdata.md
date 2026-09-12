> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiovaluetranslation/moutputdata](https://developer.apple.com/documentation/coreaudiotypes/audiovaluetranslation/moutputdata)

# mOutputData (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The buffer to hold the result of the translation.

## Declaration

```swift
var mOutputData: UnsafeMutableRawPointer
```

## See Also

### Instance Properties

- [mInputData](minputdata.md): The buffer containing the data to be translated.
- [mInputDataSize](minputdatasize.md): The number of bytes in the buffer pointed at by `mInputData`.
- [mOutputDataSize](moutputdatasize.md): The number of bytes in the buffer pointed at by `mOutputData`.

# mOutputData (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The buffer to hold the result of the translation.

## Declaration

```objectivec
void * mOutputData;
```

## See Also

### Instance Properties

- [mInputData](minputdata.md): The buffer containing the data to be translated.
- [mInputDataSize](minputdatasize.md): The number of bytes in the buffer pointed at by `mInputData`.
- [mOutputDataSize](moutputdatasize.md): The number of bytes in the buffer pointed at by `mOutputData`.
