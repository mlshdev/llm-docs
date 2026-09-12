> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfdocument/init(_:)-gbq6](https://developer.apple.com/documentation/coregraphics/cgpdfdocument/init(_:)-gbq6)

# init(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a Core Graphics PDF document using a data provider.

## Declaration

```swift
init?(_ provider: CGDataProvider)
```

## Parameters

- `provider`: A data provider that supplies the PDF document data.

<a id="return-value"></a>

## Return Value

A new Core Graphics PDF document, or `NULL` if a document can not be created. In Objective-C, you’re responsible for releasing the object using [CGPDFDocumentRelease](../cgpdfdocumentrelease.md).

<a id="Discussion"></a>

## Discussion

Distributing individual pages of a PDF document to separate threads is not supported. If you want to use threads, consider creating a separate document for each thread and operating on a block of pages per thread.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Creating PDF Documents

- [init(\_:)](init%28__%29-2gtsd.md): Creates a Core Graphics PDF document using data specified by a URL.

# CGPDFDocumentCreateWithProvider (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a Core Graphics PDF document using a data provider.

## Declaration

```objectivec
extern CGPDFDocumentRefCGPDFDocumentCreateWithProvider(CGDataProviderRef provider);
```

## Parameters

- `provider`: A data provider that supplies the PDF document data.

<a id="return-value"></a>

## Return Value

A new Core Graphics PDF document, or `NULL` if a document can not be created. In Objective-C, you’re responsible for releasing the object using [CGPDFDocumentRelease](../cgpdfdocumentrelease.md).

<a id="Discussion"></a>

## Discussion

Distributing individual pages of a PDF document to separate threads is not supported. If you want to use threads, consider creating a separate document for each thread and operating on a block of pages per thread.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)
- [CGContextDrawPDFDocument](../cgcontextdrawpdfdocument.md): Deprecated.

### Creating PDF Documents

- [CGPDFDocumentCreateWithURL](init%28__%29-2gtsd.md): Creates a Core Graphics PDF document using data specified by a URL.
