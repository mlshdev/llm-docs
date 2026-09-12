> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextsetname(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextsetname(_:_:))

# JSGlobalContextSetName(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sets the remote debugging name for a context.

## Declaration

```swift
func JSGlobalContextSetName(_ ctx: JSGlobalContextRef!, _ name: JSStringRef!)
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) that you want to name.
- `name`: The remote debugging name to set on `ctx`.

## See Also

### Managing the context’s name

- [JSGlobalContextCopyName(\_:)](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.

# JSGlobalContextSetName (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sets the remote debugging name for a context.

## Declaration

```objectivec
void JSGlobalContextSetName(JSGlobalContextRef ctx, JSStringRef name);
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) that you want to name.
- `name`: The remote debugging name to set on `ctx`.

## See Also

### Managing the context’s name

- [JSGlobalContextCopyName](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.
