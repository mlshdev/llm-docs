> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisimpletextprintformatter/text](https://developer.apple.com/documentation/uikit/uisimpletextprintformatter/text)

# text (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string of plain text.

## Declaration

```swift
var text: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You cannot change the value of this property once drawing begins for a print job. The delegate method [printInteractionControllerWillStartJob(\_:)](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) is called immediately before the formatting is set for the job.

Assigning a value to this property replaces the value in the [attributedText](attributedtext.md) property with the same string data, albeit without any inherent style attributes. Instead, the print formatter styles the new string using the text attribute properties of this class.

## See Also

### Related Documentation

- [init(text:)](init%28text_%29.md): Returns a simple-text print formatter initialized with plain text.

### Getting and setting the text

- [attributedText](attributedtext.md): A string of attributed text.

# text (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string of plain text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * text;
```

<a id="Discussion"></a>

## Discussion

You cannot change the value of this property once drawing begins for a print job. The delegate method [printInteractionControllerWillStartJob:](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) is called immediately before the formatting is set for the job.

Assigning a value to this property replaces the value in the [attributedText](attributedtext.md) property with the same string data, albeit without any inherent style attributes. Instead, the print formatter styles the new string using the text attribute properties of this class.

## See Also

### Related Documentation

- [initWithText:](init%28text_%29.md): Returns a simple-text print formatter initialized with plain text.

### Getting and setting the text

- [attributedText](attributedtext.md): A string of attributed text.
