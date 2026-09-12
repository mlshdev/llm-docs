> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/screcordingoutput](https://developer.apple.com/documentation/screencapturekit/screcordingoutput)

# SCRecordingOutput (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class SCRecordingOutput
```

## Topics

### Creating a recording output

- [init(configuration:delegate:)](screcordingoutput/init%28configuration_delegate_%29.md)
- [SCRecordingOutputConfiguration](screcordingoutputconfiguration.md)
- [SCRecordingOutputDelegate](screcordingoutputdelegate.md)

### Monitoring recording progress

- [recordedDuration](screcordingoutput/recordedduration.md)
- [recordedFileSize](screcordingoutput/recordedfilesize.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Adding and removing recording output

- [addRecordingOutput(\_:)](scstream/addrecordingoutput%28__%29.md)
- [removeRecordingOutput(\_:)](scstream/removerecordingoutput%28__%29.md)

# SCRecordingOutput (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface SCRecordingOutput : NSObject
```

## Topics

### Creating a recording output

- [initWithConfiguration:delegate:](screcordingoutput/init%28configuration_delegate_%29.md)
- [SCRecordingOutputConfiguration](screcordingoutputconfiguration.md)
- [SCRecordingOutputDelegate](screcordingoutputdelegate.md)

### Monitoring recording progress

- [recordedDuration](screcordingoutput/recordedduration.md)
- [recordedFileSize](screcordingoutput/recordedfilesize.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding and removing recording output

- [addRecordingOutput:error:](scstream/addrecordingoutput%28__%29.md)
- [removeRecordingOutput:error:](scstream/removerecordingoutput%28__%29.md)
