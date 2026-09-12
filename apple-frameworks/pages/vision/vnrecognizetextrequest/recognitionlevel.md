> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/recognitionlevel](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/recognitionlevel)

# recognitionLevel (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A value that determines whether the request prioritizes accuracy or speed in text recognition.

## Declaration

```swift
var recognitionLevel: VNRequestTextRecognitionLevel { get set }
```

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

The recognition level determines which techniques the request uses during the text recognition. Set this value to [VNRequestTextRecognitionLevel.fast](../vnrequesttextrecognitionlevel/fast.md) to prioritize speed over accuracy, and to [VNRequestTextRecognitionLevel.accurate](../vnrequesttextrecognitionlevel/accurate.md) for longer, more computationally intensive recognition.

## See Also

### Customizing Recognition Constraints

- [minimumTextHeight](minimumtextheight.md): The minimum height, relative to the image height, of the text to recognize.
- [VNRequestTextRecognitionLevel](../vnrequesttextrecognitionlevel.md): Constants that identify the performance and accuracy of the text recognition.

# recognitionLevel (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A value that determines whether the request prioritizes accuracy or speed in text recognition.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) VNRequestTextRecognitionLevel recognitionLevel;
```

## Mentioned In

- [Recognizing Text in Images](../recognizing-text-in-images.md)

<a id="Discussion"></a>

## Discussion

The recognition level determines which techniques the request uses during the text recognition. Set this value to [VNRequestTextRecognitionLevelFast](../vnrequesttextrecognitionlevel/fast.md) to prioritize speed over accuracy, and to [VNRequestTextRecognitionLevelAccurate](../vnrequesttextrecognitionlevel/accurate.md) for longer, more computationally intensive recognition.

## See Also

### Customizing Recognition Constraints

- [minimumTextHeight](minimumtextheight.md): The minimum height, relative to the image height, of the text to recognize.
- [VNRequestTextRecognitionLevel](../vnrequesttextrecognitionlevel.md): Constants that identify the performance and accuracy of the text recognition.
