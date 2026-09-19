> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jscontextgetgroup(_:)

# JSContextGetGroup(\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Gets the context group that a JavaScript execution context belongs to.

## Declaration

```swift
func JSContextGetGroup(_ ctx: JSContextRef!) -> JSContextGroupRef!
```

## Parameters

- `ctx`: The [JSContextRef](jscontextref.md) with the group you want to get.

<a id="return-value"></a>

## Return Value

The group that `ctx` belongs to.

# JSContextGetGroup (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Gets the context group that a JavaScript execution context belongs to.

## Declaration

```objectivec
JSContextGroupRefJSContextGetGroup(JSContextRef ctx);
```

## Parameters

- `ctx`: The [JSContextRef](jscontextref.md) with the group you want to get.

<a id="return-value"></a>

## Return Value

The group that `ctx` belongs to.
