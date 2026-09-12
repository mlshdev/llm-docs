> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/setbasewritingdirection(_:for:)](https://developer.apple.com/documentation/browserenginekit/betextinput/setbasewritingdirection(_:for:))

# setBaseWritingDirection(\_:for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Informs the text view of the writing direction for a given range of text.

## Declaration

```swift
func setBaseWritingDirection(_ writingDirection: NSWritingDirection, for range: UITextRange)
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

- writingDirection: Whether the writing direction is left-to-right, right-to-left, or the natural direction for the current script.
- range: The range in the text view’s document for which the writing direction applies.

# setBaseWritingDirection:forRange: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Informs the text view of the writing direction for a given range of text.

## Declaration

```objectivec
- (void) setBaseWritingDirection:(NSWritingDirection) writingDirection forRange:(UITextRange *) range;
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

- writingDirection: Whether the writing direction is left-to-right, right-to-left, or the natural direction for the current script.
- range: The range in the text view’s document for which the writing direction applies.
