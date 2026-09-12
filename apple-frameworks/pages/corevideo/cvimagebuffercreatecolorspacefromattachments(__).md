> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebuffercreatecolorspacefromattachments(_:)](https://developer.apple.com/documentation/corevideo/cvimagebuffercreatecolorspacefromattachments(_:))

# CVImageBufferCreateColorSpaceFromAttachments(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Attempts to create a Core Graphics color space from the image buffer’s attachments that you specify.

## Declaration

```swift
func CVImageBufferCreateColorSpaceFromAttachments(_ attachments: CFDictionary) -> Unmanaged<CGColorSpace>?
```

## Parameters

- `attachments`: The dictionary of attachments for an image buffer, which you can obtain by calling [CVBufferCopyAttachments(\_:\_:)](cvbuffercopyattachments%28____%29.md) on the image buffer.

<a id="return-value"></a>

## Return Value

A [CGColorSpace](../coregraphics/cgcolorspace.md) object that represents the color space of the image buffer, or [nil](../objectivec/nil-227m0.md) if the dictionary doesn’t contain the information required to create a [CGColorSpace](../coregraphics/cgcolorspace.md) instance.

<a id="Discussion"></a>

## Discussion

To generate a [CGColorSpace](../coregraphics/cgcolorspace.md) instance, the attachments dictionary needs to include values for either:

1. [kCVImageBufferICCProfileKey](kcvimagebuffericcprofilekey.md)
2. [kCVImageBufferColorPrimariesKey](kcvimagebuffercolorprimarieskey.md), [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md), [kCVImageBufferYCbCrMatrixKey](kcvimagebufferycbcrmatrixkey.md), and possibly [kCVImageBufferGammaLevelKey](kcvimagebuffergammalevelkey.md)

Use [CGColorSpaceRelease](../coregraphics/cgcolorspacerelease.md) to release the color space when you’re done with it.

# CVImageBufferCreateColorSpaceFromAttachments (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Attempts to create a Core Graphics color space from the image buffer’s attachments that you specify.

## Declaration

```objectivec
extern CGColorSpaceRefCVImageBufferCreateColorSpaceFromAttachments(CFDictionaryRef attachments);
```

## Parameters

- `attachments`: The dictionary of attachments for an image buffer, which you can obtain by calling [CVBufferCopyAttachments](cvbuffercopyattachments%28____%29.md) on the image buffer.

<a id="return-value"></a>

## Return Value

A [CGColorSpaceRef](../coregraphics/cgcolorspace.md) object that represents the color space of the image buffer, or [nil](../objectivec/nil-227m0.md) if the dictionary doesn’t contain the information required to create a [CGColorSpaceRef](../coregraphics/cgcolorspace.md) instance.

<a id="Discussion"></a>

## Discussion

To generate a [CGColorSpaceRef](../coregraphics/cgcolorspace.md) instance, the attachments dictionary needs to include values for either:

1. [kCVImageBufferICCProfileKey](kcvimagebuffericcprofilekey.md)
2. [kCVImageBufferColorPrimariesKey](kcvimagebuffercolorprimarieskey.md), [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md), [kCVImageBufferYCbCrMatrixKey](kcvimagebufferycbcrmatrixkey.md), and possibly [kCVImageBufferGammaLevelKey](kcvimagebuffergammalevelkey.md)

Use [CGColorSpaceRelease](../coregraphics/cgcolorspacerelease.md) to release the color space when you’re done with it.
