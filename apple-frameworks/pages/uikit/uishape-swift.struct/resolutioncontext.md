> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uishape-swift.struct/resolutioncontext

# UIShape.ResolutionContext

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The context for resolving a dynamic shape.

## Declaration

```swift
struct ResolutionContext
```

## Topics

### Determining the content shape

- [contentShape](resolutioncontext/contentshape.md): The resolved shape of the content to which this shape can apply.

## See Also

### Creating a dynamic hover shape

- [init(\_:)](init%28__%29.md): Creates a dynamic shape that resolves using the provided resolver closure and resolution context.
- [UIShapeProvider](../uishapeprovider-60loj.md): An interface for a type that provides a custom shape by resolving it dynamically based on a context.
- [UIShape.Resolved](resolved.md): A shape that has completely resolved based on a context.
