> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsglobalcontextcreateingroup(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsglobalcontextcreateingroup(_:_:))

# JSGlobalContextCreateInGroup(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a global JavaScript execution context in the provided context group.

## Declaration

```swift
func JSGlobalContextCreateInGroup(_ group: JSContextGroupRef!, _ globalObjectClass: JSClassRef!) -> JSGlobalContextRef!
```

## Parameters

- `group`: The context group to use. The created global context retains the group. Pass `NULL` to create a unique group for the context.
- `globalObjectClass`: The class to use when creating the global object. Pass `NULL` to use the default object class.

<a id="return-value"></a>

## Return Value

A [JSGlobalContextRef](jsglobalcontextref.md) with a global object of class `globalObjectClass` and a context group equal to `group`.

<a id="Discussion"></a>

## Discussion

[JSGlobalContextCreateInGroup(\_:\_:)](jsglobalcontextcreateingroup%28____%29.md) allocates a global object and populates it with all the built-in JavaScript objects, such as `Object`, `Function`, `String`, and `Array`.

## See Also

### Creating a global context

- [JSGlobalContextCreate(\_:)](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextRetain(\_:)](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.
- [JSGlobalContextRelease(\_:)](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.

# JSGlobalContextCreateInGroup (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a global JavaScript execution context in the provided context group.

## Declaration

```objectivec
JSGlobalContextRefJSGlobalContextCreateInGroup(JSContextGroupRef group, JSClassRef globalObjectClass);
```

## Parameters

- `group`: The context group to use. The created global context retains the group. Pass `NULL` to create a unique group for the context.
- `globalObjectClass`: The class to use when creating the global object. Pass `NULL` to use the default object class.

<a id="return-value"></a>

## Return Value

A [JSGlobalContextRef](jsglobalcontextref.md) with a global object of class `globalObjectClass` and a context group equal to `group`.

<a id="Discussion"></a>

## Discussion

[JSGlobalContextCreateInGroup](jsglobalcontextcreateingroup%28____%29.md) allocates a global object and populates it with all the built-in JavaScript objects, such as `Object`, `Function`, `String`, and `Array`.

## See Also

### Creating a global context

- [JSGlobalContextCreate](jsglobalcontextcreate%28__%29.md): Creates a global JavaScript execution context.
- [JSGlobalContextRetain](jsglobalcontextretain%28__%29.md): Retains a global JavaScript execution context.
- [JSGlobalContextRelease](jsglobalcontextrelease%28__%29.md): Releases a global JavaScript execution context.
