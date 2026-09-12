> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueunprotect(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvalueunprotect(_:_:))

# JSValueUnprotect(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Unprotects a JavaScript value from garbage collection.

## Declaration

```swift
func JSValueUnprotect(_ ctx: JSContextRef!, _ value: JSValueRef!)
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to unprotect.

<a id="Discussion"></a>

## Discussion

You can protect a value multiple times and must unprotect it an equal number of times before it becomes eligible for garbage collection.

## See Also

### Supporting Garbage Collection

- [JSValueProtect(\_:\_:)](jsvalueprotect%28____%29.md): Protects a JavaScript value from garbage collection.

# JSValueUnprotect (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Unprotects a JavaScript value from garbage collection.

## Declaration

```objectivec
void JSValueUnprotect(JSContextRef ctx, JSValueRef value);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to unprotect.

<a id="Discussion"></a>

## Discussion

You can protect a value multiple times and must unprotect it an equal number of times before it becomes eligible for garbage collection.

## See Also

### Supporting Garbage Collection

- [JSValueProtect](jsvalueprotect%28____%29.md): Protects a JavaScript value from garbage collection.
