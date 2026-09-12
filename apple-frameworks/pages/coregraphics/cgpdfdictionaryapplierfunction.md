> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdictionaryapplierfunction](https://developer.apple.com/documentation/coregraphics/cgpdfdictionaryapplierfunction)

# CGPDFDictionaryApplierFunction (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom processing on a key-value pair from a PDF dictionary, using optional contextual information.

## Declaration

```swift
typealias CGPDFDictionaryApplierFunction = (UnsafePointer<CChar>, CGPDFObjectRef, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `key`: The current key in the dictionary.
- `object`: The value in the dictionary associated with the key.
- `info`: The contextual information that your provided in the `info` parameter in [CGPDFDictionaryApplyFunction(\_:\_:\_:)](cgpdfdictionaryapplyfunction%28______%29.md).

<a id="Discussion"></a>

## Discussion

[CGPDFDictionaryApplierFunction](cgpdfdictionaryapplierfunction.md) defines the callback for [CGPDFDictionaryApplyFunction(\_:\_:\_:)](cgpdfdictionaryapplyfunction%28______%29.md), that enumerates all of the entries in the dictionary, calling your custom applier function once for each entry. The current key, its associated value, and the contextual information are passed to your applier function using the `key`, `value`, and `info` parameters respectively.

# CGPDFDictionaryApplierFunction (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom processing on a key-value pair from a PDF dictionary, using optional contextual information.

## Declaration

```objectivec
typedef void (*)(const char *, struct CGPDFObject *, void *) CGPDFDictionaryApplierFunction;
```

## Parameters

- `key`: The current key in the dictionary.
- `object`: The value in the dictionary associated with the key.
- `info`: The contextual information that your provided in the `info` parameter in [CGPDFDictionaryApplyFunction](cgpdfdictionaryapplyfunction%28______%29.md).

<a id="Discussion"></a>

## Discussion

[CGPDFDictionaryApplierFunction](cgpdfdictionaryapplierfunction.md) defines the callback for [CGPDFDictionaryApplyFunction](cgpdfdictionaryapplyfunction%28______%29.md), that enumerates all of the entries in the dictionary, calling your custom applier function once for each entry. The current key, its associated value, and the contextual information are passed to your applier function using the `key`, `value`, and `info` parameters respectively.
