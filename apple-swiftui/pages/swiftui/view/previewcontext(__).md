> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/previewcontext(_:)](https://developer.apple.com/documentation/swiftui/view/previewcontext(_:))

# previewContext(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.0+ (deprecated in 27.0)

Declares a context for the preview.

> Use [Preview(\_:body:)](../preview%28__body_%29.md) with a WidgetKit timeline provider or entries instead.

## Declaration

```swift
nonisolated func previewContext<C>(_ value: C) -> some View where C : PreviewContext

```

## Parameters

- `value`: The context for the preview; the default is `nil`.

## See Also

### Setting a context

- [PreviewContext](../previewcontext.md): Deprecated. A context type for use with a preview.
- [PreviewContextKey](../previewcontextkey.md): Deprecated. A key type for a preview context.
