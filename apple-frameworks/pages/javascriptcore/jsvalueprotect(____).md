> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalueprotect(_:_:)](https://developer.apple.com/documentation/javascriptcore/jsvalueprotect(_:_:))

# JSValueProtect(\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Protects a JavaScript value from garbage collection.

## Declaration

```swift
func JSValueProtect(_ ctx: JSContextRef!, _ value: JSValueRef!)
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to protect.

<a id="Discussion"></a>

## Discussion

Use this method when you want to store a [JSValueRef](jsvalueref.md) in a global or on the heap, where the garbage collector can’t discover your reference to it.

You can protect a value multiple times and must unprotect it an equal number of times before it becomes eligible for garbage collection.

## See Also

### Supporting Garbage Collection

- [JSValueUnprotect(\_:\_:)](jsvalueunprotect%28____%29.md): Unprotects a JavaScript value from garbage collection.

# JSValueProtect (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Protects a JavaScript value from garbage collection.

## Declaration

```objectivec
void JSValueProtect(JSContextRef ctx, JSValueRef value);
```

## Parameters

- `ctx`: The execution context to use.
- `value`: The [JSValueRef](jsvalueref.md) to protect.

<a id="Discussion"></a>

## Discussion

Use this method when you want to store a [JSValueRef](jsvalueref.md) in a global or on the heap, where the garbage collector can’t discover your reference to it.

You can protect a value multiple times and must unprotect it an equal number of times before it becomes eligible for garbage collection.

## See Also

### Supporting Garbage Collection

- [JSValueUnprotect](jsvalueunprotect%28____%29.md): Unprotects a JavaScript value from garbage collection.
