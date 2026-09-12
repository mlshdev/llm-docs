> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/selecttext(in:at:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/selecttext(in:at:completionhandler:))

# selectText(in:at:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Selects the text within the given granularity at the given point in the text view.

## Declaration

```swift
func selectText(in granularity: UITextGranularity, at point: CGPoint, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func selectText(in granularity: UITextGranularity, at point: CGPoint) async
```

## Parameters

- `granularity`: The amount of text to select.
- `point`: The location of the selection in the text view.
- `completionHandler`: A block you call after your text view handles the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)

# selectTextInGranularity:atPoint:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Selects the text within the given granularity at the given point in the text view.

## Declaration

```objectivec
- (void) selectTextInGranularity:(UITextGranularity) granularity atPoint:(CGPoint) point completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `granularity`: The amount of text to select.
- `point`: The location of the selection in the text view.
- `completionHandler`: A block you call after your text view handles the gesture.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
