> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/styledeclaration(withtext:)](https://developer.apple.com/documentation/webkit/webview-swift.class/styledeclaration(withtext:))

# styleDeclaration(withText:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the CSS style declaration for the specified text.

## Declaration

```swift
func styleDeclaration(withText text: String!) -> DOMCSSStyleDeclaration!
```

## Parameters

- `text`: The text whose style declaration is returned.

<a id="return-value"></a>

## Return Value

The style declaration for `text`.

## See Also

### Getting and Setting CSS Properties

- [computedStyle(for:pseudoElement:)](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [applyStyle(\_:)](applystyle%28__%29.md): Applies the CSS typing style to the current selection.

# styleDeclarationWithText: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the CSS style declaration for the specified text.

## Declaration

```objectivec
- (DOMCSSStyleDeclaration *) styleDeclarationWithText:(NSString *) text;
```

## Parameters

- `text`: The text whose style declaration is returned.

<a id="return-value"></a>

## Return Value

The style declaration for `text`.

## See Also

### Getting and Setting CSS Properties

- [computedStyleForElement:pseudoElement:](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [applyStyle:](applystyle%28__%29.md): Applies the CSS typing style to the current selection.
