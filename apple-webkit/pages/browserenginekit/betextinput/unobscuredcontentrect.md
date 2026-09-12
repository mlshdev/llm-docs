> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/unobscuredcontentrect](https://developer.apple.com/documentation/browserenginekit/betextinput/unobscuredcontentrect)

# unobscuredContentRect (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.

## Declaration

```swift
var unobscuredContentRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

Return a [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) instance configured in the coordinate space of [textInputView](textinputview.md).

## See Also

### Managing the text input view

- [textInputView](textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [unscaledView](unscaledview.md): A view that represents the web content that’s agnostic of zoom state.
- [selectionClipRect](selectioncliprect.md): A rectangle that represents the bounds of editable elements.

# unobscuredContentRect (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A rectangle that frames a user interface, such as text-selection handles, in an unobscured location.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect unobscuredContentRect;
```

<a id="discussion"></a>

## Discussion

Return a [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) instance configured in the coordinate space of [textInputView](textinputview.md).

## See Also

### Managing the text input view

- [textInputView](textinputview.md): An affiliated view that provides a coordinate system for all geometric values in this protocol.
- [unscaledView](unscaledview.md): A view that represents the web content that’s agnostic of zoom state.
- [selectionClipRect](selectioncliprect.md): A rectangle that represents the bounds of editable elements.
