> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/windowobject](https://developer.apple.com/documentation/webkit/webframe/windowobject)

# windowObject (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The JavaScript window object.

## Declaration

```swift
var windowObject: WebScriptObject! { get }
```

## See Also

### Getting DOM Objects

- [domDocument](domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [javaScriptContext](javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.

# windowObject (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The JavaScript window object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebScriptObject * windowObject;
```

## See Also

### Getting DOM Objects

- [DOMDocument](domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [javaScriptContext](javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.
