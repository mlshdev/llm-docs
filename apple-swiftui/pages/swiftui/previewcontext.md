> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewcontext](https://developer.apple.com/documentation/swiftui/previewcontext)

# PreviewContext

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.0+ (deprecated in 27.0)

A context type for use with a preview.

> Use [Preview(\_:body:)](preview%28__body_%29.md) with a WidgetKit timeline provider or entries instead.

## Declaration

```swift
protocol PreviewContext
```

## Topics

### Accessing a preview context

- [subscript(\_:)](previewcontext/subscript%28__%29.md): Deprecated. Returns the context’s value for a key, or a the key’s default value if the context doesn’t define a value for the key.

## See Also

### Setting a context

- [previewContext(\_:)](view/previewcontext%28__%29.md): Deprecated. Declares a context for the preview.
- [PreviewContextKey](previewcontextkey.md): Deprecated. A key type for a preview context.
