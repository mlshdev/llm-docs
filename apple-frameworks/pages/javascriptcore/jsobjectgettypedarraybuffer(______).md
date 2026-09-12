> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectgettypedarraybuffer(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectgettypedarraybuffer(_:_:_:))

# JSObjectGetTypedArrayBuffer(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns the JavaScript array buffer object to use as the backing of a JavaScript typed array object.

## Declaration

```swift
func JSObjectGetTypedArrayBuffer(_ ctx: JSContextRef!, _ object: JSObjectRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the typed array type data pointer to obtain.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) with a [JSTypedArrayType](jstypedarraytype.md) of [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), or `NULL` if `object` isn’t a typed array.

## See Also

### Accessing Typed Array Information

- [JSObjectGetTypedArrayBytesPtr(\_:\_:\_:)](jsobjectgettypedarraybytesptr%28______%29.md): Returns a temporary pointer to the backing store of a JavaScript typed array object.
- [JSObjectGetTypedArrayLength(\_:\_:\_:)](jsobjectgettypedarraylength%28______%29.md): Returns the length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteLength(\_:\_:\_:)](jsobjectgettypedarraybytelength%28______%29.md): Returns the byte length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteOffset(\_:\_:\_:)](jsobjectgettypedarraybyteoffset%28______%29.md): Returns the byte offset of a JavaScript typed array object.

# JSObjectGetTypedArrayBuffer (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns the JavaScript array buffer object to use as the backing of a JavaScript typed array object.

## Declaration

```objectivec
JSObjectRefJSObjectGetTypedArrayBuffer(JSContextRef ctx, JSObjectRef object, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the typed array type data pointer to obtain.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) with a [JSTypedArrayType](jstypedarraytype.md) of [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), or `NULL` if `object` isn’t a typed array.

## See Also

### Accessing Typed Array Information

- [JSObjectGetTypedArrayBytesPtr](jsobjectgettypedarraybytesptr%28______%29.md): Returns a temporary pointer to the backing store of a JavaScript typed array object.
- [JSObjectGetTypedArrayLength](jsobjectgettypedarraylength%28______%29.md): Returns the length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteLength](jsobjectgettypedarraybytelength%28______%29.md): Returns the byte length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteOffset](jsobjectgettypedarraybyteoffset%28______%29.md): Returns the byte offset of a JavaScript typed array object.
