> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdictionarygetcount(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfdictionarygetcount(_:))

# CGPDFDictionaryGetCount(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of entries in a PDF dictionary.

## Declaration

```swift
func CGPDFDictionaryGetCount(_ dict: CGPDFDictionaryRef) -> Int
```

## Parameters

- `dict`: A PDF dictionary. If this parameter is not a valid PDF dictionary, the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns the number of entries in the dictionary.

## See Also

### Getting Data from a Dictionary

- [CGPDFDictionaryGetArray(\_:\_:\_:)](cgpdfdictionarygetarray%28______%29.md): Returns whether there is a PDF array associated with a specified key in a PDF dictionary and, if so, retrieves that array.
- [CGPDFDictionaryGetBoolean(\_:\_:\_:)](cgpdfdictionarygetboolean%28______%29.md): Returns whether there is a PDF Boolean value associated with a specified key in a PDF dictionary and, if so, retrieves the Boolean value.
- [CGPDFDictionaryGetDictionary(\_:\_:\_:)](cgpdfdictionarygetdictionary%28______%29.md): Returns whether there is another PDF dictionary associated with a specified key in a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFDictionaryGetInteger(\_:\_:\_:)](cgpdfdictionarygetinteger%28______%29.md): Returns whether there is a PDF integer associated with a specified key in a PDF dictionary and, if so, retrieves that integer.
- [CGPDFDictionaryGetName(\_:\_:\_:)](cgpdfdictionarygetname%28______%29.md): Returns whether an object with a specified key in a PDF dictionary is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFDictionaryGetNumber(\_:\_:\_:)](cgpdfdictionarygetnumber%28______%29.md): Returns whether there is a PDF number associated with a specified key in a PDF dictionary and, if so, retrieves that number.
- [CGPDFDictionaryGetObject(\_:\_:\_:)](cgpdfdictionarygetobject%28______%29.md): Returns whether there is a PDF object associated with a specified key in a PDF dictionary and, if so, retrieves that object.
- [CGPDFDictionaryGetStream(\_:\_:\_:)](cgpdfdictionarygetstream%28______%29.md): Returns whether there is a PDF stream associated with a specified key in a PDF dictionary and, if so, retrieves that stream.
- [CGPDFDictionaryGetString(\_:\_:\_:)](cgpdfdictionarygetstring%28______%29.md): Returns whether there is a PDF string associated with a specified key in a PDF dictionary and, if so, retrieves that string.

# CGPDFDictionaryGetCount (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of entries in a PDF dictionary.

## Declaration

```objectivec
extern size_t CGPDFDictionaryGetCount(CGPDFDictionaryRef dict);
```

## Parameters

- `dict`: A PDF dictionary. If this parameter is not a valid PDF dictionary, the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns the number of entries in the dictionary.

## See Also

### Getting Data from a Dictionary

- [CGPDFDictionaryGetArray](cgpdfdictionarygetarray%28______%29.md): Returns whether there is a PDF array associated with a specified key in a PDF dictionary and, if so, retrieves that array.
- [CGPDFDictionaryGetBoolean](cgpdfdictionarygetboolean%28______%29.md): Returns whether there is a PDF Boolean value associated with a specified key in a PDF dictionary and, if so, retrieves the Boolean value.
- [CGPDFDictionaryGetDictionary](cgpdfdictionarygetdictionary%28______%29.md): Returns whether there is another PDF dictionary associated with a specified key in a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFDictionaryGetInteger](cgpdfdictionarygetinteger%28______%29.md): Returns whether there is a PDF integer associated with a specified key in a PDF dictionary and, if so, retrieves that integer.
- [CGPDFDictionaryGetName](cgpdfdictionarygetname%28______%29.md): Returns whether an object with a specified key in a PDF dictionary is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFDictionaryGetNumber](cgpdfdictionarygetnumber%28______%29.md): Returns whether there is a PDF number associated with a specified key in a PDF dictionary and, if so, retrieves that number.
- [CGPDFDictionaryGetObject](cgpdfdictionarygetobject%28______%29.md): Returns whether there is a PDF object associated with a specified key in a PDF dictionary and, if so, retrieves that object.
- [CGPDFDictionaryGetStream](cgpdfdictionarygetstream%28______%29.md): Returns whether there is a PDF stream associated with a specified key in a PDF dictionary and, if so, retrieves that stream.
- [CGPDFDictionaryGetString](cgpdfdictionarygetstring%28______%29.md): Returns whether there is a PDF string associated with a specified key in a PDF dictionary and, if so, retrieves that string.
