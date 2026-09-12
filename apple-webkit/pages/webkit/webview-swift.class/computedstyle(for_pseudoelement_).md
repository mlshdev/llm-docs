> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/computedstyle(for:pseudoelement:)](https://developer.apple.com/documentation/webkit/webview-swift.class/computedstyle(for:pseudoelement:))

# computedStyle(for:pseudoElement:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the computed style of an element and its pseudo element.

## Declaration

```swift
func computedStyle(for element: DOMElement!, pseudoElement: String!) -> DOMCSSStyleDeclaration!
```

## Parameters

- `element`: The element whose computed style is returned.
- `pseudoElement`: The pseudo element for `element`.

<a id="return-value"></a>

## Return Value

An immutable object describing the computed style of `element` and `pseudoElement` according to the Cascading Style Sheets Specification at `http://www.w3.org/TR/CSS21`. Returns `nil` if the receiver doesn’t display `element`.

## See Also

### Getting and Setting CSS Properties

- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [styleDeclaration(withText:)](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle(\_:)](applystyle%28__%29.md): Applies the CSS typing style to the current selection.

# computedStyleForElement:pseudoElement: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the computed style of an element and its pseudo element.

## Declaration

```objectivec
- (DOMCSSStyleDeclaration *) computedStyleForElement:(DOMElement *) element pseudoElement:(NSString *) pseudoElement;
```

## Parameters

- `element`: The element whose computed style is returned.
- `pseudoElement`: The pseudo element for `element`.

<a id="return-value"></a>

## Return Value

An immutable object describing the computed style of `element` and `pseudoElement` according to the Cascading Style Sheets Specification at `http://www.w3.org/TR/CSS21`. Returns `nil` if the receiver doesn’t display `element`.

## See Also

### Getting and Setting CSS Properties

- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [styleDeclarationWithText:](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle:](applystyle%28__%29.md): Applies the CSS typing style to the current selection.
