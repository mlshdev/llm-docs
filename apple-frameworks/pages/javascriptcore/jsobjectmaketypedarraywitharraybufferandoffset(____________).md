> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectmaketypedarraywitharraybufferandoffset(_:_:_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectmaketypedarraywitharraybufferandoffset(_:_:_:_:_:_:))

# JSObjectMakeTypedArrayWithArrayBufferAndOffset(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.

## Declaration

```swift
func JSObjectMakeTypedArrayWithArrayBufferAndOffset(_ ctx: JSContextRef!, _ arrayType: JSTypedArrayType, _ buffer: JSObjectRef!, _ byteOffset: Int, _ length: Int, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `arrayType`: A value that identifies the type of array to create. If `arrayType` is [kJSTypedArrayTypeNone](kjstypedarraytypenone.md) or [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), this function returns `NULL`.
- `buffer`: An array buffer object to use as the backing store for the created JavaScript typed array object.
- `byteOffset`: The byte offset for the created typed array. Align `byteOffset` with the element size of `arrayType`.
- `length`: The number of elements to include in the typed array.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` if you don’t want to store an exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is a typed array, or `NULL` if there is an error. The backing store of the typed array is `buffer`.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray(\_:\_:\_:\_:)](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy(\_:\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer(\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.

# JSObjectMakeTypedArrayWithArrayBufferAndOffset (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.

## Declaration

```objectivec
JSObjectRefJSObjectMakeTypedArrayWithArrayBufferAndOffset(JSContextRef ctx, JSTypedArrayType arrayType, JSObjectRef buffer, size_t byteOffset, size_t length, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `arrayType`: A value that identifies the type of array to create. If `arrayType` is [kJSTypedArrayTypeNone](kjstypedarraytypenone.md) or [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), this function returns `NULL`.
- `buffer`: An array buffer object to use as the backing store for the created JavaScript typed array object.
- `byteOffset`: The byte offset for the created typed array. Align `byteOffset` with the element size of `arrayType`.
- `length`: The number of elements to include in the typed array.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` if you don’t want to store an exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is a typed array, or `NULL` if there is an error. The backing store of the typed array is `buffer`.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.
