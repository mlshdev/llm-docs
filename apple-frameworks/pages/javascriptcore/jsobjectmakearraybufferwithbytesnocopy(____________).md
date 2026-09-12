> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectmakearraybufferwithbytesnocopy(_:_:_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectmakearraybufferwithbytesnocopy(_:_:_:_:_:_:))

# JSObjectMakeArrayBufferWithBytesNoCopy(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript array buffer object from an existing pointer.

## Declaration

```swift
func JSObjectMakeArrayBufferWithBytesNoCopy(_ ctx: JSContextRef!, _ bytes: UnsafeMutableRawPointer!, _ byteLength: Int, _ bytesDeallocator: JSTypedArrayBytesDeallocator!, _ deallocatorContext: UnsafeMutableRawPointer!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `bytes`: A pointer to the byte buffer to use as the backing store of the typed array object.
- `byteLength`: The number of bytes that `bytes` points to.
- `bytesDeallocator`: The allocator to use to deallocate the external buffer when deallocating the typed array object.
- `deallocatorContext`: A pointer to pass back to the deallocator.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) array buffer with a backing store that is the same as the one that `bytes` points to, or `NULL` if there is an error.

<a id="Discussion"></a>

## Discussion

If the system throws an exception during this function, it always calls the `bytesDeallocator`.

## See Also

### Working with Array Buffers

- [JSObjectGetArrayBufferByteLength(\_:\_:\_:)](jsobjectgetarraybufferbytelength%28______%29.md): Returns the number of bytes in a JavaScript data object.
- [JSObjectGetArrayBufferBytesPtr(\_:\_:\_:)](jsobjectgetarraybufferbytesptr%28______%29.md): Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.

# JSObjectMakeArrayBufferWithBytesNoCopy (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript array buffer object from an existing pointer.

## Declaration

```objectivec
JSObjectRefJSObjectMakeArrayBufferWithBytesNoCopy(JSContextRef ctx, void *bytes, size_t byteLength, JSTypedArrayBytesDeallocator bytesDeallocator, void *deallocatorContext, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `bytes`: A pointer to the byte buffer to use as the backing store of the typed array object.
- `byteLength`: The number of bytes that `bytes` points to.
- `bytesDeallocator`: The allocator to use to deallocate the external buffer when deallocating the typed array object.
- `deallocatorContext`: A pointer to pass back to the deallocator.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) array buffer with a backing store that is the same as the one that `bytes` points to, or `NULL` if there is an error.

<a id="Discussion"></a>

## Discussion

If the system throws an exception during this function, it always calls the `bytesDeallocator`.

## See Also

### Working with Array Buffers

- [JSObjectGetArrayBufferByteLength](jsobjectgetarraybufferbytelength%28______%29.md): Returns the number of bytes in a JavaScript data object.
- [JSObjectGetArrayBufferBytesPtr](jsobjectgetarraybufferbytesptr%28______%29.md): Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.
