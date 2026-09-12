> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiovaluetranslation](https://developer.apple.com/documentation/coreaudiotypes/audiovaluetranslation)

# AudioValueTranslation (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that stores buffers to use in translation operations.

## Declaration

```swift
struct AudioValueTranslation
```

## Topics

### Initializers

- [init(mInputData:mInputDataSize:mOutputData:mOutputDataSize:)](audiovaluetranslation/init%28minputdata_minputdatasize_moutputdata_moutputdatasize_%29.md)

### Instance Properties

- [mInputData](audiovaluetranslation/minputdata.md): The buffer containing the data to be translated.
- [mInputDataSize](audiovaluetranslation/minputdatasize.md): The number of bytes in the buffer pointed at by `mInputData`.
- [mOutputData](audiovaluetranslation/moutputdata.md): The buffer to hold the result of the translation.
- [mOutputDataSize](audiovaluetranslation/moutputdatasize.md): The number of bytes in the buffer pointed at by `mOutputData`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Values

- [AudioValueRange](audiovaluerange.md): A structure that represents a continuous range of values.

# AudioValueTranslation (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that stores buffers to use in translation operations.

## Declaration

```objectivec
struct AudioValueTranslation;
```

## Topics

### Instance Properties

- [mInputData](audiovaluetranslation/minputdata.md): The buffer containing the data to be translated.
- [mInputDataSize](audiovaluetranslation/minputdatasize.md): The number of bytes in the buffer pointed at by `mInputData`.
- [mOutputData](audiovaluetranslation/moutputdata.md): The buffer to hold the result of the translation.
- [mOutputDataSize](audiovaluetranslation/moutputdatasize.md): The number of bytes in the buffer pointed at by `mOutputData`.

## See Also

### Values

- [AudioValueRange](audiovaluerange.md): A structure that represents a continuous range of values.
