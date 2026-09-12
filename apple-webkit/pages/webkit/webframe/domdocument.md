> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/domdocument](https://developer.apple.com/documentation/webkit/webframe/domdocument)

# domDocument (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The web frame’s DOM document.

## Declaration

```swift
var domDocument: DOMDocument! { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if the receiver doesn’t have a DOM document; for example, if it’s a standalone image.

## See Also

### Getting DOM Objects

- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [javaScriptContext](javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.
- [windowObject](windowobject.md): Deprecated. The JavaScript window object.

# DOMDocument (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The web frame’s DOM document.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) DOMDocument * DOMDocument;
```

<a id="Discussion"></a>

## Discussion

`nil` if the receiver doesn’t have a DOM document; for example, if it’s a standalone image.

## See Also

### Getting DOM Objects

- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [javaScriptContext](javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.
- [windowObject](windowobject.md): Deprecated. The JavaScript window object.
