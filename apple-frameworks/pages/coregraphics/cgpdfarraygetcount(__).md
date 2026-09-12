> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfarraygetcount(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfarraygetcount(_:))

# CGPDFArrayGetCount(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of items in a PDF array.

## Declaration

```swift
func CGPDFArrayGetCount(_ array: CGPDFArrayRef) -> Int
```

## Parameters

- `array`: A PDF array. If this parameter is not a valid PDF array, the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns the number of items in the array.

## See Also

### Getting Data from a PDF Array

- [CGPDFArrayGetArray(\_:\_:\_:)](cgpdfarraygetarray%28______%29.md): Returns whether an object at a given index in a PDF array is another PDF array and, if so, retrieves that array.
- [CGPDFArrayGetBoolean(\_:\_:\_:)](cgpdfarraygetboolean%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF Boolean and, if so, retrieves that Boolean.
- [CGPDFArrayGetDictionary(\_:\_:\_:)](cgpdfarraygetdictionary%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFArrayGetInteger(\_:\_:\_:)](cgpdfarraygetinteger%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF integer and, if so, retrieves that object.
- [CGPDFArrayGetName(\_:\_:\_:)](cgpdfarraygetname%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFArrayGetNull(\_:\_:)](cgpdfarraygetnull%28____%29.md): Returns whether an object at a given index in a Quartz PDF array is a PDF null.
- [CGPDFArrayGetNumber(\_:\_:\_:)](cgpdfarraygetnumber%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF number and, if so, retrieves that object.
- [CGPDFArrayGetObject(\_:\_:\_:)](cgpdfarraygetobject%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF object and, if so, retrieves that object.
- [CGPDFArrayGetStream(\_:\_:\_:)](cgpdfarraygetstream%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF stream and, if so, retrieves that stream.
- [CGPDFArrayGetString(\_:\_:\_:)](cgpdfarraygetstring%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF string and, if so, retrieves that string.

# CGPDFArrayGetCount (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of items in a PDF array.

## Declaration

```objectivec
extern size_t CGPDFArrayGetCount(CGPDFArrayRef array);
```

## Parameters

- `array`: A PDF array. If this parameter is not a valid PDF array, the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns the number of items in the array.

## See Also

### Getting Data from a PDF Array

- [CGPDFArrayGetArray](cgpdfarraygetarray%28______%29.md): Returns whether an object at a given index in a PDF array is another PDF array and, if so, retrieves that array.
- [CGPDFArrayGetBoolean](cgpdfarraygetboolean%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF Boolean and, if so, retrieves that Boolean.
- [CGPDFArrayGetDictionary](cgpdfarraygetdictionary%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFArrayGetInteger](cgpdfarraygetinteger%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF integer and, if so, retrieves that object.
- [CGPDFArrayGetName](cgpdfarraygetname%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFArrayGetNull](cgpdfarraygetnull%28____%29.md): Returns whether an object at a given index in a Quartz PDF array is a PDF null.
- [CGPDFArrayGetNumber](cgpdfarraygetnumber%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF number and, if so, retrieves that object.
- [CGPDFArrayGetObject](cgpdfarraygetobject%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF object and, if so, retrieves that object.
- [CGPDFArrayGetStream](cgpdfarraygetstream%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF stream and, if so, retrieves that stream.
- [CGPDFArrayGetString](cgpdfarraygetstring%28______%29.md): Returns whether an object at a given index in a PDF array is a PDF string and, if so, retrieves that string.
