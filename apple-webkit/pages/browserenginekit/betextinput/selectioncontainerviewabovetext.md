> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/selectioncontainerviewabovetext](https://developer.apple.com/documentation/browserenginekit/betextinput/selectioncontainerviewabovetext)

# selectionContainerViewAboveText (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An optional view you supply to draw text selection above the text.

## Declaration

```swift
optional var selectionContainerViewAboveText: UIView? { get }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If you supply a view to this property, the framework layers the supplied view above [textInputView](textinputview.md) to render text selection above the text, and includes text-selection handles in the rendering.

If you implement text selection using a [textInputView](textinputview.md) subview instead, leave the value `nil`.

## See Also

### Managing selection views

- [selectionContainerViewBelowText](selectioncontainerviewbelowtext.md): An optional view you supply to draw text selection below the text.

# selectionContainerViewAboveText (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An optional view you supply to draw text selection above the text.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIView * selectionContainerViewAboveText;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If you supply a view to this property, the framework layers the supplied view above [textInputView](textinputview.md) to render text selection above the text, and includes text-selection handles in the rendering.

If you implement text selection using a [textInputView](textinputview.md) subview instead, leave the value `nil`.

## See Also

### Managing selection views

- [selectionContainerViewBelowText](selectioncontainerviewbelowtext.md): An optional view you supply to draw text selection below the text.
