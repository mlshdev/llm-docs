> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/textinteractiongesture(_:shouldbeginat:)](https://developer.apple.com/documentation/browserenginekit/betextinput/textinteractiongesture(_:shouldbeginat:))

# textInteractionGesture(\_:shouldBeginAt:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns whether a gesture at the given point in the view needs to begin.

## Declaration

```swift
func textInteractionGesture(_ gestureType: BEGestureType, shouldBeginAt point: CGPoint) -> Bool
```

## Parameters

- `gestureType`: The type of gesture that’s possibly beginning.
- `point`: The location of the gesture in the text view.

<a id="return-value"></a>

## Return Value

`true` to permit the text system to proceed with the gesture; `false` otherwise.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

# textInteractionGesture:shouldBeginAtPoint: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns whether a gesture at the given point in the view needs to begin.

## Declaration

```objectivec
- (BOOL) textInteractionGesture:(BEGestureType) gestureType shouldBeginAtPoint:(CGPoint) point;
```

## Parameters

- `gestureType`: The type of gesture that’s possibly beginning.
- `point`: The location of the gesture in the text view.

<a id="return-value"></a>

## Return Value

`true` to permit the text system to proceed with the gesture; `false` otherwise.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
