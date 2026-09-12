> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdictionarygetboolean(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfdictionarygetboolean(_:_:_:))

# CGPDFDictionaryGetBoolean(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether there is a PDF Boolean value associated with a specified key in a PDF dictionary and, if so, retrieves the Boolean value.

## Declaration

```swift
func CGPDFDictionaryGetBoolean(_ dict: CGPDFDictionaryRef, _ key: UnsafePointer<CChar>, _ value: UnsafeMutablePointer<CGPDFBoolean>?) -> Bool
```

## Parameters

- `dict`: A PDF dictionary. If this parameter is not a valid PDF dictionary, the behavior is undefined.
- `key`: The key for the value to retrieve.
- `value`: On input, a pointer to a PDF Boolean value. If the value associated with the specified key is a PDF Boolean value, then on return contains that value; otherwise the value is unspecified.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if there is a PDF Boolean value associated with the specified key; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Data from a Dictionary

- [CGPDFDictionaryGetArray(\_:\_:\_:)](cgpdfdictionarygetarray%28______%29.md): Returns whether there is a PDF array associated with a specified key in a PDF dictionary and, if so, retrieves that array.
- [CGPDFDictionaryGetCount(\_:)](cgpdfdictionarygetcount%28__%29.md): Returns the number of entries in a PDF dictionary.
- [CGPDFDictionaryGetDictionary(\_:\_:\_:)](cgpdfdictionarygetdictionary%28______%29.md): Returns whether there is another PDF dictionary associated with a specified key in a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFDictionaryGetInteger(\_:\_:\_:)](cgpdfdictionarygetinteger%28______%29.md): Returns whether there is a PDF integer associated with a specified key in a PDF dictionary and, if so, retrieves that integer.
- [CGPDFDictionaryGetName(\_:\_:\_:)](cgpdfdictionarygetname%28______%29.md): Returns whether an object with a specified key in a PDF dictionary is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFDictionaryGetNumber(\_:\_:\_:)](cgpdfdictionarygetnumber%28______%29.md): Returns whether there is a PDF number associated with a specified key in a PDF dictionary and, if so, retrieves that number.
- [CGPDFDictionaryGetObject(\_:\_:\_:)](cgpdfdictionarygetobject%28______%29.md): Returns whether there is a PDF object associated with a specified key in a PDF dictionary and, if so, retrieves that object.
- [CGPDFDictionaryGetStream(\_:\_:\_:)](cgpdfdictionarygetstream%28______%29.md): Returns whether there is a PDF stream associated with a specified key in a PDF dictionary and, if so, retrieves that stream.
- [CGPDFDictionaryGetString(\_:\_:\_:)](cgpdfdictionarygetstring%28______%29.md): Returns whether there is a PDF string associated with a specified key in a PDF dictionary and, if so, retrieves that string.

# CGPDFDictionaryGetBoolean (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether there is a PDF Boolean value associated with a specified key in a PDF dictionary and, if so, retrieves the Boolean value.

## Declaration

```objectivec
extern bool CGPDFDictionaryGetBoolean(CGPDFDictionaryRef dict, const char *key, CGPDFBoolean *value);
```

## Parameters

- `dict`: A PDF dictionary. If this parameter is not a valid PDF dictionary, the behavior is undefined.
- `key`: The key for the value to retrieve.
- `value`: On input, a pointer to a PDF Boolean value. If the value associated with the specified key is a PDF Boolean value, then on return contains that value; otherwise the value is unspecified.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if there is a PDF Boolean value associated with the specified key; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Data from a Dictionary

- [CGPDFDictionaryGetArray](cgpdfdictionarygetarray%28______%29.md): Returns whether there is a PDF array associated with a specified key in a PDF dictionary and, if so, retrieves that array.
- [CGPDFDictionaryGetCount](cgpdfdictionarygetcount%28__%29.md): Returns the number of entries in a PDF dictionary.
- [CGPDFDictionaryGetDictionary](cgpdfdictionarygetdictionary%28______%29.md): Returns whether there is another PDF dictionary associated with a specified key in a PDF dictionary and, if so, retrieves that dictionary.
- [CGPDFDictionaryGetInteger](cgpdfdictionarygetinteger%28______%29.md): Returns whether there is a PDF integer associated with a specified key in a PDF dictionary and, if so, retrieves that integer.
- [CGPDFDictionaryGetName](cgpdfdictionarygetname%28______%29.md): Returns whether an object with a specified key in a PDF dictionary is a PDF name reference (represented as a constant C string) and, if so, retrieves that name.
- [CGPDFDictionaryGetNumber](cgpdfdictionarygetnumber%28______%29.md): Returns whether there is a PDF number associated with a specified key in a PDF dictionary and, if so, retrieves that number.
- [CGPDFDictionaryGetObject](cgpdfdictionarygetobject%28______%29.md): Returns whether there is a PDF object associated with a specified key in a PDF dictionary and, if so, retrieves that object.
- [CGPDFDictionaryGetStream](cgpdfdictionarygetstream%28______%29.md): Returns whether there is a PDF stream associated with a specified key in a PDF dictionary and, if so, retrieves that stream.
- [CGPDFDictionaryGetString](cgpdfdictionarygetstring%28______%29.md): Returns whether there is a PDF string associated with a specified key in a PDF dictionary and, if so, retrieves that string.
