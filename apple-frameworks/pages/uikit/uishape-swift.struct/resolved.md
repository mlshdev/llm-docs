> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishape-swift.struct/resolved](https://developer.apple.com/documentation/uikit/uishape-swift.struct/resolved)

# UIShape.Resolved

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A shape that has completely resolved based on a context.

## Declaration

```swift
struct Resolved
```

## Topics

### Creating a resolved shape by applying insets

- [inset(by:)](resolved/inset%28by_%29-9sjcg.md): Creates a new modified shape by applying the provided insets to this shape.
- [inset(by:)](resolved/inset%28by_%29-1r5gp.md): Creates a new modified shape by applying the provided inset to this shape.

### Accessing the resolved shape’s attributes

- [shape](resolved/shape.md): The abstract shape that produces this resolved shape.
- [boundingRect](resolved/boundingrect.md): The bounding rectangle that frames the shape.
- [path](resolved/path.md): The Bézier path representing this shape.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Creating a dynamic hover shape

- [init(\_:)](init%28__%29.md): Creates a dynamic shape that resolves using the provided resolver closure and resolution context.
- [UIShapeProvider](../uishapeprovider-60loj.md): An interface for a type that provides a custom shape by resolving it dynamically based on a context.
- [UIShape.ResolutionContext](resolutioncontext.md): The context for resolving a dynamic shape.
