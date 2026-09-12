> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/init(consumer:mediabox:_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/init(consumer:mediabox:_:))

# init(consumer:mediaBox:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF graphics context.

## Declaration

```swift
init?(consumer: CGDataConsumer, mediaBox: UnsafePointer<CGRect>?, _ auxiliaryInfo: CFDictionary?)
```

## Parameters

- `consumer`: The data consumer to receive the PDF output data.
- `mediaBox`: A pointer to a rectangle that defines the size and location of the PDF page, or `NULL`. The origin of the rectangle should typically be `(0,0)`. Core Graphics uses this rectangle as the default bounds of the page’s media box. If you pass `NULL`, Core Graphics uses a default page size of 8.5 by 11 inches (612 by 792 points).
- `auxiliaryInfo`: A dictionary that specifies any additional information to be used by the PDF context when generating the PDF file, or `NULL`. The dictionary is retained by the new context, so on return you may safely release it. See [Auxiliary Dictionary Keys](../auxiliary-dictionary-keys.md) for keys you can include in the dictionary.

<a id="return-value"></a>

## Return Value

A new PDF context, or `NULL` if the context cannot be created. In Objective-C, you’re responsible for releasing this object using [CGContextRelease](../cgcontextrelease.md).

<a id="Discussion"></a>

## Discussion

This function creates a PDF drawing environment to your specifications. When you draw into the new context, Core Graphics renders your drawing as a sequence of PDF drawing commands that are passed to the data consumer object.

## See Also

### Creating PDF Graphics Contexts

- [init(\_:mediaBox:\_:)](init%28__mediabox___%29.md): Creates a URL-based PDF graphics context.
- [Auxiliary Dictionary Keys](../auxiliary-dictionary-keys.md): Keys for the auxiliary info dictionary you specify when creating a PDF context.

# CGPDFContextCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF graphics context.

## Declaration

```objectivec
extern CGContextRefCGPDFContextCreate(CGDataConsumerRef consumer, const CGRect *mediaBox, CFDictionaryRef auxiliaryInfo);
```

## Parameters

- `consumer`: The data consumer to receive the PDF output data.
- `mediaBox`: A pointer to a rectangle that defines the size and location of the PDF page, or `NULL`. The origin of the rectangle should typically be `(0,0)`. Core Graphics uses this rectangle as the default bounds of the page’s media box. If you pass `NULL`, Core Graphics uses a default page size of 8.5 by 11 inches (612 by 792 points).
- `auxiliaryInfo`: A dictionary that specifies any additional information to be used by the PDF context when generating the PDF file, or `NULL`. The dictionary is retained by the new context, so on return you may safely release it. See [Auxiliary Dictionary Keys](../auxiliary-dictionary-keys.md) for keys you can include in the dictionary.

<a id="return-value"></a>

## Return Value

A new PDF context, or `NULL` if the context cannot be created. In Objective-C, you’re responsible for releasing this object using [CGContextRelease](../cgcontextrelease.md).

<a id="Discussion"></a>

## Discussion

This function creates a PDF drawing environment to your specifications. When you draw into the new context, Core Graphics renders your drawing as a sequence of PDF drawing commands that are passed to the data consumer object.

## See Also

### Creating PDF Graphics Contexts

- [CGPDFContextCreateWithURL](init%28__mediabox___%29.md): Creates a URL-based PDF graphics context.
- [Auxiliary Dictionary Keys](../auxiliary-dictionary-keys.md): Keys for the auxiliary info dictionary you specify when creating a PDF context.
