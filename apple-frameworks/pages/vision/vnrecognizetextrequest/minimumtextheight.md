> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest/minimumtextheight](https://developer.apple.com/documentation/vision/vnrecognizetextrequest/minimumtextheight)

# minimumTextHeight (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The minimum height, relative to the image height, of the text to recognize.

## Declaration

```swift
var minimumTextHeight: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a floating-point number relative to the image height. For example, to limit recognition to text that’s half of the image height, use `0.5`. Increasing the size reduces memory consumption and expedites recognition with the tradeoff of ignoring text smaller than the minimum height. The default value is 1/32, or `0.03125`.

## See Also

### Customizing Recognition Constraints

- [recognitionLevel](recognitionlevel.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
- [VNRequestTextRecognitionLevel](../vnrequesttextrecognitionlevel.md): Constants that identify the performance and accuracy of the text recognition.

# minimumTextHeight (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The minimum height, relative to the image height, of the text to recognize.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) float minimumTextHeight;
```

<a id="Discussion"></a>

## Discussion

Specify a floating-point number relative to the image height. For example, to limit recognition to text that’s half of the image height, use `0.5`. Increasing the size reduces memory consumption and expedites recognition with the tradeoff of ignoring text smaller than the minimum height. The default value is 1/32, or `0.03125`.

## See Also

### Customizing Recognition Constraints

- [recognitionLevel](recognitionlevel.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
- [VNRequestTextRecognitionLevel](../vnrequesttextrecognitionlevel.md): Constants that identify the performance and accuracy of the text recognition.
