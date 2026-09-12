> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/updateselection(extent:boundary:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/updateselection(extent:boundary:completionhandler:))

# updateSelection(extent:boundary:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Includes the text up to the given point in the current text selection.

## Declaration

```swift
func updateSelection(extent point: CGPoint, boundary granularity: UITextGranularity, completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
func updateSelection(extent point: CGPoint, boundary granularity: UITextGranularity) async -> Bool
```

## Parameters

- `point`: The location in the document to include in the updated selection.
- `granularity`: The amount of text to include in the updated selection.
- `completionHandler`: A block you call after your text view handles the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

# updateSelectionWithExtentPoint:boundary:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Includes the text up to the given point in the current text selection.

## Declaration

```objectivec
- (void) updateSelectionWithExtentPoint:(CGPoint) point boundary:(UITextGranularity) granularity completionHandler:(void (^)(BOOL selectionEndIsMoving)) completionHandler;
```

## Parameters

- `point`: The location in the document to include in the updated selection.
- `granularity`: The amount of text to include in the updated selection.
- `completionHandler`: A block you call after your text view handles the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
