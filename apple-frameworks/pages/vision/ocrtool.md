> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/ocrtool](https://developer.apple.com/documentation/vision/ocrtool)

# OCRTool

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A tool that recognizes text in an image.

## Declaration

```swift
struct OCRTool
```

<a id="overview"></a>

## Overview

The tool returns a string containing all recognized text from the image. To enable this tool, configure your `LanguageModelSession` with an instance of `OCRTool`.

```swift
let ocrTool = OCRTool()
let session = LanguageModelSession(tools: [ocrTool])
```

You can override the default name and description to customize how the model identifies and uses the tool.

```swift
let customTool = OCRTool(
    name: "extractText",
    description: "Extract text from documents"
)
```

> **Note**

>  [OCRTool](ocrtool.md) isn’t available in Simulator.

## Topics

### Creating a tool

- [init(name:description:)](ocrtool/init%28name_description_%29.md): Creates a tool for recognizing text in images.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Tool](../foundationmodels/tool.md)

## See Also

### Foundation Models integration

- [BarcodeReaderTool](barcodereadertool.md): A tool that scans machine-readable codes in an image.
