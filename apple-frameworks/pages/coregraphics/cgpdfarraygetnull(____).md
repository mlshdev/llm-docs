> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfarraygetnull(_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfarraygetnull(_:_:))

# CGPDFArrayGetNull(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether an object at a given index in a Quartz PDF array is a PDF null.

## Declaration

```swift
func CGPDFArrayGetNull(_ array: CGPDFArrayRef, _ index: Int) -> Bool
```

## Parameters

- `array`: A PDF array. If this parameter is not a valid PDF array, the behavior is undefined.
- `index`: The index of the value to retrieve. If the index is outside the index space of the array (`0` to `N-1`, where `N` is the count of the array), the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if there is a PDF null at the specified index, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Data from a PDF Array

- [CGPDFArrayGetArray(\_:\_:\_:)](cgpdfarraygetarray%28______%29.md): Returns whether an object at a given index in a PDF array is another PDF array and, if so, retrieves that array.
- [CGPDFArrayGetBoolean(\_:\_:\_:)](cgpdfarraygetboolean%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF Boolean and, if so, retrieves that Boolean.
- [CGPDFArrayGetCount(\_:)](cgpdfarraygetcount%28__%29.md): Returns the number of items in a PDF array.
- [CGPDFArrayGetDictionary(\_:\_:\_:)](cgpdfarraygetdictionary%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFArrayGetInteger(\_:\_:\_:)](cgpdfarraygetinteger%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF integer and, if so, retrieves that object.
- [CGPDFArrayGetName(\_:\_:\_:)](cgpdfarraygetname%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFArrayGetNumber(\_:\_:\_:)](cgpdfarraygetnumber%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF number and, if so, retrieves that object.
- [CGPDFArrayGetObject(\_:\_:\_:)](cgpdfarraygetobject%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF object and, if so, retrieves that object.
- [CGPDFArrayGetStream(\_:\_:\_:)](cgpdfarraygetstream%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF stream and, if so, retrieves that stream.
- [CGPDFArrayGetString(\_:\_:\_:)](cgpdfarraygetstring%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF string and, if so, retrieves that string.

# CGPDFArrayGetNull (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether an object at a given index in a Quartz PDF array is a PDF null.

## Declaration

```objectivec
extern bool CGPDFArrayGetNull(CGPDFArrayRef array, size_t index);
```

## Parameters

- `array`: A PDF array. If this parameter is not a valid PDF array, the behavior is undefined.
- `index`: The index of the value to retrieve. If the index is outside the index space of the array (`0` to `N-1`, where `N` is the count of the array), the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if there is a PDF null at the specified index, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Data from a PDF Array

- [CGPDFArrayGetArray](cgpdfarraygetarray%28______%29.md): Returns whether an object at a given index in a PDF array is another PDF array and, if so, retrieves that array.
- [CGPDFArrayGetBoolean](cgpdfarraygetboolean%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF Boolean and, if so, retrieves that Boolean.
- [CGPDFArrayGetCount](cgpdfarraygetcount%28__%29.md): Returns the number of items in a PDF array.
- [CGPDFArrayGetDictionary](cgpdfarraygetdictionary%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFArrayGetInteger](cgpdfarraygetinteger%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF integer and, if so, retrieves that object.
- [CGPDFArrayGetName](cgpdfarraygetname%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFArrayGetNumber](cgpdfarraygetnumber%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF number and, if so, retrieves that object.
- [CGPDFArrayGetObject](cgpdfarraygetobject%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF object and, if so, retrieves that object.
- [CGPDFArrayGetStream](cgpdfarraygetstream%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF stream and, if so, retrieves that stream.
- [CGPDFArrayGetString](cgpdfarraygetstring%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF string and, if so, retrieves that string.
