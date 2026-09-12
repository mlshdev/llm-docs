> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectmaketypedarray(_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectmaketypedarray(_:_:_:_:))

# JSObjectMakeTypedArray(\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript typed array object with the specified number of elements.

## Declaration

```swift
func JSObjectMakeTypedArray(_ ctx: JSContextRef!, _ arrayType: JSTypedArrayType, _ length: Int, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `arrayType`: A value that identifies the type of array to create. If `arrayType` is [kJSTypedArrayTypeNone](kjstypedarraytypenone.md) or [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), this function returns `NULL`.
- `length`: The number of elements for the new typed array.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` if you don’t want to store an exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is a typed array with all elements having a value of `0`, or `NULL` if there is an error.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArrayWithBytesNoCopy(\_:\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer(\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset(\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.

# JSObjectMakeTypedArray (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript typed array object with the specified number of elements.

## Declaration

```objectivec
JSObjectRefJSObjectMakeTypedArray(JSContextRef ctx, JSTypedArrayType arrayType, size_t length, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `arrayType`: A value that identifies the type of array to create. If `arrayType` is [kJSTypedArrayTypeNone](kjstypedarraytypenone.md) or [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md), this function returns `NULL`.
- `length`: The number of elements for the new typed array.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` if you don’t want to store an exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is a typed array with all elements having a value of `0`, or `NULL` if there is an error.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArrayWithBytesNoCopy](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.
