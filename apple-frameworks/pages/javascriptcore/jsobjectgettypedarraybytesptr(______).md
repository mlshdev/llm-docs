> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectgettypedarraybytesptr(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectgettypedarraybytesptr(_:_:_:))

# JSObjectGetTypedArrayBytesPtr(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns a temporary pointer to the backing store of a JavaScript typed array object.

## Declaration

```swift
func JSObjectGetTypedArrayBytesPtr(_ ctx: JSContextRef!, _ object: JSObjectRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> UnsafeMutableRawPointer!
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the typed array type data pointer to obtain.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The pointer that this function returns is temporary and may not remain valid across JavaScriptCore API calls.

## See Also

### Accessing Typed Array Information

- [JSObjectGetTypedArrayLength(\_:\_:\_:)](jsobjectgettypedarraylength%28______%29.md): Returns the length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteLength(\_:\_:\_:)](jsobjectgettypedarraybytelength%28______%29.md): Returns the byte length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteOffset(\_:\_:\_:)](jsobjectgettypedarraybyteoffset%28______%29.md): Returns the byte offset of a JavaScript typed array object.
- [JSObjectGetTypedArrayBuffer(\_:\_:\_:)](jsobjectgettypedarraybuffer%28______%29.md): Returns the JavaScript array buffer object to use as the backing of a JavaScript typed array object.

# JSObjectGetTypedArrayBytesPtr (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns a temporary pointer to the backing store of a JavaScript typed array object.

## Declaration

```objectivec
void *JSObjectGetTypedArrayBytesPtr(JSContextRef ctx, JSObjectRef object, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the typed array type data pointer to obtain.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The pointer that this function returns is temporary and may not remain valid across JavaScriptCore API calls.

## See Also

### Accessing Typed Array Information

- [JSObjectGetTypedArrayLength](jsobjectgettypedarraylength%28______%29.md): Returns the length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteLength](jsobjectgettypedarraybytelength%28______%29.md): Returns the byte length of a JavaScript typed array object.
- [JSObjectGetTypedArrayByteOffset](jsobjectgettypedarraybyteoffset%28______%29.md): Returns the byte offset of a JavaScript typed array object.
- [JSObjectGetTypedArrayBuffer](jsobjectgettypedarraybuffer%28______%29.md): Returns the JavaScript array buffer object to use as the backing of a JavaScript typed array object.
