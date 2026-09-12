> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/unscaledview](https://developer.apple.com/documentation/browserenginekit/betextinput/unscaledview)

# unscaledView (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A view that represents the web content that’s agnostic of zoom state.

## Declaration

```swift
var unscaledView: UIView { get }
```

<a id="discussion"></a>

## Discussion

This property draws zoom-agnostic system user interface, such as text selection handles.

## See Also

### Managing the text input view

- [textInputView](textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [selectionClipRect](selectioncliprect.md): A rectangle that represents the bounds of editable elements.
- [unobscuredContentRect](unobscuredcontentrect.md): A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.

# unscaledView (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A view that represents the web content that’s agnostic of zoom state.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * unscaledView;
```

<a id="discussion"></a>

## Discussion

This property draws zoom-agnostic system user interface, such as text selection handles.

## See Also

### Managing the text input view

- [textInputView](textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [selectionClipRect](selectioncliprect.md): A rectangle that represents the bounds of editable elements.
- [unobscuredContentRect](unobscuredcontentrect.md): A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.
