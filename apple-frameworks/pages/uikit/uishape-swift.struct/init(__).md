> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishape-swift.struct/init(_:)](https://developer.apple.com/documentation/uikit/uishape-swift.struct/init(_:))

# init(\_:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Creates a dynamic shape that resolves using the provided resolver closure and resolution context.

## Declaration

```swift
init(_ provider: some UIShapeProvider)
```

## See Also

### Creating a dynamic hover shape

- [UIShapeProvider](../uishapeprovider-60loj.md): An interface for a type that provides a custom shape by resolving it dynamically based on a context.
- [UIShape.ResolutionContext](resolutioncontext.md): The context for resolving a dynamic shape.
- [UIShape.Resolved](resolved.md): A shape that has completely resolved based on a context.
