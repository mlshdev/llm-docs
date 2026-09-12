> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontextref](https://developer.apple.com/documentation/javascriptcore/jscontextref)

# JSContextRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript execution context.

## Declaration

```swift
typealias JSContextRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

This holds the global object and other execution state.

## Topics

### Creating a Context Group

- [JSContextGroupCreate()](jscontextgroupcreate%28%29.md): Creates a JavaScript context group.
- [JSContextGroupRetain(\_:)](jscontextgroupretain%28__%29.md): Retains a JavaScript context group.
- [JSContextGroupRelease(\_:)](jscontextgrouprelease%28__%29.md): Releases a JavaScript context group.

### Accessing the Global Context

- [JSContextGetGlobalContext(\_:)](jscontextgetglobalcontext%28__%29.md): Gets the global context of a JavaScript execution context.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.
- [JSClassRef](jsclassref.md): A JavaScript class.

# JSContextRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript execution context.

## Declaration

```objectivec
typedef const struct OpaqueJSContext * JSContextRef;
```

<a id="Discussion"></a>

## Discussion

This holds the global object and other execution state.

## Topics

### Creating a Context Group

- [JSContextGroupCreate](jscontextgroupcreate%28%29.md): Creates a JavaScript context group.
- [JSContextGroupRetain](jscontextgroupretain%28__%29.md): Retains a JavaScript context group.
- [JSContextGroupRelease](jscontextgrouprelease%28__%29.md): Releases a JavaScript context group.

### Accessing the Global Context

- [JSContextGetGlobalContext](jscontextgetglobalcontext%28__%29.md): Gets the global context of a JavaScript execution context.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSGlobalContextRef](jsglobalcontextref.md): A global JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.
- [JSClassRef](jsclassref.md): A JavaScript class.
