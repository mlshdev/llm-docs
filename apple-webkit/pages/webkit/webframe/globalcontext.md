> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/globalcontext](https://developer.apple.com/documentation/webkit/webframe/globalcontext)

# globalContext (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.

## Declaration

```swift
var globalContext: JSGlobalContextRef! { get }
```

## See Also

### Getting DOM Objects

- [domDocument](domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [javaScriptContext](javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.
- [windowObject](windowobject.md): Deprecated. The JavaScript window object.

# globalContext (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.

## Declaration

```objectivec
@property (nonatomic, readonly) JSGlobalContextRef globalContext;
```

## See Also

### Getting DOM Objects

- [DOMDocument](domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [javaScriptContext](javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.
- [windowObject](windowobject.md): Deprecated. The JavaScript window object.
