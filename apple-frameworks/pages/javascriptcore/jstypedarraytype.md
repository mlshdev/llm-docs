> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jstypedarraytype](https://developer.apple.com/documentation/javascriptcore/jstypedarraytype)

# JSTypedArrayType (Swift)

**Framework:** JavaScriptCore  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+

The type of a JavaScript typed array object.

## Declaration

```swift
struct JSTypedArrayType
```

## Topics

### Constants

- [kJSTypedArrayTypeNone](kjstypedarraytypenone.md): Not a typed array.
- [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md): An array buffer type.
- [kJSTypedArrayTypeInt8Array](kjstypedarraytypeint8array.md): An 8-bit integer array type.
- [kJSTypedArrayTypeInt16Array](kjstypedarraytypeint16array.md): A 16-bit integer array type.
- [kJSTypedArrayTypeInt32Array](kjstypedarraytypeint32array.md): A 32-bit integer array type.
- [kJSTypedArrayTypeBigInt64Array](kjstypedarraytypebigint64array.md)
- [kJSTypedArrayTypeUint8Array](kjstypedarraytypeuint8array.md): An 8-bit unsigned integer array type.
- [kJSTypedArrayTypeUint8ClampedArray](kjstypedarraytypeuint8clampedarray.md): An 8-bit unsigned integer clamped array type.
- [kJSTypedArrayTypeUint16Array](kjstypedarraytypeuint16array.md): A 16-bit unsigned integer array type.
- [kJSTypedArrayTypeUint32Array](kjstypedarraytypeuint32array.md): A 32-bit unsigned integer array type.
- [kJSTypedArrayTypeBigUint64Array](kjstypedarraytypebiguint64array.md)
- [kJSTypedArrayTypeFloat32Array](kjstypedarraytypefloat32array.md): A 32-bit floating point array type.
- [kJSTypedArrayTypeFloat64Array](kjstypedarraytypefloat64array.md): A 64-bit floating point array type.

### Initializers

- [init(\_:)](jstypedarraytype/init%28__%29.md): Creates a typed array.
- [init(rawValue:)](jstypedarraytype/init%28rawvalue_%29.md): Creates a typed array with the specified raw value.
- [rawValue](jstypedarraytype/rawvalue.md): The raw value that represents the typed array’s type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray(\_:\_:\_:\_:)](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy(\_:\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer(\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset(\_:\_:\_:\_:\_:\_:)](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.

# JSTypedArrayType (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The type of a JavaScript typed array object.

## Declaration

```objectivec
typedef enum { ... } JSTypedArrayType;
```

## Topics

### Constants

- [kJSTypedArrayTypeNone](kjstypedarraytypenone.md): Not a typed array.
- [kJSTypedArrayTypeArrayBuffer](kjstypedarraytypearraybuffer.md): An array buffer type.
- [kJSTypedArrayTypeInt8Array](kjstypedarraytypeint8array.md): An 8-bit integer array type.
- [kJSTypedArrayTypeInt16Array](kjstypedarraytypeint16array.md): A 16-bit integer array type.
- [kJSTypedArrayTypeInt32Array](kjstypedarraytypeint32array.md): A 32-bit integer array type.
- [kJSTypedArrayTypeBigInt64Array](kjstypedarraytypebigint64array.md)
- [kJSTypedArrayTypeUint8Array](kjstypedarraytypeuint8array.md): An 8-bit unsigned integer array type.
- [kJSTypedArrayTypeUint8ClampedArray](kjstypedarraytypeuint8clampedarray.md): An 8-bit unsigned integer clamped array type.
- [kJSTypedArrayTypeUint16Array](kjstypedarraytypeuint16array.md): A 16-bit unsigned integer array type.
- [kJSTypedArrayTypeUint32Array](kjstypedarraytypeuint32array.md): A 32-bit unsigned integer array type.
- [kJSTypedArrayTypeBigUint64Array](kjstypedarraytypebiguint64array.md)
- [kJSTypedArrayTypeFloat32Array](kjstypedarraytypefloat32array.md): A 32-bit floating point array type.
- [kJSTypedArrayTypeFloat64Array](kjstypedarraytypefloat64array.md): A 64-bit floating point array type.

## See Also

### Creating a Typed Array

- [JSObjectMakeTypedArray](jsobjectmaketypedarray%28________%29.md): Creates a JavaScript typed array object with the specified number of elements.
- [JSObjectMakeTypedArrayWithBytesNoCopy](jsobjectmaketypedarraywithbytesnocopy%28______________%29.md): Creates a JavaScript typed array object from an existing pointer.
- [JSObjectMakeTypedArrayWithArrayBuffer](jsobjectmaketypedarraywitharraybuffer%28________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object.
- [JSObjectMakeTypedArrayWithArrayBufferAndOffset](jsobjectmaketypedarraywitharraybufferandoffset%28____________%29.md): Creates a JavaScript typed array object from an existing JavaScript array buffer object with the specified offset and length.
- [JSTypedArrayBytesDeallocator](jstypedarraybytesdeallocator.md): A function that deallocates bytes that pass to a typed array constructor.
