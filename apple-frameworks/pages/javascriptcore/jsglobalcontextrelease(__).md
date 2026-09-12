> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextrelease(_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextrelease(_:))

# JSGlobalContextRelease(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a global JavaScript execution context.

## Declaration

```swift
func JSGlobalContextRelease(_ ctx: JSGlobalContextRef!)
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to release.

## See Also

### Creating a global context

- [JSGlobalContextCreate(\_:)](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextCreateInGroup(\_:\_:)](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRetain(\_:)](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.

# JSGlobalContextRelease (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Releases a global JavaScript execution context.

## Declaration

```objectivec
void JSGlobalContextRelease(JSGlobalContextRef ctx);
```

## Parameters

- `ctx`: The [JSGlobalContextRef](jsglobalcontextref.md) to release.

## See Also

### Creating a global context

- [JSGlobalContextCreate](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextCreateInGroup](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRetain](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.
