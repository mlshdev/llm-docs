> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfobjectgetvalue(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfobjectgetvalue(_:_:_:))

# CGPDFObjectGetValue(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether an object is of a given type and if it is, retrieves its value.

## Declaration

```swift
func CGPDFObjectGetValue(_ object: CGPDFObjectRef, _ type: CGPDFObjectType, _ value: UnsafeMutableRawPointer?) -> Bool
```

## Parameters

- `object`: A PDF object.
- `type`: A PDF object type.
- `value`: If the `object` parameter is a PDF object of the specified type, then on return contains that object, otherwise the value is unspecified.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the specified object is a PDF object of the specified type, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The function gets the value of the `object` parameter. If the type of `object` is equal to the type specified, then:

- If the `value` parameter is not a null pointer, then the value of `object` is copied to `value`, and the function returns [true](https://developer.apple.com/documentation/swift/true).
- If the `value` parameter is a null pointer, then the function simply returns [true](https://developer.apple.com/documentation/swift/true). This allows you to test whether `object` is of the type specified.

If the type of `object` is [CGPDFObjectType.integer](cgpdfobjecttype/integer.md) and `type` is equal to [CGPDFObjectType.real](cgpdfobjecttype/real.md), then the value of `object` is converted to floating point, the result copied to `value`, and the function returns [true](https://developer.apple.com/documentation/swift/true). If none of the preceding conditions is met, returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Object Types and Values

- [CGPDFObjectGetType(\_:)](cgpdfobjectgettype%28__%29.md): Returns the PDF type identifier of an object.

# CGPDFObjectGetValue (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether an object is of a given type and if it is, retrieves its value.

## Declaration

```objectivec
extern bool CGPDFObjectGetValue(CGPDFObjectRef object, CGPDFObjectType type, void *value);
```

## Parameters

- `object`: A PDF object.
- `type`: A PDF object type.
- `value`: If the `object` parameter is a PDF object of the specified type, then on return contains that object, otherwise the value is unspecified.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the specified object is a PDF object of the specified type, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The function gets the value of the `object` parameter. If the type of `object` is equal to the type specified, then:

- If the `value` parameter is not a null pointer, then the value of `object` is copied to `value`, and the function returns [true](https://developer.apple.com/documentation/swift/true).
- If the `value` parameter is a null pointer, then the function simply returns [true](https://developer.apple.com/documentation/swift/true). This allows you to test whether `object` is of the type specified.

If the type of `object` is [kCGPDFObjectTypeInteger](cgpdfobjecttype/integer.md) and `type` is equal to [kCGPDFObjectTypeReal](cgpdfobjecttype/real.md), then the value of `object` is converted to floating point, the result copied to `value`, and the function returns [true](https://developer.apple.com/documentation/swift/true). If none of the preceding conditions is met, returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Object Types and Values

- [CGPDFObjectGetType](cgpdfobjectgettype%28__%29.md): Returns the PDF type identifier of an object.
