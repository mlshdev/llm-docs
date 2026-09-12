> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/moveselection(atboundary:in:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/moveselection(atboundary:in:completionhandler:))

# moveSelection(atBoundary:in:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Moves the text-selection caret relative to the current position.

## Declaration

```swift
func moveSelection(atBoundary granularity: UITextGranularity, in direction: UITextStorageDirection, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func moveSelection(atBoundary granularity: UITextGranularity, in direction: UITextStorageDirection) async
```

## Parameters

- `granularity`: The amount by which to move the caret.
- `direction`: The direction in which to move the caret, relative to the base writing direction.
- `completionHandler`: A block you call when your text view has handled the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

If you return `false` from [textInteractionGesture(\_:shouldBeginAt:)](textinteractiongesture%28__shouldbeginat_%29.md) for the gesture that moves the caret, then the text system doesn’t call this method.

# moveSelectionAtBoundary:inStorageDirection:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Moves the text-selection caret relative to the current position.

## Declaration

```objectivec
- (void) moveSelectionAtBoundary:(UITextGranularity) granularity inStorageDirection:(UITextStorageDirection) direction completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `granularity`: The amount by which to move the caret.
- `direction`: The direction in which to move the caret, relative to the base writing direction.
- `completionHandler`: A block you call when your text view has handled the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

<a id="discussion"></a>

## Discussion

If you return `false` from [textInteractionGesture:shouldBeginAtPoint:](textinteractiongesture%28__shouldbeginat_%29.md) for the gesture that moves the caret, then the text system doesn’t call this method.
