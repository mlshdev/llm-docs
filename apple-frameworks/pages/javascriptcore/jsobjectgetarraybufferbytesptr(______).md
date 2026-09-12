> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectgetarraybufferbytesptr(_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectgetarraybufferbytesptr(_:_:_:))

# JSObjectGetArrayBufferBytesPtr(\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.

## Declaration

```swift
func JSObjectGetArrayBufferBytesPtr(_ ctx: JSContextRef!, _ object: JSObjectRef!, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> UnsafeMutableRawPointer!
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the typed array type data pointer to obtain.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="Discussion"></a>

## Discussion

The pointer that this function returns is temporary and may not remain valid across JavaScriptCore API calls.

## See Also

### Working with Array Buffers

- [JSObjectMakeArrayBufferWithBytesNoCopy(\_:\_:\_:\_:\_:\_:)](jsobjectmakearraybufferwithbytesnocopy%28____________%29.md): Creates a JavaScript array buffer object from an existing pointer.
- [JSObjectGetArrayBufferByteLength(\_:\_:\_:)](jsobjectgetarraybufferbytelength%28______%29.md): Returns the number of bytes in a JavaScript data object.

# JSObjectGetArrayBufferBytesPtr (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

Returns a pointer to the data buffer that serves as the backing store for a JavaScript typed array object.

## Declaration

```objectivec
void *JSObjectGetArrayBufferBytesPtr(JSContextRef ctx, JSObjectRef object, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `object`: The [JSObjectRef](jsobjectref.md) with the typed array type data pointer to obtain.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="Discussion"></a>

## Discussion

The pointer that this function returns is temporary and may not remain valid across JavaScriptCore API calls.

## See Also

### Working with Array Buffers

- [JSObjectMakeArrayBufferWithBytesNoCopy](jsobjectmakearraybufferwithbytesnocopy%28____________%29.md): Creates a JavaScript array buffer object from an existing pointer.
- [JSObjectGetArrayBufferByteLength](jsobjectgetarraybufferbytelength%28______%29.md): Returns the number of bytes in a JavaScript data object.
