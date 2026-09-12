> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/typingstyle](https://developer.apple.com/documentation/webkit/webview-swift.class/typingstyle)

# typingStyle (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s CSS typing style.

## Declaration

```swift
var typingStyle: DOMCSSStyleDeclaration! { get set }
```

<a id="Discussion"></a>

## Discussion

The typing style is reset automatically when the receiver’s selection changes.

## See Also

### Getting and Setting CSS Properties

- [computedStyle(for:pseudoElement:)](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [styleDeclaration(withText:)](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle(\_:)](applystyle%28__%29.md): Applies the CSS typing style to the current selection.

# typingStyle (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s CSS typing style.

## Declaration

```objectivec
@property (nonatomic, strong) DOMCSSStyleDeclaration * typingStyle;
```

<a id="Discussion"></a>

## Discussion

The typing style is reset automatically when the receiver’s selection changes.

## See Also

### Getting and Setting CSS Properties

- [computedStyleForElement:pseudoElement:](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [mediaStyle](mediastyle.md): Deprecated. The receiver’s CSS media property.
- [styleDeclarationWithText:](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle:](applystyle%28__%29.md): Applies the CSS typing style to the current selection.
