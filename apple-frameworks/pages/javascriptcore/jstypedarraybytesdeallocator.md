> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jstypedarraybytesdeallocator](https://developer.apple.com/documentation/javascriptcore/jstypedarraybytesdeallocator)

# JSTypedArrayBytesDeallocator (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A function that deallocates bytes that pass to a typed array constructor.

## Declaration

```swift
typealias JSTypedArrayBytesDeallocator = (UnsafeMutableRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `bytes`: A pointer to the bytes that originally pass to the typed array constructor.
- `deallocatorContext  `: A pointer to additional information to use when freeing the bytes.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray(\_:\_:\_:\_:)](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy(\_:\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer(\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset(\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.

# JSTypedArrayBytesDeallocator (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A function that deallocates bytes that pass to a typed array constructor.

## Declaration

```objectivec
typedef void (*)(void *, void *) JSTypedArrayBytesDeallocator;
```

## Parameters

- `bytes`: A pointer to the bytes that originally pass to the typed array constructor.
- `deallocatorContext  `: A pointer to additional information to use when freeing the bytes.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayType](jstypedarraytype.md): The type of a JavaScript typed array object.
