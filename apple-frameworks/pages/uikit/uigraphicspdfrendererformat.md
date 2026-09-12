> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrendererformat](https://developer.apple.com/documentation/uikit/uigraphicspdfrendererformat)

# UIGraphicsPDFRendererFormat (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A set of drawing attributes that represents the configuration of a PDF renderer context.

## Declaration

```swift
class UIGraphicsPDFRendererFormat
```

<a id="overview"></a>

## Overview

Use this subclass of [UIGraphicsRendererFormat](uigraphicsrendererformat.md) to provide context configuration parameters to a [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md).

Create an instance and then add PDF configuration parameters to the [documentInfo](uigraphicspdfrendererformat/documentinfo.md) dictionary.

The following code demonstrates how you can use a PDF renderer format object to specify the author of the PDFs created by a PDF renderer.

**Swift**

```swift
let format = UIGraphicsPDFRendererFormat()
format.documentInfo = [ kCGPDFContextAuthor as String : "Kate Bell" ]
let renderer =
  UIGraphicsPDFRenderer(bounds: CGRect(x: 0, y: 0, width: 500, height: 300),
                        format: format)
```

**Objective-C**

```objc
UIGraphicsPDFRendererFormat *format = [[UIGraphicsPDFRendererFormat alloc] init];
format.documentInfo = @{ (NSString *)kCGPDFContextAuthor : @"Kate Bell" };
UIGraphicsPDFRenderer *renderer =
    [[UIGraphicsPDFRenderer alloc] initWithBounds:CGRectMake(0, 0, 500, 300)
                                           format:format];
```

## Topics

### Getting the PDF document info

- [documentInfo](uigraphicspdfrendererformat/documentinfo.md): A dictionary that specifies additional information to be associated with the PDFs created by the PDF renderer.

## Relationships

### Inherits From

- [UIGraphicsRendererFormat](uigraphicsrendererformat.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.

# UIGraphicsPDFRendererFormat (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A set of drawing attributes that represents the configuration of a PDF renderer context.

## Declaration

```objectivec
@interface UIGraphicsPDFRendererFormat : UIGraphicsRendererFormat
```

<a id="overview"></a>

## Overview

Use this subclass of [UIGraphicsRendererFormat](uigraphicsrendererformat.md) to provide context configuration parameters to a [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md).

Create an instance and then add PDF configuration parameters to the [documentInfo](uigraphicspdfrendererformat/documentinfo.md) dictionary.

The following code demonstrates how you can use a PDF renderer format object to specify the author of the PDFs created by a PDF renderer.

**Swift**

```swift
let format = UIGraphicsPDFRendererFormat()
format.documentInfo = [ kCGPDFContextAuthor as String : "Kate Bell" ]
let renderer =
  UIGraphicsPDFRenderer(bounds: CGRect(x: 0, y: 0, width: 500, height: 300),
                        format: format)
```

**Objective-C**

```objc
UIGraphicsPDFRendererFormat *format = [[UIGraphicsPDFRendererFormat alloc] init];
format.documentInfo = @{ (NSString *)kCGPDFContextAuthor : @"Kate Bell" };
UIGraphicsPDFRenderer *renderer =
    [[UIGraphicsPDFRenderer alloc] initWithBounds:CGRectMake(0, 0, 500, 300)
                                           format:format];
```

## Topics

### Getting the PDF document info

- [documentInfo](uigraphicspdfrendererformat/documentinfo.md): A dictionary that specifies additional information to be associated with the PDFs created by the PDF renderer.

## Relationships

### Inherits From

- [UIGraphicsRendererFormat](uigraphicsrendererformat.md)

## See Also

### Graphics contexts

- [UIGraphicsRenderer](uigraphicsrenderer.md): An abstract base class for creating graphics renderers.
- [UIGraphicsRendererContext](uigraphicsrenderercontext.md): The base class for the drawing environments for graphics renderers.
- [UIGraphicsRendererFormat](uigraphicsrendererformat.md): A set of drawing attributes that represents the configuration of a graphics renderer context.
- [UIGraphicsImageRenderer](uigraphicsimagerenderer.md): A graphics renderer for creating Core Graphics-backed images.
- [UIGraphicsImageRendererContext](uigraphicsimagerenderercontext.md): The drawing environment for an image renderer.
- [UIGraphicsImageRendererFormat](uigraphicsimagerendererformat.md): A set of drawing attributes that represents the configuration of an image renderer context.
- [UIGraphicsPDFRenderer](uigraphicspdfrenderer.md): A graphics renderer for creating PDFs.
- [UIGraphicsPDFRendererContext](uigraphicspdfrenderercontext.md): The drawing environment for a PDF renderer.
