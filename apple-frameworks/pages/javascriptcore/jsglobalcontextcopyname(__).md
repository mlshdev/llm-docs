> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextcopyname(_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextcopyname(_:))

# JSGlobalContextCopyName(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets a copy of the name of a context.

## Declaration

```swift
func JSGlobalContextCopyName(_ ctx: JSGlobalContextRef!) -> JSStringRef!
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) with the name you want to get.

<a id="return-value"></a>

## Return Value

The name for `ctx`.

<a id="Discussion"></a>

## Discussion

JavaScriptCore exposes the name of [JSGlobalContextRef](jsglobalcontextref.md) for remote debugging to make it easier to identify the context you want to attach to.

## See Also

### Managing the context’s name

- [JSGlobalContextSetName(\_:\_:)](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.

# JSGlobalContextCopyName (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets a copy of the name of a context.

## Declaration

```objectivec
JSStringRefJSGlobalContextCopyName(JSGlobalContextRef ctx);
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) with the name you want to get.

<a id="return-value"></a>

## Return Value

The name for `ctx`.

<a id="Discussion"></a>

## Discussion

JavaScriptCore exposes the name of [JSGlobalContextRef](jsglobalcontextref.md) for remote debugging to make it easier to identify the context you want to attach to.

## See Also

### Managing the context’s name

- [JSGlobalContextSetName](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.
