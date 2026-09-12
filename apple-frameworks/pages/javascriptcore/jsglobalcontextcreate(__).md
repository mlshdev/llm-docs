> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextcreate(_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextcreate(_:))

# JSGlobalContextCreate(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a global JavaScript execution context.

## Declaration

```swift
func JSGlobalContextCreate(_ globalObjectClass: JSClassRef!) -> JSGlobalContextRef!
```

## Parameters

- `globalObjectClass`: The class to use when creating the global object. Pass `NULL` to use the default object class.

<a id="return-value"></a>

## Return Value

A [JSGlobalContextRef](jsglobalcontextref.md) with a global object of class `globalObjectClass`.

<a id="Discussion"></a>

## Discussion

[JSGlobalContextCreate(\_:)](jsglobalcontextcreate%28__%29.md) allocates a global object and populates it with all the built-in JavaScript objects, such as `Object`, `Function`, `String`, and `Array`.

In WebKit 4 and later, the system creates the context in a unique context group. Therefore, scripts may execute in it concurrently with scripts executing in other contexts. However, you may not use values from the context in other contexts.

## See Also

### Creating a global context

- [JSGlobalContextCreateInGroup(\_:\_:)](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRetain(\_:)](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.
- [JSGlobalContextRelease(\_:)](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.

# JSGlobalContextCreate (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a global JavaScript execution context.

## Declaration

```objectivec
JSGlobalContextRefJSGlobalContextCreate(JSClassRef globalObjectClass);
```

## Parameters

- `globalObjectClass`: The class to use when creating the global object. Pass `NULL` to use the default object class.

<a id="return-value"></a>

## Return Value

A [JSGlobalContextRef](jsglobalcontextref.md) with a global object of class `globalObjectClass`.

<a id="Discussion"></a>

## Discussion

[JSGlobalContextCreate](jsglobalcontextcreate%28__%29.md) allocates a global object and populates it with all the built-in JavaScript objects, such as `Object`, `Function`, `String`, and `Array`.

In WebKit 4 and later, the system creates the context in a unique context group. Therefore, scripts may execute in it concurrently with scripts executing in other contexts. However, you may not use values from the context in other contexts.

## See Also

### Creating a global context

- [JSGlobalContextCreateInGroup](jsglobalcontextcreateingroup%28____%29.md): Creates a global JavaScript execution context in the provided context group.
- [JSGlobalContextRetain](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.
- [JSGlobalContextRelease](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.
