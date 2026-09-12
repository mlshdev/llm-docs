> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextref](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextref)

# JSGlobalContextRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A global JavaScript execution context.

## Declaration

```swift
typealias JSGlobalContextRef = OpaquePointer
```

<a id="Discussion"></a>

## Discussion

A [JSGlobalContextRef](jsglobalcontextref.md) is a [JSContextRef](jscontextref.md).

## Topics

### Creating a global context

- [JSGlobalContextCreate(\_:)](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextCreateInGroup(\_:\_:)](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRetain(\_:)](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.
- [JSGlobalContextRelease(\_:)](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.

### Managing the context’s name

- [JSGlobalContextCopyName(\_:)](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.
- [JSGlobalContextSetName(\_:\_:)](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.

### Making a context inspectable

- [JSGlobalContextIsInspectable(\_:)](jsglobalcontextisinspectable%28__%29.md): Returns a Boolean value that indicates whether the JavaScript context is inspectable.
- [JSGlobalContextSetInspectable(\_:\_:)](jsglobalcontextsetinspectable%28____%29.md): Sets a JavaScript context to be either inspectable or not inspectable.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.
- [JSClassRef](jsclassref.md): A JavaScript class.

# JSGlobalContextRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A global JavaScript execution context.

## Declaration

```objectivec
typedef struct OpaqueJSContext * JSGlobalContextRef;
```

<a id="Discussion"></a>

## Discussion

A [JSGlobalContextRef](jsglobalcontextref.md) is a [JSContextRef](jscontextref.md).

## Topics

### Creating a global context

- [JSGlobalContextCreate](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextCreateInGroup](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRetain](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.
- [JSGlobalContextRelease](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.

### Managing the context’s name

- [JSGlobalContextCopyName](jsglobalcontextcopyname%28__%29.md): Gets a copy of the name of a context.
- [JSGlobalContextSetName](jsglobalcontextsetname%28____%29.md): Sets the remote debugging name for a context.

### Making a context inspectable

- [JSGlobalContextIsInspectable](jsglobalcontextisinspectable%28__%29.md): Returns a Boolean value that indicates whether the JavaScript context is inspectable.
- [JSGlobalContextSetInspectable](jsglobalcontextsetinspectable%28____%29.md): Sets a JavaScript context to be either inspectable or not inspectable.

## See Also

### JavaScriptCore Engine Interface

- [JSContextGroupRef](jscontextgroupref.md): A group that associates JavaScript contexts with one another.
- [JSContextRef](jscontextref.md): A JavaScript execution context.
- [JSStringRef](jsstringref.md): A UTF-16 character buffer.
- [JSClassRef](jsclassref.md): A JavaScript class.
