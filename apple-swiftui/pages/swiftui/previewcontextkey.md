> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewcontextkey](https://developer.apple.com/documentation/swiftui/previewcontextkey)

# PreviewContextKey

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.0+ (deprecated in 27.0)

A key type for a preview context.

> Use [Preview(\_:body:)](preview%28__body_%29.md) with a WidgetKit timeline provider or entries instead.

## Declaration

```swift
protocol PreviewContextKey
```

<a id="overview"></a>

## Overview

The default value is `nil`.

## Topics

### Setting a default

- [defaultValue](previewcontextkey/defaultvalue.md): Deprecated. The default value of the key.
- [Value](previewcontextkey/value.md): Deprecated. The type of the value returned by the key.

## See Also

### Setting a context

- [previewContext(\_:)](view/previewcontext%28__%29.md): Deprecated. Declares a context for the preview.
- [PreviewContext](previewcontext.md): Deprecated. A context type for use with a preview.
