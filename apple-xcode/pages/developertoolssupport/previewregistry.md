> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewregistry](https://developer.apple.com/documentation/developertoolssupport/previewregistry)

# PreviewRegistry

**Framework:** DeveloperToolsSupport  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A protocol that the system uses to locate previews at runtime.

## Declaration

```swift
protocol PreviewRegistry
```

<a id="overview"></a>

## Overview

Preview macros make use of this protocol on your behalf. Don’t use it directly. Instead, use one of the preview macros, like [Preview(\_:body:)](https://developer.apple.com/documentation/swiftui/preview%28_:body:%29).

> **Important**

> If you define a preview registry directly, the behavior is undefined.

## Topics

### Making a preview

- [makePreview()](previewregistry/makepreview%28%29.md)
- [preview](previewregistry/preview.md): Deprecated.
- [column](previewregistry/column.md)
- [fileID](previewregistry/fileid.md)
- [line](previewregistry/line.md)

### Getting errors

- [PreviewUnavailable](previewunavailable.md): An error that the system throws when a preview is unavailable at runtime.

## See Also

### Preview definition

- [Preview](preview.md): A base type that preview macros use to create previews.
- [PreviewLayout](previewlayout.md): A size constraint for a preview.
- [PreviewTrait](previewtrait.md): Customizations that you can apply to a preview.
