> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextsetinspectable(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextsetinspectable(_:_:))

# JSGlobalContextSetInspectable(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 9.0+ · visionOS 1.0+

Sets a JavaScript context to be either inspectable or not inspectable.

## Declaration

```swift
func JSGlobalContextSetInspectable(_ ctx: JSGlobalContextRef!, _ inspectable: Bool)
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to set whether it’s inspectable.
- `inspectable`: A Boolean value that indicates whether the context is inspectable.

## Topics

### Related Documentation

- [JSGlobalContextCopyName(\_:)](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.
- [JSGlobalContextSetName(\_:\_:)](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.

## See Also

### Making a context inspectable

- [JSGlobalContextIsInspectable(\_:)](jsglobalcontextisinspectable%28__%29.md): Returns a Boolean value that indicates whether the JavaScript context is inspectable.

# JSGlobalContextSetInspectable (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 9.0+ · visionOS 1.0+

Sets a JavaScript context to be either inspectable or not inspectable.

## Declaration

```objectivec
void JSGlobalContextSetInspectable(JSGlobalContextRef ctx, bool inspectable);
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to set whether it’s inspectable.
- `inspectable`: A Boolean value that indicates whether the context is inspectable.

## Topics

### Related Documentation

- [JSGlobalContextCopyName](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.
- [JSGlobalContextSetName](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.

## See Also

### Making a context inspectable

- [JSGlobalContextIsInspectable](jsglobalcontextisinspectable%28__%29.md): Returns a Boolean value that indicates whether the JavaScript context is inspectable.
