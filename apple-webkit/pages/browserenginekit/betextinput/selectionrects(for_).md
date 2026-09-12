> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/selectionrects(for:)](https://developer.apple.com/documentation/browserenginekit/betextinput/selectionrects(for:))

# selectionRects(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns an array of selection rectangles corresponding to the given text range.

## Declaration

```swift
func selectionRects(for range: UITextRange) -> [UITextSelectionRect]
```

## Parameters

- `range`: The range of text for which to return selection rectangles.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

# selectionRectsForRange: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns an array of selection rectangles corresponding to the given text range.

## Declaration

```objectivec
- (NSArray<UITextSelectionRect *> *) selectionRectsForRange:(UITextRange *) range;
```

## Parameters

- `range`: The range of text for which to return selection rectangles.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
