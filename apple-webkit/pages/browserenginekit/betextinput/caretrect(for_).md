> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/caretrect(for:)](https://developer.apple.com/documentation/browserenginekit/betextinput/caretrect(for:))

# caretRect(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns a rectangle in which the system can draw the text-selection caret.

## Declaration

```swift
func caretRect(for position: UITextPosition) -> CGRect
```

## Parameters

- `position`: The text position corresponding to the caret’s location.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

# caretRectForPosition: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Returns a rectangle in which the system can draw the text-selection caret.

## Declaration

```objectivec
- (CGRect) caretRectForPosition:(UITextPosition *) position;
```

## Parameters

- `position`: The text position corresponding to the caret’s location.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
