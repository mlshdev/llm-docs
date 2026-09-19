> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpdfdictionaryapplyfunction(_:_:_:)

# CGPDFDictionaryApplyFunction(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Applies a function to each entry in a dictionary.

## Declaration

```swift
func CGPDFDictionaryApplyFunction(_ dict: CGPDFDictionaryRef, _ function: CGPDFDictionaryApplierFunction, _ info: UnsafeMutableRawPointer?)
```

## Parameters

- `dict`: A PDF dictionary. If this parameter is not a valid PDF dictionary, the behavior is undefined.
- `function`: The function to apply to each entry in the dictionary.
- `info`: A pointer to contextual information to pass to the function.

<a id="Discussion"></a>

## Discussion

This function enumerates all of the entries in the dictionary, calling the function once for each. The current key, its associated value, and the contextual information are passed to the function (see also [CGPDFDictionaryApplierFunction](cgpdfdictionaryapplierfunction.md)).

# CGPDFDictionaryApplyFunction (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Applies a function to each entry in a dictionary.

## Declaration

```objectivec
extern void CGPDFDictionaryApplyFunction(CGPDFDictionaryRef dict, CGPDFDictionaryApplierFunction function, void *info);
```

## Parameters

- `dict`: A PDF dictionary. If this parameter is not a valid PDF dictionary, the behavior is undefined.
- `function`: The function to apply to each entry in the dictionary.
- `info`: A pointer to contextual information to pass to the function.

<a id="Discussion"></a>

## Discussion

This function enumerates all of the entries in the dictionary, calling the function once for each. The current key, its associated value, and the contextual information are passed to the function (see also [CGPDFDictionaryApplierFunction](cgpdfdictionaryapplierfunction.md)).
