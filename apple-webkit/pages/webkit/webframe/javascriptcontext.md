> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/javascriptcontext](https://developer.apple.com/documentation/webkit/webframe/javascriptcontext)

# javaScriptContext (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The frame’s global JavaScript execution context.

## Declaration

```swift
var javaScriptContext: JSContext! { get }
```

<a id="Discussion"></a>

## Discussion

Use this method to bridge between the WebKit and Objective-C JavaScriptCore API.

## See Also

### Getting DOM Objects

- [domDocument](domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [windowObject](windowobject.md): Deprecated. The JavaScript window object.

# javaScriptContext (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The frame’s global JavaScript execution context.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) JSContext * javaScriptContext;
```

<a id="Discussion"></a>

## Discussion

Use this method to bridge between the WebKit and Objective-C JavaScriptCore API.

## See Also

### Getting DOM Objects

- [DOMDocument](domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [windowObject](windowobject.md): Deprecated. The JavaScript window object.
