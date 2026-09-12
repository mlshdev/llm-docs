> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectmaketypedarraywithbytesnocopy(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectmaketypedarraywithbytesnocopy(_:_:_:_:_:_:_:))

# JSObjectMakeTypedArrayWithBytesNoCopy(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript typed array object from an existing pointer.

## Declaration

```swift
func JSObjectMakeTypedArrayWithBytesNoCopy(_ ctx: JSContextRef!, _ arrayType: JSTypedArrayType, _ bytes: UnsafeMutableRawPointer!, _ byteLength: Int, _ bytesDeallocator: JSTypedArrayBytesDeallocator!, _ deallocatorContext: UnsafeMutableRawPointer!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `arrayType`: A value that identifies the type of array to create. If `arrayType` is [kJSTypedArrayTypeNone](kjstypedarraytypenone.md) or [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), this function returns `NULL`.
- `bytes`: A pointer to the byte buffer to use as the backing store of the typed array object.
- `byteLength`: The number of bytes that `bytes` points to.
- `bytesDeallocator`: The allocator to use to deallocate the external buffer when deallocating the typed array object.
- `deallocatorContext`: A pointer to pass back to the deallocator.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` if you don’t want to store an exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) typed array with a backing store that is the same as the one that `bytes` points to, or `NULL` if there is an error.

<a id="Discussion"></a>

## Discussion

If the system throws an exception during this function, it always calls the `bytesDeallocator`.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray(\_:\_:\_:\_:)](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithArrayBuffer(\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset(\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.

# JSObjectMakeTypedArrayWithBytesNoCopy (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript typed array object from an existing pointer.

## Declaration

```objectivec
JSObjectRefJSObjectMakeTypedArrayWithBytesNoCopy(JSContextRef ctx, JSTypedArrayType arrayType, void *bytes, size_t byteLength, JSTypedArrayBytesDeallocator bytesDeallocator, void *deallocatorContext, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `arrayType`: A value that identifies the type of array to create. If `arrayType` is [kJSTypedArrayTypeNone](kjstypedarraytypenone.md) or [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), this function returns `NULL`.
- `bytes`: A pointer to the byte buffer to use as the backing store of the typed array object.
- `byteLength`: The number of bytes that `bytes` points to.
- `bytesDeallocator`: The allocator to use to deallocate the external buffer when deallocating the typed array object.
- `deallocatorContext`: A pointer to pass back to the deallocator.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` if you don’t want to store an exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) typed array with a backing store that is the same as the one that `bytes` points to, or `NULL` if there is an error.

<a id="Discussion"></a>

## Discussion

If the system throws an exception during this function, it always calls the `bytesDeallocator`.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithArrayBuffer](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.
