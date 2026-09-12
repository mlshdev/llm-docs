> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/mediastyle](https://developer.apple.com/documentation/webkit/webview-swift.class/mediastyle)

# mediaStyle (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s CSS media property.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var mediaStyle: String! { get set }
```

## See Also

### Getting and Setting CSS Properties

- [computedStyle(for:pseudoElement:)](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [styleDeclaration(withText:)](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle(\_:)](applystyle%28__%29.md): Applies the CSS typing style to the current selection.

# mediaStyle (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s CSS media property.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * mediaStyle;
```

## See Also

### Getting and Setting CSS Properties

- [computedStyleForElement:pseudoElement:](computedstyle%28for_pseudoelement_%29.md): Returns the computed style of an element and its pseudo element.
- [typingStyle](typingstyle.md): The receiver’s CSS typing style.
- [styleDeclarationWithText:](styledeclaration%28withtext_%29.md): Returns the CSS style declaration for the specified text.
- [applyStyle:](applystyle%28__%29.md): Applies the CSS typing style to the current selection.
