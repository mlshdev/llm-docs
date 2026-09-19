> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jscontextgetglobalobject(_:)

# JSContextGetGlobalObject(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the global object of a JavaScript execution context.

## Declaration

```swift
func JSContextGetGlobalObject(_ ctx: JSContextRef!) -> JSObjectRef!
```

## Parameters

- `ctx`: The [JSContextRef](jscontextref.md) with the global object you want to get.

<a id="return-value"></a>

## Return Value

The global object of `ctx`.

# JSContextGetGlobalObject (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets the global object of a JavaScript execution context.

## Declaration

```objectivec
JSObjectRefJSContextGetGlobalObject(JSContextRef ctx);
```

## Parameters

- `ctx`: The [JSContextRef](jscontextref.md) with the global object you want to get.

<a id="return-value"></a>

## Return Value

The global object of `ctx`.
