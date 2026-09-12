> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectgetarraybufferbytelength(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectgetarraybufferbytelength(_:_:_:))

# JSObjectGetArrayBufferByteLength(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns the number of bytes in a JavaScript data object.

## Declaration

```swift
func JSObjectGetArrayBufferByteLength(_ ctx: JSContextRef!, _ object: JSObjectRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> Int
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The JavaScript array buffer object with the length in bytes to return.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The number of bytes in the data object.

## See Also

### Working with Array Buffers

- [JSObjectMakeArrayBufferWithBytesNoCopy(\_:\_:\_:\_:\_:\_:)](jsobjectmakearraybufferwithbytesnocopy%28____________%29.md): Creates a JavaScript array buffer object from an existing pointer.
- [JSObjectGetArrayBufferBytesPtr(\_:\_:\_:)](jsobjectgetarraybufferbytesptr%28______%29.md): Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.

# JSObjectGetArrayBufferByteLength (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns the number of bytes in a JavaScript data object.

## Declaration

```objectivec
size_t JSObjectGetArrayBufferByteLength(JSContextRef ctx, JSObjectRef object, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The JavaScript array buffer object with the length in bytes to return.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

The number of bytes in the data object.

## See Also

### Working with Array Buffers

- [JSObjectMakeArrayBufferWithBytesNoCopy](jsobjectmakearraybufferwithbytesnocopy%28____________%29.md): Creates a JavaScript array buffer object from an existing pointer.
- [JSObjectGetArrayBufferBytesPtr](jsobjectgetarraybufferbytesptr%28______%29.md): Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.
