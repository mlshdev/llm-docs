> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequesttextrecognitionlevel](https://developer.apple.com/documentation/vision/vnrequesttextrecognitionlevel)

# VNRequestTextRecognitionLevel (Swift)

**Framework:** Vision  
**Kind:** Enumeration

Constants that identify the performance and accuracy of the text recognition.

## Declaration

```swift
enum VNRequestTextRecognitionLevel
```

## Topics

### Recognition Levels

- [VNRequestTextRecognitionLevel.fast](vnrequesttextrecognitionlevel/fast.md): Fast text recognition returns results more quickly at the expense of accuracy.
- [VNRequestTextRecognitionLevel.accurate](vnrequesttextrecognitionlevel/accurate.md): Accurate text recognition takes more time to produce a more comprehensive result.

### Creating a Recognition Level

- [init(rawValue:)](vnrequesttextrecognitionlevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing Recognition Constraints

- [minimumTextHeight](vnrecognizetextrequest/minimumtextheight.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLevel](vnrecognizetextrequest/recognitionlevel.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.

# VNRequestTextRecognitionLevel (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Constants that identify the performance and accuracy of the text recognition.

## Declaration

```objectivec
enum VNRequestTextRecognitionLevel : NSInteger;
```

## Topics

### Recognition Levels

- [VNRequestTextRecognitionLevelFast](vnrequesttextrecognitionlevel/fast.md): Fast text recognition returns results more quickly at the expense of accuracy.
- [VNRequestTextRecognitionLevelAccurate](vnrequesttextrecognitionlevel/accurate.md): Accurate text recognition takes more time to produce a more comprehensive result.

## See Also

### Customizing Recognition Constraints

- [minimumTextHeight](vnrecognizetextrequest/minimumtextheight.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLevel](vnrecognizetextrequest/recognitionlevel.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
