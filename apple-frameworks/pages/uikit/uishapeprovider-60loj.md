> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishapeprovider-60loj](https://developer.apple.com/documentation/uikit/uishapeprovider-60loj)

# UIShapeProvider

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An interface for a type that provides a custom shape by resolving it dynamically based on a context.

## Declaration

```swift
protocol UIShapeProvider : Equatable
```

## Topics

### Resolving a custom shape

- [resolve(in:)](uishapeprovider-60loj/resolve%28in_%29.md): Resolves the shape in the provided context.

### Supporting types

- [UIShapeProvider.Context](uishapeprovider-60loj/context.md): The context for resolving a dynamic shape.
- [UIShapeProvider.Resolved](uishapeprovider-60loj/resolved.md): A shape that has completely resolved based on a context.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

### Conforming Types

- [UIShape](uishape-swift.struct.md)

## See Also

### Creating a dynamic hover shape

- [init(\_:)](uishape-swift.struct/init%28__%29.md): Creates a dynamic shape that resolves using the provided resolver closure and resolution context.
- [UIShape.ResolutionContext](uishape-swift.struct/resolutioncontext.md): The context for resolving a dynamic shape.
- [UIShape.Resolved](uishape-swift.struct/resolved.md): A shape that has completely resolved based on a context.
