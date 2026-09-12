> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisimpletextprintformatter/attributedtext](https://developer.apple.com/documentation/uikit/uisimpletextprintformatter/attributedtext)

# attributedText (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string of attributed text.

## Declaration

```swift
@NSCopying var attributedText: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

You cannot change the value of this property once drawing begins for a print job. The delegate method [printInteractionControllerWillStartJob(\_:)](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) is called immediately before the formatting is set for the job.

Assigning a value to this property also replaces the value in the [text](text.md) property with the same string data, albeit without any formatting information.

## See Also

### Related Documentation

- [init(attributedText:)](init%28attributedtext_%29.md): Returns a simple-text print formatter initialized with attributed text.

### Getting and setting the text

- [text](text.md): A string of plain text.

# attributedText (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string of attributed text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedText;
```

<a id="Discussion"></a>

## Discussion

You cannot change the value of this property once drawing begins for a print job. The delegate method [printInteractionControllerWillStartJob:](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) is called immediately before the formatting is set for the job.

Assigning a value to this property also replaces the value in the [text](text.md) property with the same string data, albeit without any formatting information.

## See Also

### Related Documentation

- [initWithAttributedText:](init%28attributedtext_%29.md): Returns a simple-text print formatter initialized with attributed text.

### Getting and setting the text

- [text](text.md): A string of plain text.
