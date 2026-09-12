> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/setselection(from:to:gesture:state:)](https://developer.apple.com/documentation/browserenginekit/betextinput/setselection(from:to:gesture:state:))

# setSelection(from:to:gesture:state:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Notifies the text view that its selection needs to change to the text between the given points.

## Declaration

```swift
func setSelection(from: CGPoint, to: CGPoint, gesture: BEGestureType, state: UIGestureRecognizer.State)
```

## Parameters

- `from`: The start of the selected region.
- `to`: The end of the selected region.
- `gesture`: The gesture that changes the selection.
- `state`: The state of the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

# setSelectionFromPoint:toPoint:gesture:state: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Notifies the text view that its selection needs to change to the text between the given points.

## Declaration

```objectivec
- (void) setSelectionFromPoint:(CGPoint) from toPoint:(CGPoint) to gesture:(BEGestureType) gesture state:(UIGestureRecognizerState) state;
```

## Parameters

- `from`: The start of the selected region.
- `to`: The end of the selected region.
- `gesture`: The gesture that changes the selection.
- `state`: The state of the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
