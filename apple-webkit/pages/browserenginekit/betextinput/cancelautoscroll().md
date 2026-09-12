> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/cancelautoscroll()](https://developer.apple.com/documentation/browserenginekit/betextinput/cancelautoscroll())

# cancelAutoscroll() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates that the current autoscroll gesture is complete.

## Declaration

```swift
func cancelAutoscroll()
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

When the text system calls this method on your text view, there are no more calls to [autoscroll(to:)](autoscroll%28to_%29.md) for the current text interaction gesture.

# cancelAutoscroll (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates that the current autoscroll gesture is complete.

## Declaration

```objectivec
- (void) cancelAutoscroll;
```

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

When the text system calls this method on your text view, there are no more calls to [autoscrollToPoint:](autoscroll%28to_%29.md) for the current text interaction gesture.
