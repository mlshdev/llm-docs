> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextisinspectable(_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextisinspectable(_:))

# JSGlobalContextIsInspectable(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the JavaScript context is inspectable.

## Declaration

```swift
func JSGlobalContextIsInspectable(_ ctx: JSGlobalContextRef!) -> Bool
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to check whether it’s inspectable.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the JavaScript context is inspectable.

## Topics

### Related Documentation

- [JSGlobalContextCopyName(\_:)](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.
- [JSGlobalContextSetName(\_:\_:)](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.

## See Also

### Making a context inspectable

- [JSGlobalContextSetInspectable(\_:\_:)](jsglobalcontextsetinspectable%28____%29.md): Sets a JavaScript context to be either inspectable or not inspectable.

# JSGlobalContextIsInspectable (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the JavaScript context is inspectable.

## Declaration

```objectivec
bool JSGlobalContextIsInspectable(JSGlobalContextRef ctx);
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to check whether it’s inspectable.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the JavaScript context is inspectable.

## Topics

### Related Documentation

- [JSGlobalContextCopyName](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.
- [JSGlobalContextSetName](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.

## See Also

### Making a context inspectable

- [JSGlobalContextSetInspectable](jsglobalcontextsetinspectable%28____%29.md): Sets a JavaScript context to be either inspectable or not inspectable.
