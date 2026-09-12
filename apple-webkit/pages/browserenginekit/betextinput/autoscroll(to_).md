> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/autoscroll(to:)](https://developer.apple.com/documentation/browserenginekit/betextinput/autoscroll(to:))

# autoscroll(to:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates that a text gesture initiated autoscrolling.

## Declaration

```swift
func autoscroll(to point: CGPoint)
```

## Parameters

- `point`: The location to which to autoscroll, in the coordinate system of your view’s [textInputView](textinputview.md).

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The text system calls the method repeatedly when a gesture requires the text view to scroll, for example, when a person adjusts the text selection range, or places the text cursor. The text system sends [cancelAutoscroll()](cancelautoscroll%28%29.md) when there are no further updates.

# autoscrollToPoint: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates that a text gesture initiated autoscrolling.

## Declaration

```objectivec
- (void) autoscrollToPoint:(CGPoint) point;
```

## Parameters

- `point`: The location to which to autoscroll, in the coordinate system of your view’s [textInputView](textinputview.md).

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

The text system calls the method repeatedly when a gesture requires the text view to scroll, for example, when a person adjusts the text selection range, or places the text cursor. The text system sends [cancelAutoscroll](cancelautoscroll%28%29.md) when there are no further updates.
