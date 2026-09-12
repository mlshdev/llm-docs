> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontextgetglobalcontext(_:)](https://developer.apple.com/documentation/javascriptcore/jscontextgetglobalcontext(_:))

# JSContextGetGlobalContext(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Gets the global context of a JavaScript execution context.

## Declaration

```swift
func JSContextGetGlobalContext(_ ctx: JSContextRef!) -> JSGlobalContextRef!
```

## Parameters

- `ctx`: The `JSContextRef` with the global context you want to get.

<a id="return-value"></a>

## Return Value

The global context of `ctx`.

# JSContextGetGlobalContext (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Gets the global context of a JavaScript execution context.

## Declaration

```objectivec
JSGlobalContextRefJSContextGetGlobalContext(JSContextRef ctx);
```

## Parameters

- `ctx`: The `JSContextRef` with the global context you want to get.

<a id="return-value"></a>

## Return Value

The global context of `ctx`.
