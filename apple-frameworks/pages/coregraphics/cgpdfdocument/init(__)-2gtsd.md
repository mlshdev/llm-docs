> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/init(_:)-2gtsd](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/init(_:)-2gtsd)

# init(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a Core Graphics PDF document using data specified by a URL.

## Declaration

```swift
init?(_ url: CFURL)
```

## Parameters

- `url`: The URL address at which the PDF document data is located.

<a id="return-value"></a>

## Return Value

A new Core Graphics PDF document, or `NULL` if a document could not be created. In Objective-C, you’re responsible for releasing the object using [CGPDFDocumentRelease](../cgpdfdocumentrelease.md).

<a id="Discussion"></a>

## Discussion

Distributing individual pages of a PDF document to separate threads is not supported. If you want to use threads, consider creating a separate document for each thread and operating on a block of pages per thread.

## See Also

### Creating PDF Documents

- [init(\_:)](init%28__%29-gbq6.md): Creates a Core Graphics PDF document using a data provider.

# CGPDFDocumentCreateWithURL (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a Core Graphics PDF document using data specified by a URL.

## Declaration

```objectivec
extern CGPDFDocumentRefCGPDFDocumentCreateWithURL(CFURLRef url);
```

## Parameters

- `url`: The URL address at which the PDF document data is located.

<a id="return-value"></a>

## Return Value

A new Core Graphics PDF document, or `NULL` if a document could not be created. In Objective-C, you’re responsible for releasing the object using [CGPDFDocumentRelease](../cgpdfdocumentrelease.md).

<a id="Discussion"></a>

## Discussion

Distributing individual pages of a PDF document to separate threads is not supported. If you want to use threads, consider creating a separate document for each thread and operating on a block of pages per thread.

## See Also

### Related Documentation

- [CGContextDrawPDFDocument](../cgcontextdrawpdfdocument.md): Deprecated.

### Creating PDF Documents

- [CGPDFDocumentCreateWithProvider](init%28__%29-gbq6.md): Creates a Core Graphics PDF document using a data provider.
