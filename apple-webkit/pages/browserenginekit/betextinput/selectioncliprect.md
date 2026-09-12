> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/selectioncliprect](https://developer.apple.com/documentation/browserenginekit/betextinput/selectioncliprect)

# selectionClipRect (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A rectangle that represents the bounds of editable elements.

## Declaration

```swift
var selectionClipRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This property ensures that the user interface doesn’t breach the specified area.

## See Also

### Managing the text input view

- [textInputView](textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [unscaledView](unscaledview.md): A view that represents the web content that’s agnostic of zoom state.
- [unobscuredContentRect](unobscuredcontentrect.md): A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.

# selectionClipRect (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A rectangle that represents the bounds of editable elements.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect selectionClipRect;
```

<a id="discussion"></a>

## Discussion

This property ensures that the user interface doesn’t breach the specified area.

## See Also

### Managing the text input view

- [textInputView](textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [unscaledView](unscaledview.md): A view that represents the web content that’s agnostic of zoom state.
- [unobscuredContentRect](unobscuredcontentrect.md): A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.
