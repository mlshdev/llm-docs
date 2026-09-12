> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/canperformaction(_:withsender:)](https://developer.apple.com/documentation/browserenginekit/betextinput/canperformaction(_:withsender:))

# canPerformAction(\_:withSender:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates whether the text view can process a given action.

## Declaration

```swift
func canPerformAction(_ action: Selector, withSender sender: Any?) -> Bool
```

## Parameters

- `action`: A selector for the action.
- `sender`: The object that’s sending the message.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the text view can handle the action message.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
- [Supporting extended text interactions](../support-extended-text-interactions.md)

<a id="discussion"></a>

## Discussion

This method is similar to [responds(to:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/responds%28to:%29), except that even if your text view implements the action message, it can decline to handle it by returning `false` from this method.

## See Also

### Managing the edit menu

- [selectTextForEditMenuWithLocation(inView:completionHandler:)](selecttextforeditmenuwithlocation%28inview_completionhandler_%29.md): Indicates the edit menu displays at the given location in the text input view’s coordinate space.

# canPerformAction:withSender: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Indicates whether the text view can process a given action.

## Declaration

```objectivec
- (BOOL) canPerformAction:(SEL) action withSender:(id) sender;
```

## Parameters

- `action`: A selector for the action.
- `sender`: The object that’s sending the message.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the text view can handle the action message.

## Mentioned In

- [Integrating custom browser text views with UIKit](../integrating-custom-browser-text-views-with-uikit.md)
- [Supporting extended text interactions](../support-extended-text-interactions.md)

<a id="discussion"></a>

## Discussion

This method is similar to [respondsToSelector:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/responds%28to:%29), except that even if your text view implements the action message, it can decline to handle it by returning `false` from this method.

## See Also

### Managing the edit menu

- [selectTextForEditMenuWithLocationInView:completionHandler:](selecttextforeditmenuwithlocation%28inview_completionhandler_%29.md): Indicates the edit menu displays at the given location in the text input view’s coordinate space.
