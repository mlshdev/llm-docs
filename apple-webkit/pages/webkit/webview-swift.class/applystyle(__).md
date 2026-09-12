> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/applystyle(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/applystyle(_:))

# applyStyle(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Applies the CSS typing style to the current selection.

## Declaration

```swift
func applyStyle(_ style: DOMCSSStyleDeclaration!)
```

## Parameters

- `style`: The style to apply to the current selection.

<a id="Discussion"></a>

## Discussion

This method does nothing if there is no current selection or if the current selection is collapsed.

This method hides the complexities of applying styles to elements. If necessary, this method will make multiple passes over the range of the current selection to ensure that the requested style is applied to the elements in that range, and takes into account the complexities of CSS style application rules. This method also simplifies styling attributes so that the minimum number of styling directives are used to yield a given computed style.

## See Also

### Getting and Setting CSS Properties

- [computedStyle(for:pseudoElement:)](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [styleDeclaration(withText:)](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.

# applyStyle: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Applies the CSS typing style to the current selection.

## Declaration

```objectivec
- (void) applyStyle:(DOMCSSStyleDeclaration *) style;
```

## Parameters

- `style`: The style to apply to the current selection.

<a id="Discussion"></a>

## Discussion

This method does nothing if there is no current selection or if the current selection is collapsed.

This method hides the complexities of applying styles to elements. If necessary, this method will make multiple passes over the range of the current selection to ensure that the requested style is applied to the elements in that range, and takes into account the complexities of CSS style application rules. This method also simplifies styling attributes so that the minimum number of styling directives are used to yield a given computed style.

## See Also

### Getting and Setting CSS Properties

- [computedStyleForElement:pseudoElement:](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [styleDeclarationWithText:](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
