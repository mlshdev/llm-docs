> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avvideoframeanalysistype](https://developer.apple.com/documentation/avkit/avvideoframeanalysistype)

# AVVideoFrameAnalysisType (Swift)

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Constants that define the types of analysis a player view controller may perform on a paused video frame.

## Declaration

```swift
struct AVVideoFrameAnalysisType
```

## Topics

### Analysis types

- [default](avvideoframeanalysistype/default.md): The default types of analysis to perform.
- [text](avvideoframeanalysistype/text.md): A type that finds text in a paused video frame.
- [subject](avvideoframeanalysistype/subject.md): A type that finds a subject that a user can copy out of frame.
- [visualSearch](avvideoframeanalysistype/visualsearch.md): A type that identifies objects, landmarks, art, and so on.
- [machineReadableCode](avvideoframeanalysistype/machinereadablecode.md): A type that recognizes machine-readable codes, such as QR codes.

### Initializers

- [init(rawValue:)](avvideoframeanalysistype/init%28rawvalue_%29.md): Creates a type from a string value.

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

### Configuring frame analysis

- [allowsVideoFrameAnalysis](avplayerview/allowsvideoframeanalysis.md): A Boolean value that indicates whether to perform video frame analysis.
- [videoFrameAnalysisTypes](avplayerview/videoframeanalysistypes.md)

# AVVideoFrameAnalysisType (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Constants that define the types of analysis a player view controller may perform on a paused video frame.

## Declaration

```objectivec
enum AVVideoFrameAnalysisType : NSUInteger;
```

## Topics

### Analysis types

- [AVVideoFrameAnalysisTypeDefault](avvideoframeanalysistype/default.md): The default types of analysis to perform.
- [AVVideoFrameAnalysisTypeText](avvideoframeanalysistype/text.md): A type that finds text in a paused video frame.
- [AVVideoFrameAnalysisTypeSubject](avvideoframeanalysistype/subject.md): A type that finds a subject that a user can copy out of frame.
- [AVVideoFrameAnalysisTypeVisualSearch](avvideoframeanalysistype/visualsearch.md): A type that identifies objects, landmarks, art, and so on.
- [AVVideoFrameAnalysisTypeMachineReadableCode](avvideoframeanalysistype/machinereadablecode.md): A type that recognizes machine-readable codes, such as QR codes.
- [AVVideoFrameAnalysisTypeNone](avvideoframeanalysistype/avvideoframeanalysistypenone.md): A type that performs no analysis.

## See Also

### Configuring frame analysis

- [allowsVideoFrameAnalysis](avplayerview/allowsvideoframeanalysis.md): A Boolean value that indicates whether to perform video frame analysis.
- [videoFrameAnalysisTypes](avplayerview/videoframeanalysistypes.md)
