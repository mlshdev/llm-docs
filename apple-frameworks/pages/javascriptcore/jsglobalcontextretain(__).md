> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextretain(_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextretain(_:))

# JSGlobalContextRetain(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a global JavaScript execution context.

## Declaration

```swift
func JSGlobalContextRetain(_ ctx: JSGlobalContextRef!) -> JSGlobalContextRef!
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSGlobalContextRef](jsglobalcontextref.md) that is the same as `ctx`.

## See Also

### Creating a global context

- [JSGlobalContextCreate(\_:)](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextCreateInGroup(\_:\_:)](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRelease(\_:)](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.

# JSGlobalContextRetain (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retains a global JavaScript execution context.

## Declaration

```objectivec
JSGlobalContextRefJSGlobalContextRetain(JSGlobalContextRef ctx);
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to retain.

<a id="return-value"></a>

## Return Value

A [JSGlobalContextRef](jsglobalcontextref.md) that is the same as `ctx`.

## See Also

### Creating a global context

- [JSGlobalContextCreate](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextCreateInGroup](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRelease](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.
