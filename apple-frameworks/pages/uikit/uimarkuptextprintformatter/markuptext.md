> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimarkuptextprintformatter/markuptext](https://developer.apple.com/documentation/uikit/uimarkuptextprintformatter/markuptext)

# markupText (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The HTML markup text for the print formatter.

## Declaration

```swift
var markupText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When drawing begins for the print job, you cannot change the value of this property. The delegate method [printInteractionControllerWillStartJob(\_:)](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) is called immediately before the formatting is set for the job.

## See Also

### Related Documentation

- [init(markupText:)](init%28markuptext_%29.md): Returns a markup-text print formatter initialized with an HTML string.

# markupText (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The HTML markup text for the print formatter.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * markupText;
```

<a id="Discussion"></a>

## Discussion

When drawing begins for the print job, you cannot change the value of this property. The delegate method [printInteractionControllerWillStartJob:](../uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md) is called immediately before the formatting is set for the job.

## See Also

### Related Documentation

- [initWithMarkupText:](init%28markuptext_%29.md): Returns a markup-text print formatter initialized with an HTML string.
